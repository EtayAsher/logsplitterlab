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
// Amazon.com. See the `removedProducts` export below for that record.
'use strict';

module.exports = [
  {
    id: 'wen-56208',
    brand: 'WEN',
    name: 'WEN 56208 Electric Log Splitter',
    model: '56208',
    asin: 'B0B4KNQFTC',
    amazonUrl: 'https://www.amazon.com/dp/B0B4KNQFTC',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 6.5,
    engine: '120V, 60Hz, 15A electric motor, up to 3,574 RPM',
    cycleTimeSeconds: 20,
    maxLogLengthIn: 20.5,
    maxLogDiameterIn: 10,
    orientation: 'Horizontal',
    towable: false,
    warranty: null,
    verifiedDate: '2026-07-26',
    sourceUrls: [
      'https://www.amazon.com/dp/B0B4KNQFTC',
      'https://images.thdstatic.com/catalog/pdfImages/ee/ee4e5f5a-8e0a-46d9-a2ae-97b9874cd1fb.pdf',
      'https://wenproducts.com/products/wen-56208-6-5-ton-electric-log-splitter-with-stand',
    ],
    notes: 'Successor to the WEN 56207, which is confirmed discontinued/unavailable on Amazon as of 2026-07-26 ("Currently unavailable — we don\'t know when or if this item will be back in stock"). The 56208 is the model WEN and its retailers currently sell in this tonnage class; do not confuse it with 56207 specs from any older source.',
    suitableUseSummary: 'Light-to-moderate splitting of softer wood within reach of a garage or shed outlet.',
    limitationsSummary: 'Not rated for very dense hardwood or logs longer than 20.5 in. / thicker than 10 in.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-placeholder.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual WEN 56208.',
  },
  {
    id: 'bilt-hard-65ton',
    brand: 'BILT HARD',
    name: 'BILT HARD 6.5-Ton Electric Log Splitter',
    model: '6.5-Ton Electric Log Splitter', // BILT HARD does not publish a separate alphanumeric SKU distinct from this descriptive name, per the manufacturer's own site and every retailer listing checked.
    asin: 'B09B75R66Q',
    amazonUrl: 'https://www.amazon.com/dp/B09B75R66Q',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 6.5,
    engine: '120V, 60Hz, 15A electric motor, 1-3/4 HP, up to 3,400 RPM',
    cycleTimeSeconds: 18,
    maxLogLengthIn: 20.5,
    maxLogDiameterIn: 9.8,
    maxLogWeightLb: null,
    orientation: 'Horizontal',
    towable: false,
    warranty: '90 days, limited (materials and workmanship)',
    verifiedDate: '2026-07-26',
    sourceUrls: [
      'https://www.amazon.com/dp/B09B75R66Q',
      'https://bilthardusa.com/products/bilt-hard-log-splitter-6-5-ton-wood-splitter-electric-powered-15amp-with-hydraulic-ram-electric-firewood-splitting-machine',
      'https://www.lowes.com/pd/BILT-HARD-6-5-Ton-15-Amp-Horizontal-Electric-Log-Splitter-Wood-Splitter-with-Hydraulic-Ram/7142313',
    ],
    notes: 'A distinct product from the WEN 56208 — different brand, different manufacturer, separate Amazon listing/ASIN. Sold in two configurations ("6.5 Ton" and "6.5 Ton with Stand"); specs here apply to the base unit.',
    suitableUseSummary: 'Homeowners who want two-handed control and don\'t need a stand included by default.',
    limitationsSummary: 'Same tonnage ceiling as other 6.5-ton electric splitters — not for dense hardwood or oversized rounds.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-placeholder.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual BILT HARD 6.5-Ton Electric Log Splitter.',
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
    notes: 'Also listed under the SKU prefix "TRI-GUO079" at some retailers (Tractor Supply, Lowe\'s); "GUO079" is the core model code used consistently across manufacturer and retailer listings. The 130 lb figure is the unit\'s own shipping/assembled weight, not a maximum log weight rating — no maximum log weight is officially published, so that field is left unset. Portable via 10 in. transport wheels; no vehicle tow hitch is specified, unlike the Champion 100250.',
    suitableUseSummary: 'Mid-volume gas splitting where portability around a property matters more than towing on public roads.',
    limitationsSummary: 'No confirmed tow-hitch rating for road use, and hydraulic fluid is not included in the box.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-placeholder.svg',
    imageAlt: 'Illustration of a generic towable gas-powered log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual Landworks GUO079.',
  },
  {
    id: 'champion-100250',
    brand: 'Champion Power Equipment',
    name: 'Champion 37-Ton Full Beam Log Splitter',
    model: '100250',
    asin: 'B0CVNQB6LN',
    amazonUrl: 'https://www.amazon.com/dp/B0CVNQB6LN',
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 37,
    engine: '338cc Champion single-cylinder OHV engine',
    cycleTimeSeconds: 16,
    maxLogLengthIn: 24,
    maxLogWeightLb: 100,
    orientation: 'Horizontal / Vertical',
    towable: true,
    warranty: '2 years, limited, with free lifetime technical support',
    verifiedDate: '2026-07-26',
    sourceUrls: [
      'https://www.amazon.com/dp/B0CVNQB6LN',
      'https://www.championpowerequipment.com/wp-content/uploads/2017/08/100250-om-english.pdf',
      'https://www.lowes.com/pd/Champion-Power-Equipment-37-Ton-Gas-Log-Splitter/1000126585',
    ],
    notes: 'Replaces the earlier Champion 100424 (27-ton) entry, which is no longer confirmed available — the 27-ton variant of that Amazon listing shows no purchasable price while the 37-ton and 40-ton variants of the current listing do. Do not merge specs with 100424, 201312, 201518, or any other Champion model number; this entry is specific to model 100250. Towable to 45 mph per Champion\'s own operator manual — that manual states mph explicitly; a regional (Israel-facing) Amazon listing showed a "45 km/h" conversion that appears to be a localization error, so the manufacturer\'s own mph figure is used here.',
    suitableUseSummary: 'Higher-volume gas splitting for rural properties, with confirmed road-towing capability.',
    limitationsSummary: 'Large, heavy machine with routine small-engine maintenance — more than most occasional users need.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-placeholder.svg',
    imageAlt: 'Illustration of a generic towable gas-powered log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual Champion 100250.',
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
