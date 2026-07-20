'use strict';

module.exports = function comparisonsIndex(ctx) {
  const { layout } = ctx;
  const { url, esc } = layout;

  const bodyHtml = `
<section class="page-hero">
  <h1>Log Splitter Comparisons</h1>
  <p>Category-level comparisons to help you choose between types, not marketing copy dressed up as a shootout.</p>
</section>
<div class="comp-grid">
  <div class="comp-card">
    <span class="eyebrow">Comparison</span>
    <h3>Gas vs. Electric Log Splitter</h3>
    <p>Power, portability, noise, maintenance, and cost — compared by category rather than by pretending specific machines were tested head-to-head.</p>
    <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}" class="btn btn-dark-outline btn-sm">Read Comparison</a>
  </div>
</div>
<div class="article-wrap" style="padding-top:0;">
  <p style="color:var(--muted);font-size:.9rem;">More comparison articles (tonnage tiers, vertical vs. horizontal operation, budget tiers) are planned. We publish a comparison here only once it's written and sourced — we don't list placeholder cards for articles that don't exist yet.</p>
</div>
`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: layout.canonical('/comparisons/') },
    ],
  };

  return {
    path: '/comparisons/',
    title: 'Log Splitter Comparisons',
    description: 'Category-level log splitter comparisons — gas vs. electric, tonnage, and more — to help you choose the right type before you shop by model.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Comparisons', path: '/comparisons/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'weekly' },
  };
};
