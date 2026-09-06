'use strict';

module.exports = function bestElectric(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage, byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'quick-pick', label: 'Quick pick' },
    { id: 'how-to-choose', label: 'How to choose between five electric models' },
    { id: 'a-note-on-closely-matched-models', label: 'A note on closely matched models' },
    { id: 'workload-fit', label: 'Workload fit' },
    { id: 'cycle-time', label: 'Cycle time' },
    { id: 'electrical-requirements', label: 'Electrical requirements' },
    { id: 'maximum-log-dimensions', label: 'Maximum log dimensions' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'storage', label: 'Storage' },
    { id: 'strengths-and-limitations', label: 'Strengths and limitations' },
    { id: 'product-summary', label: 'Product summary' },
    { id: 'buying-advice', label: 'Buying advice' },
    { id: 'faq', label: 'FAQ' },
  ]);
  const publishedDate = '2026-07-26';
  const updatedDate = '2026-09-06';

  const electrics = products.filter((p) => p.type === 'electric');
  const yardmax = electrics.find((p) => p.id === 'yardmax-ys0650');
  const bilthard = electrics.find((p) => p.id === 'bilthard-tla-0101');
  const proyama = electrics.find((p) => p.id === 'proyama-7-ton');
  const vevor = electrics.find((p) => p.id === 'vevor-els106s');
  const superhandy14 = electrics.find((p) => p.id === 'superhandy-14-ton');

  const quickPicksRows = electrics.map((p) => `
    <tr>
      <td><span class="prod-name">${esc(p.name)}</span></td>
      <td>${p.tonnage}T</td>
      <td>${p.cycleTimeSeconds ? p.cycleTimeSeconds + 's' : 'Not published'}</td>
      <td>${p.maxLogDiameterIn ? p.maxLogDiameterIn + ' in.' : 'Not confirmed'}</td>
      <td>${affiliateButton(p, { small: true, position: 'best-of-quick-picks' })}</td>
    </tr>`).join('');

  const productSections = electrics.map((p) => `
    <div class="guide-section" id="p-${esc(p.id)}">
      <h2>${esc(p.name)}</h2>
      <div class="review-hero-img">${productImage(p, url)}</div>
      ${specTable(p)}
      <p>${esc(p.suitableUseSummary)} <b>Key limitation:</b> ${esc(p.limitationsSummary)}</p>
      <p>${affiliateButton(p, { position: 'best-of-product-section' })} &nbsp; <a href="${url(`/reviews/${p.id}/`)}">Read the full research review</a></p>
    </div>`).join('');

  const bodyHtml = `
<article class="article-wrap">
  <h1>Best Electric Log Splitters for Homeowners</h1>
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; ${byline(url)}</p>
  <p class="article-meta">${esc(config.amazonDisclosureShort)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <div class="note-box">This roundup is a Research-Based Review: specifications verified against manufacturer and current retailer information, not physical testing. It covers the ${electrics.length} electric models in our verified catalog — see <a href="${url('/how-we-review/')}">How We Review</a> for our methodology. We don't award a single "best" model here — the honest answer depends on which of the differences below actually matters to you.</div>

  <p>Electric log splitters trade raw power for quiet, low-maintenance operation near a house or garage. Our catalog now includes ${electrics.length} verified electric models, spanning ${Math.min(...electrics.map((p) => p.tonnage))}&ndash;${Math.max(...electrics.map((p) => p.tonnage))} tons. Three of them (YARDMAX YS0650, BILT HARD TLA-0101, VEVOR ELS106S) are extremely close on core splitting capability — we say so plainly below rather than inventing differences. The other two carve out real, distinct niches: the PROYAMA brings a genuinely different four-way Cross Wedge, and the SuperHandy GUO084 is a meaningfully bigger machine.</p>

  ${toc}

  <h2 id="quick-pick">Quick pick</h2>
  <div class="table-scroll-wrap">
    <div class="table-wrap">
      <table class="compare">
        <caption>Verified electric log splitters</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Cycle time</th><th scope="col">Max diameter</th><th scope="col">Where to buy</th></tr></thead>
        <tbody>${quickPicksRows}</tbody>
      </table>
    </div>
  </div>

  <h2 id="how-to-choose">How to choose between five electric models</h2>
  <p>Tonnage alone won't separate most of these — three of the five are within half a ton of each other. These are the actual, verifiable dimensions worth deciding on:</p>
  <ul>
    ${yardmax ? `<li><b>Want the longest warranty and a stand included?</b> The ${esc(yardmax.name)} carries a 2-year warranty and ships with a stand and log trays — the strongest documented support/convenience combination of the three closely-matched 6.5-ton models.</li>` : ''}
    ${bilthard && vevor ? `<li><b>Don't need the stand and want the lowest price you can find?</b> The ${esc(bilthard.name)} and ${esc(vevor.name)} are both ground-level units with no stand included, and their specs are close enough to each other that price and availability should decide between them, not capability.</li>` : ''}
    ${proyama ? `<li><b>Want fewer strokes to reach kindling-sized pieces?</b> The ${esc(proyama.name)} is the only model here with a four-way Cross Wedge, splitting one log into quarters per stroke instead of two pieces — a genuinely different mechanism, though we couldn't confirm its exact log-capacity figures (see the note on this page and its own review).</li>` : ''}
    ${superhandy14 ? `<li><b>Want meaningfully more force without switching to gas?</b> The ${esc(superhandy14.name)} is rated for ${superhandy14.tonnage} tons and a ${superhandy14.maxLogDiameterIn} in. diameter — well above every other electric model here, matching our SuperHandy GUO077 gas model's diameter rating.</li>` : ''}
  </ul>

  <h2 id="a-note-on-closely-matched-models">A note on closely matched models</h2>
  <p>${yardmax && bilthard && vevor ? `The ${esc(yardmax.name)}, ${esc(bilthard.name)}, and ${esc(vevor.name)} all sit in the same 6.5-ton, roughly 9.8&ndash;10 in. diameter / 20&ndash;20.5 in. length class, with cycle times within a couple of seconds of each other. We don't want you reading this page expecting a meaningful power difference among the three — there isn't one we could verify. The BILT HARD and VEVOR pair is closer still: matching log capacity, an identical 3,400 RPM motor speed, and nearly identical weight and dimensions. We checked for evidence of a shared manufacturer, the way GCM is named directly on both the Landworks and SuperHandy gas listings elsewhere in this roundup — we found none for this pair, so we're reporting a specification overlap, not a manufacturing relationship; we can't explain why the numbers match this closely. What actually separates all three: the YARDMAX includes a 2-year warranty and a stand; the BILT HARD and VEVOR ship without a stand and carry shorter warranties (90 days and 12 months respectively). Those are the real decision points — not splitting power.` : ''}</p>

  <h2 id="workload-fit">Workload fit</h2>
  <p>${yardmax ? `At 6.5&ndash;7 tons, the ${esc(yardmax.name)}, ${esc(bilthard ? bilthard.name : '')}, ${esc(vevor ? vevor.name : '')}, and ${esc(proyama ? proyama.name : '')} are all built for light-to-moderate splitting of softer-to-medium wood within reach of a standard outlet. ${superhandy14 ? `The ${esc(superhandy14.name)} at ${superhandy14.tonnage} tons is the exception — it handles noticeably larger, denser rounds while staying electric.` : ''} If your wood regularly exceeds what any of these can manage, every gas model in our catalog has more force, at the cost of engine noise, fuel, and maintenance; see our <a href="${url('/best-gas-log-splitters/')}">gas splitter roundup</a>.` : ''}</p>

  <h2 id="cycle-time">Cycle time</h2>
  <p>${yardmax && bilthard && superhandy14 ? `Cycle times for the fully-specified models range from ${superhandy14.cycleTimeSeconds}s (SuperHandy GUO084, despite its higher tonnage — a real advantage of its 2-stage hydraulic pump) to ${yardmax.cycleTimeSeconds}&ndash;${bilthard.cycleTimeSeconds}s for the compact 6.5-ton models, all on the slower end compared to the gas models in our catalog (7.5&ndash;15.3 seconds). VEVOR does not publish a cycle time for its model, and PROYAMA's is not confirmed for this specific listing — see each product's own review for why.` : ''}</p>

  <h2 id="electrical-requirements">Electrical requirements</h2>
  <p>All five models draw up to 15A on a standard 120V household circuit — confirm your circuit isn't shared with other high-draw tools. ${vevor ? `VEVOR is unusually specific here, publishing an exact maximum cord length (50 ft.) and minimum wire cross-section (3.3 mm&sup2;) rather than generic guidance.` : ''} ${superhandy14 ? `The SuperHandy GUO084's 1800W motor draws more continuous current than the compact models — worth factoring in if your circuit is already loaded.` : ''} See our <a href="${url('/buying-guide/')}#g-cord">extension cord guidance</a>.</p>

  <h2 id="maximum-log-dimensions">Maximum log dimensions</h2>
  <p>${yardmax && superhandy14 ? `The three compact 6.5-ton models cluster tightly at ${bilthard.maxLogDiameterIn}&ndash;${yardmax.maxLogDiameterIn} in. diameter and ${vevor.maxLogLengthIn}&ndash;${yardmax.maxLogLengthIn} in. length — differences of a fraction of an inch, not meaningful. The SuperHandy GUO084 stands apart at ${superhandy14.maxLogDiameterIn} in. diameter. PROYAMA's exact figures for this specific listing are not confirmed — see its review for the tonnage-labeling conflict that led us to leave them unset rather than guess.` : ''}</p>

  <h2 id="mobility">Mobility</h2>
  <p>${yardmax && superhandy14 ? `At roughly ${bilthard.maxLogWeightLb}&ndash;${vevor.maxLogWeightLb} lb, the three compact models are light enough for one person to reposition easily. The SuperHandy GUO084 is noticeably heavier at ${superhandy14.maxLogWeightLb} lb, the tradeoff for its larger capacity. None of the five is designed for highway towing the way some of the gas models in our catalog are.` : ''}</p>

  <h2 id="storage">Storage</h2>
  <p>Electric splitters simplify storage since there's no fuel to stabilize or drain — just store indoors or under cover with the ram retracted, and check hydraulic fluid periodically per each manufacturer's manual.</p>

  <h2 id="strengths-and-limitations">Strengths and limitations</h2>
  <ul>
    <li><b>Strengths:</b> quiet operation, no exhaust, minimal maintenance across all five; the YARDMAX ships with a stand and the longest warranty; the SuperHandy GUO084 offers real extra capacity; the PROYAMA's Cross Wedge is a genuinely different splitting mechanism.</li>
    <li><b>Limitations:</b> lower tonnage ceiling than any gas model in our catalog for four of the five; the BILT HARD and VEVOR ship without a stand and carry shorter warranties than the YARDMAX; the PROYAMA's core log-capacity figures aren't confirmed for this listing; the SuperHandy GUO084 is the heaviest and draws the most current of the five.</li>
  </ul>

  <h2 id="product-summary">Product summary</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>${yardmax && superhandy14 && proyama ? `Start with what you actually need: if 6.5&ndash;7 tons comfortably covers your wood, choose among the ${esc(yardmax.name)} (best warranty and included stand), ${esc(bilthard ? bilthard.name : '')}, or ${esc(vevor ? vevor.name : '')} (both ground-level, closely matched, priced to compete with each other) based on price and availability rather than capability. If you specifically want fewer strokes per log and can live without a confirmed capacity figure, the ${esc(proyama.name)}'s Cross Wedge is worth considering. If your wood regularly runs larger or denser than a 6.5-ton unit handles, the ${esc(superhandy14.name)} is a real step up while staying electric — and if even that isn't enough, see our <a href="${url('/best-gas-log-splitters/')}">gas splitter roundup</a>.` : ''}</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Which electric log splitter should I buy?</h3><p>It depends on what you're optimizing for, not a single "best" pick: warranty and included accessories (YARDMAX YS0650), lowest price among closely-matched options (BILT HARD TLA-0101 or VEVOR ELS106S), a four-way splitting wedge (PROYAMA), or more raw capacity while staying electric (SuperHandy GUO084). See "How to choose" above.</p></div>
  <div class="faq-item"><h3>Are the YARDMAX YS0650, BILT HARD TLA-0101, and VEVOR ELS106S basically the same?</h3><p>In splitting capability, yes — all three cluster around 6.5 tons with nearly identical log capacity. The BILT HARD and VEVOR are closer still, sharing an identical motor speed and nearly identical weight and dimensions. What differs is warranty length and whether a stand is included — see the note on this page.</p></div>
  <div class="faq-item"><h3>What does the PROYAMA's "Cross Wedge" do?</h3><p>It splits one log into four pieces in a single stroke, using four blades arranged in a cross instead of the single blade most splitters use to split a log in two. It generally needs a reasonably round, centered log to divide evenly.</p></div>
  <div class="faq-item"><h3>Is the SuperHandy GUO084 the same as the SuperHandy GUO077 in your Best Gas roundup?</h3><p>No — different products entirely. GUO077 is a 20-ton gas splitter; GUO084 is a 14-ton electric splitter. Different power source, different tonnage, different model number.</p></div>
  <div class="faq-item"><h3>Can an electric log splitter handle oak or other hardwood?</h3><p>Within its rated diameter, generally yes, but the four 6.5&ndash;7-ton models here will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter or the 14-ton SuperHandy GUO084 would.</p></div>
  <div class="faq-item"><h3>Is an electric splitter powerful enough for a rural property?</h3><p>It depends on your wood and volume. For light-to-moderate splitting of softer wood near a power source, yes. For large volumes of dense hardwood or remote splitting without power access, a gas model is usually the better fit — see our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">gas vs. electric comparison</a>.</p></div>

  <h2 id="related-guides">Related guides</h2>
  <ul>
    <li><a href="${url('/best-gas-log-splitters/')}">Best Gas Log Splitters</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/what-size-log-splitter-do-i-need/')}">What Size Log Splitter Do I Need?</a></li>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
  </ul>

  ${authorBox(url)}
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Electric Log Splitters for Homeowners',
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { '@type': 'Person', name: 'Etay Asher', url: layout.canonical('/author/etay-asher/') },
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical('/best-electric-log-splitters/'),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Best Electric Log Splitters', item: layout.canonical('/best-electric-log-splitters/') },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which electric log splitter should I buy?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on what you\'re optimizing for: warranty and included accessories (YARDMAX YS0650), lowest price among closely-matched options (BILT HARD TLA-0101 or VEVOR ELS106S), a four-way splitting wedge (PROYAMA), or more raw capacity while staying electric (SuperHandy GUO084).' } },
      { '@type': 'Question', name: 'Are the YARDMAX YS0650, BILT HARD TLA-0101, and VEVOR ELS106S basically the same?', acceptedAnswer: { '@type': 'Answer', text: 'In splitting capability, yes. The BILT HARD and VEVOR are closer still, sharing an identical motor speed and nearly identical weight and dimensions. Warranty length and stand inclusion are what actually differ.' } },
      { '@type': 'Question', name: 'What does the PROYAMA\'s "Cross Wedge" do?', acceptedAnswer: { '@type': 'Answer', text: 'It splits one log into four pieces in a single stroke using four blades arranged in a cross, instead of the single blade most splitters use to split a log in two.' } },
      { '@type': 'Question', name: 'Is the SuperHandy GUO084 the same as the SuperHandy GUO077 in your Best Gas roundup?', acceptedAnswer: { '@type': 'Answer', text: 'No. GUO077 is a 20-ton gas splitter; GUO084 is a 14-ton electric splitter — different power source, tonnage, and model number.' } },
      { '@type': 'Question', name: 'Is an electric splitter powerful enough for a rural property?', acceptedAnswer: { '@type': 'Answer', text: 'For light-to-moderate splitting of softer wood near a power source, yes. For large volumes of dense hardwood, a gas model is usually a better fit.' } },
    ],
  };

  return {
    path: '/best-electric-log-splitters/',
    title: 'Best Electric Log Splitters for Homeowners',
    description: 'Five verified electric log splitters compared by tonnage, cycle time, log capacity, warranty, and what actually distinguishes each — specification-based research, not physical testing.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Best Electric Log Splitters', path: '/best-electric-log-splitters/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
