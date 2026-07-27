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
  // Catalog updated 2026-07-26: previous 4 products (champion-100424,
  // wen-56207, yardmax-yu2566, boss-es7t20) were removed after being
  // confirmed unavailable/discontinued. Catalog updated again 2026-07-27:
  // bilt-hard-65ton and champion-100250 were replaced by superhandy-guo084
  // and superhandy-guo096 — see removedProducts in tools/data/products.js
  // for why. Do not reuse any old affiliate links for the product ids
  // below even if one happens to still resolve; verify fresh for each.
  'wen-56208': null,
  'superhandy-guo084': null,
  'landworks-guo079': null,
  'superhandy-guo096': null,
};
