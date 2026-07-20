'use strict';

module.exports = function gasVsElectric(ctx) {
  const { layout } = ctx;
  const { url, esc } = layout;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const bodyHtml = `
<article class="article-wrap">
  <h1>Gas vs. Electric Log Splitter: The Real Difference</h1>
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>

  <p>Gas and electric log splitters solve the same problem with different tradeoffs. This compares the two categories generally — it does not claim that any specific machines were tested side by side. For specific verified models, see our <a href="${url('/reviews/')}">reviews</a>.</p>

  <h2>Typical power ranges</h2>
  <p>Gas splitters commonly range from roughly 20 to 35+ tons of splitting force, with towable commercial units going higher. Electric splitters are typically limited to around 5–10 tons because standard household circuits cap the motor size that's practical to run. If you regularly split large-diameter or very dense hardwood, that ceiling matters more than any other spec.</p>

  <h2>Portability</h2>
  <p>Gas splitters are self-contained — no cord, no outlet — and many models are built with tow packages for moving between job sites or across a large property. Electric splitters need to stay within reach of a grounded outlet and an appropriately rated extension cord, which limits where you can use one.</p>

  <h2>Noise and fumes</h2>
  <p>A gas engine is louder and produces exhaust, which matters if you're splitting near a house, a neighbor's property line, or in an enclosed space. Electric motors are quieter and produce no exhaust, making them a better fit for suburban lots or splitting near living spaces.</p>

  <h2>Electrical requirements</h2>
  <p>Electric splitters draw significant current — commonly in the 13–15 amp range — so check that your circuit and any extension cord are rated for continuous use at that draw. Running one on an undersized or overly long cord can cause voltage drop and reduced performance.</p>

  <h2>Maintenance</h2>
  <p>Gas splitters need the same upkeep as any small engine: oil changes, air filter checks, spark plug service, and fuel stabilization if stored over winter. Electric splitters skip engine maintenance entirely, but both types still need periodic hydraulic fluid and hose inspection — the power source only affects the engine side of maintenance, not the hydraulics.</p>

  <h2>Cold-weather considerations</h2>
  <p>Small gas engines can be harder to start in cold weather without fuel stabilizer and fresh fuel. Electric motors start reliably regardless of temperature, but hydraulic fluid thickens in the cold on any splitter, gas or electric, which can slow the cycle until the machine warms up — check your manufacturer's cold-weather guidance.</p>

  <h2>Expected use cases</h2>
  <ul>
    <li><b>Gas fits:</b> multiple cords per year, dense hardwood, remote or off-grid work, multi-site use.</li>
    <li><b>Electric fits:</b> light-to-moderate volume, softer wood, splitting near a house or garage, minimal maintenance tolerance.</li>
  </ul>

  <h2>Cost categories</h2>
  <p>We don't publish exact prices here since they change frequently and go stale fast — check the current price on each product's review page. In general, electric splitters in the lower tonnage range tend to sit at the budget end of the category, while higher-tonnage towable gas splitters sit at the higher end, with plenty of overlap in between depending on brand and features.</p>

  <h2>Advantages and disadvantages</h2>
  <table class="decision-table">
    <caption>Gas vs. electric at a glance</caption>
    <thead><tr><th scope="col">Factor</th><th scope="col">Gas</th><th scope="col">Electric</th></tr></thead>
    <tbody>
      <tr><th scope="row">Typical max tonnage</th><td>Higher (20–35+ tons)</td><td>Lower (roughly 5–10 tons)</td></tr>
      <tr><th scope="row">Portability</th><td>Go anywhere, often towable</td><td>Needs an outlet within cord range</td></tr>
      <tr><th scope="row">Noise / exhaust</th><td>Louder, produces exhaust</td><td>Quiet, no exhaust</td></tr>
      <tr><th scope="row">Maintenance</th><td>Engine service + hydraulics</td><td>Hydraulics only</td></tr>
      <tr><th scope="row">Cold starting</th><td>Can be harder without prep</td><td>Starts reliably</td></tr>
    </tbody>
  </table>

  <h2>Who should choose each type</h2>
  <p>Choose gas if you split several cords a year, work with dense hardwood, or need to move the splitter around a property without power access. Choose electric if you split lighter volumes of softer-to-medium wood within reach of an outlet and want to avoid engine maintenance and noise.</p>

  <div class="note-box">Not sure which fits your situation? <button type="button" class="btn btn-cta btn-sm" data-open-quiz style="margin-left:6px;">Take the 60-second quiz</button> or read the full <a href="${url('/buying-guide/')}">buying guide</a>.</div>

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/buying-guide/')}">Log Splitter Buying Guide</a></li>
    <li><a href="${url('/reviews/')}">All Reviews</a></li>
    <li><a href="${url('/maintenance/')}">Maintenance Basics</a></li>
  </ul>
</article>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gas vs. Electric Log Splitter: The Real Difference',
    datePublished: publishedDate,
    dateModified: updatedDate,
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical('/comparisons/gas-vs-electric-log-splitter/'),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: layout.canonical('/comparisons/') },
      { '@type': 'ListItem', position: 3, name: 'Gas vs. Electric', item: layout.canonical('/comparisons/gas-vs-electric-log-splitter/') },
    ],
  };

  return {
    path: '/comparisons/gas-vs-electric-log-splitter/',
    title: 'Gas vs. Electric Log Splitter: The Real Difference',
    description: 'A category-by-category comparison of gas and electric log splitters: power, portability, noise, maintenance, cold-weather behavior, and who should choose each.',
    activeNav: 'comparisons',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Comparisons', path: '/comparisons/' },
      { label: 'Gas vs. Electric', path: '/comparisons/gas-vs-electric-log-splitter/' },
    ],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'monthly' },
  };
};
