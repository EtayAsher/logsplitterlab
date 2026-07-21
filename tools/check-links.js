#!/usr/bin/env node
// Static-output validator. Crawls the generated HTML files at the repo
// root and reports problems before you deploy. No dependencies.
//
// Usage:  node tools/build.js && node tools/check-links.js
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const config = require('./data/site-config');
const affiliateLinks = require('./data/affiliate-links');

function walkHtml(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
}

const files = [];
walkHtml(REPO_ROOT, files);

let errorCount = 0;
let warnCount = 0;
function err(file, msg) { console.log('ERROR  ' + path.relative(REPO_ROOT, file) + ': ' + msg); errorCount++; }
function warn(file, msg) { console.log('WARN   ' + path.relative(REPO_ROOT, file) + ': ' + msg); warnCount++; }

function resolveInternalPath(link) {
  // link is basePath-relative, e.g. /logsplitterlab/reviews/
  let rel = link.startsWith(config.basePath) ? link.slice(config.basePath.length) : link;
  rel = rel.split('#')[0].split('?')[0];
  if (rel === '' || rel === '/') return path.join(REPO_ROOT, 'index.html');
  if (rel.endsWith('/')) return path.join(REPO_ROOT, rel.slice(1), 'index.html');
  return path.join(REPO_ROOT, rel.slice(1));
}

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(REPO_ROOT, file);

  // --- title / canonical -------------------------------------------------
  if (!/<title>[^<]+<\/title>/.test(html)) err(file, 'missing or empty <title>');
  if (!/<link rel="canonical" href="[^"]+">/.test(html)) err(file, 'missing canonical tag');
  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (h1Count !== 1) err(file, `expected exactly one <h1>, found ${h1Count}`);

  // --- empty / placeholder hrefs ------------------------------------------
  const hrefRe = /href="([^"]*)"/g;
  let m;
  const ids = new Set((html.match(/\sid="([^"]+)"/g) || []).map((s) => s.match(/id="([^"]+)"/)[1]));

  while ((m = hrefRe.exec(html))) {
    const href = m[1];
    if (href === '' ) { err(file, 'empty href=""'); continue; }
    if (href === '#') { err(file, 'href="#" placeholder link found — not allowed'); continue; }

    // Hash-only link: must be a same-page anchor to a real element id, not
    // a leftover hash-routing pattern like #reviews, #comparisons.
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      if (!ids.has(targetId)) {
        warn(file, `hash link href="${href}" does not match any element id on this page — check it isn't leftover hash-routing`);
      }
      continue;
    }

    if (href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('tel:')) continue;

    // Internal site-relative link — must resolve to a real generated file.
    if (href.startsWith(config.basePath) || href.startsWith('/')) {
      const target = resolveInternalPath(href);
      if (!fs.existsSync(target)) err(file, `broken internal link: ${href} -> ${path.relative(REPO_ROOT, target)}`);
    }
  }

  // --- images: missing local assets, missing alt/dimensions --------------
  const imgRe = /<img\b[^>]*>/g;
  while ((m = imgRe.exec(html))) {
    const tag = m[0];
    const srcMatch = tag.match(/src="([^"]*)"/);
    if (!srcMatch) { err(file, 'img tag with no src'); continue; }
    const src = srcMatch[1];
    if (src.startsWith(config.basePath) || src.startsWith('/')) {
      const target = resolveInternalPath(src);
      if (!fs.existsSync(target)) err(file, `missing image asset: ${src}`);
    }
    if (!/\balt="/.test(tag)) err(file, `img missing alt attribute: ${src}`);
    if (!/\bwidth="/.test(tag) || !/\bheight="/.test(tag)) warn(file, `img missing width/height (layout shift risk): ${src}`);
  }

  // --- CSS/JS asset links ---------------------------------------------
  const assetRe = /(?:href|src)="([^"]*\/assets\/[^"]*)"/g;
  while ((m = assetRe.exec(html))) {
    const target = resolveInternalPath(m[1]);
    if (!fs.existsSync(target)) err(file, `missing asset: ${m[1]}`);
  }
}

// --- affiliate config sanity: no enabled entry with a missing URL --------
for (const [id, entry] of Object.entries(affiliateLinks)) {
  if (entry && entry.enabled && !entry.taggedUrl && !entry.directUrl) {
    err('tools/data/affiliate-links.js', `product "${id}" is enabled but has no taggedUrl or directUrl`);
  }
}

// --- JSON-LD validity across all files -----------------------------------
{
  const ldRe = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = ldRe.exec(html))) {
      try { JSON.parse(m[1]); } catch (e) { err(file, 'invalid JSON-LD: ' + e.message); }
    }
  }
}

// --- sitemap: every listed URL must correspond to a real generated file --
{
  const sitemapPath = path.join(REPO_ROOT, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    err(sitemapPath, 'sitemap.xml is missing');
  } else {
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    const locRe = /<loc>([^<]+)<\/loc>/g;
    let m;
    while ((m = locRe.exec(xml))) {
      const u = m[1].replace(config.canonicalBaseUrl, '');
      const target = resolveInternalPath(u);
      if (!fs.existsSync(target)) err(sitemapPath, `sitemap lists a URL with no matching file: ${m[1]}`);
    }
  }
  if (!fs.existsSync(path.join(REPO_ROOT, 'robots.txt'))) err('robots.txt', 'robots.txt is missing');
}

console.log('');
console.log(`Checked ${files.length} HTML files. ${errorCount} error(s), ${warnCount} warning(s).`);
if (errorCount > 0) process.exitCode = 1;
