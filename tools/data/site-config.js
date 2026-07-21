// Central site configuration.
// Edit the values in this file to change them sitewide, then re-run `node tools/build.js`.
'use strict';

module.exports = {
  siteName: 'LogSplitterLab',

  // GitHub Pages project-site base path and canonical domain.
  // When a custom domain is connected later, change canonicalBaseUrl to the
  // new domain (e.g. "https://www.logsplitterlab.com") and set basePath to ''.
  // Everything else in the build (links, sitemap, canonical tags, OG urls)
  // reads from these two values, so this is the only place to change it.
  canonicalBaseUrl: 'https://etayasher.github.io',
  basePath: '/logsplitterlab',

  // Shown in the footer and About/Contact pages. Replace with a real inbox
  // before launch. Leave as-is to keep the Contact page in placeholder mode.
  contactEmail: null, // e.g. 'hello@logsplitterlab.com'

  // Amazon Associates tracking ID (the "?tag=" value). Leave null until the
  // owner has an approved Associates account for this site. See OWNER_SETUP.md.
  amazonAssociatesTag: null, // e.g. 'logsplitterlab-20'

  // Destination marketplace for affiliate links. Change if the owner's
  // Associates account is registered on a different Amazon marketplace.
  amazonMarketplaceDomain: 'amazon.com',

  // Exact, required wording for the sitewide Amazon Associates disclosure.
  // Do not paraphrase this one — it's shown verbatim in the footer.
  amazonDisclosureFull: 'As an Amazon Associate I earn from qualifying purchases.',

  // Shorter, link-level disclosure shown just above product recommendation
  // blocks (comparison tables, "best of" lists, review CTAs).
  amazonDisclosureShort: 'Disclosure: This page contains affiliate links. We may earn a commission if you buy through them, at no additional cost to you.',

  // Google Analytics 4 measurement ID. Leave null to keep analytics disabled.
  ga4MeasurementId: null, // e.g. 'G-XXXXXXXXXX'

  // Google Search Console HTML tag verification token (the content="" value
  // from the meta verification tag Search Console gives you). Leave null
  // until the owner has generated one for this property.
  searchConsoleVerification: null,

  // Social preview image, relative to basePath. Replace social-preview.svg
  // with a real 1200x630 image when available.
  socialImage: '/assets/img/social-preview.svg',

  twitterHandle: null, // e.g. '@logsplitterlab'

  // Displayed on About/How We Review pages. Keep generic until a real named
  // editor/owner is supplied — do not invent a person.
  publisherName: 'LogSplitterLab',
};
