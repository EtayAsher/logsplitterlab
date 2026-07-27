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
    whoShouldChooseOther: 'If your wood needs meaningfully more capacity, the SuperHandy GUO084 (14 tons) is worth comparing before you assume you need to switch to gas.',
    faq: [
      { q: 'Is the WEN 56208 the same as the older WEN 56207?', a: 'It\'s the current model in the same tonnage class from WEN — the 56207 is confirmed discontinued on Amazon. Don\'t assume every spec carries over exactly; this page reflects the 56208 specifically.' },
      { q: 'Will the WEN 56208 split oak or other hardwood?', a: 'It can split smaller-diameter hardwood within its 10 in. diameter rating, but at 6.5 tons it will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.' },
    ],
    alternativeId: 'superhandy-guo084',
    alternativeNote: 'The SuperHandy GUO084 offers more than double the tonnage (14T vs. 6.5T) at a higher price point — compare the spec tables directly if 6.5 tons might not be enough for your wood.',
  },
  'superhandy-guo084': {
    verdict: 'A 14-ton electric splitter for buyers who need meaningfully more capacity than an entry-level 6.5-ton machine without switching to gas.',
    bestFor: 'Homeowners with larger or denser rounds who still want the convenience and low maintenance of electric power.',
    notIdealFor: 'Buyers on a tight budget, or anyone whose wood is already well within a 6.5-ton machine\'s range — the WEN 56208 covers that need for less.',
    strengths: [
      'More than double the tonnage of an entry-level electric splitter (14T vs. 6.5T)',
      '16-second cycle time from a 2-stage 10.5GPM Bucher hydraulic gear pump',
      'Brushless induction motor rated 2.5eHP / 1800W on a standard 15A circuit',
    ],
    limitations: [
      'Heavier (126 lb) and pricier than entry-level electric splitters',
      'Still tied to a power outlet and an appropriately rated extension cord',
      '1-year warranty, shorter than some manufacturer terms in our data',
    ],
    workload: 'Suited to a homeowner who splits denser or larger-diameter rounds regularly and wants headroom beyond a 6.5-ton machine, without moving to a gas engine.',
    cycleTimeNote: 'A 16-second cycle time, per the manufacturer, is faster than the WEN 56208\'s 20 seconds despite the higher tonnage, though still slower than either gas model in our data.',
    logSizeNote: 'Rated for logs up to 14 in. diameter and 20 in. length, per the manufacturer — a meaningfully larger diameter capacity than the 6.5-ton electric splitter in our data.',
    portabilityNote: 'At 126 lb, it\'s heavier than the entry-level electric splitter in our data; moves via its own transport wheels rather than a vehicle hitch.',
    setupStorageNote: 'Store indoors or under cover; there\'s no fuel to manage before storage, but check hydraulic fluid periodically per the manufacturer\'s manual.',
    noiseElectricalNote: 'Runs on a standard 120V/15A circuit — confirm your outlet\'s circuit isn\'t already loaded with other tools. Quieter than a gas engine, with no exhaust.',
    usability: 'Two-stage 10.5GPM Bucher hydraulic gear pump with a 16 in. cylinder stroke, per the manufacturer.',
    maintenance: 'Check hydraulic fluid level and inspect the power cord and plug before each use, per the manufacturer\'s manual.',
    whoShouldBuy: 'Choose this if 6.5 tons feels like it might not be enough for your wood, but you still want electric convenience over a gas engine.',
    whoShouldChooseOther: 'If your wood is reliably small-diameter and softer, the WEN 56208 covers the same electric convenience for meaningfully less money.',
    faq: [
      { q: 'Is 14 tons overkill for typical firewood?', a: 'For most seasoned softwood, no — 6.5 tons is often enough. The extra capacity here matters most for denser hardwood or larger-diameter rounds; see our WEN 56208 review if your wood is reliably smaller.' },
      { q: 'Does it come with a stand?', a: 'No stand is included with this configuration, per the manufacturer\'s listing — it\'s designed to be used at ground level or on a workbench.' },
    ],
    alternativeId: 'wen-56208',
    alternativeNote: 'The WEN 56208 is a lighter, less expensive electric splitter at 6.5 tons — a better fit if your wood doesn\'t need this model\'s extra capacity.',
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
      'Horizontal-only operation, unlike the higher-tonnage gas model in our data, which also splits vertically',
    ],
    workload: 'Fits mid-volume gas splitting where portability around a property matters more than towing it on the road behind a vehicle.',
    cycleTimeNote: 'At 7.5 seconds, this is the fastest cycle time among the models in our current data — meaningful if you\'re processing a full cord in a single session.',
    logSizeNote: 'Rated for logs up to 16 in. diameter and 20 in. length, per the manufacturer and retailer listings.',
    portabilityNote: 'Moves via 10 in. transport wheels rather than a confirmed vehicle tow hitch — treat it as property-portable, not road-towable, unless you confirm otherwise with the manufacturer.',
    setupStorageNote: 'Hydraulic fluid (AW32 recommended) is not included and must be added before first use. For storage, retract the ram and stabilize or drain fuel per standard small-engine practice if storing over winter.',
    noiseElectricalNote: 'Gas-powered, so expect engine noise and exhaust; no electrical hookup required.',
    usability: 'Two-stage hydraulic gear pump rated at 11 GPM, per the manufacturer; standard gas-splitter operation applies.',
    maintenance: 'Check hydraulic fluid level (2.1-gallon system capacity) and follow the 7HP engine manufacturer\'s oil and service schedule.',
    whoShouldBuy: 'Choose this if cycle time matters most to you and you don\'t need to split oversized rounds vertically.',
    whoShouldChooseOther: 'If you need to split large rounds vertically without lifting them onto a beam, or want more tonnage headroom, the SuperHandy GUO096 (25 tons, horizontal/vertical) is worth comparing.',
    faq: [
      { q: 'Can the Landworks GUO079 be towed behind a vehicle on the road?', a: 'No confirmed road-tow hitch rating was found in our sourcing for this or the other gas model in our data. It moves via its own transport wheels — treat both as property-portable rather than road-towable unless you confirm otherwise with the manufacturer.' },
      { q: 'Does it come with hydraulic fluid?', a: 'No — hydraulic fluid is not included in the box. The manufacturer recommends AW32 hydraulic oil, purchased separately before first use.' },
    ],
    alternativeId: 'superhandy-guo096',
    alternativeNote: 'The SuperHandy GUO096 offers more tonnage (25T vs. 20T) and horizontal/vertical operation for large rounds, at a slower cycle time (12s vs. 7.5s) — worth weighing against how much you split and whether vertical operation matters to you.',
  },
  'superhandy-guo096': {
    verdict: 'A 25-ton gas splitter with horizontal/vertical operation, giving it more tonnage and versatility than the Landworks GUO079 at a slower cycle time.',
    bestFor: 'Higher-volume gas splitting where the ability to split large, hard-to-lift rounds vertically matters.',
    notIdealFor: 'Anyone who specifically needs a confirmed road-tow hitch rating, or wants the fastest possible cycle time in our data.',
    strengths: [
      '25 tons of force from a 7HP/209cc engine, with horizontal and vertical operation',
      'Handles logs up to 24 in. diameter, the largest diameter rating in our current data',
      '12-second cycle time from a 2-stage Bucher hydraulic gear pump',
    ],
    limitations: [
      'No confirmed tow-hitch rating for road use',
      'Slower cycle time (12s) than the Landworks GUO079 (7.5s)',
      'Unit weight could not be confirmed from conflicting sources — see source notes',
    ],
    workload: 'Fits higher-volume gas splitting where the ability to split large rounds vertically, without lifting them onto a beam, matters more than the fastest possible cycle time.',
    cycleTimeNote: 'A 12-second cycle time, per the manufacturer, is slower than the Landworks GUO079 in our data (7.5 seconds) — but this model\'s larger 25-ton rating and vertical operation may matter more for some buyers.',
    logSizeNote: 'Rated for logs up to 24 in. diameter and 20 in. length, per the manufacturer — the largest diameter capacity in our current data.',
    portabilityNote: 'Moves via 10 in. wheels and a folding handle rather than a confirmed vehicle tow hitch — treat it as property-portable, not road-towable, unless you confirm otherwise with the manufacturer. Unit weight is not published here because sources conflict — see source notes.',
    setupStorageNote: 'Hydraulic fluid is not included and must be added before first use. For storage, retract the ram and stabilize or drain fuel per standard small-engine practice if storing over winter.',
    noiseElectricalNote: 'Gas-powered, so expect engine noise and exhaust; no electrical hookup required.',
    usability: 'Half-beam design converts between horizontal and vertical operation, per the manufacturer — useful for large rounds you don\'t want to lift onto a beam.',
    maintenance: 'Follow the 7HP engine manufacturer\'s oil and service schedule, and check hydraulic fluid level before each use.',
    whoShouldBuy: 'Choose this if you need more tonnage or vertical operation for large rounds, and don\'t need the fastest cycle time or a confirmed tow rating.',
    whoShouldChooseOther: 'If cycle time matters most to you and you don\'t need vertical operation, the Landworks GUO079 splits nearly twice as fast at a lower (but still substantial) 20-ton rating.',
    faq: [
      { q: 'Can the SuperHandy GUO096 be towed on the highway?', a: 'No confirmed road-tow hitch rating was found in our sourcing. It moves via its own transport wheels and folding handle — treat it as property-portable rather than road-towable.' },
      { q: 'How much does it weigh?', a: 'We could not confirm a reliable figure: Amazon\'s own listing states roughly 90 lb, while multiple retailer listings independently state roughly 196 lb for the same model — too large a gap to publish confidently. Check the current listing directly before assuming either figure.' },
    ],
    alternativeId: 'landworks-guo079',
    alternativeNote: 'Compared to the Landworks GUO079, this model offers more tonnage (25T vs. 20T) and horizontal/vertical operation, but at a slower cycle time (12s vs. 7.5s) — worth weighing against how much you split and whether vertical operation matters to you.',
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
