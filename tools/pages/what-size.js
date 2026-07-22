'use strict';

module.exports = function whatSize(ctx) {
  const { layout, components } = ctx;
  const { url, esc } = layout;
  const { byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'why-tonnage-is-only-one-factor', label: 'Why tonnage is only one factor' },
    { id: 'wood-species', label: 'Wood species' },
    { id: 'green-vs-seasoned-wood', label: 'Green vs. seasoned wood' },
    { id: 'diameter', label: 'Diameter' },
    { id: 'knots', label: 'Knots' },
    { id: 'grain-direction', label: 'Grain direction' },
    { id: 'log-length', label: 'Log length' },
    { id: 'frequency-and-volume', label: 'Frequency and volume' },
    { id: 'softwood-vs-hardwood', label: 'Softwood vs. hardwood' },
    { id: 'electric-vs-gas', label: 'Electric vs. gas' },
    { id: 'example-buyer-profiles', label: 'Example buyer profiles' },
    { id: 'faq', label: 'FAQ' },
  ]);
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const bodyHtml = `
<article class="article-wrap">
  <h1>What Size Log Splitter Do I Need?</h1>
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; ${byline(url)}</p>

  <p>"What tonnage do I need?" is the most common question in this category, and the honest answer is that tonnage is only one input. This guide walks through the factors that actually determine how hard a given round is to split, so you're not relying on a single number.</p>

  ${toc}

  <h2 id="why-tonnage-is-only-one-factor">Why tonnage is only one factor</h2>
  <p>Tonnage measures the maximum force the ram can generate. It tells you the ceiling, not the whole story — two logs of the same species and diameter can require very different force to split depending on moisture, knots, and grain. A tonnage chart that only lists species is a starting point, not a guarantee.</p>

  <h2 id="wood-species">Wood species</h2>
  <p>As a rough starting point:</p>
  <ul>
    <li><b>4–7 tons</b> — softwoods and occasional splitting (pine, cedar, poplar)</li>
    <li><b>10–20 tons</b> — most seasoned hardwoods for regular home heating (oak, maple, ash)</li>
    <li><b>20+ tons</b> — large-diameter rounds, knotty or green hardwood, or higher-volume processing</li>
  </ul>
  <p>Treat these as a floor, not a precise prescription — the factors below can push you above the range for a given species.</p>

  <h2 id="green-vs-seasoned-wood">Green vs. seasoned wood</h2>
  <p>Green (freshly cut, unseasoned) wood generally resists splitting more than dry, seasoned wood of the same species and size, because moisture adds resistance to the fiber. If you split mostly green wood, size up relative to what a seasoned-wood chart suggests.</p>

  <h2 id="diameter">Diameter</h2>
  <p>Larger-diameter rounds need more force to split at a given tonnage, and also need a machine with a beam and wedge rated for that diameter — check the manufacturer's maximum log diameter, not just tonnage.</p>

  <h2 id="knots">Knots</h2>
  <p>A knotty round can bind or resist splitting regardless of tonnage rating. There's no published chart that accounts for this reliably — it's a judgment call based on the specific rounds you're working with, and sometimes a knotty round is easier to route around the knot than to force straight through.</p>

  <h2 id="grain-direction">Grain direction</h2>
  <p>Straight-grained wood splits predictably along the grain. Twisted or interlocked grain resists splitting the same way knots do, independent of species or tonnage.</p>

  <h2 id="log-length">Log length</h2>
  <p>Check the manufacturer's maximum rated log length in addition to diameter — a machine can have plenty of tonnage and still have a beam too short for an oversized round.</p>

  <h2 id="frequency-and-volume">Frequency and volume</h2>
  <p>How often and how much you split changes the calculus independent of wood hardness. Splitting one cord a year occasionally favors a smaller, simpler machine even for hardwood; splitting six-plus cords a year favors more tonnage and a faster cycle time even for softer wood, simply to save time.</p>

  <h2 id="softwood-vs-hardwood">Softwood vs. hardwood</h2>
  <p>Softwoods (pine, cedar, poplar) generally split with less force than hardwoods (oak, maple, hickory) of comparable diameter and moisture — but a large, green, knotty softwood round can still out-resist a small, dry, straight-grained hardwood one. Species is a starting heuristic, not an override for the other factors here.</p>

  <h2 id="electric-vs-gas">Electric vs. gas</h2>
  <p>Electric splitters in our catalog top out around 6.5–7 tons, which covers softwood-to-medium-hardwood use for most homeowners. Gas splitters in our catalog reach 25–27 tons, better suited to larger volumes or denser wood. See our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">full gas vs. electric comparison</a>.</p>

  <h2 id="example-buyer-profiles">Example buyer profiles</h2>
  <table class="decision-table">
    <caption>Example profiles and a reasonable starting point</caption>
    <thead><tr><th scope="col">Profile</th><th scope="col">Reasonable starting point</th></tr></thead>
    <tbody>
      <tr><th scope="row">Suburban homeowner, 1-2 cords/year, mostly softwood</th><td>Electric, 6-7 tons — see our <a href="${url('/best-electric-log-splitters/')}">electric roundup</a></td></tr>
      <tr><th scope="row">Rural homeowner, 3-5 cords/year, mixed hardwood</th><td>Gas, 20-27 tons — see our <a href="${url('/best-gas-log-splitters/')}">gas roundup</a></td></tr>
      <tr><th scope="row">Rural property, 6+ cords/year, dense or large-diameter hardwood</th><td>Gas, 25+ tons with attention to max log diameter</td></tr>
      <tr><th scope="row">Occasional splitting, small softwood rounds only</th><td>Consider a manual hydraulic splitter — see our <a href="${url('/buying-guide/')}#g-power">power source breakdown</a></td></tr>
    </tbody>
  </table>
  <p>These are starting points, not prescriptions — your actual wood may push you above or below the profile that otherwise matches your volume.</p>

  <h2 id="still-not-sure">Still not sure?</h2>
  <p>Take the quiz below, or read the full <a href="${url('/buying-guide/')}">buying guide</a> for the complete picture including cycle time, orientation, and safety.</p>
  <p><button type="button" class="btn btn-cta" data-open-quiz>Take the 60-second quiz</button></p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Is a bigger tonnage number always better?</h3><p>Not necessarily — more tonnage generally means a larger, heavier, often louder (if gas) machine. Buy for the wood and volume you actually split, not the largest number available.</p></div>
  <div class="faq-item"><h3>Can I upgrade tonnage later if I buy too small?</h3><p>No — tonnage is fixed by the machine's hydraulic system. If you're unsure, it's usually safer to size up slightly rather than under-buy.</p></div>
  <div class="faq-item"><h3>Does log diameter matter more than tonnage?</h3><p>They matter together — a high-tonnage machine with a beam too short for your rounds won't help, and a long beam on a low-tonnage machine won't split dense wood. Check both specs.</p></div>

  <h2 id="related-guides">Related guides</h2>
  <ul>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/best-electric-log-splitters/')}">Best Electric Log Splitters</a></li>
    <li><a href="${url('/best-gas-log-splitters/')}">Best Gas Log Splitters</a></li>
  </ul>

  ${authorBox(url)}
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Size Log Splitter Do I Need?',
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { '@type': 'Person', name: 'Etay Asher', url: layout.canonical('/author/etay-asher/') },
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical('/what-size-log-splitter-do-i-need/'),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'What Size Log Splitter Do I Need?', item: layout.canonical('/what-size-log-splitter-do-i-need/') },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is a bigger tonnage number always better?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily — more tonnage generally means a larger, heavier, often louder machine. Buy for the wood and volume you actually split.' } },
      { '@type': 'Question', name: 'Can I upgrade tonnage later if I buy too small?', acceptedAnswer: { '@type': 'Answer', text: 'No, tonnage is fixed by the machine\'s hydraulic system. If unsure, it\'s usually safer to size up slightly.' } },
      { '@type': 'Question', name: 'Does log diameter matter more than tonnage?', acceptedAnswer: { '@type': 'Answer', text: 'They matter together — check both the tonnage rating and the maximum log diameter/length.' } },
    ],
  };

  return {
    path: '/what-size-log-splitter-do-i-need/',
    title: 'What Size Log Splitter Do I Need?',
    description: 'Why tonnage alone doesn\'t determine the right log splitter size — wood species, moisture, diameter, knots, grain, and volume all matter. Includes example buyer profiles.',
    activeNav: 'buying-guide',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'What Size Log Splitter Do I Need?', path: '/what-size-log-splitter-do-i-need/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
