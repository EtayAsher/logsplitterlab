'use strict';

module.exports = function bestElectric(ctx) {
  const { products, components, layout, config } = ctx;
  const { url, esc } = layout;
  const { specTable, affiliateButton, productImage } = components;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const electrics = products.filter((p) => p.type === 'electric');
  const wen = electrics.find((p) => p.id === 'wen-56207');
  const boss = electrics.find((p) => p.id === 'boss-es7t20');

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
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>
  <p class="article-meta">${esc(config.amazonDisclosureShort)} See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>

  <div class="note-box">This roundup is based on specification research and suitability analysis, not physical testing. It currently covers the electric models in our verified catalog — see <a href="${url('/how-we-review/')}">How We Review</a> for our methodology.</div>

  <p>Electric log splitters trade raw power for quiet, low-maintenance operation near a house or garage. This roundup compares the two verified electric models in our catalog: the WEN 56207 and the Boss Industrial ES7T20.</p>

  <h2>Quick picks</h2>
  <div class="table-scroll-wrap">
    <div class="table-wrap">
      <table class="compare">
        <caption>Verified electric log splitters</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Cycle time</th><th scope="col">Max diameter</th><th scope="col">Where to buy</th></tr></thead>
        <tbody>${quickPicksRows}</tbody>
      </table>
    </div>
  </div>

  <h2>Best overall use case: single-operator home use</h2>
  <p>${boss ? `The <b>${esc(boss.name)}</b> is the better fit if single-handed operation matters to you — it's designed so one person can run the lever without needing a second hand on a separate control, which speeds up repetitive sessions. It's also rated slightly higher at 7 tons versus the WEN's 6.5 tons.` : ''} This isn't "best overall" because of a bigger number on the spec sheet — it's because single-handed control is a genuine usability difference for one person splitting alone, which is how most homeowners actually use these machines.</p>

  <h2>Best value: WEN 56207</h2>
  <p>${wen ? `The <b>${esc(wen.name)}</b> is a reasonable pick if you're prioritizing straightforward operation and don't need the ES7T20's single-handed control — both machines land in a similar tonnage and size class. We're not asserting an exact price advantage here since we don't display live prices; check the current price on each product's page before deciding.` : ''}</p>

  <h2>Differences in controls</h2>
  <p>The Boss Industrial ES7T20 uses single-handed lever operation, per the manufacturer. The WEN 56207's manual describes single-handed lever operation as well — if hand/control ergonomics matter to you, compare both manuals directly, since exact lever placement and force required can differ in ways a spec sheet won't show.</p>

  <h2>Cycle times</h2>
  <p>${wen && boss ? `The Boss Industrial ES7T20 has a faster cycle time (${boss.cycleTimeSeconds}s) than the WEN 56207 (${wen.cycleTimeSeconds}s), per each manufacturer's specifications. Neither is fast compared to the gas models in our catalog — expect electric splitters generally to take longer per log.` : ''}</p>

  <h2>Electrical requirements</h2>
  <p>Both models draw significant current on a standard household circuit (13.5A for the Boss Industrial, 15A for the WEN) — confirm your circuit isn't shared with other high-draw tools, and use an appropriately rated extension cord if you need one. See our <a href="${url('/buying-guide/')}#g-cord">extension cord guidance</a>.</p>

  <h2>Maximum log dimensions</h2>
  <p>${wen && boss ? `Both the WEN 56207 and Boss Industrial ES7T20 are rated for logs up to 10 in. diameter. The WEN is rated to 20.5 in. length and the Boss Industrial to the same 20.5 in. — check each spec table above, since manufacturers can revise these figures.` : ''}</p>

  <h2>Mobility</h2>
  <p>Both models are light enough (under 130 lb) for one person to reposition around a garage or yard using their included wheels, but neither is designed for highway towing the way the gas models in our catalog are.</p>

  <h2>Storage</h2>
  <p>Electric splitters simplify storage since there's no fuel to stabilize or drain — just store indoors or under cover with the ram retracted, and check hydraulic fluid periodically per each manufacturer's manual.</p>

  <h2>Strengths and limitations</h2>
  <ul>
    <li><b>Strengths shared by both:</b> quiet operation, no exhaust, minimal maintenance, easy to reposition by one person.</li>
    <li><b>Limitations shared by both:</b> lower tonnage ceiling than gas splitters, tied to an outlet, longer cycle times than gas models.</li>
  </ul>

  <h2>Product summaries</h2>
  ${productSections}

  <h2>Buying advice</h2>
  <p>If you split light-to-moderate volumes of softer-to-medium wood within reach of an outlet and want to avoid engine noise and maintenance, either model in this roundup is a reasonable starting point — the deciding factor is usually single-handed control preference and whichever is more readily available at a price you're comfortable with. If you regularly split dense hardwood or large rounds, see our <a href="${url('/best-gas-log-splitters/')}">gas splitter roundup</a> instead.</p>

  <h2>FAQ</h2>
  <div class="faq-item"><h3>Can an electric log splitter handle oak or other hardwood?</h3><p>Within its rated diameter, yes — but at 6.5–7 tons, both models here will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter would.</p></div>
  <div class="faq-item"><h3>Do I need a special outlet for an electric log splitter?</h3><p>Both models specify a standard 115–120V household circuit, but draw close to a 15A breaker's limit — avoid running other high-draw tools on the same circuit while splitting.</p></div>
  <div class="faq-item"><h3>Is an electric splitter powerful enough for a rural property?</h3><p>It depends on your wood and volume. For light-to-moderate splitting of softer wood near a power source, yes. For large volumes of dense hardwood or remote splitting without power access, a gas model is usually the better fit — see our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">gas vs. electric comparison</a>.</p></div>

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/best-gas-log-splitters/')}">Best Gas Log Splitters</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/what-size-log-splitter-do-i-need/')}">What Size Log Splitter Do I Need?</a></li>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
  </ul>
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Electric Log Splitters for Homeowners',
    datePublished: publishedDate,
    dateModified: updatedDate,
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
      { '@type': 'Question', name: 'Can an electric log splitter handle oak or other hardwood?', acceptedAnswer: { '@type': 'Answer', text: 'Within its rated diameter, yes, but at 6.5–7 tons both models here will struggle more with large, dense, or knotty rounds than a higher-tonnage gas splitter.' } },
      { '@type': 'Question', name: 'Do I need a special outlet for an electric log splitter?', acceptedAnswer: { '@type': 'Answer', text: 'Both models specify a standard 115–120V household circuit but draw close to a 15A breaker\'s limit.' } },
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
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.85', changefreq: 'monthly' },
  };
};
