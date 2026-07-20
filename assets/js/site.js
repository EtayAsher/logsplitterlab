// Shared site behavior: accessible mobile nav disclosure.
// Progressive enhancement only — all links work with this file absent.
(function () {
  'use strict';

  var navLinks = document.getElementById('navLinks');
  var hamburger = document.getElementById('hamburger');
  if (!navLinks || !hamburger) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.contains('open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.classList.contains('open')) return;
    if (navLinks.contains(e.target) || hamburger.contains(e.target)) return;
    closeMenu();
  });

  // Close the mobile menu after choosing a link, so it doesn't stay open
  // when the next page loads.
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });
})();
