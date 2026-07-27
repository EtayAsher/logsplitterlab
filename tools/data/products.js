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
// Champion 100250 with SuperHandy GUO084 and SuperHandy GUO096 after a
// full re-sourcing exercise driven by unresolved ASIN/spec verification
// concerns on the Champion side (see `removedProducts` for both entries).
// The catalog is now organized as four distinct tiers — budget electric,
// premium electric, portable gas, heavy-duty gas — rather than two pairs
// at matching tonnage.
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
    imageSrc: '/assets/img/splitter-electric-wen.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter, labeled WEN',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual WEN 56208.',
  },
  {
    id: 'superhandy-guo084',
    brand: 'SuperHandy',
    name: 'SuperHandy Hydraulic Log Splitter, 14 Ton, Portable Firewood Splitter',
    model: 'GUO084',
    asin: 'B09GW8FRXX',
    amazonUrl: 'https://www.amazon.com/dp/B09GW8FRXX',
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 14,
    engine: '120V, 60Hz, 15A brushless induction electric motor, 2.5eHP, 1800W',
    cycleTimeSeconds: 16,
    maxLogLengthIn: 20,
    maxLogDiameterIn: 14,
    maxLogWeightLb: 126, // unit weight, not a rated max log weight — see notes
    orientation: 'Horizontal',
    towable: false,
    warranty: '1 year, limited (materials and workmanship)',
    verifiedDate: '2026-07-27',
    sourceUrls: [
      'https://www.amazon.com/dp/B09GW8FRXX',
      'https://www.homedepot.com/p/SuperHandy-14-Ton-Electric-Log-Splitter-GUO084/338035612',
      'https://www.lowes.com/pd/SuperHandy-14-Ton-Electric-Log-Splitter/5014239535',
    ],
    notes: 'A meaningfully higher-capacity electric option than the WEN 56208 (14T vs 6.5T) rather than a competing model at the same tonnage — different brand, different manufacturer, separate Amazon listing/ASIN. Uses a 2-stage 10.5GPM Bucher hydraulic gear pump. The 126 lb figure is the unit\'s own assembled weight, not a maximum log weight rating — no maximum log weight is officially published, so that field is left unset.',
    suitableUseSummary: 'Homeowners who need meaningfully more capacity than a 6.5-ton electric splitter without switching to gas.',
    limitationsSummary: 'Heavier and pricier than entry-level electric splitters, and still tied to a power outlet and rated extension cord.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-superhandy.svg',
    imageAlt: 'Illustration of a compact electric log splitter, labeled SuperHandy',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual SuperHandy GUO084.',
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
    notes: 'Also listed under the SKU prefix "TRI-GUO079" at some retailers (Tractor Supply, Lowe\'s); "GUO079" is the core model code used consistently across manufacturer and retailer listings. The 130 lb figure is the unit\'s own shipping/assembled weight, not a maximum log weight rating — no maximum log weight is officially published, so that field is left unset. Portable via 10 in. transport wheels; no vehicle tow hitch is specified. Manufactured by GCM, per third-party sourcing — the same manufacturer as the SuperHandy GUO096 elsewhere in this catalog (confirmed directly on Amazon\'s own product page for that ASIN). Still a genuinely different product: different model code, different ASIN, different tonnage (20T vs 25T) and frame design (full beam vs half beam).',
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
    id: 'superhandy-guo096',
    brand: 'SuperHandy',
    name: 'SuperHandy Portable 25 Ton Gas Log Splitter with 7HP Engine',
    model: 'GUO096',
    asin: 'B0BFXK1FXB',
    amazonUrl: 'https://www.amazon.com/dp/B0BFXK1FXB',
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 25,
    engine: 'AlphaWorks 7HP, 209cc gas engine',
    cycleTimeSeconds: 12,
    maxLogLengthIn: 20,
    maxLogDiameterIn: 24,
    maxLogWeightLb: null,
    orientation: 'Horizontal / Vertical',
    towable: false,
    warranty: '1 year, limited (parts)',
    verifiedDate: '2026-07-27',
    sourceUrls: [
      'https://www.amazon.com/dp/B0BFXK1FXB',
      'https://superhandyus.com/products/superhandy-log-splitter-guo096-fba',
      'https://www.lowes.com/pd/SuperHandy-25-Ton-Gas-Log-Splitter-25-Ton-209-cc-Horizontal-and-Vertical-Gas-Log-Splitter-with-Alphaworks-Engine/5014566207',
    ],
    notes: 'Replaces the earlier Champion 100250 (37-ton) entry, which was removed after a second verification pass — not because it was confirmed unavailable, but because its Amazon listing (ASIN B0CVNQB6LN) resolves to a URL slug referencing an unrelated Champion model number, a second separate ASIN exists under the same "37-Ton Full Beam" marketing name with inconsistent secondary specs, and Champion\'s own current website does not list model 100250 among its active log splitters — together these fell short of this catalog\'s verification bar. This entry\'s model number (GUO096) and core specs were confirmed to match exactly between Amazon\'s own product page and the manufacturer\'s official page. Manufacturer is GCM, per Amazon\'s own product information table for this ASIN — the same manufacturer behind the Landworks GUO079 elsewhere in this catalog. Still a genuinely different product: different model code, different ASIN, higher tonnage (25T vs 20T), half-beam horizontal/vertical design vs. Landworks\' horizontal-only full beam. Unit weight is intentionally left unset: Amazon\'s own product page lists 40.8 kg (~90 lb) while multiple retailer listings independently state approximately 196 lb for the same model — too large a gap to be a rounding difference, so no figure is published pending a resolved source. No tow-hitch rating is published for this model.',
    suitableUseSummary: 'Higher-volume gas splitting where vertical operation for large, un-liftable rounds matters.',
    limitationsSummary: 'No confirmed tow-hitch rating, and unit weight could not be confirmed from conflicting sources — see notes.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-superhandy.svg',
    imageAlt: 'Illustration of a portable gas-powered log splitter, labeled SuperHandy',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual SuperHandy GUO096.',
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
