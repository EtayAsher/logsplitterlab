'use strict';

const author = require('../data/author');

module.exports = function about(ctx) {
  const { layout, components } = ctx;
  const { url, esc } = layout;
  const { authorBox, personJsonLd } = components;

  const bodyHtml = `
<section class="page-hero">
  <h1>About LogSplitterLab</h1>
</section>
<div class="article-wrap">
  <p>LogSplitterLab is an independent research and comparison site about log splitters, built for homeowners and rural property owners deciding which type and model to buy.</p>

  <h2>Who's behind this</h2>
  <p>LogSplitterLab was founded by <a href="${url('/author/etay-asher/')}">${esc(author.name)}</a> to help homeowners cut through marketing copy and figure out which log splitter actually fits their situation. ${esc(author.longBio[1])}</p>

  <h2>What this site is</h2>
  <p>We check manufacturer specification pages and retailer listings, compare models against the factors that actually affect how a splitter performs for a given use case, and write up what we find. Where we can't confirm a fact, we say so or leave it out rather than guess.</p>

  <h2>Who it's for</h2>
  <p>Homeowners and rural property owners researching a log splitter purchase — typically comparing gas, electric, and manual options for home firewood processing.</p>

  <h2>How this site makes money</h2>
  <p>LogSplitterLab is reader-supported. Some links on this site are Amazon affiliate links, and we may earn a commission on qualifying purchases at no additional cost to you. This never determines which products we cover or what we say about them. See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a> for details.</p>

  <h2>What this site is not</h2>
  <p>We do not claim to be a testing laboratory, and we do not currently physically test the products we cover — our current reviews are specification-based research summaries, clearly labeled as such. If that changes, we'll say so plainly on the affected pages rather than implying it. This site also does not replace the safety and operating instructions in your specific machine's manual — always follow the manufacturer's guidance for your model.</p>

  <h2>Corrections</h2>
  <p>If you find an inaccurate spec or a broken link, see our <a href="${url('/contact/')}">Contact page</a>. We update articles when products change and correct errors when we find them — see <a href="${url('/how-we-review/')}">How We Review</a>.</p>

  ${authorBox(url)}
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'About', item: layout.canonical('/about/') },
    ],
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LogSplitterLab',
    url: layout.canonical('/'),
    founder: { '@type': 'Person', name: author.name, url: layout.canonical('/author/etay-asher/') },
  };

  return {
    path: '/about/',
    title: 'About LogSplitterLab',
    description: `LogSplitterLab is an independent, reader-supported research and comparison site about log splitters, founded by ${author.name} for homeowners and rural property owners.`,
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'About', path: '/about/' }],
    jsonLd: [breadcrumbJsonLd, orgJsonLd, personJsonLd(layout.canonical)],
    bodyHtml,
    sitemap: { priority: '0.4', changefreq: 'yearly' },
  };
};
