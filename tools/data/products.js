// Verified product data.
//
// EVERY field in this file must be traceable to sourceUrls below. Do not add
// a product, spec, price, or rating that cannot be confirmed against a
// manufacturer page or authoritative retailer listing. If a value can't be
// verified, use null and explain why in the `notes` field rather than
// guessing. See README.md "Verification rules" before editing this file.
'use strict';

module.exports = [
  {
    id: 'champion-100424',
    brand: 'Champion Power Equipment',
    name: 'Champion 27-Ton Log Splitter',
    model: '100424',
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
  },
  {
    id: 'wen-56207',
    brand: 'WEN',
    name: 'WEN 6.5-Ton Electric Log Splitter',
    model: '56207',
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
  },
  {
    id: 'yardmax-yu2566',
    brand: 'YARDMAX',
    name: 'YARDMAX 25-Ton Full Beam Gas Log Splitter',
    model: 'YU2566',
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
  },
  {
    id: 'boss-es7t20',
    brand: 'Boss Industrial',
    name: 'Boss Industrial 7-Ton Electric Log Splitter',
    model: 'ES7T20',
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
  },
];

// Products that were referenced in an earlier draft of this site and were
// REMOVED because they could not be verified. Kept here only as an editorial
// record — do not republish without genuine sourcing.
module.exports.removedProducts = [
  {
    name: 'Husqvarna S461',
    reason: 'No model named "S461" could be found from Husqvarna. Husqvarna’s actual log splitter line is the gas-powered S427 (27-ton, Kohler engine). The earlier draft described a 4-ton "manual" Husqvarna splitter, which does not match any findable Husqvarna product. Removed rather than guessed.',
  },
  {
    name: 'Iron & Oak TR22',
    reason: 'No model named "TR22" could be found from Iron & Oak. Their commercial splitters use "BHVH"-prefixed model codes (e.g. BHVH2213GX). Removed rather than guessed.',
  },
];
