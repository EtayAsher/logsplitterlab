# Content Plan

A 12-week roadmap for expanding LogSplitterLab past Version 1.0. This is a
planning document for the site owner — it is not published on the live
site. Update the checkboxes as articles ship.

## Status key
- `[x]` published
- `[ ]` not yet started
- `⚠` blocked — needs a newly verified product before it can be written honestly (see note)

## Roadmap

**Week 1**
- [x] Best Electric Log Splitters (`/best-electric-log-splitters/`) — published in the Version 1.0 build
- [x] Best Gas Log Splitters (`/best-gas-log-splitters/`) — published in the Version 1.0 build

**Week 2**
- [x] What Size Log Splitter Do I Need? (`/what-size-log-splitter-do-i-need/`) — published in the Version 1.0 build
- [ ] Champion 100424 Review update — re-check specs against `tools/data/products.js` sourceUrls; only touch if something has actually changed

**Week 3**
- [ ] Boss ES7T20 vs WEN 56207 — direct model-vs-model comparison; both already verified, no blocker
- [ ] How to Split Green Wood Safely — informational, no product dependency

**Week 4**
- [ ] Champion 100424 vs YARDMAX YU2566 — direct model-vs-model comparison; both already verified, no blocker
- [ ] Log Splitter Cycle Time Explained — informational, no product dependency

**Week 5**
- [ ] Horizontal vs Vertical Log Splitters — informational, no product dependency
- [ ] Best Log Splitter for Oak — can publish using the existing 4-product catalog, but would be stronger with a verified higher-tonnage option; don't force a 5th product just to fill this slot

**Week 6**
- [ ] Electric Log Splitter Extension Cord Guide — informational, no product dependency
- [ ] How to Store a Log Splitter — informational, no product dependency

**Week 7**
- [ ] 7-Ton vs 25-Ton Log Splitter — Boss ES7T20 (7T) vs. YARDMAX YU2566 (25T), both already verified
- [ ] How Often to Change Hydraulic Fluid — informational; do not give a single universal interval, per README verification rules — always "check your model's manual"

**Week 8**
- [ ] Best Log Splitter for Small Properties — can publish using the existing catalog
- [ ] Towable Log Splitter Safety — covers Champion 100424 and YARDMAX YU2566, both already verified as towable

**Week 9**
- [ ] How to Read a Log Splitter Specification Sheet — informational, no product dependency
- [ ] Common Log Splitter Problems — informational, no product dependency; keep general, don't imply first-hand troubleshooting experience

**Week 10**
- [ ] Gas Log Splitter Winterization — informational, no product dependency
- [ ] ⚠ Electric vs Manual Log Splitters — **blocked**: no manual splitter is currently verified in `tools/data/products.js`. Either (a) verify a real manual model first and add it properly, or (b) write this as a category-level comparison (electric vs. the concept of manual splitters generally) without naming a specific manual product, the same way the quiz's manual result currently handles this gap.

**Week 11**
- [ ] Best Log Splitter for Firewood — can publish using the existing catalog
- [ ] How Log Moisture Affects Splitting — informational, no product dependency

**Week 12** — maintenance pass, not new articles
- [ ] Update and consolidate underperforming pages (check Search Console performance data once available)
- [ ] Internal-link audit — run `node tools/check-links.js` and fix anything it flags
- [ ] Product availability audit — re-check `status` field on every product in `tools/data/products.js`; mark `discontinued`/`unavailable` if a source page indicates that

## Repeatable article checklist

Use this for every new article, in order:

1. **Identify search intent** — what is someone actually trying to find out with this query? Write to answer that, not to hit a keyword count.
2. **Verify facts** — every spec or claim about a real product must trace to a source URL. See README.md "Verification rules" before writing anything down.
3. **Add original analysis** — don't rewrite manufacturer marketing copy. Say something a spec sheet alone doesn't tell the reader.
4. **Add internal links** — link to related existing pages (buying guide, relevant reviews, relevant best-of roundup).
5. **Add disclosure** — the short link-level disclosure (`config.amazonDisclosureShort`) near the first commercial link/table on the page.
6. **Add metadata** — unique title, description, canonical (handled automatically by `tools/lib/layout.js` as long as you pass `title`/`description`/`path` from the page module), Article + BreadcrumbList JSON-LD, and FAQ JSON-LD only if the page has a visible FAQ section.
7. **Add sources** — list source URLs for any product-specific claims (see `sourceNotes()` in `tools/lib/components.js` for the pattern).
8. **Test mobile** — check the new page at 360px and 768px widths for overflow or cramped tables after building.
9. **Update sitemap** — automatic: running `node tools/build.js` regenerates `sitemap.xml` from the same page list, as long as the new page module is added to `pageBuilders` in `tools/build.js`.
10. **Deploy** — commit and push (see README "How to regenerate and deploy").
11. **Request indexing** — in Google Search Console, use URL Inspection on the new page's live URL and request indexing once it's live.
