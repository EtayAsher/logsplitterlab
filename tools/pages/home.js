'use strict';

module.exports = function home(ctx) {
  const { products, components, layout } = ctx;
  const { url, esc } = layout;
  const { comparisonTable } = components;

  const bodyHtml = `
<section class="hero">
  <div class="hero-inner">
    <span class="hero-kicker">Research-based guides for homeowners</span>
    <h1>Find the Log Splitter That Actually Earns Its Keep</h1>
    <p class="sub">We compare specifications from manufacturers and retailers so you can pick a gas, electric, or manual log splitter that matches how much wood you actually split.</p>
    <div class="hero-actions">
      <a href="${url('/buying-guide/')}" class="btn btn-cta">Read the Buying Guide</a>
      <button type="button" class="btn btn-outline" data-open-quiz>Take the 60-Second Quiz</button>
    </div>
  </div>
</section>

<section class="block">
  <div class="section-head">
    <span class="eyebrow">Start Here</span>
    <h2>Choose by Power Source</h2>
    <p>Three questions to answer before you spend a dollar.</p>
  </div>
  <div class="choose-grid">
    <div class="choose-card">
      <h3>How hard is your wood?</h3>
      <p>Denser hardwoods generally need more splitting force. As a rough starting point:</p>
      <ul class="wood-list">
        <li>Pine, cedar, poplar <b>4–7 tons</b></li>
        <li>Oak, maple, ash <b>10–20 tons</b></li>
        <li>Elm, sycamore, knotty rounds <b>20+ tons</b></li>
      </ul>
    </div>
    <div class="choose-card">
      <h3>Gas, electric, or manual?</h3>
      <p><b>Gas</b> splitters go anywhere and handle the largest rounds, at the cost of noise and engine upkeep. <b>Electric</b> splitters are quieter and lower-maintenance but need an outlet and top out around 7–10 tons. <b>Manual</b> hydraulic splitters need no fuel or power at all, but rely on your own effort.</p>
    </div>
    <div class="choose-card">
      <h3>How fast do you need to work?</h3>
      <p>Cycle time is how long the ram takes to extend and retract. A shorter cycle time means more logs split per hour — worth comparing directly if you're processing a full cord in a weekend.</p>
    </div>
  </div>
</section>

<section class="block" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Verified Specifications</span>
    <h2>Log Splitters We've Checked</h2>
    <p>Specs below are confirmed against manufacturer pages and major retailer listings — not estimated or copied from marketing copy.</p>
  </div>
  ${comparisonTable(products, { caption: 'Verified log splitter specifications' })}
</section>

<section class="block" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">What Actually Matters</span>
    <h2>Factors That Should Drive Your Decision</h2>
    <p>Tonnage gets all the attention, but it's one of several factors that determine whether a splitter fits your situation.</p>
  </div>
  <div class="factor-grid">
    <div class="factor-card"><h3>Wood species and condition</h3><p>Green (unseasoned) wood and knotty or twisted grain both resist splitting more than dry, straight-grained wood of the same species.</p></div>
    <div class="factor-card"><h3>Log diameter</h3><p>A machine rated for a given tonnage may still struggle with an oversized round regardless of species — check the manufacturer's max diameter rating.</p></div>
    <div class="factor-card"><h3>Splitting volume</h3><p>Occasional splitting favors simplicity and low cost; a full cord or more per year favors speed and durability.</p></div>
    <div class="factor-card"><h3>Cycle time</h3><p>Directly affects how many logs you process per hour — compare it the same way you'd compare tonnage.</p></div>
    <div class="factor-card"><h3>Vertical vs. horizontal operation</h3><p>Vertical operation avoids lifting heavy rounds onto a beam; horizontal is often faster to load for small-to-medium logs.</p></div>
    <div class="factor-card"><h3>Portability</h3><p>Towable frames matter if you're splitting at multiple sites or a property without a flat work area near storage.</p></div>
    <div class="factor-card"><h3>Electrical access</h3><p>Electric splitters need a grounded outlet and an appropriately rated extension cord within reach of where you'll work.</p></div>
    <div class="factor-card"><h3>Maintenance requirements</h3><p>Gas units need engine service; all hydraulic splitters need periodic fluid and hose checks regardless of power source.</p></div>
  </div>
</section>

<section class="quiz-banner">
  <h2>Still not sure? Take the 60-second match quiz.</h2>
  <p>Answer 5 questions about your wood and workload — we'll recommend the power source that fits your situation and explain why.</p>
  <button type="button" class="btn btn-cta" data-open-quiz>Start the Quiz</button>
  <noscript><p style="margin-top:16px;">The interactive quiz requires JavaScript. In the meantime, see our <a href="${url('/buying-guide/')}" style="color:#f0c27f;text-decoration:underline;">Buying Guide</a>.</p></noscript>
</section>

<section class="block">
  <div class="section-head">
    <span class="eyebrow">Latest Guides</span>
    <h2>Start Researching</h2>
  </div>
  <div class="comp-grid latest-guides-grid">
    <div class="comp-card">
      <span class="eyebrow">Comparison</span>
      <h3>Gas vs. Electric Log Splitter</h3>
      <p>A category-by-category breakdown of power, portability, noise, and maintenance.</p>
      <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}" class="btn btn-dark-outline btn-sm">Read Comparison</a>
    </div>
    <div class="comp-card">
      <span class="eyebrow">Buying Guide</span>
      <h3>The Complete Log Splitter Buying Guide</h3>
      <p>Tonnage, log diameter, cycle time, safety, and a buying checklist in one place.</p>
      <a href="${url('/buying-guide/')}" class="btn btn-dark-outline btn-sm">Read the Guide</a>
    </div>
    <div class="comp-card">
      <span class="eyebrow">Maintenance</span>
      <h3>Log Splitter Maintenance Basics</h3>
      <p>Pre-use inspection, hydraulic checks, and seasonal storage guidance.</p>
      <a href="${url('/maintenance/')}" class="btn btn-dark-outline btn-sm">Read the Guide</a>
    </div>
  </div>
</section>

<section class="block" style="padding-top:0;">
  <div class="section-head">
    <span class="eyebrow">Transparency</span>
    <h2>How We Review</h2>
    <p>We check manufacturer manuals and specification sheets, compare models on the factors above, and note where information couldn't be confirmed. We do not publish star ratings or "top pick" badges without a documented methodology, and we do not claim hands-on testing unless it happened. <a href="${url('/how-we-review/')}">Read our full methodology</a>.</p>
  </div>
</section>

<section class="block" style="padding-top:0;">
  <div class="section-head">
    <h2>Frequently Asked Questions</h2>
  </div>
  <div class="article-wrap" style="padding-top:0;">
    <div class="faq-item">
      <h3>What tonnage log splitter do I need?</h3>
      <p>It depends on wood species, diameter, moisture content, and grain — not species alone. Our <a href="${url('/buying-guide/')}#g-tonnage">tonnage guidance</a> covers this in detail.</p>
    </div>
    <div class="faq-item">
      <h3>Is a gas or electric log splitter better?</h3>
      <p>Neither is universally better — gas offers more power and portability, electric offers quieter, lower-maintenance operation near a power source. See our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">full comparison</a>.</p>
    </div>
    <div class="faq-item">
      <h3>Do affiliate links cost me anything extra?</h3>
      <p>No. If you buy through a link on this site, we may earn a commission at no additional cost to you. See our <a href="${url('/affiliate-disclosure/')}">Affiliate Disclosure</a>.</p>
    </div>
  </div>
</section>
`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What tonnage log splitter do I need?',
        acceptedAnswer: { '@type': 'Answer', text: 'It depends on wood species, diameter, moisture content, and grain — not species alone. See the buying guide for detailed guidance.' },
      },
      {
        '@type': 'Question',
        name: 'Is a gas or electric log splitter better?',
        acceptedAnswer: { '@type': 'Answer', text: 'Neither is universally better. Gas offers more power and portability; electric offers quieter, lower-maintenance operation near a power source.' },
      },
      {
        '@type': 'Question',
        name: 'Do affiliate links cost me anything extra?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. If you buy through a link on this site, LogSplitterLab may earn a commission at no additional cost to you.' },
      },
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LogSplitterLab',
    url: layout.canonical('/'),
  };

  return {
    path: '/',
    title: 'LogSplitterLab — Log Splitter Reviews, Comparisons & Buying Guides',
    description: 'Research-based log splitter guides and comparisons for homeowners and rural property owners. Compare gas, electric, and manual splitters by verified specifications.',
    activeNav: null,
    bodyHtml,
    jsonLd: [websiteJsonLd, faqJsonLd],
    sitemap: { priority: '1.0', changefreq: 'weekly' },
  };
};
