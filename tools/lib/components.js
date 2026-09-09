// Reusable HTML fragments shared across page builders.
'use strict';

const { esc } = require('./layout');
const affiliateLinks = require('../data/affiliate-links');
const config = require('../data/site-config');
const author = require('../data/author');

// Renders the commercial CTA for a product. Until a real, enabled Amazon
// Associates link is configured in tools/data/affiliate-links.js, this
// always renders a disabled control — never a fake href="#" and never a
// live-looking button pointing nowhere real.
function affiliateButton(product, opts) {
  opts = opts || {};
  // Dense grid/table contexts (opts.small — product cards, comparison
  // tables, best-of quick picks) use a calmer amber-outline treatment so a
  // page full of cards doesn't read as a wall of solid buy buttons. The
  // single-focus contexts (a review page's hero CTA, a best-of roundup's
  // per-product section) keep the solid, higher-emphasis button, since
  // that's the one place per page a strong purchase CTA is appropriate.
  const cls = 'btn ' + (opts.small ? 'btn-cta-outline btn-sm' : 'btn-cta');
  const entry = affiliateLinks[product.id];

  if (!entry || !entry.enabled || (!entry.taggedUrl && !entry.directUrl)) {
    return `<button type="button" class="${cls} is-disabled" disabled aria-disabled="true" title="Affiliate link not yet configured for this product">Amazon link not yet added</button>`;
  }

  let href = entry.taggedUrl;
  if (!href) {
    href = entry.directUrl;
    if (config.amazonAssociatesTag && href.indexOf('tag=') === -1) {
      href += (href.indexOf('?') === -1 ? '?' : '&') + 'tag=' + encodeURIComponent(config.amazonAssociatesTag);
    }
  }

  const label = entry.ctaLabel || 'Check Price on Amazon';
  return `<a class="${cls}" href="${esc(href)}" rel="sponsored nofollow noopener noreferrer" target="_blank" data-affiliate-click data-product-id="${esc(product.id)}" data-cta-position="${esc(opts.position || 'unspecified')}">${esc(label)}<span class="visually-hidden"> for ${esc(product.name)} (opens in a new tab)</span></a>`;
}

function typePill(typeLabel) {
  // Subtle Electric/Gas visual cue (sage vs. amber/rust) layered onto the
  // existing neutral pill — falls back to the plain style for any other
  // label (e.g. a future "Manual" type) rather than guessing a color.
  const key = String(typeLabel || '').toLowerCase();
  const modifier = key === 'electric' ? ' type-pill-electric' : key === 'gas' ? ' type-pill-gas' : '';
  return `<span class="type-pill${modifier}">${esc(typeLabel)}</span>`;
}

// Renders a product's configured image. Every product currently ships with
// imageMode: 'generic-placeholder' — see tools/data/products.js field
// reference and README.md "Product images" for how an owner swaps this for
// an authorized-amazon, licensed-manufacturer, or owner-uploaded image.
// Renders a product's image. Every product today ships as a single
// `imageSrc` SVG illustration, so this returns a plain <img> for all of
// them. Once a product has a real photo, adding `imageSrcAvif` and/or
// `imageSrcWebp` to its products.js record (alongside the existing
// `imageSrc`, kept as the universally-supported JPG/PNG fallback) is
// enough to switch that one product to a <picture> element with modern-
// format sources — no template or CSS changes needed. See
// assets/img/products/README.md and OWNER_SETUP.md §3.
function productImage(p, layoutUrl) {
  const img = `<img src="${layoutUrl(p.imageSrc)}" alt="${esc(p.imageAlt)}" width="${p.imageWidth}" height="${p.imageHeight}" loading="lazy">`;
  const picture = (!p.imageSrcAvif && !p.imageSrcWebp) ? img : (() => {
    const sources =
      (p.imageSrcAvif ? `<source srcset="${layoutUrl(p.imageSrcAvif)}" type="image/avif">` : '') +
      (p.imageSrcWebp ? `<source srcset="${layoutUrl(p.imageSrcWebp)}" type="image/webp">` : '');
    return `<picture>${sources}${img}</picture>`;
  })();
  // Placeholder images say so, visibly and to assistive tech — the goal is
  // to read as "we know this is a stand-in" rather than as a real product
  // photo. Disappears automatically once a product switches to a real
  // photo (imageMode other than 'generic-placeholder').
  const badge = p.imageMode === 'generic-placeholder'
    ? '<span class="illustration-badge">Illustration</span>'
    : '';
  return picture + badge;
}

// Shared product card used across the homepage and Reviews index, so both
// stay visually and structurally consistent as products are added.
//
// Built for scanning, not reading: visual -> brand/type -> name -> a
// couple of verified facts -> one "best for" line -> one trade-off line ->
// actions. Every field below is an existing verified value from
// products.js (typeLabel, tonnage, maxLogDiameterIn/maxLogLengthIn,
// suitableUseSummary, limitationsSummary) — nothing here is invented or
// newly derived. Root class stays .review-card (with data-type) since
// assets/js/reviews-filter.js queries it directly.
function productCard(p, opts) {
  opts = opts || {};
  const layoutUrl = opts.url;
  const reviewHref = layoutUrl(`/reviews/${p.id}/`);

  // A compact fact line: tonnage and power source always exist; the one
  // capacity figure shown prefers diameter (usually the more decision-
  // relevant constraint) and falls back to length, or is omitted entirely
  // when neither is confirmed (see the PROYAMA entry) rather than guessed.
  const capacityFact = p.maxLogDiameterIn
    ? `Up to ${p.maxLogDiameterIn} in. dia`
    : (p.maxLogLengthIn ? `Up to ${p.maxLogLengthIn} in. length` : null);
  const facts = [`${p.tonnage}T`, esc(p.typeLabel), capacityFact ? esc(capacityFact) : null].filter(Boolean);

  return `
    <article class="review-card" data-type="${esc(p.type)}">
      <a class="pcard-media" href="${reviewHref}" tabindex="-1" aria-hidden="true">${productImage(p, layoutUrl)}</a>
      <div class="pcard-body">
        <p class="pcard-kicker"><span class="pcard-brand">${esc(p.brand)}</span><span class="pcard-dot" aria-hidden="true">&middot;</span><span class="pcard-type pcard-type-${esc(p.type)}">${esc(p.typeLabel)}</span></p>
        <h3 class="pcard-name"><a href="${reviewHref}">${esc(p.name)}</a></h3>
        <p class="pcard-facts">${facts.join('<span class="sep">&middot;</span>')}</p>
        <p class="pcard-line"><span class="pcard-label">Best for</span>${esc(p.suitableUseSummary)}</p>
        <p class="pcard-line pcard-tradeoff"><span class="pcard-label">Trade-off</span>${esc(p.limitationsSummary)}</p>
        <div class="pcard-actions">
          <a href="${reviewHref}" class="btn btn-dark-outline btn-sm">Read Review</a>
          ${affiliateButton(p, { small: true, position: opts.position || 'product-card' })}
        </div>
        ${p.verifiedDate ? `<p class="pcard-verified">Verified ${esc(p.verifiedDate)}</p>` : ''}
      </div>
    </article>`;
}

// Featured product row — the homepage's curated-picks register, distinct
// from productCard()'s dense catalog-browsing register: larger media, an
// editorial ordinal, and best-for/trade-off promoted to their own labeled
// column instead of clamped lines. Same verified fields as productCard —
// nothing invented — just given more room because there are only ever a
// handful of these on a page.
function featureRow(p, opts) {
  opts = opts || {};
  const layoutUrl = opts.url;
  const reviewHref = layoutUrl(`/reviews/${p.id}/`);
  const capacityFact = p.maxLogDiameterIn
    ? `Up to ${p.maxLogDiameterIn} in. dia`
    : (p.maxLogLengthIn ? `Up to ${p.maxLogLengthIn} in. length` : null);
  const facts = [`${p.tonnage}T`, esc(p.typeLabel), capacityFact ? esc(capacityFact) : null].filter(Boolean);
  const num = String(opts.index || 1).padStart(2, '0');

  return `
    <article class="feature-row" data-type="${esc(p.type)}">
      <span class="feature-num" aria-hidden="true">${num}</span>
      <a class="feature-media" href="${reviewHref}" tabindex="-1" aria-hidden="true">${productImage(p, layoutUrl)}</a>
      <div class="feature-body">
        <div class="feature-main">
          <p class="feature-kicker"><span class="pcard-brand">${esc(p.brand)}</span><span class="pcard-dot" aria-hidden="true">&middot;</span><span class="pcard-type-${esc(p.type)}">${esc(p.typeLabel)}</span></p>
          <h3 class="feature-name"><a href="${reviewHref}">${esc(p.name)}</a></h3>
          <p class="feature-facts">${facts.join('<span class="sep">&middot;</span>')}</p>
          <div class="feature-actions">
            <a href="${reviewHref}" class="btn btn-dark-outline btn-sm">Read Review</a>
            ${affiliateButton(p, { small: true, position: opts.position || 'feature-row' })}
          </div>
        </div>
        <div class="feature-side">
          <span class="feature-side-label">Best for</span>
          <p>${esc(p.suitableUseSummary)}</p>
          <span class="feature-side-label">Trade-off</span>
          <p>${esc(p.limitationsSummary)}</p>
        </div>
      </div>
    </article>`;
}

// Homepage / comparisons editorial table — verified specs only, no ratings,
// no live-looking prices.
function comparisonTable(products, opts) {
  opts = opts || {};
  const rows = products.map((p) => `
    <tr>
      <td><span class="prod-name">${esc(p.name)}</span><div class="review-model">Model ${esc(p.model)}</div></td>
      <td>${esc(p.tonnage)}T</td>
      <td>${typePill(p.typeLabel)}</td>
      <td>${p.cycleTimeSeconds ? p.cycleTimeSeconds + 's' : 'Not published'}</td>
      <td>${affiliateButton(p, { small: true, position: 'comparison-table' })}</td>
    </tr>`).join('');

  return `
<p class="article-meta">${esc(config.amazonDisclosureShort)}</p>
<div class="table-scroll-wrap">
  <p class="scroll-hint">Scroll sideways to see all columns &rarr;</p>
  <div class="table-wrap">
    <table class="compare">
      <caption>${esc(opts.caption || 'Verified log splitter specifications')}</caption>
      <thead><tr><th scope="col">Product</th><th scope="col">Tonnage</th><th scope="col">Type</th><th scope="col">Cycle time</th><th scope="col">Where to buy</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</div>
<p class="article-meta">Specifications checked against manufacturer and retailer listings; see each review for sources.</p>`;
}

function specTable(p) {
  const rows = [
    ['Model', p.model],
    ['Power source', p.typeLabel],
    ['Tonnage', p.tonnage + ' tons'],
    ['Engine / motor', p.engine],
    ['Cycle time', p.cycleTimeSeconds ? p.cycleTimeSeconds + ' seconds' : null],
    ['Max log length', p.maxLogLengthIn ? p.maxLogLengthIn + ' in' : null],
    ['Max log diameter', p.maxLogDiameterIn ? p.maxLogDiameterIn + ' in' : null],
    ['Max log weight', p.maxLogWeightLb ? p.maxLogWeightLb + ' lb' : null],
    ['Orientation', p.orientation],
    ['Towable', p.towable === true ? 'Yes' : (p.towable === false ? 'No' : null)],
    ['Warranty', p.warranty],
  ].filter((r) => r[1] != null);

  const trs = rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td></tr>`).join('');
  return `<table class="spec-table"><caption>${esc(p.brand)} ${esc(p.model)} — verified specifications</caption><tbody>${trs}</tbody></table>`;
}

function sourceNotes(p) {
  const links = p.sourceUrls.map((u) => `<li><a href="${esc(u)}" rel="nofollow noopener noreferrer" target="_blank">${esc(u)}</a></li>`).join('');
  return `
<div class="source-notes">
  <p><strong>Source notes:</strong> Specifications last checked ${esc(p.verifiedDate)} against:</p>
  <ul>${links}</ul>
  ${p.notes ? `<p>${esc(p.notes)}</p>` : ''}
</div>`;
}

// Table of contents for long-form articles (10+ h2 sections). Sections is
// an array of {id, label} matching the article's actual <h2 id="..."> tags
// — keep them in sync if headings change. Reuses the same .guide-toc CSS
// already used on the Buying Guide, so this isn't a new visual pattern.
function articleToc(sections) {
  const items = sections.map((s) => `<li><a href="#${esc(s.id)}">${esc(s.label)}</a></li>`).join('');
  return `<nav class="guide-toc" aria-label="Table of contents"><h2>In this article</h2><ul>${items}</ul></nav>`;
}

// Article byline: "By Etay Asher", linking to the author page. Used in
// place of the generic "Published by LogSplitterLab" line.
function byline(layoutUrl) {
  return `By <a href="${layoutUrl('/author/etay-asher/')}">${esc(author.name)}</a>`;
}

// Author box shown at the end of every article-type page.
function authorBox(layoutUrl) {
  return `
<div class="author-box">
  <img src="${layoutUrl(author.avatarSrc)}" alt="${esc(author.avatarAlt)}" width="${author.avatarWidth / 2}" height="${author.avatarHeight / 2}" loading="lazy" class="author-box-avatar">
  <div class="author-box-body">
    <p class="author-box-name"><a href="${layoutUrl('/author/etay-asher/')}">${esc(author.name)}</a></p>
    <p class="author-box-role">${esc(author.role)}</p>
    <p class="author-box-bio">${esc(author.shortBio)}</p>
  </div>
</div>`;
}

// Person schema — reused on the author page and appended to every
// article's JSON-LD stack so AI/search engines can link content back to a
// verifiable author entity.
function personJsonLd(layoutCanonical) {
  const sameAs = Object.values(author.links).filter((v) => typeof v === 'string' && v.startsWith('http'));
  const obj = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: layoutCanonical('/author/etay-asher/'),
    jobTitle: author.role,
    worksFor: { '@type': 'Organization', name: 'LogSplitterLab' },
  };
  if (sameAs.length) obj.sameAs = sameAs;
  return obj;
}

module.exports = {
  affiliateButton, typePill, comparisonTable, specTable, sourceNotes, productImage, productCard, featureRow,
  byline, authorBox, personJsonLd, articleToc,
};
