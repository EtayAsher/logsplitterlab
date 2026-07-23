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
  require('./pages/author'),
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
// "User-agent: * / Allow: /" already permits every crawler, including AI
// bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) — they're
// listed explicitly below only as a readable, auditable confirmation that
// nothing here is quietly blocking them, not because the wildcard needs help.
const robotsTxt = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: ${layout.canonical('/')}sitemap.xml
`.replace('//sitemap.xml', '/sitemap.xml');
writeFile(path.join(REPO_ROOT, 'robots.txt'), robotsTxt);

// --- llms.txt ------------------------------------------------------------
// A plain-Markdown index for LLM-based crawlers/assistants, per the emerging
// (not yet standardized) llms.txt convention. Low cost, plausibly useful,
// explicitly not a substitute for sitemap.xml/robots.txt/schema — see
// AUDIT.md "AI Search readiness" for the reasoning behind including it.
function pageGroup(p) {
  if (p.path === '/') return null;
  if (p.path.startsWith('/reviews/')) return 'Product Reviews';
  if (p.path.startsWith('/best-') || p.path.startsWith('/comparisons') || p.path.startsWith('/what-size')) return 'Comparisons & Buying Advice';
  if (p.path === '/buying-guide/' || p.path === '/maintenance/') return 'Guides';
  return 'About & Policies';
}

const llmsGroups = new Map();
pages.filter((p) => !p.noindex).forEach((p) => {
  const group = pageGroup(p);
  if (!group) return;
  if (!llmsGroups.has(group)) llmsGroups.set(group, []);
  llmsGroups.get(group).push(p);
});

let llmsTxt = `# LogSplitterLab\n\n> Research-based log splitter comparisons for homeowners and rural property owners. Specifications are sourced from manufacturer and retailer documentation and cited on every product page; the site does not currently conduct hands-on product testing and labels its reviews accordingly.\n\n`;
for (const [group, groupPages] of llmsGroups) {
  llmsTxt += `## ${group}\n\n`;
  groupPages.forEach((p) => {
    llmsTxt += `- [${p.title.replace(' | LogSplitterLab', '')}](${layout.canonical(p.path)}): ${p.description}\n`;
  });
  llmsTxt += '\n';
}
writeFile(path.join(REPO_ROOT, 'llms.txt'), llmsTxt);

// --- CNAME ---------------------------------------------------------------
// GitHub Pages custom domain. Derived from canonicalBaseUrl in
// site-config.js — that's the only place to change it. Only written when
// canonicalBaseUrl points at a non-github.io domain, so this file doesn't
// reappear if the site ever moves back to the default github.io URL.
const canonicalHost = new URL(config.canonicalBaseUrl).hostname;
if (!canonicalHost.endsWith('.github.io')) {
  writeFile(path.join(REPO_ROOT, 'CNAME'), canonicalHost + '\n');
}

// --- .nojekyll -----------------------------------------------------------
// Tells GitHub Pages not to run this through Jekyll, since it's already
// plain static HTML and Jekyll would ignore/mangle underscore-prefixed
// paths and Liquid-like syntax we don't intend to use.
writeFile(path.join(REPO_ROOT, '.nojekyll'), '');

console.log(`Built ${written} HTML pages, sitemap.xml, robots.txt, .nojekyll`);
console.log('Pages:');
pages.forEach((p) => console.log('  ' + p.path));
console.log('  /404.html (noindex)');
