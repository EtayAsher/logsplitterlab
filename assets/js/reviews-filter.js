// Reviews index filter. Progressive enhancement: every card is present and
// visible in the static HTML (grouped into per-power-source .catalog-group
// sections); this script only toggles visibility. With JavaScript disabled,
// all cards and group headings remain visible and the filter buttons are
// simply inert.
(function () {
  'use strict';

  var filterBar = document.getElementById('filterBar');
  var wrap = document.getElementById('catalogWrap');
  if (!filterBar || !wrap) return;

  var buttons = filterBar.querySelectorAll('.filter-btn');
  var cards = wrap.querySelectorAll('.review-card');
  var groups = wrap.querySelectorAll('.catalog-group');

  function applyFilter(type) {
    cards.forEach(function (card) {
      var show = type === 'all' || card.getAttribute('data-type') === type;
      // Inline style, not the `hidden` attribute — this stylesheet doesn't
      // define a `[hidden]{display:none}` reset, and .review-card's own
      // `display:flex` would otherwise win and keep it visible.
      card.style.display = show ? '' : 'none';
    });
    // A group heading (e.g. "Gas") is only meaningful if it still has a
    // visible card under the current filter — hide the whole group rather
    // than show an empty "Gas" heading with nothing under it.
    groups.forEach(function (group) {
      var hasVisibleCard = Array.prototype.some.call(
        group.querySelectorAll('.review-card'),
        function (card) { return card.style.display !== 'none'; }
      );
      group.style.display = hasVisibleCard ? '' : 'none';
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
