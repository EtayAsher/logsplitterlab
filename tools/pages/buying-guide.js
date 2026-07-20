'use strict';

module.exports = function buyingGuide(ctx) {
  const { layout } = ctx;
  const { url, esc } = layout;
  const publishedDate = '2026-07-20';
  const updatedDate = '2026-07-20';

  const bodyHtml = `
<section class="page-hero">
  <h1>The Complete Log Splitter Buying Guide</h1>
  <p>Everything a first-time buyer needs to know before choosing a machine.</p>
</section>
<div class="guide-wrap">
  <p class="article-meta">Published ${esc(publishedDate)} &middot; Updated ${esc(updatedDate)} &middot; Published by LogSplitterLab</p>

  <nav class="guide-toc" aria-label="Table of contents">
    <h2>In this guide</h2>
    <ul>
      <li><a href="#g-intro">Introduction</a></li>
      <li><a href="#g-how">How hydraulic splitters work</a></li>
      <li><a href="#g-power">Power sources</a></li>
      <li><a href="#g-orientation">Horizontal vs. vertical operation</a></li>
      <li><a href="#g-tonnage">Tonnage — and why it isn't enough alone</a></li>
      <li><a href="#g-diameter">Log diameter and length</a></li>
      <li><a href="#g-wood">Green vs. seasoned wood</a></li>
      <li><a href="#g-grain">Straight-grained vs. knotty wood</a></li>
      <li><a href="#g-cycle">Cycle time</a></li>
      <li><a href="#g-controls">One-hand vs. two-hand controls</a></li>
      <li><a href="#g-portability">Portability and towing limitations</a></li>
      <li><a href="#g-cord">Extension cord considerations</a></li>
      <li><a href="#g-maintenance">Maintenance</a></li>
      <li><a href="#g-storage">Storage</a></li>
      <li><a href="#g-safety">Safety</a></li>
      <li><a href="#g-checklist">Buying checklist</a></li>
      <li><a href="#g-faq">FAQ</a></li>
    </ul>
  </nav>

  <div class="guide-section" id="g-intro">
    <h2>Introduction</h2>
    <p>A log splitter turns hours of swinging a maul into minutes of machine-assisted work. This guide covers the factors that actually determine whether a given splitter fits your situation — not just the headline tonnage number. Pair it with our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">gas vs. electric comparison</a> and the <a href="${url('/reviews/')}">verified specifications</a> for specific models.</p>
  </div>

  <div class="guide-section" id="g-how">
    <h2>How hydraulic splitters work</h2>
    <p>Most log splitters use a hydraulic ram to push a log through a fixed steel wedge. A pump (driven by a gas engine, an electric motor, or a hand lever on manual units) pressurizes hydraulic fluid, which extends the ram. Splitting force is expressed in tons — the maximum pushing force the ram can generate at full hydraulic pressure.</p>
  </div>

  <div class="guide-section" id="g-power">
    <h2>Power sources</h2>
    <div class="type-cards">
      <div class="type-card"><h3>Gas</h3><p>Most powerful and fully portable, at the cost of noise, exhaust, and engine maintenance. See our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">gas vs. electric comparison</a> for detail.</p></div>
      <div class="type-card"><h3>Electric</h3><p>Quiet and low-maintenance, but tied to an outlet and typically capped around 7–10 tons.</p></div>
      <div class="type-card"><h3>Manual</h3><p>No engine or motor — inexpensive and always ready, but relies entirely on your own hydraulic pump effort and is best suited to light, occasional use.</p></div>
    </div>
  </div>

  <div class="guide-section" id="g-orientation">
    <h2>Horizontal vs. vertical operation</h2>
    <p>Horizontal splitters sit the log flat and push it lengthwise into the wedge — easiest to load for small-to-medium rounds. Vertical operation lets the log stand upright, so you never have to lift a heavy round onto a beam, which matters for large-diameter wood. Several models support both, letting you choose per log.</p>
  </div>

  <div class="guide-section" id="g-tonnage">
    <h2>Tonnage — and why it isn't enough alone</h2>
    <p>Tonnage measures maximum splitting force, and it's a reasonable starting point:</p>
    <ul>
      <li><b>4–7 tons</b> — softwoods and occasional splitting (pine, cedar, poplar)</li>
      <li><b>10–20 tons</b> — most seasoned hardwoods for regular home heating (oak, maple, ash)</li>
      <li><b>20+ tons</b> — large-diameter rounds, knotty or green hardwood, or higher-volume processing</li>
    </ul>
    <p>But species alone doesn't determine how hard a log is to split. Moisture content, diameter, knots, and grain direction all matter as much as species — a large, knotty, green oak round can be harder to split than a smaller, dry, straight-grained one. Manufacturer tonnage ratings also aren't tested identically across brands, so treat tonnage as one input among several rather than the whole answer.</p>
  </div>

  <div class="guide-section" id="g-diameter">
    <h2>Log diameter and length</h2>
    <p>Check the manufacturer's maximum rated log diameter and length, not just tonnage — a machine can be rated for high tonnage and still have a beam or wedge too short for an oversized round. Compare this figure against the largest rounds you're realistically likely to split.</p>
  </div>

  <div class="guide-section" id="g-wood">
    <h2>Green vs. seasoned wood</h2>
    <p>Green (freshly cut, unseasoned) wood generally requires more force to split than dry, seasoned wood of the same species and size, because moisture adds resistance to the fiber. If you're splitting mostly green wood, consider sizing up in tonnage relative to what a seasoned-wood chart would suggest.</p>
  </div>

  <div class="guide-section" id="g-grain">
    <h2>Straight-grained vs. knotty wood</h2>
    <p>Straight-grained wood tends to split predictably along the grain. Knotty, twisted, or interlocked grain resists splitting regardless of species or tonnage rating, and can cause a log to bind on the wedge. No published tonnage chart accounts for this — it's a judgment call based on the specific rounds you're working with.</p>
  </div>

  <div class="guide-section" id="g-cycle">
    <h2>Cycle time</h2>
    <p>Cycle time is how long the ram takes to fully extend and retract. A shorter cycle time means more logs processed per hour — directly relevant if you're working through a full cord in a weekend. Compare this figure the same way you'd compare tonnage; see our <a href="${url('/reviews/')}">reviews</a> for verified cycle times on specific models.</p>
  </div>

  <div class="guide-section" id="g-controls">
    <h2>One-hand vs. two-hand controls</h2>
    <p>Two-hand controls require both hands on separate controls to operate the ram, which keeps hands away from the wedge as a safety measure and is standard on most gas splitters. Some compact electric splitters use single-handed lever operation instead — check the manufacturer's manual for exactly how the safety interlock works on any specific model before use.</p>
  </div>

  <div class="guide-section" id="g-portability">
    <h2>Portability and towing limitations</h2>
    <p>Towable splitters typically include a hitch coupler and DOT-rated tires with a maximum towing speed set by the manufacturer — confirm that figure and your tow vehicle's capability before towing on public roads. Non-towable models rely on integrated wheels for repositioning around a single property rather than highway transport.</p>
  </div>

  <div class="guide-section" id="g-cord">
    <h2>Extension cord considerations</h2>
    <p>Electric splitters draw significant current (commonly 13–15 amps). Using an undersized-gauge or overly long extension cord causes voltage drop, which can reduce motor performance or trip a breaker. Follow the manufacturer's cord gauge and maximum length recommendations rather than using whatever cord is on hand.</p>
  </div>

  <div class="guide-section" id="g-maintenance">
    <h2>Maintenance</h2>
    <p>All hydraulic splitters need periodic fluid level checks and hose inspection regardless of power source; gas models additionally need engine service. See our <a href="${url('/maintenance/')}">maintenance guide</a> for the general concepts — always follow your specific model's manual for fluid types and intervals, since these vary by manufacturer.</p>
  </div>

  <div class="guide-section" id="g-storage">
    <h2>Storage</h2>
    <p>Store the splitter under cover if possible, with the ram fully retracted to reduce rod exposure and corrosion risk. Gas models should have fuel stabilized or drained before extended storage per the engine manufacturer's guidance.</p>
  </div>

  <div class="guide-section" id="g-safety">
    <div class="safety-box">
      <h2>Safety</h2>
      <ul>
        <li>Always wear eye protection and sturdy, closed-toe footwear when operating a splitter.</li>
        <li>Keep hands clear of the wedge and ram path — never guide a splitting log by hand.</li>
        <li>Split one log at a time unless the machine is explicitly rated for multiple.</li>
        <li>Inspect hydraulic hoses and fittings for leaks before every use.</li>
        <li>Keep children and pets well outside the machine's working radius.</li>
        <li>This guidance is general. Always follow the exact operating and safety instructions in your specific model's manual — they take precedence over anything general written here.</li>
      </ul>
    </div>
  </div>

  <div class="guide-section" id="g-checklist">
    <h2>Buying checklist</h2>
    <ul>
      <li>What's the largest, densest round you're realistically likely to split?</li>
      <li>Do you have reliable outlet access where you'll be splitting, or do you need to go portable?</li>
      <li>How many cords per year — does cycle time matter to you?</li>
      <li>Do you need to tow the splitter between sites, or will it stay in one place?</li>
      <li>How much engine or hydraulic maintenance are you willing to take on?</li>
      <li>What's your budget, including any towing hardware or extension cords you might also need?</li>
    </ul>
    <p>Still deciding? <button type="button" class="btn btn-cta btn-sm" data-open-quiz>Take the 60-second quiz</button></p>
  </div>

  <div class="guide-section" id="g-faq">
    <h2>FAQ</h2>
    <div class="faq-item"><h3>How much tonnage do I actually need for firewood?</h3><p>For most home heating with seasoned hardwood, 10–20 tons handles the job comfortably — but diameter, moisture, and grain matter as much as the tonnage number. See the tonnage section above.</p></div>
    <div class="faq-item"><h3>Is a gas or electric log splitter better?</h3><p>Neither is universally better. Gas offers more power and portability; electric offers quieter, lower-maintenance operation near an outlet. See our <a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">full comparison</a>.</p></div>
    <div class="faq-item"><h3>What does "cycle time" mean?</h3><p>The time the ram takes to fully extend and retract. A shorter cycle time means more logs split per hour.</p></div>
    <div class="faq-item"><h3>Can I use a log splitter on green wood?</h3><p>Yes, though green wood generally resists splitting more than seasoned wood of the same species and size, which may call for a higher-tonnage machine.</p></div>
    <div class="faq-item"><h3>How do I maintain a log splitter?</h3><p>Check hydraulic fluid levels, inspect hoses for wear, and for gas models follow the engine manufacturer's oil and service schedule. See our <a href="${url('/maintenance/')}">maintenance guide</a> — always defer to your specific model's manual for exact intervals.</p></div>
  </div>

  <h2>Related guides</h2>
  <ul>
    <li><a href="${url('/comparisons/gas-vs-electric-log-splitter/')}">Gas vs. Electric Log Splitter</a></li>
    <li><a href="${url('/reviews/')}">All Reviews</a></li>
    <li><a href="${url('/maintenance/')}">Maintenance Basics</a></li>
  </ul>
</div>`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much tonnage do I actually need for firewood?', acceptedAnswer: { '@type': 'Answer', text: 'For most home heating with seasoned hardwood, 10–20 tons handles the job comfortably, but diameter, moisture, and grain matter as much as tonnage.' } },
      { '@type': 'Question', name: 'Is a gas or electric log splitter better?', acceptedAnswer: { '@type': 'Answer', text: 'Neither is universally better. Gas offers more power and portability; electric offers quieter, lower-maintenance operation near an outlet.' } },
      { '@type': 'Question', name: 'What does "cycle time" mean?', acceptedAnswer: { '@type': 'Answer', text: 'The time the ram takes to fully extend and retract. A shorter cycle time means more logs split per hour.' } },
      { '@type': 'Question', name: 'Can I use a log splitter on green wood?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, though green wood generally resists splitting more than seasoned wood of the same species and size.' } },
      { '@type': 'Question', name: 'How do I maintain a log splitter?', acceptedAnswer: { '@type': 'Answer', text: 'Check hydraulic fluid levels and hoses regularly, and for gas models follow the engine manufacturer\'s oil and service schedule.' } },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Complete Log Splitter Buying Guide',
    datePublished: publishedDate,
    dateModified: updatedDate,
    publisher: { '@type': 'Organization', name: 'LogSplitterLab' },
    mainEntityOfPage: layout.canonical('/buying-guide/'),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Buying Guide', item: layout.canonical('/buying-guide/') },
    ],
  };

  return {
    path: '/buying-guide/',
    title: 'Log Splitter Buying Guide',
    description: 'A complete log splitter buying guide covering power sources, tonnage, log diameter, cycle time, safety, and a buying checklist for homeowners.',
    activeNav: 'buying-guide',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Buying Guide', path: '/buying-guide/' }],
    ogType: 'article',
    jsonLd: [articleJsonLd, breadcrumbJsonLd, faqJsonLd],
    publishedDate, updatedDate,
    bodyHtml,
    sitemap: { priority: '0.9', changefreq: 'monthly' },
  };
};
