#!/usr/bin/env node
// Deterministic static site generator for LogSplitterLab.
//
// Reads page content modules from tools/pages/, wraps each in the shared
// layout (tools/lib/layout.js), and writes plain crawlable HTML files to
// the repo root — matching the directory structure GitHub Pages serves.
// Also (re)generates sitemap.xml and robots.txt from the same page list.
//
// Usage:  node tools/build.js
// No dependencies beyond Node's built-in fs/path — nothing to npm install.
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');

const layout = require('./lib/layout');
const components = require('./lib/components');
const config = require('./data/site-config');
const products = require('./data/products');

const { buildReviewPage } = require('./pages/review');

const ctx = { products, components, layout, config };

const pageBuilders = [
  require('./pages/home'),
  require('./pages/reviews'),
  require('./pages/comparisons'),
  require('./pages/gas-vs-electric'),
  require('./pages/best-electric'),
  require('./pages/best-gas'),
  require('./pages/what-size'),
  require('./pages/buying-guide'),
  require('./pages/maintenance'),
  require('./pages/about'),
  require('./pages/how-we-review'),
  require('./pages/contact'),
  require('./pages/affiliate-disclosure'),
  require('./pages/privacy-policy'),
];

const pages = pageBuilders.map((build) => build(ctx));
products.forEach((p) => pages.push(buildReviewPage(p, ctx)));

const notFoundPage = require('./pages/not-found')(ctx);

function outputFileFor(pagePath, outputPath) {
  if (outputPath) return path.join(REPO_ROOT, outputPath.replace(/^\//, ''));
  if (pagePath === '/') return path.join(REPO_ROOT, 'index.html');
  return path.join(REPO_ROOT, pagePath.replace(/^\//, '').replace(/\/$/, ''), 'index.html');
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

let written = 0;
pages.forEach((page) => {
  const html = layout.renderPage(page);
  const outFile = outputFileFor(page.path, page.outputPath);
  writeFile(outFile, html);
  written++;
});

// 404.html goes through the same layout but is written directly to the
// output root (GitHub Pages requires it there, not in a directory).
writeFile(path.join(REPO_ROOT, '404.html'), layout.renderPage(notFoundPage));
written++;

// --- sitemap.xml -----------------------------------------------------
// Lists only real, indexable pages that contain real content. Excludes
// 404.html and anything marked noindex.
const sitemapEntries = pages
  .filter((p) => !p.noindex)
  .map((p) => {
    const loc = layout.canonical(p.path);
    const sm = p.sitemap || { priority: '0.5', changefreq: 'monthly' };
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${sm.changefreq}</changefreq>\n    <priority>${sm.priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
writeFile(path.join(REPO_ROOT, 'sitemap.xml'), sitemapXml);

// --- robots.txt --------------------------------------------------------
const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${layout.canonical('/')}sitemap.xml\n`.replace('//sitemap.xml', '/sitemap.xml');
writeFile(path.join(REPO_ROOT, 'robots.txt'), robotsTxt);

// --- .nojekyll -----------------------------------------------------------
// Tells GitHub Pages not to run this through Jekyll, since it's already
// plain static HTML and Jekyll would ignore/mangle underscore-prefixed
// paths and Liquid-like syntax we don't intend to use.
writeFile(path.join(REPO_ROOT, '.nojekyll'), '');

console.log(`Built ${written} HTML pages, sitemap.xml, robots.txt, .nojekyll`);
console.log('Pages:');
pages.forEach((p) => console.log('  ' + p.path));
console.log('  /404.html (noindex)');
