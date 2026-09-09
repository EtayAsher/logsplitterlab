'use strict';

module.exports = function bestGas(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage, byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'which-one', label: 'Which one fits your situation' },
    { id: 'quick-picks', label: 'Quick picks' },
    { id: 'a-note-on-two-similar-listings', label: 'A note on two similar listings' },
    { id: 'intended-workload', label: 'Intended workload' },
    { id: 'engine-differences', label: 'Engine differences' },
    { id: 'cycle-times', label: 'Cycle times' },
    { id: 'maximum-log-length', label: 'Maximum log capacity' },
    { id: 'horizontal-vertical-operation', label: 'Horizontal/vertical operation' },
    { id: 'towing-considerations', label: 'Portability and towing' },
    { id: 'amazon-warranty', label: 'Warranty when buying through Amazon' },
    { id: 'homeowner-vs-heavier-rural-use', label: 'Portable, midrange, or heavy-duty' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'fuel-and-storage', label: 'Fuel and storage' },
    { id: 'product-summaries', label: 'Product summaries' },
    { id: 'buying-advice', label: 'Buying advice' },
    { id: 'faq', label: 'FAQ' },
  ]);
  const publishedDate = '2026-07-26';
  const updatedDate = '2026-09-09';

  const gases = products.filter((p) => p.type === 'gas');
  const landworks = gases.find((p) => p.id === 'landworks-guo079');
  const superhandy = gases.find((p) => p.id === 'superhandy-20-ton');
  const bilthard = gases.find((p) => p.id === 'bilthard-tla-0131');
  const yardmax32 = gases.find((p) => p.id === 'yardmax-32-ton-cr950');

  const quickPicksRows = gases.map((p) => `
    <tr>
      <td><span class="prod-name">${esc(p.name)}</span></td>
      <td>${p.tonnage}T</td>
      <td>${esc(p.orientation)}</td>
      <td>${p.cycleTimeSeconds}s</td>
      <td>${p.towable === true ? 'Towable' : (p.towable === false ? 'Not confirmed' : '—')}</td>
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

  <p>Gas log splitters trade quiet operation for more power and portability. Our catalog now spans three tiers: two nearly identical 20-ton portable models built for cycle-time and simplicity, a 27-ton midrange model with horizontal/vertical operation and towing hardware, and a 32-ton heavy-duty model built for volume and confirmed road towing. The right one depends less on brand and more on how much wood you process and whether you need to move the machine between sites.</p>

  ${toc}

  <h2 id="which-one">Which one fits your situation</h2>
  <p>If you're splitting a few cords a year near the house and want the fastest cycle time, a 20-ton portable model — the SuperHandy GUO077 or Landworks GUO079, which are nearly identical — is enough machine. If that's not enough force, or you want horizontal/vertical operation and towing hardware without our largest machine, the BILT HARD TLA-0131 (27 tons) is the middle option — though buying it through Amazon means forfeiting BILT HARD's manufacturer warranty, covered below. If you're processing multiple cords on a rural property, need to tow between sites on public roads, or want the most capacity in our catalog, the YARDMAX YU3266 (32 tons) is built for that, with a manufacturer-confirmed 45 mph tow rating that the BILT HARD TLA-0131's towing hardware doesn't come with a published speed rating for.</p>

  <h2 id="quick-picks">Quick picks</h2>
  <div class="table-scroll-wrap">
    <div class="table-wrap">
      <table class="compare">
        <caption>Verified gas log splitters</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Orientation</th><th scope="col">Cycle time</th><th scope="col">Towing</th><th scope="col">Where to buy</th></tr></thead>
        <tbody>${quickPicksRows}</tbody>
      </table>
    </div>
  </div>

  <h2 id="a-note-on-two-similar-listings">A note on two similar listings</h2>
  <p>The Landworks GUO079 and SuperHandy GUO077 share the same 20-ton rating, the same weight class, the same 7.5-second cycle time, and the same log capacity — and both are manufactured by GCM (Great Circle Machinery), confirmed on each product's own Amazon listing. We verified this directly rather than glossing over it: on paper, these are the same machine sold under two brand names. We're keeping both in the catalog as a disclosed decision — each has its own distinct Amazon listing and price — but we don't want you to read this roundup expecting a meaningful capability difference between them. Treat the real decision in this roundup as three-way: a 20-ton machine (either brand), the BILT HARD TLA-0131 (27 tons), or the YARDMAX YU3266 (32 tons).</p>

  <h2 id="intended-workload">Intended workload</h2>
  <p>The Landworks GUO079 and SuperHandy GUO077 both fit mid-volume gas splitting for a homeowner or small rural property. The BILT HARD TLA-0131 steps up to more force and horizontal/vertical operation for tougher or larger rounds, without the size and weight of our largest model. The YARDMAX YU3266 is built for meaningfully heavier use still — the most tonnage, the longest log capacity, and a confirmed tow rating. None of the four is a light-duty, occasional-use machine, but the gap between the 20-ton pair, the 27-ton midrange model, and the 32-ton YARDMAX is real, not just a marketing distinction.</p>

  <h2 id="engine-differences">Engine differences</h2>
  <p>${landworks ? `The Landworks GUO079 uses an ${esc(landworks.engine)}.` : ''} ${superhandy ? `The SuperHandy GUO077 uses an ${esc(superhandy.engine)}.` : ''} ${bilthard ? `The BILT HARD TLA-0131 uses a ${esc(bilthard.engine)}.` : ''} ${yardmax32 ? `The YARDMAX YU3266 uses a ${esc(yardmax32.engine)}.` : ''} BILT HARD does not publish a horsepower figure for the TLA-0131's 209cc engine, so we're not estimating one. Routine maintenance (oil changes, air filter checks) applies to all four.</p>

  <h2 id="cycle-times">Cycle times</h2>
  <p>${landworks && superhandy ? `The Landworks GUO079 and SuperHandy GUO077 tie at ${landworks.cycleTimeSeconds} seconds — again, effectively the same machine.` : ''} ${bilthard ? `The BILT HARD TLA-0131 is slower at ${bilthard.cycleTimeSeconds} seconds, per the manufacturer` : ''}${bilthard && yardmax32 ? `, but faster than the YARDMAX YU3266's ${yardmax32.cycleTimeSeconds} seconds` : ''}${bilthard ? ' — a real middle point, not just a middle tonnage.' : ''} Slower cycle times on the two larger machines are the tradeoff for their extra tonnage, and for the TLA-0131 and YU3266 specifically, horizontal/vertical operation and towing capability.</p>

  <h2 id="maximum-log-length">Maximum log capacity</h2>
  <p>${landworks ? `The Landworks GUO079 and SuperHandy GUO077 both handle logs up to ${landworks.maxLogDiameterIn} in. diameter and ${landworks.maxLogLengthIn} in. length.` : ''} ${bilthard ? `The BILT HARD TLA-0131 handles longer logs — up to ${bilthard.maxLogLengthIn} in. — per the manufacturer, though a maximum diameter isn't published for this model, so we're not stating one.` : ''} ${yardmax32 ? `The YARDMAX YU3266 handles the longest logs in our catalog at up to ${yardmax32.maxLogLengthIn} in., also without a published maximum diameter.` : ''} None of the four has a manufacturer-confirmed maximum log weight in our sourcing.</p>

  <h2 id="horizontal-vertical-operation">Horizontal/vertical operation</h2>
  <p>The BILT HARD TLA-0131 and YARDMAX YU3266 both support horizontal and vertical operation, per their manufacturers — useful for large rounds you don't want to lift onto a beam. Both 20-ton models in this roundup are horizontal-only, per our sourcing — a genuine capability difference, not just a tonnage one, if you regularly deal with oversized rounds.</p>

  <h2 id="towing-considerations">Portability and towing</h2>
  <p>${yardmax32 ? `The YARDMAX YU3266 is the only model in this roundup with a manufacturer-published road-tow speed rating — a 2-inch ball hitch coupler rated to 45 mph, per manufacturer sourcing.` : ''} ${bilthard ? `The BILT HARD TLA-0131 also ships with towing hardware — a 2-inch ball coupler and 16-inch DOT-rated tires, per the manufacturer, and the Amazon listing's own title describes it as towable — but we found no manufacturer-published road-speed rating for it, so we're not stating one.` : ''} Neither the Landworks GUO079 nor the SuperHandy GUO077 has a confirmed road-tow hitch rating in our sourcing — both move via their own transport wheels, which is fine around a property but isn't the same as a vehicle-towable trailer hitch.</p>

  <h2 id="amazon-warranty">Warranty when buying through Amazon</h2>
  <p>This matters enough to call out on its own: BILT HARD's published warranty policy states plainly that "this warranty applies only to products purchased directly from the official Bilt Hard website," and explicitly excludes "purchases from third-party platforms such as Amazon, Walmart, or eBay." That means buying the TLA-0131 through the Amazon link on this page gets you the machine, but not BILT HARD's manufacturer warranty — a real tradeoff against the convenience of an Amazon purchase, and different from the other three gas models in this roundup, whose listed warranties aren't restricted this way in our sourcing. If manufacturer warranty coverage matters to you, weigh a direct purchase from bilthardusa.com against the convenience of buying here.</p>

  <h2 id="homeowner-vs-heavier-rural-use">Portable, midrange, or heavy-duty</h2>
  <p>For a homeowner splitting a few cords near the house, either 20-ton model is a reasonable, faster-cycling fit — the choice between Landworks and SuperHandy is really about price and brand, not capability. For a property that deals with tougher or larger rounds and wants horizontal/vertical operation without the biggest machine here, the BILT HARD TLA-0131 is the middle step, with the Amazon-warranty tradeoff above worth weighing. For a property that regularly handles large, hard-to-lift rounds or needs to move the splitter between sites on public roads with a confirmed tow rating, the YARDMAX YU3266's higher tonnage and 45 mph rating matter more than shaving seconds off each cycle.</p>

  <h2 id="maintenance">Maintenance</h2>
  <p>All four need routine small-engine maintenance (oil, air filter, spark plug) in addition to periodic hydraulic fluid and hose checks. See our <a href="${url('/maintenance/')}">maintenance guide</a> for the general concepts — always follow the specific manufacturer's manual for intervals and fluid types.</p>

  <h2 id="fuel-and-storage">Fuel and storage</h2>
  <p>All four require fuel stabilization or draining before extended off-season storage, per standard small-engine practice. Retract the ram before storing any of them. None of the four ships with hydraulic fluid confirmed included — budget for hydraulic oil separately before first use, and check the specific manufacturer's manual for the recommended type and capacity.</p>

  <h2 id="product-summaries">Product summaries</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>If cycle time and a simpler, lighter machine matter most, either the Landworks GUO079 or SuperHandy GUO077 will do — pick whichever is priced better or in stock, since the specs are effectively the same. If you need more force and horizontal/vertical operation without our largest machine, the BILT HARD TLA-0131 is built for that, with the Amazon-warranty tradeoff covered above worth reading before you buy. If you need the most tonnage, log length, and a manufacturer-confirmed road-tow rating, the YARDMAX YU3266 is the one built for that, at a slower cycle time and a much heavier unit. If you don't need this much gas-powered force at all, see our <a href="${url('/best-electric-log-splitters/')}">electric splitter roundup</a> instead.</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Are the Landworks GUO079 and SuperHandy GUO077 really the same machine?</h3><p>Based on every specification we could verify — tonnage, weight, cycle time, log capacity, and manufacturer (GCM for both) — yes, effectively. We kept both in the catalog as a disclosed decision rather than a genuine two-way comparison; treat the real choice in this roundup as 20-ton vs. the BILT HARD TLA-0131 vs. the YARDMAX YU3266.</p></div>
  <div class="faq-item"><h3>Is the BILT HARD TLA-0131 covered by a manufacturer warranty if I buy it on Amazon?</h3><p>No. BILT HARD's own warranty policy states coverage applies only to purchases made directly through bilthardusa.com and explicitly excludes Amazon, Walmart, and eBay purchases. Buying it here gets you the machine, not BILT HARD's manufacturer warranty.</p></div>
  <div class="faq-item"><h3>Can these gas splitters be towed on the highway?</h3><p>The YARDMAX YU3266 has a manufacturer-confirmed tow rating (45 mph, 2-inch ball hitch). The BILT HARD TLA-0131 ships with towing hardware (2-inch ball coupler, 16-inch DOT tires) but no published road-speed rating. Neither 20-ton model has a confirmed road-tow hitch rating in our sourcing — treat those as property-portable rather than road-towable.</p></div>
  <div class="faq-item"><h3>How much maintenance does a gas log splitter need?</h3><p>Routine small-engine maintenance (oil changes, air filter, spark plug) plus periodic hydraulic fluid and hose checks — see our <a href="${url('/maintenance/')}">maintenance guide</a>.</p></div>
  <div class="faq-item"><h3>Is 20 tons enough, or do I need more?</h3><p>For most seasoned hardwood, 20 tons is often sufficient. The extra tonnage on the BILT HARD TLA-0131 (27 tons) or YARDMAX YU3266 (32 tons) matters most for very large, dense, or knotty rounds, and if you need horizontal/vertical operation or towing — see our <a href="${url('/what-size-log-splitter-do-i-need/')}">tonnage guide</a>.</p></div>

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
      { '@type': 'Question', name: 'Is the BILT HARD TLA-0131 covered by a manufacturer warranty if I buy it on Amazon?', acceptedAnswer: { '@type': 'Answer', text: 'No. BILT HARD\'s own warranty policy applies only to purchases made directly through bilthardusa.com and explicitly excludes Amazon purchases.' } },
      { '@type': 'Question', name: 'Can these gas splitters be towed on the highway?', acceptedAnswer: { '@type': 'Answer', text: 'The YARDMAX YU3266 has a manufacturer-confirmed 45 mph tow rating. The BILT HARD TLA-0131 has towing hardware but no published speed rating. Neither 20-ton model has a confirmed road-tow hitch rating in our sourcing.' } },
      { '@type': 'Question', name: 'How much maintenance does a gas log splitter need?', acceptedAnswer: { '@type': 'Answer', text: 'Routine small-engine maintenance plus periodic hydraulic fluid and hose checks.' } },
      { '@type': 'Question', name: 'Is 20 tons enough, or do I need more?', acceptedAnswer: { '@type': 'Answer', text: 'For most seasoned hardwood, 20 tons is often sufficient; more tonnage matters most for very large, dense, or knotty rounds, and for horizontal/vertical operation or towing.' } },
    ],
  };

  return {
    path: '/best-gas-log-splitters/',
    title: 'Best Gas Log Splitters for Homeowners and Rural Properties',
    description: 'Compare four verified gas log splitters — 20 to 32 tons — by cycle time, towing hardware, and horizontal/vertical operation, to find the right fit for your property.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Best Gas Log Splitters', path: '/best-gas-log-splitters/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
