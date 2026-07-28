'use strict';

module.exports = function bestGas(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage, byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'quick-picks', label: 'Quick picks' },
    { id: 'a-note-on-two-similar-listings', label: 'A note on two similar listings' },
    { id: 'intended-workload', label: 'Intended workload' },
    { id: 'engine-differences', label: 'Engine differences' },
    { id: 'cycle-times', label: 'Cycle times' },
    { id: 'maximum-log-length', label: 'Maximum log capacity' },
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
  const superhandy = gases.find((p) => p.id === 'superhandy-20-ton');
  const yardmax32 = gases.find((p) => p.id === 'yardmax-32-ton-cr950');

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

  <p>Gas log splitters trade quiet operation for more power and portability. Our catalog currently includes three verified gas models: the Landworks GUO079 and SuperHandy GUO077 (both 20 tons), and the YARDMAX YU3266 (32 tons, horizontal/vertical, towable). We\'re upfront that the first two are nearly identical in every published specification — see the note below — so the real decision in this roundup is between a 20-ton machine and the meaningfully larger, towable YARDMAX.</p>

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

  <h2 id="a-note-on-two-similar-listings">A note on two similar listings</h2>
  <p>The Landworks GUO079 and SuperHandy GUO077 share the same 20-ton rating, the same weight class, the same 7.5-second cycle time, and the same log capacity — and both are manufactured by GCM (Great Circle Machinery), confirmed on each product\'s own Amazon listing. We verified this directly rather than glossing over it: on paper, these are the same machine sold under two brand names. We\'re keeping both in the catalog as a disclosed decision — each has its own distinct Amazon listing and price — but we don\'t want you to read this roundup expecting a meaningful capability difference between them. If you\'re choosing between the three products here, treat it as a two-way decision: a 20-ton machine (either brand) versus the YARDMAX YU3266.</p>

  <h2 id="intended-workload">Intended workload</h2>
  <p>The Landworks GUO079 and SuperHandy GUO077 both fit mid-volume gas splitting for a homeowner or small rural property. The YARDMAX YU3266 is built for meaningfully heavier use — more tonnage, longer log capacity, horizontal/vertical operation, and a confirmed tow rating. None of the three is a light-duty, occasional-use machine, but the gap between the 20-ton pair and the YARDMAX is real, not just a marketing distinction.</p>

  <h2 id="engine-differences">Engine differences</h2>
  <p>${landworks ? `The Landworks GUO079 uses a ${esc(landworks.engine)}.` : ''} ${superhandy ? `The SuperHandy GUO077 uses a ${esc(superhandy.engine)}.` : ''} ${yardmax32 ? `The YARDMAX YU3266 uses a ${esc(yardmax32.engine)}.` : ''} The two 20-ton models share essentially the same engine class; the YARDMAX's engine reflects its higher 32-ton rating. Routine maintenance (oil changes, air filter checks) applies to all three.</p>

  <h2 id="cycle-times">Cycle times</h2>
  <p>${landworks && superhandy && yardmax32 ? `The Landworks GUO079 and SuperHandy GUO077 tie at ${landworks.cycleTimeSeconds} seconds — again, effectively the same machine. The YARDMAX YU3266 is slower at ${yardmax32.cycleTimeSeconds} seconds, per manufacturer specifications, which is the tradeoff for its extra tonnage, vertical operation, and towing capability.` : ''}</p>

  <h2 id="maximum-log-length">Maximum log capacity</h2>
  <p>${landworks && yardmax32 ? `The Landworks GUO079 and SuperHandy GUO077 both handle logs up to ${landworks.maxLogDiameterIn} in. diameter and ${landworks.maxLogLengthIn} in. length. The YARDMAX YU3266 handles longer logs — up to ${yardmax32.maxLogLengthIn} in. — though a specific maximum diameter isn\'t published for it, so we\'re not guessing at one. None of the three has a manufacturer-confirmed maximum log weight in our sourcing.` : ''}</p>

  <h2 id="horizontal-vertical-operation">Horizontal/vertical operation</h2>
  <p>The YARDMAX YU3266 supports both horizontal and vertical operation, per the manufacturer — useful for large rounds you don\'t want to lift onto a beam. Both 20-ton models in this roundup are horizontal-only, per our sourcing.</p>

  <h2 id="towing-considerations">Portability and towing</h2>
  <p>${yardmax32 ? `The YARDMAX YU3266 is the only model in this roundup with a confirmed road-tow rating — a 2-inch ball hitch coupler rated to 45 mph, per manufacturer sourcing. Neither the Landworks GUO079 nor the SuperHandy GUO077 has a confirmed road-tow hitch rating in our sourcing — both move via their own transport wheels, which is fine around a property but isn\'t the same as a vehicle-towable trailer hitch.` : ''}</p>

  <h2 id="homeowner-vs-heavier-rural-use">Homeowner vs. heavier rural use</h2>
  <p>For a homeowner splitting a few cords near the house, either 20-ton model is a reasonable, faster-cycling fit — the choice between Landworks and SuperHandy is really about price and brand, not capability. For a property that regularly deals with large, hard-to-lift rounds or needs to move the splitter between sites on public roads, the YARDMAX YU3266\'s higher tonnage, vertical operation, and confirmed towing matter more than shaving seconds off each cycle.</p>

  <h2 id="maintenance">Maintenance</h2>
  <p>All three need routine small-engine maintenance (oil, air filter, spark plug) in addition to periodic hydraulic fluid and hose checks. See our <a href="${url('/maintenance/')}">maintenance guide</a> for the general concepts — always follow the specific manufacturer's manual for intervals and fluid types.</p>

  <h2 id="fuel-and-storage">Fuel and storage</h2>
  <p>All three require fuel stabilization or draining before extended off-season storage, per standard small-engine practice. Retract the ram before storing any of them. Neither 20-ton model ships with hydraulic fluid included — budget for AW32 hydraulic oil separately before first use.</p>

  <h2 id="product-summaries">Product summaries</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>If cycle time and a simpler, lighter machine matter most, either the Landworks GUO079 or SuperHandy GUO077 will do — pick whichever is priced better or in stock, since the specs are effectively the same. If you need more tonnage, vertical operation for large rounds, or a confirmed road-tow rating, the YARDMAX YU3266 is the one built for that, at a slower cycle time and a much heavier unit. If you don't need this much gas-powered force at all, see our <a href="${url('/best-electric-log-splitters/')}">electric splitter roundup</a> instead.</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Are the Landworks GUO079 and SuperHandy GUO077 really the same machine?</h3><p>Based on every specification we could verify — tonnage, weight, cycle time, log capacity, and manufacturer (GCM for both) — yes, effectively. We kept both in the catalog as a disclosed decision rather than a genuine two-way comparison; treat the real choice in this roundup as 20-ton vs. the YARDMAX YU3266.</p></div>
  <div class="faq-item"><h3>Can these gas splitters be towed on the highway?</h3><p>The YARDMAX YU3266 has a confirmed tow rating (45 mph, 2-inch ball hitch) per manufacturer sourcing. Neither 20-ton model has a confirmed road-tow hitch rating in our sourcing — treat them as property-portable rather than road-towable.</p></div>
  <div class="faq-item"><h3>How much maintenance does a gas log splitter need?</h3><p>Routine small-engine maintenance (oil changes, air filter, spark plug) plus periodic hydraulic fluid and hose checks — see our <a href="${url('/maintenance/')}">maintenance guide</a>.</p></div>
  <div class="faq-item"><h3>Is 20 tons enough, or do I need 32?</h3><p>For most seasoned hardwood, 20 tons is often sufficient. The extra tonnage on the YARDMAX YU3266 matters most for very large, dense, or knotty rounds, and if you need vertical operation or towing — see our <a href="${url('/what-size-log-splitter-do-i-need/')}">tonnage guide</a>.</p></div>

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
      { '@type': 'Question', name: 'Are the Landworks GUO079 and SuperHandy GUO077 really the same machine?', acceptedAnswer: { '@type': 'Answer', text: 'Based on every specification we could verify — tonnage, weight, cycle time, log capacity, and manufacturer — yes, effectively. Both are kept in the catalog as a disclosed decision.' } },
      { '@type': 'Question', name: 'Can these gas splitters be towed on the highway?', acceptedAnswer: { '@type': 'Answer', text: 'The YARDMAX YU3266 has a confirmed tow rating. Neither 20-ton model has a confirmed road-tow hitch rating in our sourcing.' } },
      { '@type': 'Question', name: 'How much maintenance does a gas log splitter need?', acceptedAnswer: { '@type': 'Answer', text: 'Routine small-engine maintenance plus periodic hydraulic fluid and hose checks.' } },
      { '@type': 'Question', name: 'Is 20 tons enough, or do I need 32?', acceptedAnswer: { '@type': 'Answer', text: 'For most seasoned hardwood, 20 tons is often sufficient; the extra tonnage matters most for very large, dense, or knotty rounds, and for vertical operation or towing.' } },
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
