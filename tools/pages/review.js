'use strict';

// Editorial analysis for each verified product. This is our interpretation
// of the manufacturer specs in tools/data/products.js — not a claim of
// hands-on testing. Keep this in sync if products.js changes.
const ANALYSIS = {
  'yardmax-ys0650': {
    verdict: 'A 6.5-ton electric splitter for light, frequent use near a garage or shed outlet — currently the only electric model in our catalog.',
    bestFor: 'Homeowners doing light, frequent splitting of softer wood within reach of a standard outlet.',
    notIdealFor: 'Very dense hardwood, or logs longer than 20.5 in. or thicker than 10 in. — this model isn\'t rated for that.',
    strengths: [
      'No fuel, exhaust, or engine maintenance — plug in and go',
      '20.5 in. log capacity on a 15A motor',
      'Ships with a removable stand and log trays to catch split pieces, per the manufacturer',
    ],
    limitations: [
      '6.5-ton rating is on the low end for splitting dense or large-diameter hardwood',
      'Tied to a power outlet and appropriately rated extension cord',
      '19-second cycle time is longer than any gas model in our catalog',
    ],
    workload: 'Best suited to light, frequent splitting sessions rather than processing a large volume in one sitting.',
    cycleTimeNote: 'A 19-second cycle time, per manufacturer specifications, is on the slower end compared to the gas models in our catalog (7.5–15.3 seconds) — worth factoring in if you\'re processing a large batch in one session.',
    logSizeNote: 'Rated for logs up to 10 in. diameter and 20.5 in. length, per the manufacturer.',
    portabilityNote: 'Not designed for towing; repositioning relies on its own 7 in. wheels for moving it around a garage or yard.',
    setupStorageNote: 'Ships with a removable stand and log trays, per the manufacturer — use with or without the stand based on preference. Store indoors or under cover; there\'s no fuel to manage before storage, but check hydraulic fluid periodically.',
    noiseElectricalNote: 'Runs on a standard 120V/15A circuit — confirm your outlet\'s circuit isn\'t already loaded with other tools, and use an appropriately rated extension cord if needed. Quieter than a gas engine, with no exhaust.',
    usability: 'Motor draws up to 15A on a standard 120V circuit, per the manufacturer; confirm your circuit can handle that draw before running it continuously.',
    maintenance: 'Check the hydraulic fluid level and inspect the power cord and plug before each use, per the manufacturer\'s manual.',
    whoShouldBuy: 'Choose this if you split occasional batches of softer wood within reach of an outlet and want a straightforward, no-fuel electric splitter.',
    whoShouldChooseOther: 'If your wood regularly exceeds 6.5 tons of resistance — dense hardwood or large-diameter rounds — every other product in our catalog is gas-powered, which trades quiet operation for more force and maintenance.',
    faq: [
      { q: 'Does the YS0650 come with a stand?', a: 'Yes — per the manufacturer, it ships with a removable stand and log trays that catch split pieces as they fall.' },
      { q: 'Will the YS0650 split oak or other hardwood?', a: 'It can split smaller-diameter hardwood within its 10 in. diameter rating, but at 6.5 tons it will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.' },
    ],
    alternativeId: 'landworks-guo079',
    alternativeNote: 'If 6.5 tons isn\'t enough for your wood, the Landworks GUO079 (20 tons, gas) is a reasonable starting point for more splitting force, at the cost of engine noise, fuel, and maintenance.',
  },
  'superhandy-20-ton': {
    verdict: 'A 20-ton gas splitter nearly identical in specification to the Landworks GUO079 elsewhere in our catalog — same tonnage, weight class, cycle time, and log capacity, from the same manufacturer under a different brand.',
    bestFor: 'Buyers who specifically want the SuperHandy brand or found this exact listing — functionally interchangeable with the Landworks GUO079 in our catalog.',
    notIdealFor: 'Anyone comparison-shopping expecting a meaningfully different machine from the Landworks GUO079 — the published specs are effectively the same.',
    strengths: [
      '7.5-second cycle time from a 2-stage 11 GPM Bucher hydraulic gear pump',
      '20 tons of force from a 7HP/209cc AlphaWorks engine',
      'Substantial review history at time of sourcing',
    ],
    limitations: [
      'No confirmed tow-hitch rating for road use — moves via its own wheels, not a vehicle hitch',
      'Hydraulic fluid is not included in the box',
      'Nearly identical in every published spec to the Landworks GUO079 elsewhere in our catalog — see notes below',
    ],
    workload: 'Fits mid-volume gas splitting where portability around a property matters more than towing it on the road behind a vehicle — functionally the same fit as the Landworks GUO079.',
    cycleTimeNote: 'A 7.5-second cycle time, per the manufacturer, matches the Landworks GUO079 in our catalog exactly.',
    logSizeNote: 'Rated for logs up to 16 in. diameter and 20 in. length, per the manufacturer — identical to the Landworks GUO079\'s rating.',
    portabilityNote: 'Moves via 10 in. transport wheels rather than a confirmed vehicle tow hitch — treat it as property-portable, not road-towable, unless you confirm otherwise with the manufacturer.',
    setupStorageNote: 'Hydraulic fluid is not included and must be added before first use. For storage, retract the ram and stabilize or drain fuel per standard small-engine practice if storing over winter.',
    noiseElectricalNote: 'Gas-powered, so expect engine noise and exhaust; no electrical hookup required.',
    usability: 'Two-stage Bucher hydraulic gear pump rated at 11 GPM, per the manufacturer; standard gas-splitter operation applies.',
    maintenance: 'Check hydraulic fluid level and follow the 7HP AlphaWorks engine\'s oil and service schedule; engine warranty is handled separately by AlphaWorks per the manufacturer.',
    whoShouldBuy: 'Choose this if you specifically want the SuperHandy brand, found a better price on this listing, or arrived here directly — its specifications match the Landworks GUO079 in our catalog closely enough that brand and price are the real deciding factors, not capability.',
    whoShouldChooseOther: 'If you want more tonnage or vertical operation for large rounds, the YARDMAX YU3266 (32 tons, horizontal/vertical, confirmed towable) is a genuinely different machine, not just a different brand at the same spec.',
    faq: [
      { q: 'How is this different from the Landworks GUO079 in your catalog?', a: 'In every specification we could verify, it isn\'t meaningfully different — same 20-ton rating, same weight class, same 7.5-second cycle time, same log capacity, and the same manufacturer (GCM) behind both brands. We kept both in the catalog as a disclosed decision rather than presenting them as meaningfully different products, and plan to revisit this once the site has real traffic data.' },
      { q: 'Can it be towed behind a vehicle on the road?', a: 'No confirmed road-tow hitch rating was found in our sourcing. It moves via its own transport wheels — treat it as property-portable rather than road-towable.' },
    ],
    alternativeId: 'yardmax-32-ton-cr950',
    alternativeNote: 'The YARDMAX YU3266 offers substantially more tonnage (32T vs. 20T), horizontal/vertical operation, and a confirmed road-tow rating this model doesn\'t have — a genuinely different machine, not just a different brand at the same spec.',
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
      'Nearly identical in every published spec to the SuperHandy GUO077 elsewhere in our catalog — see notes below',
    ],
    workload: 'Fits mid-volume gas splitting where portability around a property matters more than towing it on the road behind a vehicle.',
    cycleTimeNote: 'At 7.5 seconds, this ties for the fastest cycle time among the models in our current catalog — meaningful if you\'re processing a full cord in a single session.',
    logSizeNote: 'Rated for logs up to 16 in. diameter and 20 in. length, per the manufacturer and retailer listings.',
    portabilityNote: 'Moves via 10 in. transport wheels rather than a confirmed vehicle tow hitch — treat it as property-portable, not road-towable, unless you confirm otherwise with the manufacturer.',
    setupStorageNote: 'Hydraulic fluid (AW32 recommended) is not included and must be added before first use. For storage, retract the ram and stabilize or drain fuel per standard small-engine practice if storing over winter.',
    noiseElectricalNote: 'Gas-powered, so expect engine noise and exhaust; no electrical hookup required.',
    usability: 'Two-stage hydraulic gear pump rated at 11 GPM, per the manufacturer; standard gas-splitter operation applies.',
    maintenance: 'Check hydraulic fluid level (2.1-gallon system capacity) and follow the 7HP engine manufacturer\'s oil and service schedule.',
    whoShouldBuy: 'Choose this if cycle time matters most to you and you don\'t need to split oversized rounds vertically or tow the machine on the road.',
    whoShouldChooseOther: 'If you need to split large rounds vertically without lifting them onto a beam, want more tonnage headroom, or need a confirmed road-tow rating, the YARDMAX YU3266 (32 tons, horizontal/vertical, towable) is a genuinely different machine — worth comparing before the SuperHandy GUO077, which is nearly identical to this product on paper.',
    faq: [
      { q: 'Can the Landworks GUO079 be towed behind a vehicle on the road?', a: 'No confirmed road-tow hitch rating was found in our sourcing. It moves via its own transport wheels — treat it as property-portable rather than road-towable. The YARDMAX YU3266 elsewhere in our catalog does have a confirmed tow rating, if that matters to you.' },
      { q: 'Does it come with hydraulic fluid?', a: 'No — hydraulic fluid is not included in the box. The manufacturer recommends AW32 hydraulic oil, purchased separately before first use.' },
      { q: 'How is this different from the SuperHandy GUO077 in your catalog?', a: 'In every specification we could verify, it isn\'t meaningfully different — both are 20-ton machines from the same manufacturer (GCM) with matching weight, cycle time, and log capacity. We disclose this directly rather than presenting them as a meaningful choice; if you want a genuinely different machine, compare the YARDMAX YU3266 instead.' },
    ],
    alternativeId: 'yardmax-32-ton-cr950',
    alternativeNote: 'The YARDMAX YU3266 offers substantially more tonnage (32T vs. 20T), horizontal/vertical operation, and a confirmed road-tow rating this model doesn\'t have — a genuinely different machine and a more meaningful comparison than the SuperHandy GUO077, which shares nearly identical specs with this product.',
  },
  'yardmax-32-ton-cr950': {
    verdict: 'A 32-ton gas splitter built for higher-volume rural use, with horizontal/vertical operation and a confirmed road-towing rating.',
    bestFor: 'Rural property owners processing several cords a year who need to tow the machine between sites or split large rounds vertically.',
    notIdealFor: 'Anyone who wants to avoid small-engine maintenance, needs a quiet machine, or doesn\'t need this much tonnage.',
    strengths: [
      'Confirmed towable to 45 mph with a 2-inch ball hitch, per manufacturer sourcing',
      '32 tons of force from a Briggs & Stratton CR950 engine, handling logs up to 26 in. long',
      'Horizontal/vertical operation for large rounds you don\'t want to lift onto a beam',
    ],
    limitations: [
      'Gas engine requires periodic oil changes and off-season fuel stabilization',
      '524.7 lb unit weight — large and heavy compared to the other gas models in our catalog',
      '15.3-second cycle time is slower than either 20-ton gas model in our catalog',
    ],
    workload: 'Suited to rural property owners processing multiple cords a year who need to move the machine between sites or handle large-diameter rounds.',
    cycleTimeNote: 'A 15.3-second cycle time, per manufacturer sourcing, is slower than the two 20-ton gas models in our catalog (7.5 seconds each) — this model\'s larger 32-ton rating, vertical operation, and confirmed towing may matter more for some buyers.',
    logSizeNote: 'Rated for logs up to 26 in. long, per manufacturer sourcing — the longest capacity in our current catalog. A specific maximum diameter is not published, so it\'s left unset here.',
    portabilityNote: 'A tow-ready wheel setup and a 2-inch ball hitch coupler make this a confirmed towable machine, rated to 45 mph per manufacturer sourcing — confirm your tow vehicle and trailer hitch are rated accordingly before towing on public roads.',
    setupStorageNote: 'Requires assembly of the tow tongue and wheel hardware on first setup, per standard practice for towable splitters. For storage, retract the ram fully and, if storing over winter, stabilize or drain fuel per the engine manufacturer\'s guidance.',
    noiseElectricalNote: 'As a gas splitter, expect engine noise and exhaust — plan to operate it away from windows or close neighbors. No electrical hookup is needed.',
    usability: 'Patent-pending U-beam frame and a 14 GPM pump with a 4.5 in. bore / 24 in. stroke cylinder, per manufacturer sourcing. "2-Way" in the product name describes the splitting wedge, not the horizontal/vertical operating capability, which is a separate, independently confirmed feature.',
    maintenance: 'Follow the Briggs & Stratton CR950 engine manual for oil type/interval and hydraulic fluid level checks. Inspect the tow hitch and tires before transporting.',
    whoShouldBuy: 'Choose this model if you need to move a splitter between work sites on a rural property, split large rounds vertically, or process enough wood that 32 tons of force and a 2-year warranty matter more than a faster cycle time.',
    whoShouldChooseOther: 'If cycle time or a lighter, more portable unit matters more than towing capability or vertical operation, the Landworks GUO079 (or the nearly-identical SuperHandy GUO077) are real alternatives at a lower, 20-ton tonnage.',
    faq: [
      { q: 'Can the YARDMAX YU3266 be towed on the highway?', a: 'Manufacturer sourcing rates this model\'s wheels and hitch for towing up to 45 mph, but always confirm your specific trailer/hitch setup and local towing regulations before highway use.' },
      { q: 'What does "2-Way" mean in the product name?', a: 'It describes the splitting wedge, which splits a log into two pieces — it isn\'t a description of horizontal/vertical operation. This model does support both horizontal and vertical splitting, confirmed separately by the manufacturer.' },
    ],
    alternativeId: 'landworks-guo079',
    alternativeNote: 'Compared to the Landworks GUO079, this YARDMAX model offers far more tonnage (32T vs. 20T), vertical operation, and a confirmed tow rating, but at a slower cycle time (15.3s vs. 7.5s) and a much heavier unit — worth weighing against how much you split and whether you need to tow it.',
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
