'use strict';

module.exports = function reviewsIndex(ctx) {
  const { products, components, layout } = ctx;
  const { url } = layout;
  const { productCard } = components;

  const cards = products.map((p) => productCard(p, { url })).join('');

  // Only show a filter button for a power source that actually has at
  // least one published product — an empty "Manual" filter with zero
  // results would be a dead end.
  const typesPresent = Array.from(new Set(products.map((p) => p.type)));
  const filterLabels = { gas: 'Gas', electric: 'Electric', manual: 'Manual' };
  const filterButtons = ['all', ...typesPresent].map((t) => (
    `<button type="button" class="filter-btn" data-filter="${t}" aria-pressed="${t === 'all' ? 'true' : 'false'}">${t === 'all' ? 'All' : filterLabels[t]}</button>`
  )).join('');

  const bodyHtml = `
<section class="page-hero">
  <h1>Log Splitter Reviews</h1>
  <p>Specification-based research summaries — not paid placements or hands-on tests unless clearly labeled otherwise.</p>
</section>
<div class="article-wrap" style="padding-bottom:0;">
  <p>Every model below has been checked against its manufacturer's own specification pages and at least one major retailer listing before publishing. We link every source at the bottom of each review, note where a product line has multiple sub-models to avoid mixing up specs, and remove anything we can't confidently verify — see our <a href="${url('/how-we-review/')}">full methodology</a>. We don't display star ratings here because we don't yet have a documented rating methodology to back them, and we don't display prices because they change too often to keep accurate on this page — check the current price through the linked retailer.</p>
</div>
<div class="filter-bar" id="filterBar" role="group" aria-label="Filter reviews by power source">
  ${filterButtons}
</div>
<noscript><p class="text-center" style="color:var(--muted);font-size:.85rem;">Filter buttons require JavaScript; every review is listed below regardless.</p></noscript>
<div class="review-grid" id="reviewGrid">${cards}</div>
<div class="article-wrap" style="padding-top:0;">
  <p style="color:var(--muted);font-size:.85rem;">Looking for a manual (non-powered) splitter? We don't have a verified manual model reviewed yet — see the "Manual" section of our <a href="${url('/buying-guide/')}#g-power">buying guide</a> for what to look for in the meantime.</p>
</div>
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
    description: 'Specification-based log splitter research summaries for gas and electric models, sourced from manufacturer and retailer listings.',
    activeNav: 'reviews',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Reviews', path: '/reviews/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    extraScripts: ['/assets/js/reviews-filter.js'],
    sitemap: { priority: '0.9', changefreq: 'weekly' },
  };
};
