'use strict';

module.exports = function comparisonsIndex(ctx) {
  const { layout } = ctx;
  const { url } = layout;

  const ARTICLES = [
    {
      type: 'Comparison',
      title: 'Gas vs. Electric Log Splitter',
      question: 'Which power source should I choose?',
      summary: 'A category-by-category breakdown of power, portability, noise, fumes, electrical access, maintenance, and cold-weather behavior.',
      updated: '2026-07-21',
      href: '/comparisons/gas-vs-electric-log-splitter/',
    },
    {
      type: 'Best Of',
      title: 'Best Electric Log Splitters',
      question: 'Which electric model fits a homeowner\'s needs?',
      summary: 'Compares the WEN 56207 and Boss Industrial ES7T20 by controls, cycle time, electrical requirements, and mobility.',
      updated: '2026-07-20',
      href: '/best-electric-log-splitters/',
    },
    {
      type: 'Best Of',
      title: 'Best Gas Log Splitters',
      question: 'Which gas model fits a homeowner or rural property?',
      summary: 'Compares the Champion 100424 and YARDMAX YU2566 by engine, cycle time, log length, and towing.',
      updated: '2026-07-20',
      href: '/best-gas-log-splitters/',
    },
    {
      type: 'Guide',
      title: 'What Size Log Splitter Do I Need?',
      question: 'How do I know what tonnage to buy?',
      summary: 'Why tonnage alone doesn\'t determine the right machine — wood species, moisture, diameter, knots, and grain all matter.',
      updated: '2026-07-20',
      href: '/what-size-log-splitter-do-i-need/',
    },
  ];

  const cards = ARTICLES.map((a) => `
    <div class="comp-card">
      <span class="eyebrow">${a.type} &middot; Updated ${a.updated}</span>
      <h3>${a.title}</h3>
      <p><b>Answers:</b> ${a.question}</p>
      <p>${a.summary}</p>
      <a href="${url(a.href)}" class="btn btn-dark-outline btn-sm">Read ${a.type === 'Guide' ? 'Guide' : (a.type === 'Best Of' ? 'Roundup' : 'Comparison')}</a>
    </div>`).join('');

  const bodyHtml = `
<section class="page-hero">
  <h1>Log Splitter Comparisons</h1>
  <p>Category- and product-level comparisons to help you choose, not marketing copy dressed up as a shootout.</p>
</section>
<div class="comp-grid">${cards}</div>
<div class="article-wrap" style="padding-top:0;">
  <p style="color:var(--muted);font-size:.9rem;">More comparisons (tonnage tiers, vertical vs. horizontal operation, specific model-vs-model matchups) are planned. We publish a comparison here only once it's written and sourced — we don't list placeholder cards for articles that don't exist yet.</p>
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
    description: 'Log splitter comparisons and best-of roundups — gas vs. electric, best electric models, best gas models, and how to size a splitter — to help you choose before you shop by model.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Comparisons', path: '/comparisons/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'weekly' },
  };
};
