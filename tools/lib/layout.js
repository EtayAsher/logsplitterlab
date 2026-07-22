// Shared page layout: <head> metadata, header/nav, footer, skip link.
// Every generated page is passed through renderPage() so markup, nav state,
// and metadata stay consistent without duplicating HTML in every page file.
'use strict';

const config = require('../data/site-config');

function url(path) {
  // Internal, site-relative link that includes the GitHub Pages base path.
  if (path === '') return config.basePath + '/';
  return config.basePath + path;
}

function canonical(path) {
  return config.canonicalBaseUrl + url(path);
}

function esc(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

const NAV_ITEMS = [
  { key: 'reviews', label: 'Reviews', path: '/reviews/' },
  { key: 'comparisons', label: 'Comparisons', path: '/comparisons/' },
  { key: 'buying-guide', label: 'Buying Guides', path: '/buying-guide/' },
  { key: 'maintenance', label: 'Maintenance', path: '/maintenance/' },
];

function renderHeader(activeNav) {
  const links = NAV_ITEMS.map((item) => {
    const active = item.key === activeNav;
    return `<li><a href="${url(item.path)}"${active ? ' aria-current="page" class="active"' : ''}>${item.label}</a></li>`;
  }).join('');

  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <nav class="nav-wrap" aria-label="Primary">
    <a href="${url('/')}" class="logo">
      <span class="logo-badge" aria-hidden="true">LS</span>
      <span>LogSplitterLab</span>
    </a>
    <ul class="nav-links" id="navLinks">
      ${links}
      <li class="mobile-cta"><a href="${url('/reviews/')}" class="btn btn-cta btn-block">Find Your Splitter</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
      <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
    </button>
  </nav>
</header>`;
}

function renderFooter() {
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="${url('/')}" class="logo">
        <span class="logo-badge" aria-hidden="true">LS</span>
        <span>LogSplitterLab</span>
      </a>
      <p>Research-based log splitter guides and comparisons for homeowners and rural property owners.</p>
    </div>
    <nav aria-label="Footer">
      <ul class="footer-links">
        <li><a href="${url('/about/')}">About</a></li>
        <li><a href="${url('/author/etay-asher/')}">Author</a></li>
        <li><a href="${url('/how-we-review/')}">How We Review</a></li>
        <li><a href="${url('/contact/')}">Contact</a></li>
        <li><a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a></li>
        <li><a href="${url('/privacy-policy/')}">Privacy Policy</a></li>
      </ul>
    </nav>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 LogSplitterLab</span>
    <span>Research-based log splitter guides and comparisons.</span>
  </div>
  <p class="disclaimer">${esc(config.amazonDisclosureFull)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>
</footer>`;
}

function renderBreadcrumbs(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length < 2) return '';
  const items = breadcrumbs.map((b, i) => {
    const isLast = i === breadcrumbs.length - 1;
    if (isLast) {
      return `<li aria-current="page">${esc(b.label)}</li>`;
    }
    return `<li><a href="${url(b.path)}">${esc(b.label)}</a></li>`;
  }).join('<li class="crumb-sep" aria-hidden="true">/</li>');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

function renderJsonLd(jsonLdArray) {
  if (!jsonLdArray || !jsonLdArray.length) return '';
  return jsonLdArray.map((obj) => (
    `<script type="application/ld+json">${JSON.stringify(obj)}</script>`
  )).join('\n');
}

function renderHead(opts) {
  const {
    path, title, description, ogType = 'website', jsonLd,
    publishedDate, updatedDate, noindex = false,
  } = opts;

  const fullTitle = title.includes('LogSplitterLab') ? title : `${title} | LogSplitterLab`;
  const canonicalUrl = canonical(path);
  const socialImageUrl = config.canonicalBaseUrl + url(config.socialImage);

  let analytics = '';
  if (config.ga4MeasurementId) {
    analytics = `
<script async src="https://www.googletagmanager.com/gtag/js?id=${config.ga4MeasurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${config.ga4MeasurementId}');
</script>`;
  } else {
    analytics = '<!-- GA4 disabled: set ga4MeasurementId in tools/data/site-config.js to enable, then update the Privacy Policy. -->';
  }

  const searchConsole = config.searchConsoleVerification
    ? `<meta name="google-site-verification" content="${esc(config.searchConsoleVerification)}">`
    : '<!-- Search Console verification: set searchConsoleVerification in tools/data/site-config.js once you have a token. -->';

  return `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonicalUrl}">
${noindex ? '<meta name="robots" content="noindex,follow">' : ''}
${searchConsole}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${url('/assets/css/styles.css')}">
<meta property="og:site_name" content="LogSplitterLab">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="${socialImageUrl}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
${config.twitterHandle ? `<meta name="twitter:site" content="${esc(config.twitterHandle)}">` : ''}
${publishedDate ? `<meta property="article:published_time" content="${publishedDate}">` : ''}
${updatedDate ? `<meta property="article:modified_time" content="${updatedDate}">` : ''}
${renderJsonLd(jsonLd)}
${analytics}`;
}

function renderPage(opts) {
  const {
    path, title, description, bodyHtml, breadcrumbs, activeNav = null,
    ogType, jsonLd, publishedDate, updatedDate, bodyClass = '', noindex = false,
    extraScripts = [],
  } = opts;

  const pageType = activeNav || (path === '/' ? 'home' : path.split('/').filter(Boolean)[0] || 'page');

  return `<!DOCTYPE html>
<html lang="en">
<head>
${renderHead({ path, title, description, ogType, jsonLd, publishedDate, updatedDate, noindex })}
</head>
<body class="${bodyClass}" data-page-type="${pageType}">
${renderHeader(activeNav)}
<main id="main">
${renderBreadcrumbs(breadcrumbs)}
${bodyHtml}
</main>
${renderFooter()}
${quizModalHtml()}
<script src="${url('/assets/js/analytics.js')}" defer></script>
<script src="${url('/assets/js/site.js')}" defer></script>
<script src="${url('/assets/js/quiz.js')}" defer></script>
${extraScripts.map((s) => `<script src="${url(s)}" defer></script>`).join('\n')}
</body>
</html>
`;
}

function quizModalHtml() {
  return `
<div class="quiz-overlay" id="quizOverlay" hidden>
  <div class="quiz-modal" role="dialog" aria-modal="true" aria-labelledby="quizHeading" aria-describedby="quizProgressLabel">
    <button type="button" class="quiz-close" id="quizClose" aria-label="Close quiz">&times;</button>
    <h2 id="quizHeading" class="visually-hidden">Log splitter match quiz</h2>
    <div class="quiz-progress-wrap">
      <div class="quiz-progress-label" id="quizProgressLabel" aria-live="polite">Question 1 of 5</div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div>
    </div>
    <div id="quizBody" aria-live="polite"></div>
  </div>
</div>`;
}

module.exports = { url, canonical, esc, renderPage, renderHeader, renderFooter, NAV_ITEMS };
