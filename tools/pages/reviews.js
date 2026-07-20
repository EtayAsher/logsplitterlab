'use strict';

const { ANALYSIS } = require('./review');

module.exports = function reviewsIndex(ctx) {
  const { products, components, layout } = ctx;
  const { url, esc } = layout;
  const { typePill, affiliateButton } = components;

  const cards = products.map((p) => {
    const a = ANALYSIS[p.id];
    return `
    <div class="review-card" data-type="${esc(p.type)}">
      <div class="review-thumb">
        ${typePill(p.typeLabel)}
        <img src="${url('/assets/img/product-placeholder.svg')}" alt="" width="64" height="64" loading="lazy">
      </div>
      <div class="review-body">
        <h3>${esc(p.name)}</h3>
        <p class="review-model">Model ${esc(p.model)} &middot; ${p.tonnage}T &middot; ${esc(p.typeLabel)}</p>
        <p class="review-summary">${esc(a.verdict)}</p>
        <div class="review-actions">
          <a href="${url(`/reviews/${p.id}/`)}" class="btn btn-dark-outline btn-sm">Read Research Summary</a>
          ${affiliateButton(p, { small: true })}
        </div>
      </div>
    </div>`;
  }).join('');

  const bodyHtml = `
<section class="page-hero">
  <h1>Log Splitter Reviews</h1>
  <p>Specification-based research summaries — not paid placements or hands-on tests unless clearly labeled otherwise.</p>
</section>
<div class="article-wrap" style="padding-bottom:0;">
  <p>Every model below has been checked against its manufacturer's own specification pages and at least one major retailer listing before publishing. We link every source at the bottom of each review, note where a product line has multiple sub-models to avoid mixing up specs, and remove anything we can't confidently verify — see our <a href="${url('/how-we-review/')}">full methodology</a>. We don't display star ratings here because we don't yet have a documented rating methodology to back them.</p>
</div>
<div class="filter-bar" id="filterBar" role="group" aria-label="Filter reviews by power source">
  <button type="button" class="filter-btn" data-filter="all" aria-pressed="true">All</button>
  <button type="button" class="filter-btn" data-filter="gas" aria-pressed="false">Gas</button>
  <button type="button" class="filter-btn" data-filter="electric" aria-pressed="false">Electric</button>
  <button type="button" class="filter-btn" data-filter="manual" aria-pressed="false">Manual</button>
</div>
<noscript><p class="text-center" style="color:var(--muted);font-size:.85rem;">Filter buttons require JavaScript; every review is listed below regardless.</p></noscript>
<div class="review-grid" id="reviewGrid">${cards}</div>
`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: layout.canonical('/reviews/') },
    ],
  };

  return {
    path: '/reviews/',
    title: 'Log Splitter Reviews — Verified Specifications',
    description: 'Specification-based log splitter research summaries for gas, electric, and manual models, sourced from manufacturer and retailer listings.',
    activeNav: 'reviews',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Reviews', path: '/reviews/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    extraScripts: ['/assets/js/reviews-filter.js'],
    sitemap: { priority: '0.9', changefreq: 'weekly' },
  };
};
