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
  const cls = 'btn btn-cta' + (opts.small ? ' btn-sm' : '');
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
  return `<span class="type-pill">${esc(typeLabel)}</span>`;
}

// Renders a product's configured image. Every product currently ships with
// imageMode: 'generic-placeholder' — see tools/data/products.js field
// reference and README.md "Product images" for how an owner swaps this for
// an authorized-amazon, licensed-manufacturer, or owner-uploaded image.
function productImage(p, layoutUrl) {
  return `<img src="${layoutUrl(p.imageSrc)}" alt="${esc(p.imageAlt)}" width="${p.imageWidth}" height="${p.imageHeight}" loading="lazy">`;
}

// Shared product card used on both the homepage "Compare Verified Models"
// section and the reviews index, so the two stay visually and structurally
// consistent as products are added.
function productCard(p, opts) {
  opts = opts || {};
  const layoutUrl = opts.url;
  const reviewHref = layoutUrl(`/reviews/${p.id}/`);
  return `
    <div class="review-card" data-type="${esc(p.type)}">
      <div class="review-thumb">
        ${typePill(p.typeLabel)}
        ${productImage(p, layoutUrl)}
      </div>
      <div class="review-body">
        <h3>${esc(p.name)}</h3>
        <p class="review-model">Model ${esc(p.model)} &middot; ${p.tonnage}T &middot; ${esc(p.typeLabel)}</p>
        <p class="review-summary">${esc(p.suitableUseSummary)}</p>
        <p class="review-limitation"><b>Key limitation:</b> ${esc(p.limitationsSummary)}</p>
        <div class="review-actions">
          <a href="${reviewHref}" class="btn btn-dark-outline btn-sm">Read Review</a>
          ${affiliateButton(p, { small: true, position: opts.position || 'product-card' })}
        </div>
      </div>
    </div>`;
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
      <td>${p.cycleTimeSeconds}s</td>
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
    ['Cycle time', p.cycleTimeSeconds + ' seconds'],
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
  affiliateButton, typePill, comparisonTable, specTable, sourceNotes, productImage, productCard,
  byline, authorBox, personJsonLd, articleToc,
};
