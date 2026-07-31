'use strict';

// Reusable head-to-head comparison page generator. NOT currently wired
// into build.js's pageBuilders — see PHASE_7_NOTES.md for why no comparison
// pages beyond the existing gas-vs-electric/best-electric/best-gas trio are
// published yet, and which future pages this should back once the catalog
// has enough distinct products to make them non-duplicative.
//
// Usage (once genuinely ready to publish a page):
//   const { buildTwoProductComparison } = require('../lib/comparison-template');
//   module.exports = function compareXvsY(ctx) {
//     return buildTwoProductComparison(ctx, {
//       path: '/comparisons/x-vs-y/',
//       title: 'X vs. Y Log Splitter',
//       description: '...',
//       productAId: 'product-a-id',
//       productBId: 'product-b-id',
//       searchIntent: 'One sentence: what is someone actually trying to decide when they search this?',
//       useCaseRecommendation: 'Plain-language guidance on which one fits which buyer.',
//       limitations: ['Bullet points on what this comparison does NOT settle, or where data is thin.'],
//       faqs: [{ q: '...', a: '...' }],
//     });
//   };
// Then add the require to build.js's pageBuilders array.

function buildTwoProductComparison(ctx, opts) {
  const { products, components, layout } = ctx;
  const { url, esc } = layout;
  const { comparisonTable, productImage, byline, authorBox, personJsonLd } = components;

  const productA = products.find((p) => p.id === opts.productAId);
  const productB = products.find((p) => p.id === opts.productBId);
  if (!productA || !productB) {
    throw new Error(`comparison-template: product id not found (${opts.productAId} / ${opts.productBId}) — check tools/data/products.js`);
  }
  const pair = [productA, productB];
  const publishedDate = opts.publishedDate || opts.updatedDate;
  const updatedDate = opts.updatedDate;

  const limitationsHtml = (opts.limitations || []).map((l) => `<li>${esc(l)}</li>`).join('');
  const faqHtml = (opts.faqs || []).map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('');

  const productSummaries = pair.map((p) => `
    <div class="guide-section" id="p-${esc(p.id)}">
      <h2>${esc(p.name)}</h2>
      <div class="review-hero-img">${productImage(p, url)}</div>
      <p>${esc(p.suitableUseSummary)} <b>Key limitation:</b> ${esc(p.limitationsSummary)}</p>
      <p><a href="${url(`/reviews/${p.id}/`)}">Read the full research review &rarr;</a></p>
    </div>`).join('');

  const bodyHtml = `
<article class="article-wrap">
  <p class="status-badge">Research-Based Comparison — specifications verified against manufacturer and current retailer information</p>
  <h1>${esc(opts.title)}</h1>
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; ${byline(url)}</p>

  <div class="note-box">${esc(opts.searchIntent)}</div>

  <h2>Comparison table</h2>
  ${comparisonTable(pair, { caption: `${esc(productA.name)} vs. ${esc(productB.name)}` })}

  <h2>Which one fits you</h2>
  <p>${esc(opts.useCaseRecommendation)}</p>

  ${limitationsHtml ? `<h2>What this comparison doesn't settle</h2><ul>${limitationsHtml}</ul>` : ''}

  <h2>Product summaries</h2>
  ${productSummaries}

  ${faqHtml ? `<h2>FAQ</h2>${faqHtml}` : ''}

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
    <li><a href="${url('/maintenance/')}">Maintenance Guide</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/comparisons/')}">All Comparisons</a></li>
  </ul>

  ${authorBox(url)}
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { '@type': 'Person', name: 'Etay Asher', url: layout.canonical('/author/etay-asher/') },
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical(opts.path),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: layout.canonical('/comparisons/') },
      { '@type': 'ListItem', position: 3, name: opts.title, item: layout.canonical(opts.path) },
    ],
  };

  const jsonLd = [articleJsonLd, breadcrumbJsonLd, personJsonLd(layout.canonical)];
  if (opts.faqs && opts.faqs.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: opts.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }

  return {
    path: opts.path,
    title: opts.title,
    description: opts.description,
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Comparisons', path: '/comparisons/' }, { label: opts.title, path: opts.path }],
    ogType: 'article',
    jsonLd,
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: opts.sitemap || { priority: '0.75', changefreq: 'monthly' },
  };
}

module.exports = { buildTwoProductComparison };
