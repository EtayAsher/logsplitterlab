'use strict';

module.exports = function privacyPolicy(ctx) {
  const { layout, config } = ctx;
  const { url, esc } = layout;
  const updatedDate = '2026-07-20';

  const analyticsSection = config.ga4MeasurementId
    ? `<p>This site uses Google Analytics 4 (measurement ID configured by the site owner) to understand aggregate traffic patterns, such as which pages are viewed and how visitors arrive at the site. Google Analytics uses cookies and similar technologies and may collect information such as your IP address, browser, device type, and pages visited. See <a href="https://policies.google.com/privacy" rel="nofollow noopener noreferrer" target="_blank">Google's Privacy Policy</a> for how Google handles this data.</p>`
    : `<p>This site does not currently run Google Analytics or any third-party analytics script. If that changes, this section will be updated to name the service and explain what it collects before it goes live — not after.</p>`;

  const bodyHtml = `
<section class="page-hero">
  <h1>Privacy Policy</h1>
</section>
<div class="article-wrap">
  <p class="article-meta">Last updated ${esc(updatedDate)}</p>

  <h2>Hosting</h2>
  <p>This site is hosted on GitHub Pages. As with most web hosting, GitHub's infrastructure may log standard request data (such as IP address, browser type, and request timestamps) as part of normal server operation, independent of anything this site adds. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="nofollow noopener noreferrer" target="_blank">GitHub's Privacy Statement</a> for details on GitHub's own data handling.</p>

  <h2>Analytics</h2>
  ${analyticsSection}

  <h2>Affiliate links</h2>
  <p>This site contains Amazon affiliate links. When you click one, Amazon may set cookies and collect information under its own privacy policy in order to attribute the referral. We do not control what Amazon collects once you leave this site. See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <h2>Forms and personal information</h2>
  <p>This site does not currently run a contact form or collect personal information directly. The quiz on this site does not collect or store any personal information — answers exist only in your browser while the quiz is open and are discarded when you close it.</p>

  <h2>Cookies</h2>
  <p>Aside from any cookies set by Amazon after you click an affiliate link, or by an analytics script if one is enabled (see above), this site does not set its own cookies.</p>

  <h2>Changes to this policy</h2>
  <p>If our data practices change — for example, if analytics or a contact form is added — this page will be updated to reflect that before the change goes live, and the "last updated" date above will change accordingly.</p>

  <h2>Questions</h2>
  <p>See our <a href="${url('/contact/')}">Contact page</a>.</p>
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: layout.canonical('/privacy-policy/') },
    ],
  };

  return {
    path: '/privacy-policy/',
    title: 'Privacy Policy',
    description: 'What data LogSplitterLab and its hosting, analytics, and affiliate partners collect, and how.',
    activeNav: null,
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Privacy Policy', path: '/privacy-policy/' }],
    jsonLd: [breadcrumbJsonLd],
    bodyHtml,
    sitemap: { priority: '0.3', changefreq: 'yearly' },
  };
};
