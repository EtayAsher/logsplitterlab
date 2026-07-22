'use strict';

const author = require('../data/author');

module.exports = function authorPage(ctx) {
  const { products, layout, components, config } = ctx;
  const { url, esc } = layout;
  const { personJsonLd } = components;

  const contactEmail = author.links.email || config.contactEmail;
  const linkItems = [
    author.links.linkedin ? `<li><a href="${esc(author.links.linkedin)}" rel="me noopener noreferrer" target="_blank">LinkedIn</a></li>` : '',
    author.links.twitter ? `<li><a href="${esc(author.links.twitter)}" rel="me noopener noreferrer" target="_blank">Twitter / X</a></li>` : '',
    contactEmail ? `<li><a href="mailto:${esc(contactEmail)}">Email</a></li>` : '',
  ].filter(Boolean).join('');

  // Links every review/article back from the author page, for internal
  // linking and to demonstrate what the author has actually written.
  const articleLinks = [
    { label: 'How We Review', href: '/how-we-review/' },
    { label: 'Log Splitter Buying Guide', href: '/buying-guide/' },
    { label: 'Gas vs. Electric Log Splitter', href: '/comparisons/gas-vs-electric-log-splitter/' },
    { label: 'Best Electric Log Splitters', href: '/best-electric-log-splitters/' },
    { label: 'Best Gas Log Splitters', href: '/best-gas-log-splitters/' },
    { label: 'What Size Log Splitter Do I Need?', href: '/what-size-log-splitter-do-i-need/' },
    ...products.map((p) => ({ label: `${p.name} Review`, href: `/reviews/${p.id}/` })),
  ];

  const bodyHtml = `
<section class="page-hero">
  <div class="author-hero" style="justify-content:center;">
    <img src="${url(author.avatarSrc)}" alt="${esc(author.avatarAlt)}" width="120" height="120" loading="eager">
    <div>
      <span class="eyebrow" style="color:#f0c27f;">Founder</span>
      <h1>${esc(author.name)}</h1>
      <p style="margin:0;color:#c9d3cb;">${esc(author.role)}</p>
    </div>
  </div>
</section>
<div class="article-wrap">
  ${author.longBio.map((p) => `<p>${esc(p)}</p>`).join('')}

  ${linkItems ? `<h2>Links</h2><ul>${linkItems}</ul>` : ''}

  <h2>Methodology</h2>
  <p>Every product page cites its manufacturer and retailer sources, notes the date specifications were last checked, and separates verified facts from editorial analysis. See <a href="${url('/how-we-review/')}">How We Review</a> for the full methodology.</p>

  <h2>Written by ${esc(author.name)}</h2>
  <ul class="author-articles-list">
    ${articleLinks.map((a) => `<li><a href="${url(a.href)}">${esc(a.label)}</a></li>`).join('')}
  </ul>
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: author.name, item: layout.canonical('/author/etay-asher/') },
    ],
  };

  return {
    path: '/author/etay-asher/',
    title: `${author.name} — Founder, LogSplitterLab`,
    description: `${author.name} founded LogSplitterLab to help homeowners research log splitters through verified manufacturer specifications and comparison analysis.`,
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: author.name, path: '/author/etay-asher/' }],
    jsonLd: [personJsonLd(layout.canonical), breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.5', changefreq: 'monthly' },
  };
};
