// Verified product data — the single source of truth for the product
// catalog. Read this file's header fully before editing.
//
// EVERY spec field must be traceable to sourceUrls on that record. If a
// value can't be confirmed, set it to `null` and leave it out of public
// display rather than guessing or showing "Unknown". Never merge specs
// across different model numbers in the same product family (e.g. Champion
// sells several 27-ton models with different cycle times — they are not
// interchangeable). See README.md "Verification rules" before editing.
//
// Affiliate URLs live separately in tools/data/affiliate-links.js, keyed
// by `id` below — that's the only place a commercial link is configured.
//
// Field reference:
//   status              'active' | 'discontinued' | 'unavailable' | 'uncertain'
//   asin                Amazon ASIN, ONLY when confirmed by directly opening
//                        the product page and matching model number+tonnage.
//                        null if unconfirmed — do not guess from a search
//                        snippet or a differently-numbered sibling model.
//   imageMode           'authorized-amazon' | 'licensed-manufacturer' |
//                        'owner-uploaded' | 'generic-placeholder'
//   imageSrc            Path (relative to basePath) to the image asset.
//   imageAlt            Accessible alt text. For generic-placeholder this
//                        must NOT claim to depict the exact product.
//   imageSourceNote     One line explaining where the image came from —
//                        shown in code comments/README, not necessarily
//                        on-page, but must always be accurate.
//   suitableUseSummary  One sentence, for card-level display.
//   limitationsSummary  One sentence, for card-level display.
//   (Longer strengths/limitations/verdict copy lives in tools/pages/review.js.)
'use strict';

module.exports = [
  {
    id: 'champion-100424',
    brand: 'Champion Power Equipment',
    name: 'Champion 27-Ton Log Splitter',
    model: '100424',
    asin: null, // Champion sells several 27-ton model numbers on Amazon; a
                // direct page fetch could not confirm which ASIN maps to
                // 100424 specifically, so this is left unconfirmed rather
                // than guessed. See README "Verification rules."
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 27,
    engine: '224cc Champion single-cylinder OHV engine',
    cycleTimeSeconds: 11,
    maxLogLengthIn: 24,
    maxLogWeightLb: 100,
    orientation: 'Horizontal / Vertical',
    towable: true,
    warranty: null, // not confirmed from the sources below; left unpublished
    verifiedDate: '2026-07-20',
    sourceUrls: [
      'https://www.championpowerequipment.com/product/100424-27-ton-log-splitter/',
      'https://www.homedepot.com/p/Champion-Power-Equipment-27-Ton-224-cc-Gas-Powered-Hydraulic-Wood-Log-Splitter-w-Vertical-Horizontal-Operation-and-Auto-Return-with-Hydraulic-Oil-100424/302367049',
    ],
    notes: 'Champion sells several 27-ton model numbers (100424, 201312, 201518) with different cycle times. This entry covers model 100424 specifically — do not merge specs across model numbers.',
    suitableUseSummary: 'Rural properties that need to tow the splitter between sites and process several cords a year.',
    limitationsSummary: 'Gas engine needs routine maintenance, and it is louder than an electric alternative.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-placeholder.svg',
    imageAlt: 'Illustration of a generic towable gas-powered log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual Champion 100424.',
  },
  {
    id: 'wen-56207',
    brand: 'WEN',
    name: 'WEN 6.5-Ton Electric Log Splitter',
    model: '56207',
    asin: 'B074H739NS', // Confirmed 2026-07-20 by opening the Amazon listing
                        // directly: title and spec text both read "WEN 56207
                        // 6.5-Ton Electric Log Splitter".
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 6.5,
    engine: '120V, 15A, 2.55HP electric motor',
    cycleTimeSeconds: 20,
    maxLogLengthIn: 20.5,
    maxLogDiameterIn: 10,
    orientation: 'Horizontal',
    towable: false,
    warranty: null,
    verifiedDate: '2026-07-20',
    sourceUrls: [
      'https://d3gqasl9vmjfd8.cloudfront.net/79ce7645-dde4-4717-b5c5-5d352eecbfae.pdf',
      'https://www.amazon.com/WEN-56207-6-5-Ton-Electric-Splitter/dp/B074H739NS',
    ],
    notes: 'Corrected from an earlier draft of this site that listed this model at 7 tons. WEN’s own manual and retailer listings confirm 6.5 tons.',
    suitableUseSummary: 'Light-to-moderate splitting of softer wood within reach of a garage or shed outlet.',
    limitationsSummary: 'Not rated for very dense hardwood or logs longer than 20.5 in. / thicker than 10 in.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-placeholder.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual WEN 56207.',
  },
  {
    id: 'yardmax-yu2566',
    brand: 'YARDMAX',
    name: 'YARDMAX 25-Ton Full Beam Gas Log Splitter',
    model: 'YU2566',
    asin: null, // A candidate ASIN was found via search, but the product
                // page could not be loaded to confirm the model number
                // directly, so it is left unconfirmed. See README.
    status: 'active',
    type: 'gas',
    typeLabel: 'Gas',
    tonnage: 25,
    engine: 'Briggs & Stratton CR950, 208cc, 6.5HP',
    cycleTimeSeconds: 9.7,
    maxLogLengthIn: 26,
    orientation: 'Horizontal / Vertical',
    towable: true,
    warranty: null,
    verifiedDate: '2026-07-20',
    sourceUrls: [
      'https://yardmax.com/product/gas-powered-log-splitter-full-beam-25-ton/',
      'https://www.lowes.com/pd/YARDMAX-25-Ton-Full-Beam-Log-Splitter/1003002912',
    ],
    notes: null,
    suitableUseSummary: 'Higher-volume splitting where a faster cycle time meaningfully saves time.',
    limitationsSummary: 'Same routine gas-engine maintenance as any small engine.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-gas-placeholder.svg',
    imageAlt: 'Illustration of a generic towable gas-powered log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual YARDMAX YU2566.',
  },
  {
    id: 'boss-es7t20',
    brand: 'Boss Industrial',
    name: 'Boss Industrial 7-Ton Electric Log Splitter',
    model: 'ES7T20',
    asin: 'B00GNSCGIW', // Confirmed 2026-07-20 by opening the Amazon listing
                        // directly: canonical URL and meta description both
                        // read "ES7T20" and "7 Ton".
    status: 'active',
    type: 'electric',
    typeLabel: 'Electric',
    tonnage: 7,
    engine: '115V, 13.5A, 2HP electric motor',
    cycleTimeSeconds: 14,
    maxLogLengthIn: 20.5,
    maxLogDiameterIn: 10,
    orientation: 'Horizontal',
    towable: false,
    warranty: '2 years, including hydraulics',
    verifiedDate: '2026-07-20',
    sourceUrls: [
      'https://www.boss-industrial.com/products/7-ton-electric-log-splitter',
      'https://www.homedepot.com/p/Boss-Industrial-7-Ton-13-5-Amp-Horizontal-Electric-Log-Splitter-ES7T20/314455563',
    ],
    notes: null,
    suitableUseSummary: 'A single operator splitting moderate volumes at home, thanks to single-handed operation.',
    limitationsSummary: 'Its 13.5A draw is close to a standard 15A circuit\'s limit; not rated for large or very dense rounds.',
    imageMode: 'generic-placeholder',
    imageSrc: '/assets/img/splitter-electric-placeholder.svg',
    imageAlt: 'Illustration of a generic compact electric log splitter',
    imageWidth: 320,
    imageHeight: 220,
    imageSourceNote: 'Original illustration created for this site; does not depict the actual Boss Industrial ES7T20.',
  },
];

// Products that were referenced in an earlier draft of this site and were
// REMOVED because they could not be verified. Kept here only as an editorial
// record — do not republish without genuine sourcing.
module.exports.removedProducts = [
  {
    name: 'Husqvarna S461',
    status: 'uncertain',
    reason: 'No model named "S461" could be found from Husqvarna. Husqvarna’s actual log splitter line is the gas-powered S427 (27-ton, Kohler engine). The earlier draft described a 4-ton "manual" Husqvarna splitter, which does not match any findable Husqvarna product. Removed rather than guessed.',
  },
  {
    name: 'Iron & Oak TR22',
    status: 'uncertain',
    reason: 'No model named "TR22" could be found from Iron & Oak. Their commercial splitters use "BHVH"-prefixed model codes (e.g. BHVH2213GX). Removed rather than guessed.',
  },
];
