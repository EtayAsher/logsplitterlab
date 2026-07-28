// Central affiliate link configuration — the ONLY place a commercial link
// gets wired into the site. See OWNER_SETUP.md for the step-by-step guide
// to getting these values from Amazon Associates.
//
// Keyed by product id (see tools/data/products.js). Each entry is either
// `null` (nothing configured yet) or an object:
//
//   {
//     directUrl:    'https://www.amazon.com/dp/XXXXXXXXXX',  // plain product URL, no tracking
//     taggedUrl:    null,                                     // a full SiteStripe "Special Link" — if
//                                                              // present, this is used AS-IS and directUrl
//                                                              // is ignored, since it already carries
//                                                              // Amazon's own tracking parameters.
//     ctaLabel:     'Check Price on Amazon',                  // button text; override per product if needed
//     enabled:      false,                                    // must be explicitly set to true to go live
//     lastVerified: null,                                     // 'YYYY-MM-DD' — when this link was last clicked/checked
//   }
//
// Until an entry has `enabled: true` and a working URL, the site renders a
// disabled "Amazon link not yet added" control — never a fake href="#" and
// never a live-looking button pointing nowhere real.
//
// tools/lib/components.js builds the final href as:
//   taggedUrl, if present — used verbatim
//   otherwise directUrl + "?tag=<amazonAssociatesTag>" (from site-config.js), if both are set
'use strict';

module.exports = {
  // Catalog history: see tools/data/products.js header comment.
  //
  // 2026-07-27: Amazon Associates approved. Owner supplied one verified
  // SiteStripe link per product (tag=logsplitterla-20, confirmed present
  // in each resolved URL). Each taggedUrl below is stored and used
  // exactly as supplied — do not edit, re-shorten, or add/remove any
  // query parameters. Every link was resolved via its full redirect
  // chain and the destination ASIN/title/model was independently
  // confirmed on Amazon's own product page before enabling.
  'yardmax-ys0650': {
    directUrl: null,
    taggedUrl: 'https://amzn.to/4pJ0GtX',
    ctaLabel: 'Check Price on Amazon',
    enabled: true,
    lastVerified: '2026-07-27',
  },
  'superhandy-20-ton': {
    directUrl: null,
    taggedUrl: 'https://amzn.to/3TkzsxW',
    ctaLabel: 'Check Price on Amazon',
    enabled: true,
    lastVerified: '2026-07-27',
  },
  'landworks-guo079': {
    directUrl: null,
    taggedUrl: 'https://amzn.to/4fYDbKd',
    ctaLabel: 'Check Price on Amazon',
    enabled: true,
    lastVerified: '2026-07-27',
  },
  'yardmax-32-ton-cr950': {
    directUrl: null,
    taggedUrl: 'https://amzn.to/3TkCbra',
    ctaLabel: 'Check Price on Amazon',
    enabled: true,
    lastVerified: '2026-07-27',
  },
};
