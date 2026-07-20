'use strict';

// Editorial analysis for each verified product. This is our interpretation
// of the manufacturer specs in tools/data/products.js — not a claim of
// hands-on testing. Keep this in sync if products.js changes.
const ANALYSIS = {
  'champion-100424': {
    verdict: 'A conventional 27-ton gas splitter built to be towed between sites and to handle repeated full-cord sessions rather than occasional light use.',
    bestFor: 'Rural property owners processing several cords a year who need to move the machine around a property, or split wherever the wood is rather than at a single fixed spot.',
    notIdealFor: 'Anyone who wants to avoid small-engine maintenance, or needs a quiet machine to run near a house in the evening.',
    strengths: [
      'DOT-approved tow package rated to 45 mph, so it can go where the wood is',
      'Handles logs up to 24 in. long and 100 lb, covering most residential firewood rounds',
      'Horizontal and vertical operation, useful for rounds too heavy to lift onto a beam',
    ],
    limitations: [
      'Gas engine requires periodic oil changes and off-season fuel stabilization',
      'Cycle time varies by exact model number within Champion\'s 27-ton line — confirm the number on the box matches 100424 before comparing specs',
      'Louder and produces exhaust, unlike an electric alternative',
    ],
    usability: 'Two-handed control operation is standard on this class of splitter; expect to brace the machine using its stabilizer legs on uneven ground before operating.',
    maintenance: 'Follow Champion\'s manual for engine oil type/interval and hydraulic fluid level checks. Inspect the tow hitch and tires before transporting.',
    alternativeId: 'yardmax-yu2566',
    alternativeNote: 'Compared to the YARDMAX YU2566, this Champion model handles slightly shorter maximum log length (24 in. vs. 26 in.) but is towable up to highway speed; check both spec tables above before choosing.',
  },
  'wen-56207': {
    verdict: 'A compact 6.5-ton electric splitter sized for light, frequent use near a garage or shed outlet, not for large or very dense rounds.',
    bestFor: 'Homeowners doing light, frequent splitting of softer wood within reach of a standard outlet.',
    notIdealFor: 'Very dense hardwood, or logs longer than 20.5 in. or thicker than 10 in. — this model is not rated for that.',
    strengths: [
      'No fuel, exhaust, or engine maintenance — plug in and go',
      'Compact and light enough (98 lb) for one person to reposition',
      'Includes a stand, pull handle, and wheels for moving it around a garage or yard',
    ],
    limitations: [
      '6.5-ton rating is on the low end for splitting dense or large-diameter hardwood',
      'Tied to a power outlet and appropriately rated extension cord',
      '20-second cycle time is longer than the gas models in our data',
    ],
    usability: 'Single-handed lever operation per WEN\'s manual; confirm your outlet circuit can handle the rated 15A draw before running it continuously.',
    maintenance: 'Check the hydraulic fluid level per WEN\'s manual and inspect the power cord and plug before each use.',
    alternativeId: 'boss-es7t20',
    alternativeNote: 'The Boss Industrial ES7T20 is a similarly sized electric splitter rated slightly higher at 7 tons — compare the spec tables directly if you\'re choosing between the two.',
  },
  'yardmax-yu2566': {
    verdict: 'A 25-ton gas splitter with the fastest cycle time of the machines we\'ve checked, aimed at higher-volume splitting.',
    bestFor: 'Users processing larger volumes of wood who want to minimize time spent waiting on the ram between logs.',
    notIdealFor: 'Anyone who wants to avoid gas engine upkeep, or needs a quiet machine to use near neighbors.',
    strengths: [
      '9.7-second cycle time is the fastest among the splitters in our current data',
      'Handles logs up to 26 in. long, the longest rated capacity we\'ve checked',
      'Horizontal and vertical operation with DOT-approved tires for towing',
    ],
    limitations: [
      'Gas engine requires the same routine maintenance as any small engine',
      '25-ton rating is slightly below Champion\'s 27-ton unit for the very densest rounds',
      'Full-beam gas splitters of this size are heavier to maneuver by hand than electric models',
    ],
    usability: 'Two-handed operation is standard; the manufacturer\'s U-beam frame is designed to resist bending under repeated heavy use.',
    maintenance: 'Follow YARDMAX\'s manual for Briggs & Stratton engine service intervals and hydraulic reservoir checks (4.2-gallon capacity).',
    alternativeId: 'champion-100424',
    alternativeNote: 'Compared to the Champion 100424, this YARDMAX model splits faster per cycle (9.7s vs. 11s) but at slightly lower tonnage (25T vs. 27T) — worth weighing against the density of wood you split most.',
  },
  'boss-es7t20': {
    verdict: 'A 7-ton electric splitter designed around single-handed operation, aimed at solo home use near an outlet.',
    bestFor: 'A single operator splitting moderate volumes of wood at home, where single-handed control speeds up repetitive sessions.',
    notIdealFor: 'Large or very dense rounds beyond its 10 in. diameter / 7-ton rating.',
    strengths: [
      'Single-handed lever operation, unusual for this tonnage class',
      '2-year warranty that explicitly includes the hydraulics, per the manufacturer',
      'No fuel or exhaust, and lighter to reposition than a gas unit',
    ],
    limitations: [
      '13.5A draw is close to a standard 15A circuit\'s limit — check your circuit before running it alongside other tools',
      '20.5 in. splitting length and 10 in. diameter cap rule out larger rounds',
      'Tied to an outlet, unlike the gas models in our data',
    ],
    usability: 'Single-handed lever control per the manufacturer; the lever returns to its starting position when released, which the manufacturer describes as a safety feature.',
    maintenance: 'Check hydraulic fluid level (4-quart capacity) and inspect the power cord and plug before each use, per Boss Industrial\'s manual.',
    alternativeId: 'wen-56207',
    alternativeNote: 'The WEN 56207 is a similarly sized electric splitter rated slightly lower at 6.5 tons — compare the spec tables directly if you\'re choosing between the two.',
  },
};

function buildReviewPage(product, ctx) {
  const { products, components, layout } = ctx;
  const { url, esc } = layout;
  const { specTable, sourceNotes, affiliateButton } = components;
  const a = ANALYSIS[product.id];
  const alt = products.find((p) => p.id === a.alternativeId);
  const slug = `/reviews/${product.id}/`;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const bodyHtml = `
<article class="article-wrap">
  <p class="status-badge">Research summary — not hands-on tested</p>
  <h1>${esc(product.name)} Review</h1>
  <p class="article-meta">Model ${esc(product.model)} &middot; Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>

  <div class="note-box">This is a specification-based research summary, not a first-hand test. It compares manufacturer and retailer specifications against the factors homeowners typically care about. If we ever physically test this model, this notice will be replaced with first-hand observations clearly separated from manufacturer claims.</div>

  <div class="verdict-box">
    <h2 style="margin-top:0;">Verdict</h2>
    <p style="margin-bottom:0;">${esc(a.verdict)}</p>
  </div>

  <div class="best-for-grid">
    <div class="best-for-card good"><h3>Best for</h3><p style="margin:0;">${esc(a.bestFor)}</p></div>
    <div class="best-for-card bad"><h3>Not ideal for</h3><p style="margin:0;">${esc(a.notIdealFor)}</p></div>
  </div>

  <h2>Verified specifications</h2>
  ${specTable(product)}
  <p>${affiliateButton(product)}</p>

  <h2>Key strengths</h2>
  <ul>${a.strengths.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

  <h2>Key limitations</h2>
  <ul>${a.limitations.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

  <h2>Usability considerations</h2>
  <p>${esc(a.usability)}</p>

  <h2>Maintenance considerations</h2>
  <p>${esc(a.maintenance)} Fluid types and service intervals vary by model — always follow the manufacturer's manual rather than a generic schedule. See our <a href="${url('/maintenance/')}">maintenance guide</a> for general upkeep concepts.</p>

  <h2>Safety considerations</h2>
  <p>Operate this splitter only as described in the manufacturer's manual. Keep hands clear of the wedge and ram path, split one log at a time unless the machine is explicitly rated otherwise, and wear eye protection and sturdy footwear. See our <a href="${url('/buying-guide/')}#g-safety">general safety guidance</a> — it does not replace the manufacturer's instructions for this specific model.</p>

  ${alt ? `<h2>Compared with a realistic alternative</h2><p>${esc(a.alternativeNote)} <a href="${url(`/reviews/${alt.id}/`)}">Read the ${esc(alt.brand)} ${esc(alt.model)} summary</a>.</p>` : ''}

  <h2>Editorial note</h2>
  <p>The specifications above come from the manufacturer and retailer listings cited below. The verdict, "best for," strengths, and limitations are LogSplitterLab's analysis based on those specifications — not a manufacturer claim and not first-hand testing.</p>

  ${sourceNotes(product)}

  <p class="article-meta" style="margin-top:24px;">Affiliate links may earn us a commission at no additional cost to you. See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/reviews/')}">All Reviews</a></li>
  </ul>
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${product.name} Review`,
    datePublished: publishedDate,
    dateModified: updatedDate,
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical(slug),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: layout.canonical('/reviews/') },
      { '@type': 'ListItem', position: 3, name: product.name, item: layout.canonical(slug) },
    ],
  };

  return {
    path: slug,
    title: `${product.name} (${product.model}) Review`,
    description: `${product.brand} ${product.model}: verified ${product.tonnage}-ton ${product.typeLabel.toLowerCase()} log splitter specifications, strengths, limitations, and who it fits — sourced from manufacturer and retailer listings.`,
    activeNav: 'reviews',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Reviews', path: '/reviews/' },
      { label: product.name, path: slug },
    ],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'monthly' },
  };
}

module.exports = { buildReviewPage, ANALYSIS };
