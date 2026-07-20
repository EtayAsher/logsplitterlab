// Central affiliate link configuration.
//
// Keyed by product id (see tools/data/products.js). Until a real Amazon
// Associates URL is supplied for a product, its value stays null and the
// site renders a disabled "Amazon link coming soon" control instead of a
// working link — never a fake href="#".
//
// To add a real link once the owner has an Amazon Associates account:
//   1. Set amazonAssociatesTag in tools/data/site-config.js
//   2. Fill in the url below, e.g.
//        'champion-100424': 'https://www.amazon.com/dp/XXXXXXXXXX',
//      (the build script appends the ?tag= automatically from site-config)
//   3. Re-run `node tools/build.js`
'use strict';

module.exports = {
  'champion-100424': null,
  'wen-56207': null,
  'yardmax-yu2566': null,
  'boss-es7t20': null,
};
