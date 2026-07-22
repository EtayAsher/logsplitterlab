# LogSplitterLab

Source for [logsplitterlab.github.io](https://etayasher.github.io/logsplitterlab/) — a
research-based log splitter comparison site, deployed as a static site on
GitHub Pages.

## Project structure

```
tools/                 Build-time source. Not served — the generator reads
                        this and writes plain HTML into the repo root.
  build.js              The generator. Run with `node tools/build.js`.
  check-links.js         Post-build validator. Run with `node tools/check-links.js`.
  data/
    site-config.js       Canonical URL, base path, contact email, Amazon
                          Associates tag/marketplace/disclosure wording,
                          GA4 ID, Search Console token — the single place
                          to change any of these.
    products.js           Verified product specifications, ASINs, status,
                          image config, and source URLs. See "Verification
                          rules" below before editing.
    affiliate-links.js    Per-product Amazon link config (direct/tagged URL,
                          CTA label, enabled flag, last-verified date).
    author.js              Site author/founder data — bio, avatar, links.
                          See "Verification rules": no fabricated credentials.
  lib/
    layout.js             Shared <head>/header/footer/page shell.
    components.js         Reusable fragments: comparison table, spec
                           table, product card, product image, affiliate
                           button, source notes, author byline/box, Person
                           schema, article table-of-contents.
  pages/                  One file per page (or one template used for all
                           product reviews — see pages/review.js).

assets/
  css/styles.css         One shared stylesheet for every page.
  js/
    analytics.js           Event tracking scaffolding — inert unless GA4 is enabled.
    site.js               Mobile nav (progressive enhancement).
    quiz.js                Match quiz modal (progressive enhancement).
    reviews-filter.js       Reviews page gas/electric filter.
  img/                    Local placeholder images. See "Product images" below.

index.html, reviews/, comparisons/, best-electric-log-splitters/,
best-gas-log-splitters/, what-size-log-splitter-do-i-need/, buying-guide/,
maintenance/, about/, author/, how-we-review/, contact/,
affiliate-disclosure/, privacy-policy/, 404.html, sitemap.xml, robots.txt,
llms.txt, .nojekyll
                        GENERATED OUTPUT. Do not hand-edit these — edit the
                        corresponding file under tools/ and re-run the
                        build. Hand edits will be silently overwritten by
                        the next build.

OWNER_SETUP.md          Step-by-step checklist for the site owner: Amazon
                        Associates, Search Console, analytics, images, logo.
CONTENT_PLAN.md         12-week content roadmap and the article checklist.
CONTENT-STRATEGY.md     Longer-term content clusters, future interactive
                        tools, and future resources — planning only.
AUDIT.md                Scored strategic audit (design/UX/trust/SEO/AI
                        search/E-E-A-T/etc.) with a phased roadmap.
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
   Only add an `asin` if you've directly opened the Amazon listing and
   confirmed it matches the exact model number, not a search snippet guess.
2. Add an entry to `tools/data/products.js` with a `sourceUrls` array,
   `suitableUseSummary`/`limitationsSummary` one-liners, and an
   `imageMode`/`imageSrc` (start with one of the existing generic
   placeholders — see "Product images" below).
3. Add an entry to the `ANALYSIS` object in `tools/pages/review.js` (verdict,
   bestFor, notIdealFor, strengths, limitations, workload, cycleTimeNote,
   logSizeNote, portabilityNote, setupStorageNote, noiseElectricalNote,
   usability, maintenance, whoShouldBuy, whoShouldChooseOther, faq,
   alternativeId).
4. Add the product's id to `tools/data/affiliate-links.js` (as `null` until
   a real link exists — see OWNER_SETUP.md §1).
5. Run `node tools/build.js`. The product will automatically appear in the
   homepage comparison table and product cards, the reviews index, the
   relevant best-of roundup (by `type`), and get its own review page at
   `/reviews/<id>/`.
6. Run `node tools/check-links.js` before committing.

## How to update the author

Edit `tools/data/author.js` — name, role, bio, avatar, and optional links
(LinkedIn/Twitter/email). Every byline, author box, the `/author/` page,
and Person schema across the site are generated from this one file.
**Never add a credential, years of experience, or a claim of hands-on
testing that hasn't actually been confirmed** — leave a field `null`
rather than guess. See "Verification rules" below.

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

See **OWNER_SETUP.md §1** for the full walkthrough (Associates signup,
SiteStripe, ASINs). In short: fill in the product's entry in
`tools/data/affiliate-links.js` with `directUrl` and/or `taggedUrl`, set
`enabled: true`, and rebuild. The button on that product's cards and review
page automatically switches from "Amazon link not yet added" (disabled) to
a live `rel="sponsored nofollow noopener noreferrer"` link. Affiliate clicks
are tracked automatically once GA4 is enabled (see `assets/js/analytics.js`)
— no extra wiring needed.

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
- A fabricated credential, job title, years of experience, or physical
  testing claim attached to the real author in `tools/data/author.js` —
  leave a field unset rather than embellish it.
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

## Product images

Every product in `tools/data/products.js` ships with `imageMode:
'generic-placeholder'`, pointing at `assets/img/splitter-gas-placeholder.svg`
or `assets/img/splitter-electric-placeholder.svg` — original illustrations
in the site's own brand colors, not photos or renders of any specific
product, and not hotlinked from Amazon or any manufacturer.
`assets/img/social-preview.svg` is a similar placeholder for the Open Graph
image.

To replace a placeholder with a real photo, see **OWNER_SETUP.md §3** — it
walks through the three compliant image modes (`owner-uploaded`,
`licensed-manufacturer`, `authorized-amazon`) and exactly which fields to
edit. Keep filenames descriptive, set `imageWidth`/`imageHeight` to match
the real file (avoids layout shift), and images render with
`loading="lazy"` automatically via `productImage()` in
`tools/lib/components.js`.

## How to validate a build before deploying

```
node tools/build.js
node tools/check-links.js
```

`check-links.js` crawls every generated HTML file and reports: broken
internal links, missing images/assets, `href="#"` placeholders, hash links
that don't match a real element id on the page (leftover hash-routing),
missing titles/canonicals/H1s, invalid JSON-LD, and sitemap entries with no
matching file. It exits non-zero if it finds any error-level issue.

## Analytics and Search Console

Both are off by default (`ga4MeasurementId` and `searchConsoleVerification`
are `null` in `tools/data/site-config.js`). Setting either value and
re-running the build wires it in automatically — see the comments in that
file. If you enable GA4, update the Privacy Policy content in
`tools/pages/privacy-policy.js` in the same change; it currently states
plainly that no analytics are running.
