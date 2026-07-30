'use strict';

// Browse-by-brand index. Fully data-driven from tools/data/products.js —
// grouping, counts, and links all derive from the current catalog, so this
// page scales to any number of brands/products without editing this file.
module.exports = function brands(ctx) {
  const { products, layout, components } = ctx;
  const { url, esc } = layout;
  const { typePill, personJsonLd } = components;

  const byBrand = new Map();
  products.forEach((p) => {
    if (!byBrand.has(p.brand)) byBrand.set(p.brand, []);
    byBrand.get(p.brand).push(p);
  });
  const brandNames = Array.from(byBrand.keys()).sort((a, b) => a.localeCompare(b));

  const brandSections = brandNames.map((brand) => {
    const items = byBrand.get(brand)
      .slice()
      .sort((a, b) => a.tonnage - b.tonnage)
      .map((p) => `
        <li class="brand-product-row">
          <a href="${url(`/reviews/${p.id}/`)}">${esc(p.name)}</a>
          <span class="review-model">Model ${esc(p.model)} &middot; ${p.tonnage}T &middot; ${typePill(p.typeLabel)}</span>
        </li>`).join('');
    return `
    <div class="guide-section" id="brand-${esc(brand.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}">
      <h2>${esc(brand)}</h2>
      <ul class="brand-product-list">${items}</ul>
    </div>`;
  }).join('');

  const brandJumpLinks = brandNames.map((brand) => (
    `<li><a href="#brand-${esc(brand.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}">${esc(brand)}</a></li>`
  )).join('');

  const bodyHtml = `
<section class="page-hero">
  <h1>Browse Log Splitters by Brand</h1>
  <p>Every brand in our verified catalog, with model, tonnage, and power source at a glance.</p>
</section>
<div class="article-wrap" style="padding-bottom:0;">
  <p>Jump to a brand: </p>
  <ul class="brand-jump-list">${brandJumpLinks}</ul>
</div>
<div class="guide-wrap">
  ${brandSections}
  <h2>Related</h2>
  <ul>
    <li><a href="${url('/reviews/')}">All Reviews</a></li>
    <li><a href="${url('/best-electric-log-splitters/')}">Best Electric Log Splitters</a></li>
    <li><a href="${url('/best-gas-log-splitters/')}">Best Gas Log Splitters</a></li>
    <li><a href="${url('/comparisons/')}">Comparisons</a></li>
  </ul>
</div>`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: layout.canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Brands', item: layout.canonical('/brands/') },
    ],
  };

  return {
    path: '/brands/',
    title: 'Log Splitter Brands',
    description: 'Browse every log splitter brand in our verified catalog by model, tonnage, and power source.',
    activeNav: 'brands',
    breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Brands', path: '/brands/' }],
    jsonLd: [breadcrumbJsonLd, personJsonLd(layout.canonical)],
    bodyHtml,
    sitemap: { priority: '0.7', changefreq: 'weekly' },
  };
};
