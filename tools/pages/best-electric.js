'use strict';

module.exports = function bestElectric(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage, byline, authorBox, personJsonLd, articleToc } = components;

  const toc = articleToc([
    { id: 'quick-pick', label: 'Quick pick' },
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
  const updatedDate = '2026-07-27';

  const electrics = products.filter((p) => p.type === 'electric');
  const yardmax = electrics.find((p) => p.id === 'yardmax-ys0650');

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

  <div class="note-box">This roundup is a Research-Based Review: specifications verified against manufacturer and current retailer information, not physical testing. It currently covers the electric model in our verified catalog — see <a href="${url('/how-we-review/')}">How We Review</a> for our methodology.</div>

  <p>Electric log splitters trade raw power for quiet, low-maintenance operation near a house or garage. Our catalog currently includes one verified electric model: the ${yardmax ? esc(yardmax.name) : ''}. We\'re not padding this roundup with a second electric option just to fill a table — we\'ll add one only once it passes the same verification standard as everything else on this site.</p>

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

  <h2 id="workload-fit">Workload fit</h2>
  <p>${yardmax ? `At ${yardmax.tonnage} tons, the ${esc(yardmax.name)} is built for light-to-moderate splitting of softer wood within reach of a standard outlet — not for dense hardwood or large-diameter rounds. If your wood regularly exceeds that, every gas model in our catalog has more force, at the cost of engine noise, fuel, and maintenance; see our <a href="${url('/best-gas-log-splitters/')}">gas splitter roundup</a>.` : ''}</p>

  <h2 id="cycle-time">Cycle time</h2>
  <p>${yardmax ? `A ${yardmax.cycleTimeSeconds}-second cycle time, per the manufacturer, is on the slower end compared to the gas models in our catalog (7.5&ndash;15.3 seconds) — worth factoring in if you\'re processing a large batch in one session.` : ''}</p>

  <h2 id="electrical-requirements">Electrical requirements</h2>
  <p>Draws up to 15A on a standard 120V household circuit — confirm your circuit isn\'t shared with other high-draw tools, and use an appropriately rated extension cord if you need one. See our <a href="${url('/buying-guide/')}#g-cord">extension cord guidance</a>.</p>

  <h2 id="maximum-log-dimensions">Maximum log dimensions</h2>
  <p>${yardmax ? `Rated for logs up to ${yardmax.maxLogDiameterIn} in. diameter and ${yardmax.maxLogLengthIn} in. length, per the manufacturer — check the spec table above, since manufacturers can revise these figures.` : ''}</p>

  <h2 id="mobility">Mobility</h2>
  <p>${yardmax ? `At roughly ${yardmax.maxLogWeightLb} lb, it\'s light enough for one person to reposition around a garage or yard using its own wheels, but it\'s not designed for highway towing the way some of the gas models in our catalog are.` : ''}</p>

  <h2 id="storage">Storage</h2>
  <p>Electric splitters simplify storage since there\'s no fuel to stabilize or drain — just store indoors or under cover with the ram retracted, and check hydraulic fluid periodically per the manufacturer\'s manual.</p>

  <h2 id="strengths-and-limitations">Strengths and limitations</h2>
  <ul>
    <li><b>Strengths:</b> quiet operation, no exhaust, minimal maintenance, easy to reposition by one person, ships with a stand and log trays per the manufacturer.</li>
    <li><b>Limitations:</b> lower tonnage ceiling than any gas model in our catalog, tied to an outlet, longer cycle time than any gas model in our catalog.</li>
  </ul>

  <h2 id="product-summary">Product summary</h2>
  ${productSections}

  <h2 id="buying-advice">Buying advice</h2>
  <p>${yardmax ? `If your wood is reliably small-diameter softwood within reach of an outlet, the ${esc(yardmax.name)} is a straightforward, no-fuel option. If you regularly split dense hardwood or larger volumes, see our <a href="${url('/best-gas-log-splitters/')}">gas splitter roundup</a> — every gas model in our catalog rates higher tonnage.` : ''}</p>

  <h2 id="faq">FAQ</h2>
  <div class="faq-item"><h3>Can an electric log splitter handle oak or other hardwood?</h3><p>Within its rated diameter, yes — but at 6.5 tons this model will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.</p></div>
  <div class="faq-item"><h3>Do I need a special outlet for an electric log splitter?</h3><p>It specifies a standard 120V household circuit, but draws up to 15A — avoid running other high-draw tools on the same circuit while splitting.</p></div>
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
      { '@type': 'Question', name: 'Can an electric log splitter handle oak or other hardwood?', acceptedAnswer: { '@type': 'Answer', text: 'Within its rated diameter, yes, but at 6.5 tons this model will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter.' } },
      { '@type': 'Question', name: 'Do I need a special outlet for an electric log splitter?', acceptedAnswer: { '@type': 'Answer', text: 'It specifies a standard 120V household circuit but draws up to 15A.' } },
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
