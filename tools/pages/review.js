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
    workload: 'Suited to homeowners and rural property owners processing multiple cords a year, not occasional weekend splitting.',
    cycleTimeNote: 'An 11-second cycle time (per Champion\'s spec for this model number) is competitive with other gas splitters in this tonnage class, though the YARDMAX YU2566 posts a faster 9.7-second cycle — worth weighing if speed matters more to you than towing at highway speed.',
    logSizeNote: 'Rated for logs up to 24 in. long and 100 lb. Rounds longer or heavier than that should be cut down before splitting.',
    portabilityNote: 'DOT-approved wheels and a 2-inch ball hitch coupler rated to 45 mph make this a genuinely towable machine, per Champion\'s specifications — confirm your tow vehicle and trailer hitch are rated accordingly before towing on public roads.',
    setupStorageNote: 'Requires assembly of the tow tongue and wheel hardware per Champion\'s manual on first setup. For storage, retract the ram fully and, if storing over winter, stabilize or drain fuel per the engine manufacturer\'s guidance.',
    noiseElectricalNote: 'As a gas splitter, expect engine noise and exhaust — plan to operate it away from windows or close neighbors. No electrical hookup is needed.',
    usability: 'Two-handed control operation is standard on this class of splitter; expect to brace the machine using its stabilizer legs on uneven ground before operating.',
    maintenance: 'Follow Champion\'s manual for engine oil type/interval and hydraulic fluid level checks. Inspect the tow hitch and tires before transporting.',
    whoShouldBuy: 'Choose this model if you need to move a splitter between work sites on a rural property, or process enough wood that 27 tons of consistent force matters more than a quieter alternative.',
    whoShouldChooseOther: 'If you split lighter volumes near your house and want to avoid engine noise and maintenance, an electric model like the WEN 56207 or Boss Industrial ES7T20 is a better fit.',
    faq: [
      { q: 'Can the Champion 100424 be towed on the highway?', a: 'Champion rates this model\'s wheels for up to 45 mph per its official specifications, but always confirm your specific trailer/hitch setup and local towing regulations before highway use.' },
      { q: 'How long does a full cycle take?', a: 'Champion lists an 11-second cycle time for this specific model number (100424) — other 27-ton Champion models have different cycle times, so don\'t assume they match.' },
    ],
    alternativeId: 'yardmax-yu2566',
    alternativeNote: 'Compared to the YARDMAX YU2566, this Champion model handles slightly shorter maximum log length (24 in. vs. 26 in.) but is towable up to a confirmed highway speed; check both spec tables above before choosing.',
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
    workload: 'Best suited to light, frequent splitting sessions rather than processing a large volume in one sitting.',
    cycleTimeNote: 'A 20-second cycle time is on the slower end compared to the gas models in our data (9.7–11 seconds), which matters more if you\'re processing a large batch in one session.',
    logSizeNote: 'Rated for logs up to 10 in. diameter and 20.5 in. length, per WEN\'s manual — meaningfully smaller than the gas models in our catalog.',
    portabilityNote: 'At 98 lb with an included stand and wheels, one person can reposition it around a garage or yard, though it\'s not designed for highway towing.',
    setupStorageNote: 'Ships with a stand that requires basic assembly. Store indoors or under cover; there\'s no fuel to manage before storage, but check hydraulic fluid level periodically per WEN\'s manual.',
    noiseElectricalNote: 'Runs on a standard 120V/15A circuit — confirm your outlet\'s circuit isn\'t already loaded with other tools, and use an appropriately rated extension cord if needed. Noticeably quieter than a gas engine, with no exhaust.',
    usability: 'Single-handed lever operation per WEN\'s manual; confirm your outlet circuit can handle the rated 15A draw before running it continuously.',
    maintenance: 'Check the hydraulic fluid level per WEN\'s manual and inspect the power cord and plug before each use.',
    whoShouldBuy: 'Choose this if you split occasional batches of softer wood within reach of an outlet and want to avoid engine noise, fuel, and maintenance.',
    whoShouldChooseOther: 'If you regularly split large or very dense rounds, or need to work somewhere without power access, a gas model like the Champion 100424 or YARDMAX YU2566 will handle more.',
    faq: [
      { q: 'Will the WEN 56207 split oak or other hardwood?', a: 'It can split smaller-diameter hardwood within its 10 in. diameter rating, but at 6.5 tons it will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.' },
      { q: 'Does it need a special outlet?', a: 'WEN specifies a standard 120V circuit, but the motor draws up to 15A — check that your circuit isn\'t shared with other high-draw devices.' },
    ],
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
    workload: 'Fits higher-volume splitting where minimizing time per log matters, without stepping up to a full commercial-class machine.',
    cycleTimeNote: 'At 9.7 seconds, this is the fastest cycle time among the models in our current data — meaningful if you\'re processing a full cord in a single session.',
    logSizeNote: 'Rated for logs up to 26 in. long, the longest capacity among the models we\'ve checked, per YARDMAX\'s specifications.',
    portabilityNote: 'Ships with DOT-approved tires for towing between sites, per YARDMAX. Confirm your tow setup and local regulations before road use — YARDMAX\'s published maximum tow speed was not confirmed in our sourcing, so don\'t assume it matches the Champion model\'s 45 mph rating.',
    setupStorageNote: 'Requires standard gas-splitter assembly (wheel/tongue hardware) on first setup. For storage, retract the ram and stabilize or drain fuel per Briggs & Stratton\'s guidance if storing over winter.',
    noiseElectricalNote: 'Gas-powered, so expect engine noise and exhaust; no electrical hookup required.',
    usability: 'Two-handed operation is standard; the manufacturer\'s U-beam frame is designed to resist bending under repeated heavy use.',
    maintenance: 'Follow YARDMAX\'s manual for Briggs & Stratton engine service intervals and hydraulic reservoir checks (4.2-gallon capacity).',
    whoShouldBuy: 'Choose this if cycle time and log length matter most to you and you\'re comfortable with routine small-engine maintenance.',
    whoShouldChooseOther: 'If you want to avoid gas engine upkeep entirely and mostly split smaller, softer rounds, an electric model will need less maintenance.',
    faq: [
      { q: 'Is the YARDMAX YU2566 rated for highway towing?', a: 'YARDMAX specifies DOT-approved tires and a towable frame, but our sourcing didn\'t turn up an explicit maximum tow speed — confirm with YARDMAX\'s manual before towing on public roads.' },
      { q: 'How does it compare to the Champion 100424?', a: 'The YU2566 splits faster per cycle (9.7s vs. 11s) and handles slightly longer logs (26 in. vs. 24 in.), but the Champion is rated for 2 more tons of force (27T vs. 25T).' },
    ],
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
    workload: 'Suited to a single operator splitting moderate volumes at home — single-handed control speeds up repetitive sessions compared to two-handed splitters.',
    cycleTimeNote: 'A 14-second cycle time per Boss Industrial\'s specifications is faster than the WEN 56207 (20 seconds) but slower than the gas models we\'ve checked.',
    logSizeNote: 'Rated for logs up to 10 in. diameter and 20.5 in. length, matching the WEN 56207\'s capacity.',
    portabilityNote: 'At 128 lb with rubber-tired wheels, it\'s manageable for one person to reposition around a property, though not intended for highway towing.',
    setupStorageNote: 'Minimal assembly required out of the box, per the manufacturer. Store indoors or under cover; check hydraulic fluid level periodically per Boss Industrial\'s manual.',
    noiseElectricalNote: 'Draws up to 13.5A on a 115V circuit — close to a standard 15A breaker\'s limit, so avoid running other high-draw tools on the same circuit. Quieter than a gas engine with no exhaust.',
    usability: 'Single-handed lever control per the manufacturer; the lever returns to its starting position when released, which the manufacturer describes as a safety feature.',
    maintenance: 'Check hydraulic fluid level (4-quart capacity) and inspect the power cord and plug before each use, per Boss Industrial\'s manual.',
    whoShouldBuy: 'Choose this if you\'re a single operator who wants single-handed control and don\'t need to split rounds larger than its rating.',
    whoShouldChooseOther: 'If you need more tonnage for dense hardwood, or plan to split away from a power outlet, a gas model will serve you better.',
    faq: [
      { q: 'What does the 2-year warranty cover?', a: 'Boss Industrial\'s listing states the warranty explicitly includes the hydraulics for 2 years — confirm exact terms directly with Boss Industrial before purchase, since warranty details can change.' },
      { q: 'Can one person operate the ES7T20 safely?', a: 'It\'s designed for single-handed lever operation, with the lever returning to its starting position when released, which the manufacturer describes as a safety feature — always follow the manual\'s exact safety instructions.' },
    ],
    alternativeId: 'wen-56207',
    alternativeNote: 'The WEN 56207 is a similarly sized electric splitter rated slightly lower at 6.5 tons — compare the spec tables directly if you\'re choosing between the two.',
  },
};

function buildReviewPage(product, ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, sourceNotes, affiliateButton, productImage } = components;
  const a = ANALYSIS[product.id];
  const alt = products.find((p) => p.id === a.alternativeId);
  const slug = `/reviews/${product.id}/`;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const bestOfHref = product.type === 'electric' ? '/best-electric-log-splitters/' : '/best-gas-log-splitters/';
  const bestOfLabel = product.type === 'electric' ? 'Best Electric Log Splitters' : 'Best Gas Log Splitters';

  const faqHtml = a.faq.map((item) => (
    `<div class="faq-item"><h3>${esc(item.q)}</h3><p>${esc(item.a)}</p></div>`
  )).join('');

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const bodyHtml = `
<article class="article-wrap">
  <p class="status-badge">Research Review — specification-based, not hands-on tested</p>
  <h1>${esc(product.name)} Review</h1>
  <p class="article-meta">Model ${esc(product.model)} &middot; Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>
  <p class="article-meta">${esc(config.amazonDisclosureShort)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <div class="review-hero-img">${productImage(product, url)}</div>

  <div class="note-box">This is a Research Review: a specification-based research summary, not a first-hand test. It compares manufacturer and retailer specifications against the factors homeowners typically care about. If we ever physically test this model, this notice will be replaced with first-hand observations clearly separated from manufacturer claims.</div>

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
  <p>${affiliateButton(product, { position: 'review-hero' })}</p>

  <h2>Key strengths</h2>
  <ul>${a.strengths.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

  <h2>Key limitations</h2>
  <ul>${a.limitations.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

  <h2>Power and expected workload</h2>
  <p>${esc(a.workload)}</p>

  <h2>Cycle time</h2>
  <p>${esc(a.cycleTimeNote)}</p>

  <h2>Log size considerations</h2>
  <p>${esc(a.logSizeNote)}</p>

  <h2>Portability</h2>
  <p>${esc(a.portabilityNote)}</p>

  <h2>Setup and storage</h2>
  <p>${esc(a.setupStorageNote)}</p>

  <h2>${product.type === 'electric' ? 'Noise and electrical requirements' : 'Noise and fumes'}</h2>
  <p>${esc(a.noiseElectricalNote)}</p>

  <h2>Usability</h2>
  <p>${esc(a.usability)}</p>

  <h2>Maintenance expectations</h2>
  <p>${esc(a.maintenance)} Fluid types and service intervals vary by model — always follow the manufacturer's manual rather than a generic schedule. See our <a href="${url('/maintenance/')}">maintenance guide</a> for general upkeep concepts.</p>

  <h2>Safety notes</h2>
  <p>Operate this splitter only as described in the manufacturer's manual. Keep hands clear of the wedge and ram path, split one log at a time unless the machine is explicitly rated otherwise, and wear eye protection and sturdy footwear. See our <a href="${url('/buying-guide/')}#g-safety">general safety guidance</a> — it does not replace the manufacturer's instructions for this specific model.</p>

  <h2>Who should buy it</h2>
  <p>${esc(a.whoShouldBuy)}</p>

  <h2>Who should choose another product</h2>
  <p>${esc(a.whoShouldChooseOther)} See our <a href="${url(bestOfHref)}">${esc(bestOfLabel)}</a> roundup for other verified options.</p>

  ${alt ? `<h2>Compared with a realistic alternative</h2><p>${esc(a.alternativeNote)} <a href="${url(`/reviews/${alt.id}/`)}">Read the ${esc(alt.brand)} ${esc(alt.model)} summary</a>.</p>` : ''}

  <h2>Editorial note</h2>
  <p>The specifications above come from the manufacturer and retailer listings cited below. The verdict, "best for," strengths, limitations, and other analysis on this page are LogSplitterLab's interpretation based on those specifications — not a manufacturer claim and not first-hand testing. See <a href="${url('/how-we-review/')}">How We Review</a> for our full methodology.</p>

  ${sourceNotes(product)}

  <h2>FAQ</h2>
  ${faqHtml}

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url(bestOfHref)}">${esc(bestOfLabel)}</a></li>
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
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'monthly' },
  };
}

module.exports = { buildReviewPage, ANALYSIS };
