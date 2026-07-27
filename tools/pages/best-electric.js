'use strict';

module.exports = function bestElectric(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage, byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'quick-picks', label: 'Quick picks' },
    { id: 'best-overall-use-case', label: 'Best overall use case' },
    { id: 'most-established-option', label: 'Most established option' },
    { id: 'differences-in-cycle-time-and-warranty', label: 'Cycle time and warranty' },
    { id: 'cycle-times', label: 'Cycle times' },
    { id: 'electrical-requirements', label: 'Electrical requirements' },
    { id: 'maximum-log-dimensions', label: 'Maximum log dimensions' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'storage', label: 'Storage' },
    { id: 'strengths-and-limitations', label: 'Strengths and limitations' },
    { id: 'product-summaries', label: 'Product summaries' },
    { id: 'buying-advice', label: 'Buying advice' },
    { id: 'faq', label: 'FAQ' },
  ]);
  const publishedDate = '2026-07-26';
  const updatedDate = '2026-07-27';

  const electrics = products.filter((p) => p.type === 'electric');
  const wen = electrics.find((p) => p.id === 'wen-56208');
  const superhandy = electrics.find((p) => p.id === 'superhandy-guo084');

  const quickPicksRows = electrics.map((p) => `
    <tr>
      <td><span class="prod-name">${esc(p.name)}</span></td>
      <td>${p.tonnage}T</td>
      <td>${p.cycleTimeSeconds}s</td>
      <td>${p.maxLogDiameterIn ? p.maxLogDiameterIn + ' in.' : '—'}</td>
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

  <div class="note-box">This roundup is a Research-Based Review: specifications verified against manufacturer and current retailer information, not physical testing. It currently covers the electric models in our verified catalog — see <a href="${url('/how-we-review/')}">How We Review</a> for our methodology.</div>

  <p>Electric log splitters trade raw power for quiet, low-maintenance operation near a house or garage. This roundup compares the two verified electric models in our catalog: the WEN 56208 (6.5 tons) and the SuperHandy GUO084 (14 tons) — a genuinely different pair at different tonnage tiers, not two similar machines with the same splitting force, so which one fits depends on how much wood you actually split.</p>

  ${toc}

  <h2 id="quick-picks">Quick picks</h2>
  <div class="table-scroll-wrap">
    <div class="table-wrap">
      <table class="compare">
        <caption>Verified electric log splitters</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Cycle time</th><th scope="col">Max diameter</th><th scope="col">Where to buy</th></tr></thead>
        <tbody>${quickPicksRows}</tbody>
      </table>
    </div>
  </div>

  <h2 id="best-overall-use-case">Best overall use case: heavier or denser wood</h2>
  <p>${superhandy ? `The <b>${esc(superhandy.name)}</b> is the better fit if your wood regularly exceeds a 6.5-ton machine's comfort zone — at 14 tons and up to ${superhandy.maxLogDiameterIn} in. diameter, per the manufacturer, it has real headroom for denser or larger-diameter rounds that would struggle a smaller electric splitter.` : ''} This isn't a marginal spec-sheet edge — it's more than double the tonnage of the other model in this roundup, so the right pick depends on what you're actually splitting, not which one happens to be a little faster.</p>

  <h2 id="most-established-option">Most established option</h2>
  <p>${wen ? `The <b>${esc(wen.name)}</b> is the pick if your wood is reliably smaller and softer — it's the current model in WEN's 6.5-ton line, with a manufacturer manual and multi-retailer availability history, at a meaningfully lower price point than the higher-tonnage model in this roundup. We're not asserting an exact price advantage here since we don't display live prices; check the current price on each product's page before deciding.` : ''}</p>

  <h2 id="differences-in-cycle-time-and-warranty">Differences in tonnage and warranty</h2>
  <p>${wen && superhandy ? `The SuperHandy GUO084 is rated at ${superhandy.tonnage} tons versus the WEN 56208's ${wen.tonnage} tons — the main reason to choose one over the other. Warranty coverage differs too: the SuperHandy specifies a 1-year limited warranty, while we were unable to confirm an equivalent published warranty term for the WEN 56208 in our sourcing — check each manufacturer's current terms directly before buying, since these can change.` : ''}</p>

  <h2 id="cycle-times">Cycle times</h2>
  <p>${wen && superhandy ? `Despite its higher tonnage, the SuperHandy GUO084 has a faster cycle time (${superhandy.cycleTimeSeconds}s) than the WEN 56208 (${wen.cycleTimeSeconds}s), per each manufacturer's specifications. Neither is fast compared to the gas models in our catalog — expect electric splitters generally to take longer per log.` : ''}</p>

  <h2 id="electrical-requirements">Electrical requirements</h2>
  <p>Both models draw up to 15A on a standard 120V household circuit — confirm your circuit isn't shared with other high-draw tools, and use an appropriately rated extension cord if you need one. See our <a href="${url('/buying-guide/')}#g-cord">extension cord guidance</a>.</p>

  <h2 id="maximum-log-dimensions">Maximum log dimensions</h2>
  <p>${wen && superhandy ? `The SuperHandy GUO084 handles meaningfully larger rounds: up to ${superhandy.maxLogDiameterIn} in. diameter and ${superhandy.maxLogLengthIn} in. length, versus the WEN 56208's ${wen.maxLogDiameterIn} in. diameter and ${wen.maxLogLengthIn} in. length — check each spec table above, since manufacturers can revise these figures.` : ''}</p>

  <h2 id="mobility">Mobility</h2>
  <p>${superhandy ? `The SuperHandy GUO084 is heavier (${superhandy.maxLogWeightLb} lb) than the WEN 56208, reflecting its higher tonnage; both move via their own transport wheels rather than a vehicle hitch, and neither is designed for highway towing the way the gas models in our catalog are.` : ''}</p>

  <h2 id="storage">Storage</h2>
  <p>Electric splitters simplify storage since there's no fuel to stabilize or drain — just store indoors or under cover with the ram retracted, and check hydraulic fluid periodically per each manufacturer's manual.</p>

  <h2 id="strengths-and-limitations">Strengths and limitations</h2>
  <ul>
    <li><b>Strengths shared by both:</b> quiet operation, no exhaust, minimal maintenance, easy to reposition by one person.</li>
    <li><b>Limitations shared by both:</b> lower tonnage ceiling than gas splitters, tied to an outlet, longer cycle times than gas models.</li>
  </ul>

  <h2 id="product-summaries">Product summaries</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>If your wood is reliably small-diameter softwood within reach of an outlet, the WEN 56208 covers that for less money. If you regularly hit its limits — denser hardwood, larger rounds — the SuperHandy GUO084's extra tonnage and diameter capacity are worth the higher price before you assume you need to switch to gas. If you regularly split dense hardwood or large volumes beyond either model's rating, see our <a href="${url('/best-gas-log-splitters/')}">gas splitter roundup</a> instead.</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Can an electric log splitter handle oak or other hardwood?</h3><p>Within its rated diameter, yes — but even the higher-tonnage model in this roundup will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.</p></div>
  <div class="faq-item"><h3>Do I need a special outlet for an electric log splitter?</h3><p>Both models specify a standard 120V household circuit, but draw up to 15A — avoid running other high-draw tools on the same circuit while splitting.</p></div>
  <div class="faq-item"><h3>Is an electric splitter powerful enough for a rural property?</h3><p>It depends on your wood and volume. For light-to-moderate splitting of softer wood near a power source, yes — and the higher-tonnage model in this roundup extends that range further. For large volumes of dense hardwood or remote splitting without power access, a gas model is usually the better fit — see our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">gas vs. electric comparison</a>.</p></div>

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
      { '@type': 'Question', name: 'Can an electric log splitter handle oak or other hardwood?', acceptedAnswer: { '@type': 'Answer', text: 'Within its rated diameter, yes, but even the higher-tonnage model in this roundup will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter.' } },
      { '@type': 'Question', name: 'Do I need a special outlet for an electric log splitter?', acceptedAnswer: { '@type': 'Answer', text: 'Both models specify a standard 120V household circuit but draw up to 15A.' } },
      { '@type': 'Question', name: 'Is an electric splitter powerful enough for a rural property?', acceptedAnswer: { '@type': 'Answer', text: 'For light-to-moderate splitting of softer wood near a power source, yes. For large volumes of dense hardwood, a gas model is usually a better fit.' } },
    ],
  };

  return {
    path: '/best-electric-log-splitters/',
    title: 'Best Electric Log Splitters for Homeowners',
    description: 'Verified electric log splitters compared by tonnage, cycle time, log capacity, and electrical requirements — specification-based research, not physical testing.',
    activeNav: 'comparisons',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Best Electric Log Splitters', path: '/best-electric-log-splitters/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd(layout.canonical)],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
