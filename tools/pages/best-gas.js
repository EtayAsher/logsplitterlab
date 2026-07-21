'use strict';

module.exports = function bestGas(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage } = components;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const gases = products.filter((p) => p.type === 'gas');
  const champion = gases.find((p) => p.id === 'champion-100424');
  const yardmax = gases.find((p) => p.id === 'yardmax-yu2566');

  const quickPicksRows = gases.map((p) => `
    <tr>
      <td><span class="prod-name">${esc(p.name)}</span></td>
      <td>${p.tonnage}T</td>
      <td>${p.cycleTimeSeconds}s</td>
      <td>${p.maxLogLengthIn ? p.maxLogLengthIn + ' in.' : '—'}</td>
      <td>${affiliateButton(p, { small: true, position: 'best-of-quick-picks' })}</td>
    </tr>`).join('');

  const productSections = gases.map((p) => `
    <div class="guide-section" id="p-${esc(p.id)}">
      <h2>${esc(p.name)}</h2>
      <div class="review-hero-img">${productImage(p, url)}</div>
      ${specTable(p)}
      <p>${esc(p.suitableUseSummary)} <b>Key limitation:</b> ${esc(p.limitationsSummary)}</p>
      <p>${affiliateButton(p, { position: 'best-of-product-section' })} &nbsp; <a href="${url(`/reviews/${p.id}/`)}">Read the full research review</a></p>
    </div>`).join('');

  const bodyHtml = `
<article class="article-wrap">
  <h1>Best Gas Log Splitters for Homeowners and Rural Properties</h1>
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>
  <p class="article-meta">${esc(config.amazonDisclosureShort)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <div class="note-box">This roundup is based on specification research and suitability analysis, not physical testing. It currently covers the gas models in our verified catalog — see <a href="${url('/how-we-review/')}">How We Review</a> for our methodology.</div>

  <p>Gas log splitters trade quiet operation for more power and full portability. This roundup compares the two verified gas models in our catalog: the Champion 100424 and the YARDMAX YU2566.</p>

  <h2>Quick picks</h2>
  <div class="table-scroll-wrap">
    <div class="table-wrap">
      <table class="compare">
        <caption>Verified gas log splitters</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Cycle time</th><th scope="col">Max log length</th><th scope="col">Where to buy</th></tr></thead>
        <tbody>${quickPicksRows}</tbody>
      </table>
    </div>
  </div>

  <h2>Intended workload</h2>
  <p>Both models suit homeowners and rural property owners processing multiple cords a year — meaningfully more volume than the electric models in our catalog are built for. Neither is a light-duty, occasional-use machine.</p>

  <h2>Engine differences</h2>
  <p>${champion ? `The Champion 100424 uses a ${esc(champion.engine)}.` : ''} ${yardmax ? `The YARDMAX YU2566 uses a ${esc(yardmax.engine)}.` : ''} Both are small single-cylinder engines typical of this class — routine maintenance (oil changes, air filter checks) applies to either.</p>

  <h2>Cycle times</h2>
  <p>${champion && yardmax ? `The YARDMAX YU2566 has a faster cycle time (${yardmax.cycleTimeSeconds}s) than the Champion 100424 (${champion.cycleTimeSeconds}s), per each manufacturer's specifications — meaningful if you're processing a full cord in one session.` : ''}</p>

  <h2>Maximum log length</h2>
  <p>${champion && yardmax ? `The YARDMAX YU2566 is rated for logs up to ${yardmax.maxLogLengthIn} in., slightly longer than the Champion 100424's ${champion.maxLogLengthIn} in. rating.` : ''} The Champion also lists a maximum log weight of ${champion ? champion.maxLogWeightLb : ''} lb, which YARDMAX's sourcing didn't confirm for the YU2566 — check both manuals for your specific rounds.</p>

  <h2>Horizontal/vertical operation</h2>
  <p>Both models support horizontal and vertical operation, per their manufacturers — vertical operation is useful for large rounds you don't want to lift onto a beam.</p>

  <h2>Towing considerations</h2>
  <p>${champion ? `Champion explicitly rates the 100424's wheels for towing up to 45 mph.` : ''} ${yardmax ? `YARDMAX specifies DOT-approved tires on the YU2566, but our sourcing did not turn up an explicit maximum tow speed for this model — do not assume it matches the Champion's rating. Confirm with YARDMAX's manual and your local towing regulations before road use.` : ''}</p>

  <h2>Homeowner vs. heavier rural use</h2>
  <p>For a homeowner splitting a few cords near the house, either machine is more capacity than strictly necessary. For a rural property with multiple work sites, the towing capability on both (with the caveat above on exact tow speed) is the more relevant differentiator than the roughly 2-ton difference in tonnage.</p>

  <h2>Maintenance</h2>
  <p>Both need routine small-engine maintenance (oil, air filter, spark plug) in addition to periodic hydraulic fluid and hose checks. See our <a href="${url('/maintenance/')}">maintenance guide</a> for the general concepts — always follow the specific manufacturer's manual for intervals and fluid types.</p>

  <h2>Fuel and storage</h2>
  <p>Both require fuel stabilization or draining before extended off-season storage, per standard small-engine practice. Retract the ram before storing either machine.</p>

  <h2>Product summaries</h2>
  ${productSections}

  <h2>Buying advice</h2>
  <p>If cycle time and log length matter most, the YARDMAX YU2566 has an edge. If confirmed highway towing speed matters most, the Champion 100424 is the one with that rating explicitly confirmed in our sourcing. Both are more machine than an occasional, light-duty user needs — see our <a href="${url('/best-electric-log-splitters/')}">electric splitter roundup</a> if that describes you instead.</p>

  <h2>FAQ</h2>
  <div class="faq-item"><h3>Can these gas splitters be towed on the highway?</h3><p>The Champion 100424 is explicitly rated to 45 mph by the manufacturer. The YARDMAX YU2566 has DOT-approved tires but no confirmed maximum tow speed in our sourcing — check YARDMAX's manual before highway towing.</p></div>
  <div class="faq-item"><h3>How much maintenance does a gas log splitter need?</h3><p>Routine small-engine maintenance (oil changes, air filter, spark plug) plus periodic hydraulic fluid and hose checks — see our <a href="${url('/maintenance/')}">maintenance guide</a>.</p></div>
  <div class="faq-item"><h3>Is 25 tons enough, or do I need 27?</h3><p>For most seasoned hardwood, either is more than sufficient. The 2-ton difference matters most for very large, dense, or knotty rounds — see our <a href="${url('/what-size-log-splitter-do-i-need/')}">tonnage guide</a>.</p></div>

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/best-electric-log-splitters/')}">Best Electric Log Splitters</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/what-size-log-splitter-do-i-need/')}">What Size Log Splitter Do I Need?</a></li>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
  </ul>
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Gas Log Splitters for Homeowners and Rural Properties',
    datePublished: publishedDate,
    dateModified: updatedDate,
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical('/best-gas-log-splitters/'),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Best Gas Log Splitters', item: layout.canonical('/best-gas-log-splitters/') },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can these gas splitters be towed on the highway?', acceptedAnswer: { '@type': 'Answer', text: 'The Champion 100424 is explicitly rated to 45 mph. The YARDMAX YU2566 has DOT-approved tires but no confirmed maximum tow speed in our sourcing.' } },
      { '@type': 'Question', name: 'How much maintenance does a gas log splitter need?', acceptedAnswer: { '@type': 'Answer', text: 'Routine small-engine maintenance plus periodic hydraulic fluid and hose checks.' } },
      { '@type': 'Question', name: 'Is 25 tons enough, or do I need 27?', acceptedAnswer: { '@type': 'Answer', text: 'For most seasoned hardwood, either is more than sufficient; the difference matters most for very large, dense, or knotty rounds.' } },
    ],
  };

  return {
    path: '/best-gas-log-splitters/',
    title: 'Best Gas Log Splitters for Homeowners and Rural Properties',
    description: 'Verified gas log splitters compared by tonnage, cycle time, log length, and towing — specification-based research, not physical testing.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Best Gas Log Splitters', path: '/best-gas-log-splitters/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
