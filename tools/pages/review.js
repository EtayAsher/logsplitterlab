'use strict';

// Editorial analysis for each verified product. This is our interpretation
// of the manufacturer specs in tools/data/products.js — not a claim of
// hands-on testing. Keep this in sync if products.js changes.
const ANALYSIS = {
  'wen-56208': {
    verdict: 'A 6.5-ton electric splitter aimed at light, frequent use near a garage or shed outlet — the current model in WEN\'s 6.5-ton line, replacing the now-discontinued 56207.',
    bestFor: 'Homeowners doing light, frequent splitting of softer wood within reach of a standard outlet.',
    notIdealFor: 'Very dense hardwood, or logs longer than 20.5 in. or thicker than 10 in. — this model isn\'t rated for that.',
    strengths: [
      'No fuel, exhaust, or engine maintenance — plug in and go',
      '20.5 in. log capacity with a 15A motor rated up to 3,574 RPM',
      'Widely documented with a manufacturer manual and multi-retailer availability',
    ],
    limitations: [
      '6.5-ton rating is on the low end for splitting dense or large-diameter hardwood',
      'Tied to a power outlet and appropriately rated extension cord',
      '20-second cycle time is longer than the gas models in our data',
    ],
    workload: 'Best suited to light, frequent splitting sessions rather than processing a large volume in one sitting.',
    cycleTimeNote: 'A 20-second cycle time, per WEN\'s own manual, is on the slower end compared to the gas models in our data (7.5–16 seconds) — worth factoring in if you\'re processing a large batch in one session.',
    logSizeNote: 'Rated for logs up to 10 in. diameter and 20.5 in. length, per WEN\'s manual.',
    portabilityNote: 'Not designed for towing; repositioning relies on its own wheels for moving it around a garage or yard.',
    setupStorageNote: 'Ships with an optional stand (34 in.) that can be used or skipped based on preference. Store indoors or under cover; there\'s no fuel to manage before storage, but check hydraulic fluid periodically per WEN\'s manual.',
    noiseElectricalNote: 'Runs on a standard 120V/15A circuit — confirm your outlet\'s circuit isn\'t already loaded with other tools, and use an appropriately rated extension cord if needed. Quieter than a gas engine, with no exhaust.',
    usability: 'Motor draws up to 15A at up to 3,574 RPM per WEN\'s manual; confirm your circuit can handle that draw before running it continuously.',
    maintenance: 'Check the hydraulic fluid level (3.7-quart tank capacity) per WEN\'s manual and inspect the power cord and plug before each use.',
    whoShouldBuy: 'Choose this if you split occasional batches of softer wood within reach of an outlet and want a widely available, well-documented electric splitter.',
    whoShouldChooseOther: 'If single-handed operation or a slightly faster cycle time matters more to you, the BILT HARD 6.5-Ton is a close alternative at the same tonnage.',
    faq: [
      { q: 'Is the WEN 56208 the same as the older WEN 56207?', a: 'It\'s the current model in the same tonnage class from WEN — the 56207 is confirmed discontinued on Amazon. Don\'t assume every spec carries over exactly; this page reflects the 56208 specifically.' },
      { q: 'Will the WEN 56208 split oak or other hardwood?', a: 'It can split smaller-diameter hardwood within its 10 in. diameter rating, but at 6.5 tons it will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.' },
    ],
    alternativeId: 'bilt-hard-65ton',
    alternativeNote: 'The BILT HARD 6.5-Ton Electric Log Splitter is a nearly identical electric splitter at the same 6.5-ton rating — compare the spec tables directly if you\'re choosing between the two.',
  },
  'bilt-hard-65ton': {
    verdict: 'A 6.5-ton electric splitter comparable to the WEN 56208 in tonnage and log capacity, with a shorter cycle time and two-handed controls.',
    bestFor: 'Homeowners splitting moderate volumes of softer-to-medium wood who want two-handed controls near an outlet.',
    notIdealFor: 'Large or very dense rounds beyond its 9.8 in. diameter / 6.5-ton rating.',
    strengths: [
      '18-second cycle time, a bit faster than the WEN 56208\'s 20 seconds',
      'Two-hand controls per the manufacturer',
      'Available in a with-stand configuration if you want one included',
    ],
    limitations: [
      '90-day warranty is shorter than some competitors',
      '9.8 in. diameter and 20.5 in. length caps rule out larger rounds',
      'Tied to an outlet, unlike the gas models in our data',
    ],
    workload: 'Suited to a homeowner splitting moderate volumes of softer-to-medium wood, where the shorter cycle time speeds up repetitive sessions.',
    cycleTimeNote: 'An 18-second cycle time per the manufacturer is a bit faster than the WEN 56208\'s 20 seconds, though still slower than any gas model in our data.',
    logSizeNote: 'Rated for logs up to 9.8 in. diameter and 20.5 in. length — essentially the same capacity as the WEN 56208.',
    portabilityNote: 'At 98 lb with 5.7 in. transport wheels, it\'s manageable for one person to reposition around a property, though not intended for highway towing.',
    setupStorageNote: 'Available with or without an included stand. Store indoors or under cover; check hydraulic fluid level (3.5-liter capacity) periodically per the manufacturer\'s manual.',
    noiseElectricalNote: 'Draws up to 15A on a 120V circuit — avoid running other high-draw tools on the same circuit. Quieter than a gas engine with no exhaust.',
    usability: 'Two-hand controls per the manufacturer; motor rated up to 3,400 RPM.',
    maintenance: 'Check hydraulic fluid level (3.5-liter capacity) and inspect the power cord and plug before each use, per the manufacturer\'s manual.',
    whoShouldBuy: 'Choose this if you want two-handed control and a slightly faster cycle time than the WEN 56208 at the same tonnage.',
    whoShouldChooseOther: 'If a longer manufacturer warranty matters more to you than cycle time, compare the WEN 56208\'s terms directly.',
    faq: [
      { q: 'How is this different from the WEN 56208?', a: 'Both are 6.5-ton electric splitters with nearly identical log capacity. The BILT HARD has an 18-second cycle time (vs. WEN\'s 20 seconds) and a shorter 90-day warranty — compare both spec tables before deciding.' },
      { q: 'Does it come with a stand?', a: 'It\'s sold in two configurations — with and without a stand — so check which listing you\'re ordering.' },
    ],
    alternativeId: 'wen-56208',
    alternativeNote: 'The WEN 56208 is a nearly identical 6.5-ton electric splitter with a longer manufacturer track record — compare the spec tables directly if you\'re choosing between the two.',
  },
  'landworks-guo079': {
    verdict: 'A 20-ton gas splitter built for portability around a property rather than highway towing, with the fastest cycle time in our current data.',
    bestFor: 'Mid-volume gas splitting where moving the machine around a property matters more than towing it on public roads.',
    notIdealFor: 'Anyone who specifically needs a road-towable hitch, or wants to avoid gas engine upkeep entirely.',
    strengths: [
      '7.5-second cycle time, the fastest among the splitters in our current data',
      '20 tons of force from a 7HP/209cc engine in a comparatively lightweight (130 lb) unit',
      '2-stage hydraulic gear pump rated at 11 GPM',
    ],
    limitations: [
      'No confirmed tow-hitch rating for road use — moves via its own wheels, not a vehicle hitch',
      'Hydraulic fluid is not included in the box',
      '1-year warranty is shorter than the Champion 100250\'s 2-year coverage',
    ],
    workload: 'Fits mid-volume gas splitting where portability around a property matters more than towing it on the road behind a vehicle.',
    cycleTimeNote: 'At 7.5 seconds, this is the fastest cycle time among the models in our current data — meaningful if you\'re processing a full cord in a single session.',
    logSizeNote: 'Rated for logs up to 16 in. diameter and 20 in. length, per the manufacturer and retailer listings.',
    portabilityNote: 'Moves via 10 in. transport wheels rather than a confirmed vehicle tow hitch — treat it as property-portable, not road-towable, unless you confirm otherwise with the manufacturer.',
    setupStorageNote: 'Hydraulic fluid (AW32 recommended) is not included and must be added before first use. For storage, retract the ram and stabilize or drain fuel per standard small-engine practice if storing over winter.',
    noiseElectricalNote: 'Gas-powered, so expect engine noise and exhaust; no electrical hookup required.',
    usability: 'Two-stage hydraulic gear pump rated at 11 GPM, per the manufacturer; standard gas-splitter operation applies.',
    maintenance: 'Check hydraulic fluid level (2.1-gallon system capacity) and follow the 7HP engine manufacturer\'s oil and service schedule.',
    whoShouldBuy: 'Choose this if cycle time matters most to you and you\'re comfortable without a confirmed road-tow hitch.',
    whoShouldChooseOther: 'If you need to tow the splitter on public roads between sites, the Champion 100250 has a manufacturer-confirmed towing rating this model doesn\'t.',
    faq: [
      { q: 'Can the Landworks GUO079 be towed behind a vehicle on the road?', a: 'No confirmed road-tow hitch rating was found in our sourcing. It moves via its own transport wheels; if road towing matters to you, consider the Champion 100250 instead, which has a manufacturer-confirmed 45 mph tow rating.' },
      { q: 'Does it come with hydraulic fluid?', a: 'No — hydraulic fluid is not included in the box. The manufacturer recommends AW32 hydraulic oil, purchased separately before first use.' },
    ],
    alternativeId: 'champion-100250',
    alternativeNote: 'The Champion 100250 offers nearly double the tonnage (37T vs. 20T) and a confirmed road-tow rating, at the cost of a slower cycle time — worth weighing against how much you split and whether you need to tow it.',
  },
  'champion-100250': {
    verdict: 'A 37-ton gas splitter built for higher-volume rural use, with a manufacturer-confirmed towing rating and a 2-year warranty.',
    bestFor: 'Rural property owners processing several cords a year who need to tow the machine between sites.',
    notIdealFor: 'Anyone who wants to avoid small-engine maintenance, or needs a quiet machine to run near a house in the evening.',
    strengths: [
      'Manufacturer-confirmed towable to 45 mph with a 2-inch ball hitch',
      '37 tons of force from a 338cc single-cylinder engine, handling logs up to 24 in. long / 100 lb',
      '2-year limited warranty with free lifetime technical support',
    ],
    limitations: [
      'Gas engine requires periodic oil changes and off-season fuel stabilization',
      '16-second cycle time is slower than the Landworks GUO079\'s 7.5 seconds',
      'Large, heavy machine — more than most occasional users need',
    ],
    workload: 'Suited to rural property owners processing multiple cords a year who need to move the machine between sites.',
    cycleTimeNote: 'A 16-second cycle time, per Champion\'s own operator manual, is slower than the Landworks GUO079 in our data (7.5 seconds) — but this model\'s larger 37-ton rating and confirmed towing may matter more for some buyers.',
    logSizeNote: 'Rated for logs up to 24 in. long and 100 lb, per the manufacturer\'s manual. Rounds longer or heavier than that should be cut down before splitting.',
    portabilityNote: 'A tow-ready wheel setup and a 2-inch ball hitch coupler make this a confirmed towable machine, rated to 45 mph per Champion\'s own operator manual — confirm your tow vehicle and trailer hitch are rated accordingly before towing on public roads.',
    setupStorageNote: 'Requires assembly of the tow tongue and wheel hardware per Champion\'s manual on first setup. For storage, retract the ram fully and, if storing over winter, stabilize or drain fuel per the engine manufacturer\'s guidance.',
    noiseElectricalNote: 'As a gas splitter, expect engine noise and exhaust — plan to operate it away from windows or close neighbors. No electrical hookup is needed.',
    usability: 'Standard gas-splitter operation; the manufacturer\'s manual documents a low-oil shutoff safety feature and a 1.6-gallon fuel tank.',
    maintenance: 'Follow Champion\'s manual for engine oil type/interval (1.2-quart capacity, 10W-30 recommended) and hydraulic fluid level checks (6.8-gallon capacity). Inspect the tow hitch and tires before transporting.',
    whoShouldBuy: 'Choose this model if you need to move a splitter between work sites on a rural property, or process enough wood that 37 tons of force and a 2-year warranty matter more than a faster cycle time.',
    whoShouldChooseOther: 'If cycle time or a lighter, more portable unit matters more than towing capability, the Landworks GUO079 is a real alternative at a lower tonnage.',
    faq: [
      { q: 'Can the Champion 100250 be towed on the highway?', a: 'Champion\'s own operator manual rates this model\'s wheels and hitch for towing up to 45 mph, but always confirm your specific trailer/hitch setup and local towing regulations before highway use.' },
      { q: 'How does this compare to the older Champion 100424 (27-ton)?', a: 'The 100424 is a different model number with different specs, and is no longer confirmed available. This page covers model 100250 (37-ton) specifically — do not assume the two share identical specs.' },
    ],
    alternativeId: 'landworks-guo079',
    alternativeNote: 'Compared to the Landworks GUO079, this Champion model offers nearly double the tonnage (37T vs. 20T) and a confirmed tow rating, but at a slower cycle time (16s vs. 7.5s) — worth weighing against how much you split and whether you need to tow it.',
  },
};

function buildReviewPage(product, ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, sourceNotes, affiliateButton, productImage, byline, authorBox, personJsonLd } = components;
  const a = ANALYSIS[product.id];
  const alt = products.find((p) => p.id === a.alternativeId);
  const slug = `/reviews/${product.id}/`;
  const publishedDate = '2026-07-26';
  const updatedDate = '2026-07-26';

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
  <p class="status-badge">Research-Based Review — specifications verified against manufacturer and current retailer information</p>
  <h1>${esc(product.name)} Review</h1>
  <p class="article-meta">Model ${esc(product.model)} &middot; Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; ${byline(url)}</p>
  <p class="article-meta">${esc(config.amazonDisclosureShort)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <div class="review-hero-img">${productImage(product, url)}</div>

  <div class="note-box">This is a Research-Based Review: a specification-based research summary, not a first-hand test. It compares manufacturer and current retailer specifications against the factors homeowners typically care about. If we ever physically test this model, this notice will be replaced with first-hand observations clearly separated from manufacturer claims.</div>

  <div class="verdict-box">
    <h2 style="margin-top:0;">Verdict</h2>
    <p style="margin-bottom:0;">${esc(a.verdict)}</p>
  </div>

  <div class="best-for-grid">
    <div class="best-for-card good"><h3>Best for</h3><p style="margin:0;">${esc(a.bestFor)}</p></div>
    <div class="best-for-card bad"><h3>Key limitation</h3><p style="margin:0;">${esc(a.notIdealFor)}</p></div>
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
  <p>The specifications above come from the manufacturer and retailer listings cited below. The verdict, "best for," strengths, limitations, and other analysis on this page are LogSplitterLab's interpretation based on those specifications — not a manufacturer claim and not first-hand testing. This page does not display Amazon star ratings, review counts, "Best Seller" labels, prices, or stock/availability status, since those change independently of the specifications above. See <a href="${url('/how-we-review/')}">How We Review</a> for our full methodology.</p>

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

  ${authorBox(url)}
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${product.name} Review`,
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { '@type': 'Person', name: 'Etay Asher', url: layout.canonical('/author/etay-asher/') },
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
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'monthly' },
  };
}

module.exports = { buildReviewPage, ANALYSIS };
