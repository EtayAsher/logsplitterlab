# LogSplitterLab

Source for [logsplitterlab.github.io](https://etayasher.github.io/logsplitterlab/) — a
research-based log splitter comparison site, deployed as a static site on
GitHub Pages.

## Project structure

```
tools/                 Build-time source. Not served — the generator reads
                        this and writes plain HTML into the repo root.
  build.js              The generator. Run with `node tools/build.js`.
  data/
    site-config.js       Canonical URL, base path, contact email, Amazon
                          Associates tag, GA4 ID, Search Console token —
                          the single place to change any of these.
    products.js           Verified product specifications + source URLs.
                          See "Verification rules" below before editing.
    affiliate-links.js    Per-product Amazon Associates URL (or null).
  lib/
    layout.js             Shared <head>/header/footer/page shell.
    components.js         Reusable fragments: comparison table, spec
                           table, affiliate button, source notes.
  pages/                  One file per page (or one template used for all
                           product reviews — see pages/review.js).

assets/
  css/styles.css         One shared stylesheet for every page.
  js/
    site.js               Mobile nav (progressive enhancement).
    quiz.js                Match quiz modal (progressive enhancement).
    reviews-filter.js       Reviews page gas/electric/manual filter.
  img/                    Local placeholder images. See "Images" below.

index.html, reviews/, comparisons/, buying-guide/, maintenance/, about/,
how-we-review/, contact/, affiliate-disclosure/, privacy-policy/, 404.html,
sitemap.xml, robots.txt, .nojekyll
                        GENERATED OUTPUT. Do not hand-edit these — edit the
                        corresponding file under tools/ and re-run the
                        build. Hand edits will be silently overwritten by
                        the next build.
```

## Local preview

No build tooling is required to preview — the output is already plain
HTML/CSS/JS. From the repo root:

```
node -e "require('http').createServer((req,res)=>{const fs=require('fs'),path=require('path');let p=req.url.split('?')[0];if(p.endsWith('/'))p+='index.html';const f=path.join(__dirname,p);fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('not found');return;}res.writeHead(200);res.end(d);});}).listen(8080,()=>console.log('http://127.0.0.1:8080/'))"
```

Then open `http://127.0.0.1:8080/`. Any static file server works too (e.g.
`npx serve`), as long as it serves directory-style URLs (`/reviews/` →
`reviews/index.html`).

Note: locally the site runs at the domain root, while on GitHub Pages it
runs under `/logsplitterlab/`. Internal links are generated with the base
path baked in (see `tools/data/site-config.js`), so a local preview at
`http://127.0.0.1:8080/` will 404 on internal links unless you either serve
the repo from a `/logsplitterlab/` subpath locally too, or temporarily set
`basePath: ''` in site-config.js and rebuild before previewing, then revert
before committing.

## How GitHub Pages paths are handled

The site is deployed as a GitHub Pages *project site*
(`https://etayasher.github.io/logsplitterlab/`), not a user/org root site,
so every internal link and asset reference must include the `/logsplitterlab`
prefix. This is handled in exactly one place: `basePath` in
`tools/data/site-config.js`. All page builders call `layout.url(path)` to
generate internal links — never hand-write an `href`.

## How to regenerate the site

```
node tools/build.js
```

This is deterministic: running it twice with the same source produces the
same output. Run it after any change under `tools/` or `assets/`, then
commit both the source change and the regenerated output files together.

## How to add a new review

1. Verify the product's specs first — see "Verification rules" below.
2. Add an entry to `tools/data/products.js` with a `sourceUrls` array.
3. Add an entry to the `ANALYSIS` object in `tools/pages/review.js` (verdict,
   bestFor, notIdealFor, strengths, limitations, usability, maintenance,
   alternativeId).
4. Add the product's id to `tools/data/affiliate-links.js` (as `null` until
   a real link exists).
5. Run `node tools/build.js`. The product will automatically appear in the
   homepage comparison table, the reviews index, and get its own review
   page at `/reviews/<id>/`.

## How to add a comparison

Add a new file under `tools/pages/` following the pattern of
`gas-vs-electric.js`, add it to the `pageBuilders` array in `tools/build.js`,
and add a card linking to it in `tools/pages/comparisons.js`. Do not add a
card to the comparisons index for an article that doesn't exist yet.

## How to update product information

Edit the relevant entry in `tools/data/products.js`, update `verifiedDate`
and `sourceUrls`, then re-run the build. If a product becomes discontinued
or unverifiable, move it to the `removedProducts` export instead of leaving
stale data live — see the "Verification rules" section below.

## How to add an affiliate link

1. Get the site owner's Amazon Associates tag and set
   `amazonAssociatesTag` in `tools/data/site-config.js`.
2. Set the product's URL in `tools/data/affiliate-links.js`.
3. Re-run `node tools/build.js`. The button on that product's cards and
   review page will automatically switch from "Amazon link coming soon"
   (disabled) to a live `rel="sponsored nofollow noopener noreferrer"` link
   with the Associates tag appended.
4. If GA4 is enabled (see below), affiliate clicks matching
   `[data-affiliate-click]` are ready for click tracking — wire the actual
   `gtag('event', ...)` call in `assets/js/site.js` when analytics goes
   live, and update the Privacy Policy in the same change.

## How to regenerate the sitemap

The sitemap is generated automatically by `node tools/build.js` from the
same page list used to build the HTML — there's no separate step. It only
lists pages returned by a page builder in `tools/build.js`'s `pageBuilders`
array (plus per-product review pages); `404.html` and anything with
`noindex: true` are excluded automatically.

## How to change the canonical base URL (e.g. after connecting a custom domain)

Edit `tools/data/site-config.js`:

```js
canonicalBaseUrl: 'https://www.yourdomain.com',
basePath: '',
```

Then run `node tools/build.js`. Every canonical tag, Open Graph URL,
JSON-LD URL, sitemap entry, and internal link updates automatically. Also
add a `CNAME` file at the repo root containing the domain, per GitHub's
custom domain documentation.

## How to verify deployment

1. Push to `main`.
2. Check the repo's Actions/Pages deployment status on GitHub.
3. Load `https://etayasher.github.io/logsplitterlab/` and spot-check a
   nested page (e.g. `/reviews/`) loads directly, not just via in-site
   navigation — this confirms GitHub Pages is serving directory-style
   `index.html` files correctly.

## Verification rules — claims that must never be published without evidence

This is the most important section for anyone (human or AI) editing this
site. Do not publish any of the following unless the repository contains a
genuine, cited source for it:

- A product spec (tonnage, cycle time, log capacity, price, warranty, etc.)
  not backed by a `sourceUrls` entry in `tools/data/products.js`.
- A star rating, "Top Pick" badge, or similar ranking claim — none currently
  exists on this site because there is no documented rating methodology.
- Any claim of hands-on/physical product testing, unless it genuinely
  happened and is clearly separated from specification-based analysis.
- Readership numbers, traffic figures, "X hours of research," or similar
  social-proof statistics.
- A named author, editor, reviewer, or team member who does not exist.
- A fake testimonial, review date, or third-party quotation.
- A live-looking price. Prices change too often to keep accurate here —
  route to the retailer via the affiliate button instead.
- A `href="#"` placeholder link presented as if it were live. Use a
  disabled control with real, honest label text instead (see
  `affiliateButton()` in `tools/lib/components.js`).

If you can't verify something, either leave it out, or write it as a
labeled editorial analysis/opinion clearly distinguished from a factual
claim (see the "Editorial note" section of any review page for the pattern
to follow).

## Images

`assets/img/product-placeholder.svg` and `assets/img/social-preview.svg`
are generic, locally-hosted placeholders — not photos or renders of any
specific product, and not hotlinked from Amazon or any manufacturer.
Replace them with licensed product photography when available; keep
filenames descriptive and set `width`/`height` on any `<img>` tag to avoid
layout shift, and use `loading="lazy"` for anything below the fold.

## Analytics and Search Console

Both are off by default (`ga4MeasurementId` and `searchConsoleVerification`
are `null` in `tools/data/site-config.js`). Setting either value and
re-running the build wires it in automatically — see the comments in that
file. If you enable GA4, update the Privacy Policy content in
`tools/pages/privacy-policy.js` in the same change; it currently states
plainly that no analytics are running.
