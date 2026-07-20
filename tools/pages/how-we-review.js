'use strict';

module.exports = function howWeReview(ctx) {
  const { layout } = ctx;
  const { url } = layout;

  const bodyHtml = `
<section class="page-hero">
  <h1>How We Review</h1>
  <p>An honest description of our current methodology — including its limits.</p>
</section>
<div class="article-wrap">
  <p>This page explains exactly what we do and don't do before publishing a review or comparison. We'll update it the day our process changes, so it never overstates what happened.</p>

  <h2>What we currently do</h2>
  <ul>
    <li>Check each product's manufacturer specification page and at least one major retailer listing before publishing.</li>
    <li>Confirm the exact model number matches the specs we're citing — a product family often includes several model numbers with different specs, and we don't merge them.</li>
    <li>Compare models against the factors that affect real-world performance: tonnage, cycle time, log capacity, orientation, portability, and maintenance needs.</li>
    <li>Note explicitly where a spec couldn't be confirmed, rather than estimating or leaving it ambiguous.</li>
    <li>Separate manufacturer-stated specifications from our own editorial analysis (verdicts, "best for" guidance, strengths and limitations) so it's clear which is which.</li>
    <li>Disclose our affiliate relationship with Amazon on every page with a commercial link.</li>
    <li>Update articles when we learn a product has changed, been discontinued, or when we find an error — and correct mistakes as soon as we're aware of them.</li>
  </ul>

  <h2>What we currently do not do</h2>
  <ul>
    <li>We do not currently physically test the log splitters we cover. Our reviews are specification-based research summaries, and we label them that way.</li>
    <li>We do not publish star ratings or "top pick" badges, because we don't yet have a documented, consistent rating methodology to back them.</li>
    <li>We do not display prices directly on this site, since they change too often to keep accurate — check the current price through the linked retailer.</li>
    <li>We do not accept payment in exchange for a specific verdict, rating, or placement.</li>
  </ul>

  <h2>If we begin hands-on testing</h2>
  <p>If we ever physically test a product, the affected review will say so explicitly and separate first-hand observations from manufacturer claims and third-party sources — it will not be blended silently into the existing specification-based writeup.</p>

  <h2>Sourcing</h2>
  <p>Every product review lists its source URLs and the date specifications were last checked. If a source page changes after we publish, the listed specs may be temporarily out of date until our next review pass — always cross-check critical specs against the current manufacturer page before purchasing.</p>

  <h2>Questions or corrections</h2>
  <p>See our <a href="${url('/contact/')}">Contact page</a> to flag anything that looks wrong.</p>
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'How We Review', item: layout.canonical('/how-we-review/') },
    ],
  };

  return {
    path: '/how-we-review/',
    title: 'How We Review',
    description: 'An honest description of LogSplitterLab\'s current review methodology, including what we do and do not do, and how we handle corrections.',
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'How We Review', path: '/how-we-review/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.4', changefreq: 'yearly' },
  };
};
