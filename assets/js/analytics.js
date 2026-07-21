// Analytics event scaffolding. This file is always loaded, but every call
// is a safe no-op unless GA4 is actually enabled (see tools/data/site-config.js
// ga4MeasurementId — when it's null, tools/lib/layout.js never loads the GA4
// script, so window.dataLayer never exists and lslTrack() does nothing).
//
// Never throws, and never prevents a click's default navigation — a
// tracking failure must not stop a user from reaching Amazon or a guide.
(function () {
  'use strict';

  window.lslTrack = function (eventName, params) {
    try {
      if (!window.dataLayer) return; // GA4 not enabled
      window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
    } catch (e) {
      // Analytics must never break the page.
    }
  };

  function destinationFromHref(href) {
    try { return new URL(href, window.location.href).hostname; } catch (e) { return 'unknown'; }
  }

  // Affiliate clicks: delegated so it works for buttons rendered on any page.
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-affiliate-click]');
    if (!link) return;
    window.lslTrack('affiliate_click', {
      product_id: link.getAttribute('data-product-id') || 'unknown',
      cta_position: link.getAttribute('data-cta-position') || 'unspecified',
      page_type: document.body.getAttribute('data-page-type') || 'unknown',
      destination_marketplace: destinationFromHref(link.getAttribute('href')),
    });
  });
})();
