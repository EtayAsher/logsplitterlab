'use strict';

module.exports = function bestGas(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage, byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'quick-picks', label: 'Quick picks' },
    { id: 'intended-workload', label: 'Intended workload' },
    { id: 'engine-differences', label: 'Engine differences' },
    { id: 'cycle-times', label: 'Cycle times' },
    { id: 'maximum-log-length', label: 'Maximum log length' },
    { id: 'horizontal-vertical-operation', label: 'Horizontal/vertical operation' },
    { id: 'towing-considerations', label: 'Portability and towing' },
    { id: 'homeowner-vs-heavier-rural-use', label: 'Homeowner vs. heavier rural use' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'fuel-and-storage', label: 'Fuel and storage' },
    { id: 'product-summaries', label: 'Product summaries' },
    { id: 'buying-advice', label: 'Buying advice' },
    { id: 'faq', label: 'FAQ' },
  ]);
  const publishedDate = '2026-07-26';
  const updatedDate = '2026-07-27';

  const gases = products.filter((p) => p.type === 'gas');
  const landworks = gases.find((p) => p.id === 'landworks-guo079');
  const superhandy = gases.find((p) => p.id === 'superhandy-guo096');

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
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; ${byline(url)}</p>
  <p class="article-meta">${esc(config.amazonDisclosureShort)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <div class="note-box">This roundup is a Research-Based Review: specifications verified against manufacturer and current retailer information, not physical testing. It currently covers the gas models in our verified catalog — see <a href="${url('/how-we-review/')}">How We Review</a> for our methodology.</div>

  <p>Gas log splitters trade quiet operation for more power and portability. This roundup compares the two verified gas models in our catalog: the Landworks GUO079 (20 tons, horizontal-only) and the SuperHandy GUO096 (25 tons, horizontal/vertical) — a genuinely different pair, not just two similar machines at slightly different tonnage, so which one fits depends on how much tonnage you need and whether splitting large rounds vertically matters to you.</p>

  ${toc}

  <h2 id="quick-picks">Quick picks</h2>
  <div class="table-scroll-wrap">
    <div class="table-wrap">
      <table class="compare">
        <caption>Verified gas log splitters</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Cycle time</th><th scope="col">Max log length</th><th scope="col">Where to buy</th></tr></thead>
        <tbody>${quickPicksRows}</tbody>
      </table>
    </div>
  </div>

  <h2 id="intended-workload">Intended workload</h2>
  <p>The Landworks GUO079 fits mid-volume gas splitting for a homeowner or small rural property. The SuperHandy GUO096 is built for meaningfully heavier use — more tonnage, larger max log diameter, and horizontal/vertical operation for large rounds. Neither is a light-duty, occasional-use machine, but the gap between them is real, not just a marketing distinction.</p>

  <h2 id="engine-differences">Engine differences</h2>
  <p>${landworks ? `The Landworks GUO079 uses a ${esc(landworks.engine)}.` : ''} ${superhandy ? `The SuperHandy GUO096 uses a ${esc(superhandy.engine)}.` : ''} Both use a similar 7HP-class engine typical of this segment — routine maintenance (oil changes, air filter checks) applies to either.</p>

  <h2 id="cycle-times">Cycle times</h2>
  <p>${landworks && superhandy ? `The Landworks GUO079 has a substantially faster cycle time (${landworks.cycleTimeSeconds}s) than the SuperHandy GUO096 (${superhandy.cycleTimeSeconds}s), per each manufacturer's specifications — meaningful if you're processing a full cord in one session and don't need the SuperHandy's extra tonnage or vertical operation.` : ''}</p>

  <h2 id="maximum-log-length">Maximum log length</h2>
  <p>${landworks && superhandy ? `The SuperHandy GUO096 is rated for logs up to ${superhandy.maxLogDiameterIn} in. in diameter, larger than the Landworks GUO079's ${landworks.maxLogDiameterIn} in. rating — both share the same ${landworks.maxLogLengthIn} in. maximum log length. Neither model has a manufacturer-confirmed maximum log weight in our sourcing.` : ''}</p>

  <h2 id="horizontal-vertical-operation">Horizontal/vertical operation</h2>
  <p>The SuperHandy GUO096 supports both horizontal and vertical operation, per the manufacturer — useful for large rounds you don't want to lift onto a beam. The Landworks GUO079 is horizontal-only, per our sourcing.</p>

  <h2 id="towing-considerations">Portability and towing</h2>
  <p>Neither model in this roundup has a confirmed road-tow hitch rating in our sourcing — both move via their own transport wheels, which is fine around a property but isn't the same as a vehicle-towable trailer hitch. If you specifically need to tow a splitter behind a vehicle on public roads, confirm a hitch rating directly with the manufacturer before buying either model, or see our <a href="${url('/buying-guide/')}">buying guide</a> for what to look for.</p>

  <h2 id="homeowner-vs-heavier-rural-use">Homeowner vs. heavier rural use</h2>
  <p>For a homeowner splitting a few cords near the house, the Landworks GUO079's lower tonnage and faster cycle time are arguably the better fit — it's quicker per log and simpler (horizontal-only). For a property that regularly deals with large, hard-to-lift rounds, the SuperHandy GUO096's higher tonnage and vertical operation matter more than shaving seconds off each cycle.</p>

  <h2 id="maintenance">Maintenance</h2>
  <p>Both need routine small-engine maintenance (oil, air filter, spark plug) in addition to periodic hydraulic fluid and hose checks. See our <a href="${url('/maintenance/')}">maintenance guide</a> for the general concepts — always follow the specific manufacturer's manual for intervals and fluid types.</p>

  <h2 id="fuel-and-storage">Fuel and storage</h2>
  <p>Both require fuel stabilization or draining before extended off-season storage, per standard small-engine practice. Retract the ram before storing either machine. Neither the Landworks GUO079 nor the SuperHandy GUO096 ships with hydraulic fluid included — budget for AW32 hydraulic oil separately before first use.</p>

  <h2 id="product-summaries">Product summaries</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>If cycle time and simplicity matter most, the Landworks GUO079 has a real edge. If you need more tonnage or the ability to split large rounds vertically, the SuperHandy GUO096 is the one built for that, at a slower cycle time. Neither model has a confirmed road-tow hitch rating — if that matters to you, confirm directly with the manufacturer before buying. If you don't need this much gas-powered force at all, see our <a href="${url('/best-electric-log-splitters/')}">electric splitter roundup</a> instead.</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Can these gas splitters be towed on the highway?</h3><p>No confirmed road-tow hitch rating was found in our sourcing for either model. Both move via their own transport wheels — treat them as property-portable rather than road-towable unless you confirm otherwise with the manufacturer.</p></div>
  <div class="faq-item"><h3>How much maintenance does a gas log splitter need?</h3><p>Routine small-engine maintenance (oil changes, air filter, spark plug) plus periodic hydraulic fluid and hose checks — see our <a href="${url('/maintenance/')}">maintenance guide</a>.</p></div>
  <div class="faq-item"><h3>Is 20 tons enough, or do I need 25?</h3><p>For most seasoned hardwood, 20 tons is often sufficient. The extra tonnage on the SuperHandy GUO096 matters most for very large, dense, or knotty rounds, and if you need vertical operation for rounds you don't want to lift — see our <a href="${url('/what-size-log-splitter-do-i-need/')}">tonnage guide</a>.</p></div>

  <h2 id="related-guides">Related guides</h2>
  <ul>
    <li><a href="${url('/best-electric-log-splitters/')}">Best Electric Log Splitters</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/what-size-log-splitter-do-i-need/')}">What Size Log Splitter Do I Need?</a></li>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
  </ul>

  ${authorBox(url)}
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Gas Log Splitters for Homeowners and Rural Properties',
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { '@type': 'Person', name: 'Etay Asher', url: layout.canonical('/author/etay-asher/') },
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
      { '@type': 'Question', name: 'Can these gas splitters be towed on the highway?', acceptedAnswer: { '@type': 'Answer', text: 'No confirmed road-tow hitch rating was found in our sourcing for either model in this roundup.' } },
      { '@type': 'Question', name: 'How much maintenance does a gas log splitter need?', acceptedAnswer: { '@type': 'Answer', text: 'Routine small-engine maintenance plus periodic hydraulic fluid and hose checks.' } },
      { '@type': 'Question', name: 'Is 20 tons enough, or do I need 25?', acceptedAnswer: { '@type': 'Answer', text: 'For most seasoned hardwood, 20 tons is often sufficient; the extra tonnage matters most for very large, dense, or knotty rounds, and for vertical operation on rounds you don\'t want to lift.' } },
    ],
  };

  return {
    path: '/best-gas-log-splitters/',
    title: 'Best Gas Log Splitters for Homeowners and Rural Properties',
    description: 'Verified gas log splitters compared by tonnage, cycle time, log capacity, and horizontal/vertical operation — specification-based research, not physical testing.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Best Gas Log Splitters', path: '/best-gas-log-splitters/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
