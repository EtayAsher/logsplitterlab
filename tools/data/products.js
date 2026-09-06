// Verified product data — the single source of truth for the product
// catalog. Read this file's header fully before editing.
//
// EVERY spec field must be traceable to sourceUrls on that record. If a
// value can't be confirmed, set it to `null` and leave it out of public
// display rather than guessing or showing "Unknown". Never merge specs
// across different model numbers in the same product family. See
// README.md "Verification rules" before editing.
//
// This file intentionally does NOT store Amazon ratings, review counts,
// "Best Seller" badges, prices, or stock/availability status — those
// change constantly and are not published as permanent site content (see
// tools/pages/review.js and components.js, which never render them).
// `asin`/`amazonUrl` are stored only as internal reference for the future
// affiliate-link integration step — they are not displayed as live
// purchase/availability claims by themselves.
//
// Affiliate URLs live separately in tools/data/affiliate-links.js, keyed
// by `id` below — that's the only place a commercial link is configured.
//
// Catalog history: the original 4-product catalog (Champion 100424,
// WEN 56207, YARDMAX YU2566, Boss Industrial ES7T20) was replaced
// 2026-07-26 after all four were confirmed unavailable or discontinued on
// Amazon.com. A second pass on 2026-07-27 replaced BILT HARD 6.5-Ton and
// Champion 100250 with SuperHandy GUO084 and SuperHandy GUO096. A third
// pass, also 2026-07-27, replaced WEN 56208 and both SuperHandy entries
// with the owner-supplied final catalog verified against live Amazon
// listings resolved from owner-provided Amazon Associates links: YARDMAX
// YS0650, SuperHandy GUO077, and YARDMAX YU3266 (Landworks GUO079 carried
// over unchanged). See `removedProducts` for why each prior entry left.
// Note: SuperHandy GUO077 (this catalog) and Landworks GUO079 were
// verified to be near-identical in specification — same 20-ton rating,
// weight, cycle time, and log capacity, both manufactured by GCM — and
// were kept as separate catalog entries as an explicit, disclosed owner
// decision rather than a verification pass. See both entries' notes.
//
// 2026-09-04: BILT HARD TLA-0101 added as the catalog's 5th product — a
// manually owner-selected Amazon listing (resolved to ASIN B09B75R66Q),
// independently re-verified from scratch against the manufacturer's own
// product page and the live Amazon listing per REVIEW_STANDARD.md before
// adding. The site's second electric model, alongside YARDMAX YS0650.
//
// 2026-09-06: three more owner-selected products added (6th-8th):
// PROYAMA 7-Ton (Cross Wedge), VEVOR ELS106S 6.5-Ton, and SuperHandy
// GUO084 14-Ton. GUO084 was described by the owner as "SuperHandy 14-Ton"
// without a stated power source; independent verification confirmed it is
// ELECTRIC (previously live under the same ASIN — see `removedProducts`),
// a genuinely distinct product from SuperHandy GUO077 (20-ton GAS)
// elsewhere in this catalog, not a variant of it. The catalog now spans
// 5 electric models (YS0650, TLA-0101, PROYAMA, VEVOR, GUO084) and 3 gas
// models (GUO077, GUO079, YU3266).
'use strict';

module.exports = [
  {
    id: 'yardmax-ys0650',
    brand: 'YARDMAX',
    name: 'YARDMAX YS0650 6.5-Ton Electric Log Splitter',
    model: 'YS0650',
    asin: 'B0BL8ZW228',
    amazonUrl: 'https://www.amazon.com/dp/B0BL8ZW228',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 6.5,
    engine: '120V, 15A electric motor',
    cycleTimeSeconds: 19,
    maxLogLengthIn: 20.5,
    maxLogDiameterIn: 10,
    maxLogWeightLb: 105, // unit weight (47.5 kg per Amazon's own product information table), not a rated max log weight
    orientation: 'Horizontal',
    towable: false,
    warranty: '2 years (YARDMAX\'s standard equipment warranty; not confirmed as model-specific)',
    verifiedDate: '2026-07-27',
    sourceUrls: [
      'https://www.amazon.com/dp/B0BL8ZW228',
      'https://yardmax.com/product/ys0650-electric-log-splitter-copy/',
      'https://www.homedepot.com/p/YARDMAX-6-5-Ton-15-Amp-Horizontal-Electric-Log-Splitter-YS0650/323678117',
      'https://yardmax.com/yardmax-support/warranty/',
    ],
    notes: 'A second, separate ASIN (B0CRZCMTDF) also carries the "YARDMAX YS0650 6.5 Ton Electric Log Splitter" title on Amazon; the ASIN in this entry (B0BL8ZW228) is the one confirmed live via the owner\'s verified Amazon Associates link, with its own dedicated customer-reviews page and a matching model number (YS0650) on Amazon\'s own product information table. Warranty is YARDMAX\'s general "2 year" equipment warranty as published on their support site — not confirmed as specific to this model, so treat it as directional rather than guaranteed.',
    suitableUseSummary: 'Light-to-moderate splitting of softer wood within reach of a garage or shed outlet.',
    limitationsSummary: 'Not rated for very dense hardwood or logs longer than 20.5 in. / thicker than 10 in.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-yardmax.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter, labeled YARDMAX',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual YARDMAX YS0650.',
  },
  {
    id: 'superhandy-20-ton',
    brand: 'SuperHandy',
    name: 'SuperHandy 20-Ton Rapid Auto Return Gas Log Splitter',
    model: 'GUO077',
    asin: 'B092RMY8ZT',
    amazonUrl: 'https://www.amazon.com/dp/B092RMY8ZT',
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 20,
    engine: 'AlphaWorks 7HP, 209cc gas engine',
    cycleTimeSeconds: 7.5,
    maxLogLengthIn: 20,
    maxLogDiameterIn: 16,
    maxLogWeightLb: 153, // unit weight (69.4 kg per Amazon's own product information table), not a rated max log weight
    orientation: 'Horizontal',
    towable: false, // 10 in. wheels, explicitly described as not road-towable in retailer sourcing
    warranty: '1 year, limited (parts); engine warranty handled separately by AlphaWorks',
    verifiedDate: '2026-07-27',
    sourceUrls: [
      'https://www.amazon.com/dp/B092RMY8ZT',
      'https://www.lowes.com/pd/SuperHandy-20-Ton-Gas-Log-Splitter-20-Ton-209-cc-Horizontal-Gas-Log-Splitter-with-Alphaworks-Engine/5014239533',
      'https://www.woodsplitterdirect.com/products/superhandy-portable-20-ton-7hp-gas-powered-log-splitter-guo077',
    ],
    notes: 'IMPORTANT — disclosed owner decision, not a uniqueness pass: this model is verified to be near-identical in specification to the Landworks GUO079 elsewhere in this catalog — same 20-ton rating, same 7HP/209cc engine class, same 2-stage Bucher gear pump, same 7.5-second cycle time, and the same 20 in. length / 16 in. diameter log capacity. Both are manufactured by GCM (Great Circle Machinery), confirmed on each product\'s own Amazon listing. Model codes are two apart in the same "GUO0xx" numbering scheme. The owner reviewed this finding directly and chose to keep both as separate catalog entries — each has its own distinct ASIN, Amazon listing, and affiliate link — rather than treat this as a verification failure, with the explicit intent to revisit after the site has real traffic data. Do not present these two products to readers as meaningfully different machines beyond brand.',
    suitableUseSummary: 'Mid-volume gas splitting where portability around a property matters more than towing on public roads.',
    limitationsSummary: 'No confirmed tow-hitch rating for road use, and hydraulic fluid is not included in the box.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-superhandy.svg',
    imageAlt: 'Illustration of a generic portable gas-powered log splitter, labeled SuperHandy',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual SuperHandy GUO077.',
  },
  {
    id: 'landworks-guo079',
    brand: 'Landworks',
    name: 'Landworks 20-Ton Portable Gas Log Splitter',
    model: 'GUO079',
    asin: 'B099BCVFP9',
    amazonUrl: 'https://www.amazon.com/dp/B099BCVFP9',
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 20,
    engine: 'AlphaWorks 7HP, 209cc gas engine',
    cycleTimeSeconds: 7.5,
    maxLogLengthIn: 20,
    maxLogDiameterIn: 16,
    maxLogWeightLb: 130, // unit weight, not a rated max log weight — see notes
    orientation: 'Horizontal',
    towable: false, // portable via integrated wheels; no tow hitch confirmed
    warranty: '1 year, manufacturer',
    verifiedDate: '2026-07-26',
    sourceUrls: [
      'https://www.amazon.com/dp/B099BCVFP9',
      'https://www.lowes.com/pd/Landworks-Landworks-Gas-Powered-Hydraulic-Log-Splitter/5014220571',
      'https://www.tractorsupply.com/tsc/product/landworks-gas-powered-hydraulic-log-splitter-tri-guo079',
    ],
    notes: 'Also listed under the SKU prefix "TRI-GUO079" at some retailers (Tractor Supply, Lowe\'s); "GUO079" is the core model code used consistently across manufacturer and retailer listings. The 130 lb figure is the unit\'s own shipping/assembled weight, not a maximum log weight rating — no maximum log weight is officially published, so that field is left unset. Portable via 10 in. transport wheels; no vehicle tow hitch is specified. IMPORTANT — disclosed owner decision: manufactured by GCM (Great Circle Machinery), confirmed on Amazon\'s own listing — the same manufacturer as the SuperHandy 20-Ton (GUO077) elsewhere in this catalog, and near-identical to it in every published spec (same tonnage, weight, cycle time, and log capacity). See that entry\'s notes for the full disclosure; the owner reviewed this directly and chose to keep both.',
    suitableUseSummary: 'Mid-volume gas splitting where portability around a property matters more than towing on public roads.',
    limitationsSummary: 'No confirmed tow-hitch rating for road use, and hydraulic fluid is not included in the box.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-landworks.svg',
    imageAlt: 'Illustration of a generic towable gas-powered log splitter, labeled Landworks',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual Landworks GUO079.',
  },
  {
    id: 'yardmax-32-ton-cr950',
    brand: 'YARDMAX',
    name: 'YARDMAX 32-Ton Gas Log Splitter',
    model: 'YU3266',
    asin: 'B0BVRR9TR1',
    amazonUrl: 'https://www.amazon.com/dp/B0BVRR9TR1',
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 32,
    engine: 'Briggs & Stratton CR950 gas engine',
    cycleTimeSeconds: 15.3,
    maxLogLengthIn: 26,
    maxLogWeightLb: 524.7, // unit weight, per Amazon's own product information table — not a rated max log weight
    orientation: 'Horizontal / Vertical',
    towable: true, // 2 in. ball hitch coupler, rated to 45 mph per manufacturer sourcing
    warranty: '2 years, manufacturer',
    verifiedDate: '2026-07-27',
    sourceUrls: [
      'https://www.amazon.com/dp/B0BVRR9TR1',
      'https://yardmax.com/product/yu3266-yardmax-gas-log-splitter-32-ton-2-way-full-beam-briggs-stratton-engine-cr950/',
      'https://www.tractorsupply.com/tsc/product/yardmax-gas-log-splitter-32-ton-2-way-full-beam-briggs-stratton-engine-cr950-yu3266-',
    ],
    notes: 'Replaces the earlier Champion 100250 (37-ton) and SuperHandy GUO096 (25-ton) entries from prior catalog passes. Model number (YU3266) and ASIN confirmed directly on Amazon\'s own product information table (title also explicitly states "32 טון" i.e. 32-ton on the live listing) — one third-party aggregator search snippet mislabeled this as "30 Ton," but the live product page itself is unambiguous. "2-Way" in the marketing name describes the wedge (splits a log into two pieces), not the operating orientation — horizontal/vertical operation is a separate, independently confirmed capability per the manufacturer.',
    suitableUseSummary: 'Higher-volume gas splitting for rural properties, with a confirmed road-towing rating.',
    limitationsSummary: 'Large, heavy machine (524.7 lb) with routine small-engine maintenance — more than most occasional users need.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-yardmax.svg',
    imageAlt: 'Illustration of a generic towable gas-powered log splitter, labeled YARDMAX',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual YARDMAX YU3266.',
  },
  {
    id: 'bilthard-tla-0101',
    brand: 'BILT HARD',
    name: 'BILT HARD TLA-0101 6.5-Ton Electric Log Splitter',
    model: 'TLA-0101',
    asin: 'B09B75R66Q',
    amazonUrl: 'https://www.amazon.com/dp/B09B75R66Q',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 6.5,
    engine: '120V, 15A, 1-3/4HP electric motor (up to 3,400 RPM)',
    cycleTimeSeconds: 18,
    maxLogLengthIn: 20.5,
    maxLogDiameterIn: 9.8,
    maxLogWeightLb: 98, // unit weight, per the manufacturer, not a rated max log weight
    orientation: 'Horizontal',
    towable: false,
    warranty: '90 days, limited (materials and workmanship), per the manufacturer',
    verifiedDate: '2026-09-04',
    sourceUrls: [
      'https://www.amazon.com/dp/B09B75R66Q',
      'https://bilthardusa.com/products/bilt-hard-log-splitter-6-5-ton-wood-splitter-electric-powered-15amp-with-hydraulic-ram-electric-firewood-splitting-machine',
    ],
    notes: 'Owner-selected listing: resolved from the owner-supplied SiteStripe short link https://amzn.to/46qaksZ, which carries the site\'s own confirmed-active Associates tag (logsplitterla-20) — confirming this is a genuine, owner-generated link, not a guess. ASIN B09B75R66Q confirmed directly on the live Amazon listing (title "BILT HARD Log Splitter 6.5 Ton, Wood Splitter Electric Powered 15Amp, with Hydraulic Ram, Electric Firewood Splitting Machine, Horizontal") and cross-checked against the manufacturer\'s own product page, with no spec conflicts found. IMPORTANT — variant trap avoided: this model (TLA-0101) ships WITHOUT a stand; BILT HARD sells a separate stand-equipped variant (TLA-0102) as a distinct product/SKU — do not conflate the two or assume this listing includes a stand. Warranty (90 days) is meaningfully shorter than the 2-year warranty on the YARDMAX YS0650 elsewhere in this catalog — a real, verified difference, not a marketing distinction. Overall product dimensions (36.4"L x 10.4"W x 18.3"H) and hydraulic oil capacity (3.5L) are manufacturer-stated; Amazon\'s own live product-information table could not be fully rendered by available research tools this pass, so those two figures rely on the manufacturer source alone rather than a second independent confirmation — flagged for a lower-confidence note, not omitted, since the manufacturer source is a genuine Tier 1 source and no conflicting figure was found anywhere else.',
    suitableUseSummary: 'Light-to-moderate splitting of softer-to-medium wood within reach of a garage or shed outlet, in a compact ground-level unit without an included stand.',
    limitationsSummary: 'Ships without a stand and carries a 90-day warranty — notably shorter than the other electric model in our catalog; not rated for very dense hardwood or logs longer than 20.5 in. / thicker than 9.8 in.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-bilthard.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter, labeled BILT HARD',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual BILT HARD TLA-0101.',
  },
  {
    id: 'proyama-7-ton',
    brand: 'PROYAMA',
    name: 'PROYAMA 7-Ton Electric Log Splitter with Cross Wedge',
    model: '7-Ton Cross Wedge', // PROYAMA does not publish a distinct alphanumeric model number for this listing beyond its ASIN — see notes
    asin: 'B0CGDHY345',
    amazonUrl: 'https://www.amazon.com/dp/B0CGDHY345',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 7,
    engine: '120V, 15A electric motor',
    orientation: 'Horizontal',
    towable: false,
    verifiedDate: '2026-09-06',
    sourceUrls: [
      'https://www.amazon.com/dp/B0CGDHY345',
      'https://proyamapower.com/',
    ],
    notes: 'Owner-selected listing: resolved from https://amzn.to/4A2Y3bu, which carries the site\'s confirmed-active Associates tag (logsplitterla-20). ASIN B0CGDHY345 confirmed directly on the live Amazon listing, whose own title states "PROYAMA 7T Electric Log Splitter, 15A Motor Wood Splitter with Cross Wedge" (fetched independently twice, consistent both times). IMPORTANT — unresolved tonnage-labeling conflict, disclosed rather than silently resolved: multiple third-party sources (aggregators, PROYAMA\'s own indexed product pages, a device-manual index) describe an apparently near-identical PROYAMA electric splitter — same 15A motor class, same "Cross Wedge" branding, same general design — rated at 6.5 tons with 10 in. diameter / 20.5 in. length capacity, under different ASINs (e.g. B0CGDJR66D, B0FW4BPH43). This site treats the live Amazon listing\'s own title (7 tons) as authoritative for THIS specific ASIN per our source-hierarchy rules, since it is the exact, directly-verified destination of the owner-selected link — but per this project\'s "never copy specs from a similar model" rule, the 6.5-ton sibling\'s detailed log-capacity/weight/cycle-time figures are NOT assumed to apply to this 7-ton-labeled listing and are left unconfirmed here rather than carried over. PROYAMA\'s own manufacturer site (proyamapower.com) lists a generic "Woodsplitting Machine Series" without a page specifically matching this ASIN\'s exact tonnage claim. Log diameter, log length, cycle time, weight, and warranty are left unset for this reason — mark as Unknown rather than guessed. The Cross Wedge itself (splits one log into four pieces per stroke, versus the standard two-piece wedge on every other product in this catalog) is a genuine, verifiable structural difference confirmed directly in the product title/listing.',
    suitableUseSummary: 'Light splitting of softer wood where the four-way Cross Wedge — a genuinely different mechanism from every other splitter in our catalog — is the main draw, within reach of a garage or shed outlet.',
    limitationsSummary: 'Log diameter, length, cycle time, and weight could not be confirmed for this specific listing due to a tonnage-labeling conflict with a closely related PROYAMA model — see source notes before assuming any capacity figure.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-proyama.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter with a four-way cross wedge, labeled PROYAMA',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual PROYAMA 7-Ton Cross Wedge splitter.',
  },
  {
    id: 'vevor-els106s',
    brand: 'VEVOR',
    name: 'VEVOR ELS106S 6.5-Ton Electric Log Splitter',
    model: 'ELS106S',
    asin: 'B0FMPRC1BH',
    amazonUrl: 'https://www.amazon.com/dp/B0FMPRC1BH',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 6.5,
    engine: '120V, 15A, 1500W electric motor (up to 3,400 RPM)',
    maxLogLengthIn: 20,
    maxLogDiameterIn: 9.8,
    maxLogWeightLb: 99, // unit weight (99.21 lb / 45 kg per the manufacturer), not a rated max log weight
    orientation: 'Horizontal',
    towable: false,
    warranty: '1 year (VEVOR\'s general warranty policy; not confirmed as model-specific)',
    verifiedDate: '2026-09-06',
    sourceUrls: [
      'https://www.amazon.com/dp/B0FMPRC1BH',
      'https://www.vevor.com/firewood-splitter-c_11887/vevor-electric-log-splitter-1500w-15-amp-motor-6-5-tons-wood-splitting-machine-p_010304222193',
      'https://www.vevor.com/pages/return-policy',
    ],
    notes: 'Owner-selected listing: resolved from https://amzn.to/4cwKV47, which carries the site\'s confirmed-active Associates tag (logsplitterla-20). ASIN B0FMPRC1BH and model ELS106S confirmed directly on VEVOR\'s own manufacturer site, matching the live Amazon listing\'s title and specs with no conflicts found. VEVOR specifies a maximum extension cord length of 50 ft. with a minimum 3.3 mm² cross-section — a specific, model-published figure worth citing directly rather than the generic cord guidance given for other products. Cycle time is not published by the manufacturer for this model and is left unset rather than estimated. Warranty is VEVOR\'s general sitewide 12-month policy, not confirmed as specific to this model.',
    suitableUseSummary: 'Light-to-moderate splitting of softer-to-medium wood within reach of a garage or shed outlet, in a compact unit with a manufacturer-specified extension-cord limit worth checking before buying a cord.',
    limitationsSummary: 'Not rated for very dense hardwood or logs longer than 20 in. / thicker than 9.8 in.; cycle time is not published by the manufacturer.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-vevor.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter, labeled VEVOR',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual VEVOR ELS106S.',
  },
  {
    id: 'superhandy-14-ton',
    brand: 'SuperHandy',
    name: 'SuperHandy GUO084 14-Ton Electric Log Splitter',
    model: 'GUO084',
    asin: 'B09GW8FRXX',
    amazonUrl: 'https://www.amazon.com/dp/B09GW8FRXX',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 14,
    engine: '120V, 15A, 1800W electric motor',
    cycleTimeSeconds: 16,
    maxLogLengthIn: 20,
    maxLogDiameterIn: 16,
    maxLogWeightLb: 126, // unit weight, per cross-referenced retailer spec data, not a rated max log weight
    orientation: 'Horizontal',
    towable: false,
    verifiedDate: '2026-09-06',
    sourceUrls: [
      'https://www.amazon.com/dp/B09GW8FRXX',
      'https://superhandyus.com/products/superhandy-log-splitter-guo084',
    ],
    notes: 'Owner-selected listing: resolved from https://amzn.to/4qZeAci, which carries the site\'s confirmed-active Associates tag (logsplitterla-20). IMPORTANT — power-source finding: this listing was described by the owner as "SuperHandy 14-Ton Log Splitter" without a specified power source; independent verification confirms it is ELECTRIC (120V corded, 1800W motor, per SuperHandy\'s own product page), not gas. This is a genuinely distinct product from SuperHandy GUO077 (20-ton GAS) elsewhere in this catalog — different model number, different power source, different tonnage — not a variant or rebadge of it. Both GUO077 and GUO084 are described as using a Bucher-brand hydraulic pump, an observed shared-component detail worth noting but not evidence the two are the same manufacturing relationship GUO077 has with Landworks GUO079. Cycle time (16s per the manufacturer; a 16.5s figure appears on some retailer cross-checks, treated as the same figure rounded differently, not a conflict). Max log diameter, weight, hydraulic pump GPM (10 GPM, 2-stage), fluid capacity (2.1 gal / 8L, AW32/AW46), and cylinder stroke (16 in.) are cross-referenced from multiple independent retailer listings (Lowe\'s, Tractor Supply) that agree with each other and with the manufacturer\'s confirmed model/tonnage/motor/cycle/length — no conflicts found, though the manufacturer\'s own page did not itself display every one of these figures directly. Warranty term could not be confirmed for this specific model and is left unset rather than copied from another SuperHandy product.',
    suitableUseSummary: 'The highest-capacity electric splitter in our catalog (14 tons, 16 in. diameter) for homeowners who want more force than a 6.5-ton electric unit without moving to gas.',
    limitationsSummary: 'Warranty term not confirmed for this specific model; still tied to a power outlet and an appropriately rated extension cord despite the higher tonnage.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-superhandy.svg',
    imageAlt: 'Illustration of a generic electric log splitter with a longer beam, labeled SuperHandy',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual SuperHandy GUO084.',
  },
];

// Products that were part of a previous catalog and were REMOVED because
// they were confirmed unavailable/discontinued on Amazon.com as of the
// verification date below. Kept here only as an editorial record — do not
// republish without re-verifying current availability from scratch.
module.exports.removedProducts = [
  {
    name: 'Champion 27-Ton Log Splitter (Model 100424)',
    status: 'unavailable',
    reason: 'The 27-ton variant of the associated Amazon listing shows no purchasable price while sibling 37-ton/40-ton variants of the same listing do — effectively unavailable. Replaced by Champion 100250 (37-ton), confirmed active.',
    removedDate: '2026-07-26',
  },
  {
    name: 'WEN 56207 6.5-Ton Electric Log Splitter',
    status: 'discontinued',
    reason: 'Amazon listing explicitly states "Currently unavailable — we don\'t know when or if this item will be back in stock." Replaced by its direct successor, WEN 56208.',
    removedDate: '2026-07-26',
  },
  {
    name: 'YARDMAX 25-Ton Full Beam Gas Log Splitter (YU2566)',
    status: 'discontinued',
    reason: 'The ASIN previously associated with this model now belongs to a different YARDMAX product entirely (YU3566, 35-ton), which is itself shown as unavailable. Replaced by Landworks GUO079 (20-ton).',
    removedDate: '2026-07-26',
  },
  {
    name: 'Boss Industrial 7-Ton Electric Log Splitter (ES7T20)',
    status: 'discontinued',
    reason: 'Amazon listing explicitly shows "Currently unavailable" for the 7-ton electric style option. Replaced by BILT HARD 6.5-Ton Electric Log Splitter.',
    removedDate: '2026-07-26',
  },
  {
    name: 'BILT HARD 6.5-Ton Electric Log Splitter (Model TLA-0101)',
    status: 'superseded',
    reason: 'Not discontinued or unavailable — this listing was directly re-verified live, in stock, and well-reviewed (1,197 ratings, 4.6 stars) during a 2026-07-27 catalog audit. Removed anyway because the catalog was restructured into four distinct tiers (budget electric / premium electric / portable gas / heavy-duty gas); WEN 56208 already fills the budget-electric tier at the same 6.5-ton rating, so keeping both would have meant two near-identical electric options rather than genuine buyer choice. Replaced by SuperHandy GUO084 (14-ton), a meaningfully higher-capacity electric option.',
    removedDate: '2026-07-27',
  },
  {
    name: 'Champion 37-Ton Full Beam Log Splitter (Model 100250)',
    status: 'unverifiable',
    reason: 'Removed after a second verification pass found: its Amazon listing (ASIN B0CVNQB6LN) resolves to a URL slug referencing an unrelated Champion model number (201314); a second, separate ASIN (B017LMYLG8) exists for a product marketed under the same "37-Ton Full Beam" name with inconsistent secondary specs; and Champion\'s own current website does not list model 100250 among its active log splitter lineup. No single one of these is conclusive, but together they fell short of this site\'s verification bar. Replaced by SuperHandy GUO096 (25-ton), whose model number and specifications were confirmed to match exactly between Amazon\'s own product page and the manufacturer\'s official site.',
    removedDate: '2026-07-27',
  },
  {
    name: 'WEN 56208 6.5-Ton Electric Log Splitter',
    status: 'superseded',
    reason: 'Not discontinued or unavailable — this listing was live, in stock, and well-reviewed (668 ratings, 4.6 stars, #1 Best Seller) as of the last check. Replaced 2026-07-27 when the owner supplied a final, verified 4-product catalog built from owner-provided Amazon Associates links; YARDMAX YS0650 fills the same budget-electric tier in that catalog.',
    removedDate: '2026-07-27',
  },
  {
    name: 'SuperHandy GUO084 (14-Ton Electric Log Splitter)',
    status: 'superseded',
    reason: 'Not discontinued or unavailable — this listing was live and verified. Replaced 2026-07-27 as part of the owner-supplied final catalog, which does not include a premium-electric tier.',
    removedDate: '2026-07-27',
  },
  {
    name: 'SuperHandy GUO096 (25-Ton Gas Log Splitter)',
    status: 'superseded',
    reason: 'Not discontinued or unavailable — this listing was live and verified (its unit weight could not be confirmed from conflicting sources, but its model number and core specs matched the manufacturer\'s official page). Replaced 2026-07-27 by YARDMAX YU3266 (32-ton) in the owner-supplied final catalog\'s heavy-duty-gas slot.',
    removedDate: '2026-07-27',
  },
  // Retained from the prior catalog rebuild for continuity of record:
  {
    name: 'Husqvarna S461',
    status: 'uncertain',
    reason: 'No model named "S461" could be found from Husqvarna. Husqvarna\'s actual log splitter line is the gas-powered S427 (27-ton, Kohler engine). Removed rather than guessed.',
  },
  {
    name: 'Iron & Oak TR22',
    status: 'uncertain',
    reason: 'No model named "TR22" could be found from Iron & Oak. Their commercial splitters use "BHVH"-prefixed model codes. Removed rather than guessed.',
  },
];
