'use strict';

module.exports = function contact(ctx) {
  const { layout, config } = ctx;
  const { esc } = layout;

  const bodyHtml = `
<section class="page-hero">
  <h1>Contact LogSplitterLab</h1>
</section>
<div class="article-wrap">
  <p>Have a question, correction, or suggestion? We'd love to hear from you.</p>

  <p style="font-size:1.15rem;font-weight:600;color:var(--dark);">&#128231; <a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a></p>

  <p class="article-meta">We typically respond within 2-3 business days.</p>
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
    title: 'Contact LogSplitterLab',
    description: 'How to reach LogSplitterLab with corrections, questions, or suggestions about our log splitter reviews and guides.',
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.3', changefreq: 'yearly' },
  };
};
