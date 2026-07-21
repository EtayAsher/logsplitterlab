// Reviews index filter. Progressive enhancement: every card is present and
// visible in the static HTML; this script only toggles visibility. With
// JavaScript disabled, all cards remain visible and the filter buttons are
// simply inert.
(function () {
  'use strict';

  var filterBar = document.getElementById('filterBar');
  var grid = document.getElementById('reviewGrid');
  if (!filterBar || !grid) return;

  var buttons = filterBar.querySelectorAll('.filter-btn');
  var cards = grid.querySelectorAll('.review-card');

  function applyFilter(type) {
    cards.forEach(function (card) {
      var show = type === 'all' || card.getAttribute('data-type') === type;
      card.style.display = show ? '' : 'none';
    });
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-filter') === type ? 'true' : 'false');
    });
  }

  filterBar.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    var type = btn.getAttribute('data-filter');
    applyFilter(type);
    if (window.lslTrack) window.lslTrack('review_filter_used', { filter: type });
  });

  // Respect a ?type= query param so the quiz result CTA can deep-link into
  // a pre-filtered view (e.g. /reviews/?type=electric).
  var params = new URLSearchParams(window.location.search);
  var requestedType = params.get('type');
  var validTypes = Array.prototype.map.call(buttons, function (b) { return b.getAttribute('data-filter'); });
  if (requestedType && validTypes.indexOf(requestedType) !== -1) {
    applyFilter(requestedType);
  }
})();
