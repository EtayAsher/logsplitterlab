'use strict';

module.exports = function maintenance(ctx) {
  const { layout } = ctx;
  const { url, esc } = layout;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const bodyHtml = `
<section class="page-hero">
  <h1>Log Splitter Maintenance</h1>
  <p>General upkeep concepts that apply across most hydraulic log splitters.</p>
</section>
<div class="guide-wrap">
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>

  <div class="note-box">Maintenance schedules and fluid specifications vary by model. This page explains the concepts you should be checking — your manufacturer's manual is the authoritative source for exact fluid types, intervals, and torque specs on your specific machine.</div>

  <div class="guide-section" id="m-inspect">
    <h2>Pre-use inspection</h2>
    <p>Before each use, walk around the machine: check for visible hydraulic fluid leaks, confirm the wedge and beam are free of debris, and make sure any tow hitch or wheel hardware is secure if you moved the splitter to get there.</p>
  </div>

  <div class="guide-section" id="m-leaks">
    <h2>Checking for hydraulic leaks</h2>
    <p>Look along hose fittings, the cylinder rod, and the pump housing for wet spots or fluid residue. A slow leak often shows up as a damp film before it becomes a visible drip — catching it early avoids a bigger repair.</p>
  </div>

  <div class="guide-section" id="m-fluid">
    <h2>Hydraulic fluid</h2>
    <p>Check fluid level against your manual's specification — low fluid can cause spongy or reduced ram force. Fluid type and change interval vary by manufacturer; do not assume one universal fluid works across brands.</p>
  </div>

  <div class="guide-section" id="m-filters">
    <h2>Filters</h2>
    <p>Some splitters use a hydraulic filter or strainer that needs periodic cleaning or replacement per the manual. A clogged filter can restrict flow and slow the cycle.</p>
  </div>

  <div class="guide-section" id="m-wedge">
    <h2>Wedge inspection</h2>
    <p>A dull or nicked wedge edge makes splitting harder and can cause logs to bind rather than split cleanly. Some manufacturers allow sharpening the wedge edge — check your manual before filing or grinding it.</p>
  </div>

  <div class="guide-section" id="m-engine">
    <h2>Engine maintenance (gas units)</h2>
    <p>Follow the engine manufacturer's schedule for oil changes, air filter cleaning or replacement, and spark plug service. Use fresh fuel each season and add a fuel stabilizer if the machine will sit for more than a few weeks.</p>
  </div>

  <div class="guide-section" id="m-cord">
    <h2>Power cord and plug inspection (electric units)</h2>
    <p>Check the cord and plug for cracks, exposed wire, or damaged prongs before each use. Confirm any extension cord you use matches the gauge and length the manufacturer recommends for the machine's amp draw.</p>
  </div>

  <div class="guide-section" id="m-tow">
    <h2>Tire and hitch inspection (towable units)</h2>
    <p>Check tire pressure and condition, and confirm the hitch coupler and safety chains (if equipped) are secure before towing. Follow the manufacturer's maximum tow speed rating.</p>
  </div>

  <div class="guide-section" id="m-clean">
    <h2>Cleaning</h2>
    <p>Clear wood debris and sap buildup from the beam, wedge, and control levers after use. Debris left on moving parts can interfere with operation over time.</p>
  </div>

  <div class="guide-section" id="m-storage">
    <h2>Storage and winterization</h2>
    <p>Store the splitter under cover if possible with the ram retracted. For gas units, stabilize or drain fuel before long-term storage per the engine manual. In freezing climates, check whether your manufacturer recommends a cold-weather-rated hydraulic fluid.</p>
  </div>

  <div class="guide-section" id="m-service">
    <h2>Warning signs that call for professional service</h2>
    <ul>
      <li>Visible or persistent hydraulic fluid leaks</li>
      <li>Unusual noise from the pump or engine under load</li>
      <li>Ram force noticeably weaker than normal after a fluid top-off</li>
      <li>Engine that won't hold idle or repeatedly fails to start after basic troubleshooting</li>
      <li>Any damage to the frame, hitch, or hydraulic cylinder itself</li>
    </ul>
    <p>If you're not confident diagnosing a hydraulic or engine issue yourself, a small-engine or hydraulic equipment service center is the safer option than continuing to operate a machine with a suspected fault.</p>
  </div>

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/buying-guide/')}#g-safety">General safety guidance</a></li>
    <li><a href="${url('/reviews/')}">All Reviews</a></li>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
  </ul>
</div>`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Log Splitter Maintenance',
    datePublished: publishedDate,
    dateModified: updatedDate,
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical('/maintenance/'),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Maintenance', item: layout.canonical('/maintenance/') },
    ],
  };

  return {
    path: '/maintenance/',
    title: 'Log Splitter Maintenance Guide',
    description: 'General log splitter maintenance concepts: pre-use inspection, hydraulic fluid, engine and cord checks, storage, and warning signs that need professional service.',
    activeNav: 'maintenance',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Maintenance', path: '/maintenance/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.8', changefreq: 'monthly' },
  };
};
