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
