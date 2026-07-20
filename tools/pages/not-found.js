'use strict';

// 404.html is a special GitHub Pages file: it's served for any unmatched
// path under the project site. It is intentionally excluded from the
// sitemap (see tools/build.js) since it isn't real content.
module.exports = function notFound(ctx) {
  const { layout } = ctx;
  const { url } = layout;

  const bodyHtml = `
<div class="notfound-wrap">
  <h1>Page not found</h1>
  <p>The page you're looking for doesn't exist — it may have moved, been renamed, or never existed at this address. It does not exist anywhere else on this site either; we just can't find it.</p>
  <div class="notfound-links">
    <a href="${url('/')}" class="btn btn-cta">Go to Homepage</a>
    <a href="${url('/reviews/')}" class="btn btn-dark-outline">Reviews</a>
    <a href="${url('/comparisons/')}" class="btn btn-dark-outline">Comparisons</a>
    <a href="${url('/buying-guide/')}" class="btn btn-dark-outline">Buying Guide</a>
    <a href="${url('/maintenance/')}" class="btn btn-dark-outline">Maintenance</a>
  </div>
</div>`;

  return {
    path: '/404.html',
    outputPath: '/404.html',
    title: 'Page Not Found',
    description: 'This page could not be found on LogSplitterLab.',
    activeNav: null,
    noindex: true,
    bodyHtml,
  };
};
