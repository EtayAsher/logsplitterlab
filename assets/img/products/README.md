# Product image storage — do not commit anything here without a compliant source

This directory holds **real product photos** once they're available through
an Amazon Associates–compliant path. It's separate from the illustrated
placeholders in `assets/img/` (e.g. `splitter-electric-yardmax.svg`) —
those stay where they are; they're not photos and aren't governed by this
convention.

See **OWNER_SETUP.md §3** for the full walkthrough (compliant image
sources, exact `products.js` fields to set, optimization targets). This
file is the folder-structure reference.

## Layout

One subdirectory per product, named after that product's `id` in
`tools/data/products.js` — this keeps the mapping from product to image
files unambiguous and lets a single product hold multiple images (front,
detail shots, in-use) later without inventing a new naming scheme.

```
assets/img/products/
  <product-id>/
    hero.jpg     required — universally-supported fallback (also the <img> src)
    hero.webp    recommended — smaller, ~95% browser support
    hero.avif    optional — smallest, newer format, still-growing support
```

Example, once WEN 56208 has a real photo:

```
assets/img/products/wen-56208/
  hero.jpg
  hero.webp
  hero.avif
```

Additional images for the same product (if ever needed) follow the same
pattern: `detail-1.jpg`, `in-use.jpg`, etc. — never reuse a filename across
products, since the directory name already disambiguates.

## Wiring a product to its images

In `tools/data/products.js`, alongside the existing `imageMode` /
`imageAlt` / `imageSourceNote` fields:

```js
imageSrc: '/assets/img/products/wen-56208/hero.jpg',       // required — fallback <img> src
imageSrcWebp: '/assets/img/products/wen-56208/hero.webp',  // optional
imageSrcAvif: '/assets/img/products/wen-56208/hero.avif',  // optional
imageWidth: 800,   // must match hero.jpg's real pixel dimensions
imageHeight: 600,
```

`productImage()` in `tools/lib/components.js` automatically renders a
`<picture>` element with AVIF/WebP `<source>`s ahead of the JPG `<img>`
fallback when `imageSrcAvif`/`imageSrcWebp` are present — no other file
needs to change. If neither optional field is set (the case for every
product today), it renders a plain `<img>`, exactly as before.

`node tools/check-links.js` validates that every `imageSrc`,
`imageSrcWebp`, and `imageSrcAvif` path actually resolves to a file on
disk before you deploy.
