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
  <p>LogSplitterLab is a reader-supported site. This page explains how that works in plain terms.</p>

  <h2>Amazon Associates</h2>
  <p>LogSplitterLab participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.com. When a commercial link on this site is active, it is marked with <code>rel="sponsored"</code> as required, and clicking through and purchasing may earn us a commission at no additional cost to you.</p>
  <p>LogSplitterLab is not sponsored, approved, or endorsed by Amazon. Amazon does not supply our recommendations, our analysis, or any ratings on this site — we don't publish ratings at all (see <a href="${url('/how-we-review/')}">How We Review</a>). Amazon's relationship with this site begins and ends with the standard Associates commission described above.</p>

  <h2>Current status</h2>
  <p>Some product links on this site are not yet active — where we don't yet have an approved, enabled Amazon Associates link for a product, we show a disabled "Amazon link not yet added" control instead of a working link, rather than pointing anywhere misleading.</p>

  <h2>Editorial independence</h2>
  <p>Affiliate relationships do not determine which products we cover, what specifications we report, or what we say in a review. See <a href="${url('/how-we-review/')}">How We Review</a> for our methodology.</p>

  <h2>Questions</h2>
  <p>See our <a href="${url('/contact/')}">Contact page</a>.</p>
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
