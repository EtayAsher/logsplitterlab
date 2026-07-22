# LogSplitterLab — Strategic Audit

Date: 2026-07-21
Scope: full site as of this commit, evaluated as a pre-launch niche
affiliate site (no live affiliate links or licensed images yet), not
against large-scale competitors with years of backlinks and traffic.

Scores are out of 10 and are my honest assessment, not a marketing
number — several categories are capped by real, unresolved gaps that no
amount of code can fix (backlinks, live affiliate links, licensed images).

---

## 1. Design — 7/10

**Why:** Consistent, deliberate brand system (dark forest green, warm
cream, amber/wood accents, Merriweather/Inter pairing) applied uniformly
across 20 pages. Reads as a serious outdoor/practical site, not corporate
and not childish — matches the brief.

**Remaining weaknesses:** No finished logo — the nav/footer still use a
plain "LS" text badge. The product images and author avatar are all
generic illustrations, not real photography, so the site currently reads
as "clean but pre-launch" rather than "established brand." The homepage is
long (12+ stacked sections) with no visual pacing beyond section headers.

**Next:** Commission or design real logo files (horizontal + icon +
favicon). Replace placeholder images once licensed sources exist (see
`OWNER_SETUP.md`). Consider breaking the homepage's middle sections with
slightly more visual variation (not more content, just more distinct
section styling) once there's real product photography to work with.

## 2. UX — 7.5/10

**Why:** Clear primary navigation, working progressive-enhancement filter
and quiz (keyboard accessible, focus-trapped, tested), table-of-contents
added to every article with 10+ sections, responsive with zero horizontal
overflow at 360/390/768/1024/1440px (tested this session and in prior
sessions), consistent CTA styling and placement.

**Remaining weaknesses:** No sortable/interactive comparison beyond static
tables — a reader comparing 3+ products still has to scroll between
sections. The homepage has no jump navigation despite its length. No
side-by-side product picker.

**Next:** See `CONTENT-STRATEGY.md` "Future interactive tools" — a
side-by-side comparison tool is the highest-value UX addition once the
catalog is bigger than 4 products.

## 3. Trust — 7/10

**Why:** Real named founder (Etay Asher) replacing the earlier anonymous
"LogSplitterLab" byline, honest bio with no fabricated credentials or
testing claims, transparent "How We Review" page, exact required Amazon
disclosure wording in the footer of every page, a stated corrections
process, and an audit sweep this session found zero fabricated-claim
patterns (fake ratings, prices, testimonials, "trusted by" numbers) across
all 20 pages.

**Remaining weaknesses:** No external validation exists yet — no LinkedIn,
no press mentions, no citations from other sites, no contact email
configured. A skeptical reader has only the site's own word for who Etay
Asher is; nothing on this site can fix that except real external presence
building up over time.

**Next:** Configure a real contact email (Phase 1). If comfortable, add a
LinkedIn or other professional profile link to `tools/data/author.js` —
this is one of the single highest-leverage trust changes available and
costs nothing to implement once the owner has a link to give.

## 4. Google SEO (traditional) — 6.5/10

**Why:** Full technical foundation is in place: unique title/description/
canonical on every page, sitemap.xml and robots.txt correct, breadcrumbs
site-wide, strong and growing internal linking, mobile-first responsive
design, minimal JS, fast static HTML.

**Remaining weaknesses:** Zero backlinks and zero traffic history — this
is a real, unavoidable gap for a pre-launch site and the single largest
lever traditional SEO responds to. Only 4 verified products limits how
much topical depth the site can currently claim versus established
competitors with dozens of reviews.

**Next:** This category improves primarily through time, promotion, and
executing `CONTENT_PLAN.md` — not through more code.

## 5. AI Search readiness (GEO/AEO) — 7.5/10

**Why:** This session's research (see below) directly informed
implementation: Person schema linking every article to a real author
entity, Article + BreadcrumbList + FAQPage + Person schema stacked on
every eligible page (research found stacked schema roughly doubles AI
citation likelihood versus single-schema pages), `llms.txt` added as a
low-cost Markdown index, robots.txt explicitly confirms AI crawlers
(GPTBot, ClaudeBot, PerplexityBot, Google-Extended) aren't blocked,
citation-dense writing throughout (specific model numbers, cited sources,
verification dates), and FAQ sections phrased as real user questions.

**Remaining weaknesses:** `llms.txt` is an unofficial, unproven convention
— included because it's cheap and plausible, not because it's confirmed to
matter. No way to verify yet whether any AI system actually cites this
site, since it isn't indexed/crawled yet. Content freshness (the 7–14 day
update cycle GEO research recommends) requires actually executing
`CONTENT_PLAN.md` going forward, not a one-time fix.

**Next:** Submit to Search Console (Phase 1) so indexing can begin.
Periodically test target queries in ChatGPT/Perplexity/Google AI Overviews
manually to see whether the site starts appearing — there's no API for
this, it has to be checked by hand.

## 6. Technical SEO — 8/10

**Why:** `tools/check-links.js` runs clean (0 errors, 0 warnings) across
all 20 pages: no broken links, no missing assets, no `href="#"`, no
leftover hash-routing, valid JSON-LD everywhere, correct sitemap. Semantic
HTML, proper heading hierarchy (exactly one H1 per page, verified),
images with alt text and explicit dimensions, lazy loading below the fold,
skip link, focus-visible states, reduced-motion support.

**Remaining weaknesses:** No Lighthouse or PageSpeed Insights run was
possible in this environment, so Core Web Vitals are reasoned about
(minimal JS, static HTML, no render-blocking scripts) rather than
empirically measured. GitHub Pages' default caching/CDN behavior isn't
independently tunable.

**Next:** Run Lighthouse/PageSpeed Insights from a real browser once
convenient and fix anything it surfaces — this wasn't skipped by choice,
it just wasn't available as a tool here.

## 7. Affiliate optimization — 3/10

**Why the low score:** The integration architecture itself is genuinely
solid — central config, correct `rel="sponsored nofollow noopener
noreferrer"`, honest disabled state instead of `href="#"`, click-tracking
scaffolding ready, consistent CTA placement across every page type. But
architecture isn't revenue: **zero products currently have a live,
enabled affiliate link**, so the site cannot earn a cent in its current
state.

**Next:** This is the single most important Phase 1 item in this entire
audit. See `OWNER_SETUP.md` §1.

## 8. Content architecture — 6.5/10

**Why:** A real structure is emerging — reviews, comparisons, best-of
roundups, and guides all cross-link consistently, and `CONTENT_PLAN.md`
gives a repeatable process for adding more without drifting from it.

**Remaining weaknesses:** Still a small site (20 pages, 4 products, one
comparison per major axis). Genuine topical authority in this niche
realistically needs 3–5x the current coverage.

**Next:** Execute `CONTENT_PLAN.md`, then `CONTENT-STRATEGY.md`'s cluster
plan.

## 9. E-E-A-T — 6/10

**Why:** This session's biggest structural improvement. Replacing an
anonymous byline with a real, honestly-described founder is a substantial
E-E-A-T gain — Person schema, consistent bylines, an author page, and
methodology transparency are all now in place.

**Remaining weaknesses:** The first "E" (Experience) is capped by
honesty, not by omission — the site explicitly states it does not conduct
hands-on testing, which is the truthful and correct choice, but it does
mean the "Experience" signal is structurally weaker than a competitor
that's actually testing products. There's also no external authority
signal yet (no other site or platform vouches for the author).

**Next:** The two levers that would move this score the most: (a) real
hands-on testing, if ever pursued, changing labels honestly as it happens
rather than all at once; (b) a real external professional profile link.
Neither can be fabricated to shortcut this.

## 10. Brand quality — 6.5/10

**Why:** Professional, consistent, avoids every stated pitfall (no
mascot, no law-firm gold, no fake Amazon branding). Reads as a serious,
practical resource.

**Remaining weaknesses:** No finished logo, no real photography anywhere
on the site — every visual asset is a placeholder. This is the most
visible remaining gap between "well-built" and "fully realized brand."

**Next:** Real logo + real product images are the two highest-impact
visual changes available, both already scoped in `OWNER_SETUP.md`.

---

## Prioritized roadmap

### Phase 1 — Immediate
1. Get Amazon Associates approved and add real, enabled affiliate links (turns architecture into revenue — the single highest-priority item on this list)
2. Get compliant product images (SiteStripe, licensed manufacturer source, or owner photos) for the 4 catalog products
3. Set up Google Search Console, verify the property, submit `sitemap.xml`
4. Configure a real contact email
5. Decide on GA4 now or later (optional, but establishes a traffic baseline sooner if enabled)

### Phase 2 — Next month
1. Execute Weeks 3–8 of `CONTENT_PLAN.md` (comparison and maintenance-adjacent articles that don't need new products)
2. Verify and add 2–4 more products — prioritize closing the manual-splitter gap, since it currently blocks one planned article and one quiz outcome from having a real product to point to
3. Commission real logo files
4. Add any real external professional links (LinkedIn, etc.) the owner is comfortable sharing
5. Begin legitimate promotion/outreach (not link spam) to start earning the backlinks that Google SEO is currently missing

### Phase 3 — Long term
1. Build the highest-value interactive tool (cost-per-cord calculator) once there's enough catalog depth to make it worthwhile
2. Expand to 15–20+ verified products spanning gas, electric, and manual
3. Build out the pillar/cluster content plan in `CONTENT-STRATEGY.md`, starting with wood science and safety (both strong, low-ambiguity AI-citation candidates that don't require new products)
4. Reassess whether real hands-on testing is worth pursuing — if it happens, update the affected pages' labels honestly and immediately, not retroactively
5. Periodically re-check AI search visibility by hand (ChatGPT, Perplexity, Google AI Overviews) against target queries, since there's no automated way to measure this

---

## Research this audit is based on

GEO/AEO best practices, structured-data citation impact, and llms.txt
guidance were researched via web search during this session (2026):
- [GEO Best Practices for 2026 — Firebrand](https://www.firebrand.marketing/2025/12/geo-best-practices-2026/)
- [Mastering Generative Engine Optimization in 2026 — Search Engine Land](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142)
- [How Structured Data Schema Transforms AI Search Visibility — Medium](https://medium.com/@vicki-larson/how-structured-data-schema-transforms-your-ai-search-visibility-in-2026-9e968313b2d7)
- [Build Author Authority for AI Search 2026 — AI Rank Lab](https://www.airanklab.com/blog/how-to-build-author-authority-ai-search-eeat-strategies)
- [Should Websites Implement llms.txt in 2026? — LinkBuildingHQ](https://www.linkbuildinghq.com/blog/should-websites-implement-llms-txt-in-2026/)
