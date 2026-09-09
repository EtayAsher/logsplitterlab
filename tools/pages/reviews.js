'use strict';

module.exports = function reviewsIndex(ctx) {
  const { products, components, layout } = ctx;
  const { url, esc } = layout;
  const { productCard } = components;

  // Grouped by power source rather than one flat grid — at 8 products a
  // single undifferentiated grid reads as a dumped list rather than a
  // browsable catalog. Grouping also means a shorter trailing group (3 gas
  // models) fills a clean row instead of leaving an awkward gap.
  const electrics = products.filter((p) => p.type === 'electric');
  const gases = products.filter((p) => p.type === 'gas');
  const others = products.filter((p) => p.type !== 'electric' && p.type !== 'gas');

  const GROUPS = [
    { key: 'electric', label: 'Electric', products: electrics, cueClass: 'is-electric', desc: 'Quiet, low-maintenance, and tied to an outlet — from compact 6.5-ton units to a 14-ton option for buyers who want more force without moving to gas.' },
    { key: 'gas', label: 'Gas', products: gases, cueClass: 'is-gas', desc: 'More force and full portability, at the cost of engine noise, fuel, and maintenance — from 20-ton portable units to a 32-ton towable full-beam splitter.' },
  ].filter((g) => g.products.length);
  // Any product of a type not yet given its own group (e.g. a future
  // manual splitter) still appears, ungrouped, rather than silently
  // disappearing from the catalog.
  if (others.length) GROUPS.push({ key: 'other', label: 'Other', products: others, cueClass: '', desc: '' });

  const groupSections = GROUPS.map((g) => `
    <div class="catalog-group" id="group-${g.key}">
      <div class="catalog-group-head${g.cueClass ? ' ' + g.cueClass : ''}">
        <h2>${esc(g.label)} Log Splitters</h2><span class="catalog-group-count">${g.products.length} model${g.products.length === 1 ? '' : 's'}</span>
      </div>
      ${g.desc ? `<p class="catalog-group-desc">${esc(g.desc)}</p>` : ''}
      <div class="review-grid" data-count="${g.products.length}">${g.products.map((p) => productCard(p, { url })).join('')}</div>
    </div>`).join('');

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
  <p>Independent research and verified specifications for the log splitters we cover.</p>
</section>
<section class="block catalog-section" style="padding-bottom:0;">
  <div class="catalog-jump">
    <span class="catalog-jump-label">${products.length} reviewed models</span>
    <a href="#group-electric"><span class="catalog-jump-dot is-electric" aria-hidden="true"></span>${electrics.length} Electric</a>
    <a href="#group-gas"><span class="catalog-jump-dot is-gas" aria-hidden="true"></span>${gases.length} Gas</a>
  </div>
  <div class="filter-bar" id="filterBar" role="group" aria-label="Filter reviews by power source">
    ${filterButtons}
  </div>
  <noscript><p class="text-center" style="color:var(--muted);font-size:.85rem;">Filter buttons require JavaScript; every review is listed below regardless, grouped by power source.</p></noscript>
</section>
<div id="catalogWrap">
  ${groupSections}
</div>
<div class="article-wrap" style="padding-top:0;">
  <p style="color:var(--muted);font-size:.85rem;">Every model above has been checked against its manufacturer's own specification pages and at least one major retailer listing before publishing — see our <a href="${url('/how-we-review/')}">full methodology</a>. We don't display star ratings or prices on this page; check current price through the linked retailer. Looking for a manual (non-powered) splitter? We don't have a verified manual model reviewed yet — see the "Manual" section of our <a href="${url('/buying-guide/')}#g-power">buying guide</a> for what to look for in the meantime.</p>
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
    description: 'Specification-based log splitter research summaries for gas and electric models, grouped by power source and sourced from manufacturer and retailer listings.',
    activeNav: 'reviews',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Reviews', path: '/reviews/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    extraScripts: ['/assets/js/reviews-filter.js'],
    sitemap: { priority: '0.9', changefreq: 'weekly' },
  };
};
