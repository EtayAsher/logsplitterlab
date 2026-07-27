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
    { id: 'towing-considerations', label: 'Towing considerations' },
    { id: 'homeowner-vs-heavier-rural-use', label: 'Homeowner vs. heavier rural use' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'fuel-and-storage', label: 'Fuel and storage' },
    { id: 'product-summaries', label: 'Product summaries' },
    { id: 'buying-advice', label: 'Buying advice' },
    { id: 'faq', label: 'FAQ' },
  ]);
  const publishedDate = '2026-07-26';
  const updatedDate = '2026-07-26';

  const gases = products.filter((p) => p.type === 'gas');
  const landworks = gases.find((p) => p.id === 'landworks-guo079');
  const champion = gases.find((p) => p.id === 'champion-100250');

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

  <p>Gas log splitters trade quiet operation for more power and portability. This roundup compares the two verified gas models in our catalog: the Landworks GUO079 (20 tons) and the Champion 100250 (37 tons) — a genuinely different pair, not just two similar machines at slightly different tonnage, so which one fits depends heavily on whether you need to tow it.</p>

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
  <p>The Landworks GUO079 fits mid-volume gas splitting for a homeowner or small rural property. The Champion 100250 is built for meaningfully heavier use — more tonnage, larger max log length, and a confirmed tow rating for moving it between work sites. Neither is a light-duty, occasional-use machine, but the gap between them is real, not just a marketing distinction.</p>

  <h2 id="engine-differences">Engine differences</h2>
  <p>${landworks ? `The Landworks GUO079 uses a ${esc(landworks.engine)}.` : ''} ${champion ? `The Champion 100250 uses a ${esc(champion.engine)}.` : ''} Both are small engines typical of this class — routine maintenance (oil changes, air filter checks) applies to either, though the larger Champion engine reflects its higher 37-ton rating.</p>

  <h2 id="cycle-times">Cycle times</h2>
  <p>${landworks && champion ? `The Landworks GUO079 has a substantially faster cycle time (${landworks.cycleTimeSeconds}s) than the Champion 100250 (${champion.cycleTimeSeconds}s), per each manufacturer's specifications — meaningful if you're processing a full cord in one session and don't need the Champion's extra tonnage.` : ''}</p>

  <h2 id="maximum-log-length">Maximum log length</h2>
  <p>${landworks && champion ? `The Champion 100250 is rated for logs up to ${champion.maxLogLengthIn} in. long and ${champion.maxLogWeightLb} lb, longer and heavier than the Landworks GUO079's ${landworks.maxLogLengthIn} in. rating. The Landworks GUO079 does not have a manufacturer-confirmed maximum log weight in our sourcing — its 16 in. diameter rating is the more relevant limit for that model.` : ''}</p>

  <h2 id="horizontal-vertical-operation">Horizontal/vertical operation</h2>
  <p>The Champion 100250 supports both horizontal and vertical operation, per the manufacturer — useful for large rounds you don't want to lift onto a beam. The Landworks GUO079 is horizontal-only, per our sourcing.</p>

  <h2 id="towing-considerations">Towing considerations</h2>
  <p>${champion ? `Champion explicitly rates the 100250's wheels and hitch for towing up to 45 mph, per the manufacturer's own operator manual.` : ''} ${landworks ? `The Landworks GUO079, by contrast, has no confirmed road-tow hitch rating in our sourcing — it moves via its own transport wheels, which is fine around a property but isn't the same as a vehicle-towable trailer hitch. If road towing between sites matters to you, this is the deciding factor.` : ''}</p>

  <h2 id="homeowner-vs-heavier-rural-use">Homeowner vs. heavier rural use</h2>
  <p>For a homeowner splitting a few cords near the house, the Landworks GUO079's lower tonnage and faster cycle time are arguably the better fit — it's lighter and quicker per log. For a rural property that needs to move a splitter between work sites, the Champion 100250's confirmed towing and higher tonnage matter more than shaving seconds off each cycle.</p>

  <h2 id="maintenance">Maintenance</h2>
  <p>Both need routine small-engine maintenance (oil, air filter, spark plug) in addition to periodic hydraulic fluid and hose checks. See our <a href="${url('/maintenance/')}">maintenance guide</a> for the general concepts — always follow the specific manufacturer's manual for intervals and fluid types.</p>

  <h2 id="fuel-and-storage">Fuel and storage</h2>
  <p>Both require fuel stabilization or draining before extended off-season storage, per standard small-engine practice. Retract the ram before storing either machine. Note that the Landworks GUO079 does not ship with hydraulic fluid included — budget for AW32 hydraulic oil separately before first use.</p>

  <h2 id="product-summaries">Product summaries</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>If cycle time and a lighter machine matter most, the Landworks GUO079 has a real edge. If you need confirmed highway-towing capability or the largest log capacity, the Champion 100250 is the one with both explicitly confirmed in our sourcing. If you don't need this much gas-powered force at all, see our <a href="${url('/best-electric-log-splitters/')}">electric splitter roundup</a> instead.</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Can these gas splitters be towed on the highway?</h3><p>The Champion 100250 is explicitly rated to 45 mph by the manufacturer. The Landworks GUO079 has no confirmed road-tow hitch rating in our sourcing — treat it as property-portable rather than road-towable.</p></div>
  <div class="faq-item"><h3>How much maintenance does a gas log splitter need?</h3><p>Routine small-engine maintenance (oil changes, air filter, spark plug) plus periodic hydraulic fluid and hose checks — see our <a href="${url('/maintenance/')}">maintenance guide</a>.</p></div>
  <div class="faq-item"><h3>Is 20 tons enough, or do I need 37?</h3><p>For most seasoned hardwood, 20 tons is often sufficient. The extra tonnage on the Champion 100250 matters most for very large, dense, or knotty rounds, and if you need confirmed towing — see our <a href="${url('/what-size-log-splitter-do-i-need/')}">tonnage guide</a>.</p></div>

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
      { '@type': 'Question', name: 'Can these gas splitters be towed on the highway?', acceptedAnswer: { '@type': 'Answer', text: 'The Champion 100250 is explicitly rated to 45 mph. The Landworks GUO079 has no confirmed road-tow hitch rating in our sourcing.' } },
      { '@type': 'Question', name: 'How much maintenance does a gas log splitter need?', acceptedAnswer: { '@type': 'Answer', text: 'Routine small-engine maintenance plus periodic hydraulic fluid and hose checks.' } },
      { '@type': 'Question', name: 'Is 20 tons enough, or do I need 37?', acceptedAnswer: { '@type': 'Answer', text: 'For most seasoned hardwood, 20 tons is often sufficient; the extra tonnage matters most for very large, dense, or knotty rounds, and for confirmed towing.' } },
    ],
  };

  return {
    path: '/best-gas-log-splitters/',
    title: 'Best Gas Log Splitters for Homeowners and Rural Properties',
    description: 'Verified gas log splitters compared by tonnage, cycle time, log length, and towing — specification-based research, not physical testing.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Best Gas Log Splitters', path: '/best-gas-log-splitters/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
