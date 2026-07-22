'use strict';

module.exports = function affiliateDisclosure(ctx) {
  const { layout, config } = ctx;
  const { url, esc } = layout;

  const bodyHtml = `
<section class="page-hero">
  <h1>Affiliate Disclosure</h1>
</section>
<div class="article-wrap">
  <p class="disclaimer" style="font-size:1rem;color:var(--text);font-weight:600;">${esc(config.amazonDisclosureFull)}</p>

  <p>LogSplitterLab is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>

  <p>When you click on links to products on this site and make a purchase, we may earn a small commission at no extra cost to you. This helps us keep the site running and continue producing free, independent research.</p>

  <p>Our editorial opinions are never influenced by affiliate relationships. We recommend products based on research quality, reader feedback, and technical specifications — not commission rates. See <a href="${url('/how-we-review/')}">How We Review</a> for our full methodology.</p>

  <p>For questions about our affiliate relationships, contact us at: <a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a></p>
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Affiliate Disclosure', item: layout.canonical('/affiliate-disclosure/') },
    ],
  };

  return {
    path: '/affiliate-disclosure/',
    title: 'Affiliate Disclosure',
    description: 'How LogSplitterLab uses Amazon Associates affiliate links, and how that relationship does and does not affect our content.',
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Affiliate Disclosure', path: '/affiliate-disclosure/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.3', changefreq: 'yearly' },
  };
};
