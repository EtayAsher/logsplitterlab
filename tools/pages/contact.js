'use strict';

module.exports = function contact(ctx) {
  const { layout, config } = ctx;
  const { esc } = layout;

  const contactBlock = config.contactEmail
    ? `<p>Reach us at <a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a>.</p>`
    : `<div class="note-box">A contact email hasn't been configured yet. The site owner can set <code>contactEmail</code> in <code>tools/data/site-config.js</code> and rebuild to enable this.</div>`;

  const bodyHtml = `
<section class="page-hero">
  <h1>Contact</h1>
</section>
<div class="article-wrap">
  <p>Spotted an inaccurate specification, a broken link, or a product that needs a second look? We'd rather know than have it sit wrong on the site.</p>
  ${contactBlock}
  <p>We don't run a contact form on this page — a form that can't actually deliver mail is worse than no form. Once a monitored inbox is set up, this page will list it.</p>
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: layout.canonical('/contact/') },
    ],
  };

  return {
    path: '/contact/',
    title: 'Contact',
    description: 'How to reach LogSplitterLab with corrections or questions about our log splitter reviews and guides.',
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.3', changefreq: 'yearly' },
  };
};
