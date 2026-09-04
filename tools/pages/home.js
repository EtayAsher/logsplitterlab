'use strict';

const author = require('../data/author');

// Research guides/comparisons shown in "Start Researching" — also the
// single source of truth for the "Site at a Glance" counts below, so
// those numbers can never drift out of sync with what's actually listed.
const GUIDES = [
  { category: 'comparison', label: 'Comparison', title: 'Gas vs. Electric Log Splitter', summary: 'A category-by-category breakdown of power, portability, noise, and maintenance.', href: '/comparisons/gas-vs-electric-log-splitter/', updated: '2026-07-21', cta: 'Read Comparison' },
  { category: 'comparison', label: 'Best Of', title: 'Best Electric Log Splitters', summary: 'Our currently verified electric model, by tonnage, cycle time, and electrical requirements.', href: '/best-electric-log-splitters/', updated: '2026-07-27', cta: 'Read Roundup' },
  { category: 'comparison', label: 'Best Of', title: 'Best Gas Log Splitters', summary: 'Three verified gas models, compared by engine, cycle time, and horizontal/vertical operation.', href: '/best-gas-log-splitters/', updated: '2026-07-27', cta: 'Read Roundup' },
  { category: 'guide', label: 'Guide', title: 'What Size Log Splitter Do I Need?', summary: 'Why tonnage alone doesn\'t determine the right machine for your wood.', href: '/what-size-log-splitter-do-i-need/', updated: '2026-07-20', cta: 'Read Guide' },
  { category: 'guide', label: 'Buying Guide', title: 'The Complete Log Splitter Buying Guide', summary: 'Tonnage, log diameter, cycle time, safety, and a buying checklist in one place.', href: '/buying-guide/', updated: '2026-07-20', cta: 'Read the Guide' },
  { category: 'guide', label: 'Maintenance', title: 'Log Splitter Maintenance Basics', summary: 'Pre-use inspection, hydraulic checks, and seasonal storage guidance.', href: '/maintenance/', updated: '2026-07-20', cta: 'Read the Guide' },
];

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

module.exports = function home(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { comparisonTable, productCard, personJsonLd } = components;

  const productCards = products.map((p) => productCard(p, { url })).join('');

  // --- Browse-the-catalog data (fully derived from products.js, so this
  // scales to any catalog size without hardcoding brand/tonnage names). ---
  const latestReviews = products.slice()
    .sort((a, b) => (b.verifiedDate || '').localeCompare(a.verifiedDate || ''))
    .map((p) => `<li><a href="${url(`/reviews/${p.id}/`)}">${esc(p.name)}</a><span class="browse-meta">Verified ${esc(p.verifiedDate)}</span></li>`)
    .join('');

  const byBrand = new Map();
  products.forEach((p) => { if (!byBrand.has(p.brand)) byBrand.set(p.brand, []); byBrand.get(p.brand).push(p); });
  const brandLinks = Array.from(byBrand.keys()).sort((a, b) => a.localeCompare(b))
    .map((brand) => `<li><a href="${url('/brands/')}#brand-${esc(brand.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}">${esc(brand)}</a><span class="browse-meta">${byBrand.get(brand).length}</span></li>`)
    .join('');

  const byType = new Map();
  products.forEach((p) => { if (!byType.has(p.type)) byType.set(p.type, []); byType.get(p.type).push(p); });
  const powerSourceHref = { electric: '/best-electric-log-splitters/', gas: '/best-gas-log-splitters/', manual: '/buying-guide/#g-power' };
  const powerSourceLinks = Array.from(byType.keys()).sort((a, b) => a.localeCompare(b))
    .map((type) => `<li><a href="${url(powerSourceHref[type] || '/reviews/')}">${esc(byType.get(type)[0].typeLabel)}</a><span class="browse-meta">${byType.get(type).length}</span></li>`)
    .join('');

  const TONNAGE_BANDS = [
    { label: 'Under 10 tons', test: (t) => t < 10 },
    { label: '10–25 tons', test: (t) => t >= 10 && t <= 25 },
    { label: 'Over 25 tons', test: (t) => t > 25 },
  ];
  const tonnageLinks = TONNAGE_BANDS.map((band) => {
    const matches = products.filter((p) => band.test(p.tonnage));
    if (!matches.length) return '';
    // A single match links straight to that review; several link to the
    // reviews index, since there's no dedicated tonnage-filtered page yet.
    const href = matches.length === 1 ? url(`/reviews/${matches[0].id}/`) : url('/reviews/');
    return `<li><a href="${href}">${band.label}</a><span class="browse-meta">${matches.length}</span></li>`;
  }).join('');

  const guideCards = GUIDES.map((g) => `
    <div class="comp-card">
      <span class="eyebrow">${esc(g.label)} &middot; Updated ${esc(g.updated)}</span>
      <h3>${esc(g.title)}</h3>
      <p>${esc(g.summary)}</p>
      <a href="${url(g.href)}" class="btn btn-dark-outline btn-sm">${esc(g.cta)}</a>
    </div>`).join('');

  // --- Site at a Glance: every number here is computed from products.js
  // and the GUIDES array above, never hardcoded — see each variable's
  // source. No claims about traffic, ratings, or reader counts, since we
  // have no real data to back those. ---
  const reviewCount = products.length;
  const comparisonCount = GUIDES.filter((g) => g.category === 'comparison').length;
  const guideCount = GUIDES.filter((g) => g.category === 'guide').length;
  const mostRecentVerified = products.reduce((max, p) => (p.verifiedDate && p.verifiedDate > max ? p.verifiedDate : max), '');
  const [vYear, vMonth] = mostRecentVerified.split('-');
  const mostRecentVerifiedLabel = vMonth ? `${MONTH_NAMES[parseInt(vMonth, 10) - 1]} ${vYear}` : null;

  const bodyHtml = `
<section class="hero">
  <div class="hero-inner">
    <span class="hero-kicker">Research-based log splitter comparisons for homeowners</span>
    <h1>Find the Log Splitter That Actually Earns Its Keep</h1>
    <p class="sub">Google search &rarr; a research-based guide &rarr; a verified product comparison &rarr; the retailer of your choice. We compare specifications from manufacturers and retailers so you can pick a gas, electric, or manual log splitter that matches how much wood you actually split.</p>
    <div class="hero-actions">
      <a href="${url('/reviews/')}" class="btn btn-cta">Find the Right Splitter</a>
      <button type="button" class="btn btn-outline" data-open-quiz>Take the Match Quiz</button>
    </div>
  </div>
</section>

<section class="block">
  <div class="section-head">
    <span class="eyebrow">Verified Models</span>
    <h2>Compare Verified Models</h2>
    <p>Specs below are confirmed against manufacturer pages and major retailer listings — not estimated or copied from marketing copy.</p>
  </div>
  ${comparisonTable(products, { caption: 'Verified log splitter specifications' })}
</section>

<section class="block" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Product Overview</span>
    <h2>Verified Splitters at a Glance</h2>
    <p>The same models above, with images, main use case, and key limitation.</p>
  </div>
  <div class="review-grid">${productCards}</div>
</section>

<section class="block section-alt" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Browse</span>
    <h2>Browse the Full Catalog</h2>
    <p>Every way to slice the current catalog — more categories appear here automatically as new brands, power sources, and tonnage ranges are added.</p>
  </div>
  <div class="browse-grid">
    <div class="browse-block">
      <h3>Latest Reviews</h3>
      <ul class="browse-list">${latestReviews}</ul>
    </div>
    <div class="browse-block">
      <h3>Browse by Brand</h3>
      <ul class="browse-list">${brandLinks}</ul>
      <a href="${url('/brands/')}" class="browse-more">All brands &rarr;</a>
    </div>
    <div class="browse-block">
      <h3>Browse by Power Source</h3>
      <ul class="browse-list">${powerSourceLinks}</ul>
    </div>
    <div class="browse-block">
      <h3>Browse by Tonnage</h3>
      <ul class="browse-list">${tonnageLinks}</ul>
      <a href="${url('/what-size-log-splitter-do-i-need/')}" class="browse-more">Which tonnage do I need? &rarr;</a>
    </div>
  </div>
</section>

<section class="block" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Start Here</span>
    <h2>Choose by Power Source</h2>
    <p>Three questions to answer before you spend a dollar.</p>
  </div>
  <div class="choose-grid">
    <div class="choose-card">
      <h3>How hard is your wood?</h3>
      <p>Denser hardwoods generally need more splitting force. As a rough starting point:</p>
      <ul class="wood-list">
        <li>Pine, cedar, poplar <b>4–7 tons</b></li>
        <li>Oak, maple, ash <b>10–20 tons</b></li>
        <li>Elm, sycamore, knotty rounds <b>20+ tons</b></li>
      </ul>
      <p style="margin-top:12px;font-size:.88rem;"><a href="${url('/what-size-log-splitter-do-i-need/')}">Why tonnage alone isn't enough &rarr;</a></p>
    </div>
    <div class="choose-card">
      <h3>Gas, electric, or manual?</h3>
      <p><b>Gas</b> splitters go anywhere and handle the largest rounds, at the cost of noise and engine upkeep. <b>Electric</b> splitters are quieter and lower-maintenance but need an outlet and top out around 7–10 tons. <b>Manual</b> hydraulic splitters need no fuel or power at all, but rely on your own effort.</p>
      <p style="margin-top:12px;font-size:.88rem;"><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Full gas vs. electric comparison &rarr;</a></p>
    </div>
    <div class="choose-card">
      <h3>How fast do you need to work?</h3>
      <p>Cycle time is how long the ram takes to extend and retract. A shorter cycle time means more logs split per hour — worth comparing directly if you're processing a full cord in a weekend.</p>
      <p style="margin-top:12px;font-size:.88rem;"><a href="${url('/buying-guide/')}#g-cycle">More on cycle time &rarr;</a></p>
    </div>
  </div>
</section>

<section class="block section-alt" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">What Actually Matters</span>
    <h2>Factors That Should Drive Your Decision</h2>
    <p>Tonnage gets all the attention, but it's one of several factors that determine whether a splitter fits your situation.</p>
  </div>
  <div class="factor-grid">
    <div class="factor-card"><h3>Wood species and condition</h3><p>Green (unseasoned) wood and knotty or twisted grain both resist splitting more than dry, straight-grained wood of the same species.</p></div>
    <div class="factor-card"><h3>Log diameter</h3><p>A machine rated for a given tonnage may still struggle with an oversized round regardless of species — check the manufacturer's max diameter rating.</p></div>
    <div class="factor-card"><h3>Splitting volume</h3><p>Occasional splitting favors simplicity and low cost; a full cord or more per year favors speed and durability.</p></div>
    <div class="factor-card"><h3>Cycle time</h3><p>Directly affects how many logs you process per hour — compare it the same way you'd compare tonnage.</p></div>
    <div class="factor-card"><h3>Vertical vs. horizontal operation</h3><p>Vertical operation avoids lifting heavy rounds onto a beam; horizontal is often faster to load for small-to-medium logs.</p></div>
    <div class="factor-card"><h3>Portability</h3><p>Towable frames matter if you're splitting at multiple sites or a property without a flat work area near storage.</p></div>
    <div class="factor-card"><h3>Electrical access</h3><p>Electric splitters need a grounded outlet and an appropriately rated extension cord within reach of where you'll work.</p></div>
    <div class="factor-card"><h3>Maintenance requirements</h3><p>Gas units need engine service; all hydraulic splitters need periodic fluid and hose checks regardless of power source.</p></div>
  </div>
</section>

<section class="quiz-banner">
  <h2>Still not sure? Take the 60-second match quiz.</h2>
  <p>Answer 5 questions about your wood and workload — we'll recommend the power source that fits your situation and explain why.</p>
  <button type="button" class="btn btn-cta" data-open-quiz>Start the Quiz</button>
  <noscript><p style="margin-top:16px;">The interactive quiz requires JavaScript. In the meantime, see our <a href="${url('/buying-guide/')}" style="color:#f0c27f;text-decoration:underline;">Buying Guide</a>.</p></noscript>
</section>

<section class="block section-alt" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Top Research Guides</span>
    <h2>Start Researching</h2>
    <p>Our core guides and latest articles, all sourced and dated.</p>
  </div>
  <div class="comp-grid latest-guides-grid">${guideCards}</div>
</section>

<section class="block why-trust-section" style="padding-top:0;">
  <div class="section-head">
    <h2>Why Trust LogSplitterLab?</h2>
    <p>LogSplitterLab helps buyers compare log splitters using manufacturer specifications, product documentation, practical use-case analysis, and clearly disclosed research. We focus on showing who each machine is best for, its important limitations, and the differences that matter before buying.</p>
  </div>
  <div class="trust-grid">
    <div class="trust-card">
      <svg class="trust-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 11.5l2 2 4-4.5M4 4.5h16v15H4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <h3>Specifications Checked</h3>
      <p>Core specifications are reviewed against manufacturer documentation and current product information.</p>
    </div>
    <div class="trust-card">
      <svg class="trust-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <h3>Clear Product Differences</h3>
      <p>We explain which buyers and workloads each log splitter is designed for.</p>
    </div>
    <div class="trust-card">
      <svg class="trust-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 8v5M12 16h.01" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      <h3>Limitations Included</h3>
      <p>Recommendations include key drawbacks and suitability limits &mdash; not only advantages.</p>
    </div>
    <div class="trust-card">
      <svg class="trust-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 14a4 4 0 005.66 0l2-2a4 4 0 00-5.66-5.66l-1 1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 10a4 4 0 00-5.66 0l-2 2a4 4 0 005.66 5.66l1-1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      <h3>Transparent Affiliate Model</h3>
      <p>We may earn a commission from qualifying purchases, at no additional cost to the buyer.</p>
    </div>
  </div>
  <div class="glance-strip">
    <div class="glance-stat"><span class="glance-num">${reviewCount}</span><span class="glance-label">Verified Product Review${reviewCount === 1 ? '' : 's'}</span></div>
    <div class="glance-stat"><span class="glance-num">${comparisonCount}</span><span class="glance-label">Comparison &amp; Roundup Pages</span></div>
    <div class="glance-stat"><span class="glance-num">${guideCount}</span><span class="glance-label">Buying &amp; Maintenance Guides</span></div>
    ${mostRecentVerifiedLabel ? `<div class="glance-stat"><span class="glance-num glance-num-sm">${esc(mostRecentVerifiedLabel)}</span><span class="glance-label">Specifications Last Updated</span></div>` : ''}
  </div>
</section>

<section class="block section-alt section-divider" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Transparency</span>
    <h2>How We Review</h2>
    <p>We check manufacturer manuals and specification sheets, compare models on the factors above, and note where information couldn't be confirmed. We do not publish star ratings or "top pick" badges without a documented methodology, and we do not claim hands-on testing unless it happened. <a href="${url('/how-we-review/')}">Read our full methodology</a>.</p>
    <p class="article-meta" style="margin-top:10px;">${esc(config.amazonDisclosureFull)}</p>
  </div>
</section>

<section class="block section-alt" style="padding-top:0;">
  <div class="section-head">
    <h2>Frequently Asked Questions</h2>
  </div>
  <div class="article-wrap" style="padding-top:0;">
    <div class="faq-item">
      <h3>What tonnage log splitter do I need?</h3>
      <p>It depends on wood species, diameter, moisture content, and grain — not species alone. Our <a href="${url('/what-size-log-splitter-do-i-need/')}">tonnage guide</a> covers this in detail.</p>
    </div>
    <div class="faq-item">
      <h3>Is a gas or electric log splitter better?</h3>
      <p>Neither is universally better — gas offers more power and portability, electric offers quieter, lower-maintenance operation near a power source. See our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">full comparison</a>.</p>
    </div>
    <div class="faq-item">
      <h3>Do affiliate links cost me anything extra?</h3>
      <p>No. If you buy through a link on this site, we may earn a commission at no additional cost to you. See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Not sure where to start?</h2>
  <p>Two ways in, depending on how you like to decide.</p>
  <div class="final-cta-actions">
    <a href="${url('/buying-guide/')}" class="btn btn-cta">Read the Complete Buying Guide</a>
    <button type="button" class="btn btn-outline" data-open-quiz>Take the Match Quiz</button>
  </div>
</section>
`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What tonnage log splitter do I need?',
        acceptedAnswer: { '@type': 'Answer', text: 'It depends on wood species, diameter, moisture content, and grain — not species alone. See the buying guide for detailed guidance.' },
      },
      {
        '@type': 'Question',
        name: 'Is a gas or electric log splitter better?',
        acceptedAnswer: { '@type': 'Answer', text: 'Neither is universally better. Gas offers more power and portability; electric offers quieter, lower-maintenance operation near a power source.' },
      },
      {
        '@type': 'Question',
        name: 'Do affiliate links cost me anything extra?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. If you buy through a link on this site, LogSplitterLab may earn a commission at no additional cost to you.' },
      },
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LogSplitterLab',
    url: layout.canonical('/'),
    publisher: { '@type': 'Organization', name: 'LogSplitterLab', founder: { '@type': 'Person', name: author.name, url: layout.canonical('/author/etay-asher/') } },
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LogSplitterLab',
    url: layout.canonical('/'),
    founder: { '@type': 'Person', name: author.name, url: layout.canonical('/author/etay-asher/') },
  };

  return {
    path: '/',
    title: 'LogSplitterLab — Log Splitter Reviews, Comparisons & Buying Guides',
    description: 'Research-based log splitter comparisons for homeowners. Compare gas, electric, and manual splitters by verified specifications, then find the right retailer link.',
    activeNav: null,
    bodyHtml,
    jsonLd: [websiteJsonLd, orgJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    sitemap: { priority: '1.0', changefreq: 'weekly' },
  };
};
