// Reusable HTML fragments shared across page builders.
'use strict';

const { esc } = require('./layout');
const affiliateLinks = require('../data/affiliate-links');
const config = require('../data/site-config');

// Renders the commercial CTA for a product. Until a real Amazon Associates
// URL is configured in tools/data/affiliate-links.js, this always renders a
// disabled control — never a fake href="#".
function affiliateButton(product, opts) {
  opts = opts || {};
  const cls = 'btn btn-cta' + (opts.small ? ' btn-sm' : '');
  const rawUrl = affiliateLinks[product.id];

  if (!rawUrl) {
    return `<button type="button" class="${cls} is-disabled" disabled aria-disabled="true" title="Affiliate link not yet configured for this product">Amazon link coming soon</button>`;
  }

  let href = rawUrl;
  if (config.amazonAssociatesTag && href.indexOf('tag=') === -1) {
    href += (href.indexOf('?') === -1 ? '?' : '&') + 'tag=' + encodeURIComponent(config.amazonAssociatesTag);
  }

  return `<a class="${cls}" href="${esc(href)}" rel="sponsored nofollow noopener noreferrer" target="_blank" data-affiliate-click data-product-id="${esc(product.id)}">Check price on Amazon<span class="visually-hidden"> for ${esc(product.name)} (opens in a new tab)</span></a>`;
}

function typePill(typeLabel) {
  return `<span class="type-pill">${esc(typeLabel)}</span>`;
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
      <td>${affiliateButton(p, { small: true })}</td>
    </tr>`).join('');

  return `
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
<p class="article-meta">Specifications checked against manufacturer and retailer listings; see each review for sources. Affiliate links may earn us a commission at no additional cost to you.</p>`;
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

module.exports = { affiliateButton, typePill, comparisonTable, specTable, sourceNotes };
