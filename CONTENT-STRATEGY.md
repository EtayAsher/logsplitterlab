# Content Strategy — Beyond Version 1.0

This is a strategic planning document, not a build spec — nothing here is
implemented yet. It answers one question: what would it take for
LogSplitterLab to become the definitive resource in this niche, not just
another affiliate site? See `CONTENT_PLAN.md` for the tactical 12-week
article schedule; this document is the thinking behind where that schedule
should eventually lead.

## The core bet

Search is splitting into two audiences that want different things:

- **Google's classic search + AI Overviews** still rewards depth, internal
  linking, and pages that fully answer a query.
- **Conversational AI (ChatGPT, Claude, Gemini, Perplexity)** rewards
  content that's easy to extract and cite: specific numbers, clear
  entities (a named author, a named product with a model number), and
  answers structured close to how someone would actually ask the question.

The good news: these two audiences want almost the same thing —
specific, sourced, well-organized answers from an identifiable author. The
site doesn't need two different content strategies, just one executed well.

## Future topic clusters

Right now the site has scattered strong pages but not yet full pillar
coverage. Grouping future work into clusters, each anchored by one pillar
page linking out to (and getting linked back from) its supporting articles:

**1. Log splitter types** (pillar: expand `/buying-guide/`'s power-source section, or split into its own pillar page)
- Gas vs. electric (done)
- Gas vs. manual
- Electric vs. manual
- Horizontal vs. vertical operation (currently a subsection — could become its own article)
- Kinetic/flywheel splitters vs. hydraulic (a category the catalog doesn't cover yet)

**2. Wood & splitting science** (new pillar)
- Wood species splitting-difficulty reference (expand the tonnage table into a fuller guide)
- Green vs. seasoned wood, and how long seasoning actually takes by species
- How grain and knots affect splitting (currently a paragraph in `/what-size-log-splitter-do-i-need/` — could become its own deep piece)
- Firewood BTU/heat-value comparison by species (tangential to splitters, but this is exactly what the target reader is also researching — strong internal-linking opportunity)

**3. Sizing & selection** (pillar: `/what-size-log-splitter-do-i-need/`, already built)
- Tonnage calculator (see Future Interactive Tools below)
- Budget tiers guide (what changes at $200 vs. $600 vs. $1,200, without quoting unstable exact prices)
- Log length/diameter deep dive

**4. Safety & operation** (new pillar)
- Full safety guide (expand `/buying-guide/#g-safety` into its own page)
- PPE guide
- Operating around children and pets
- Common injury causes and how design features (two-hand controls, auto-return) address them

**5. Maintenance & longevity** (pillar: `/maintenance/`, already built)
- Hydraulic fluid deep dive (types, how to check, why no universal answer)
- Winterization checklist
- Troubleshooting flowchart (symptom → likely cause → DIY fix vs. call a pro)

**6. Buying & ownership** (new pillar)
- Buy vs. rent analysis
- Warranty comparison across the catalog once more products are verified
- What to do when a product in the catalog gets discontinued (ties into the `status` field already in `products.js`)

**7. Use-case guides** (new pillar)
- Best splitter for small suburban lots
- Best splitter for large rural properties / multiple structures
- Best splitter for someone with limited strength/mobility (a real, underserved angle — manual splitters and single-handed electric models are directly relevant)

Each cluster should only publish once there's enough verified product/fact
coverage to say something genuinely new — a pillar page with three thin
spokes is worse than a smaller cluster that's fully sourced.

## Product-vs-product and "best of X" comparison pages

`tools/lib/comparison-template.js` has a reusable two-product comparison
page generator, built and ready — but not wired into `build.js`'s
`pageBuilders` yet. Evaluated the following against the current 4-product
catalog and found none of them clear the bar for a genuinely new,
non-duplicate page right now:

- **SuperHandy vs. Landworks** — would mostly restate the disclosed
  near-identical-spec finding already covered in both products' review
  pages and `/best-gas-log-splitters/`. Publishing a dedicated page here
  is closer to duplicate content than a real comparison.
- **YARDMAX vs. Landworks** / **20-Ton vs. 32-Ton** — both reduce to the
  same underlying comparison (Landworks/SuperHandy 20T vs. YARDMAX YU3266
  32T), which `/best-gas-log-splitters/` already covers in depth. A
  separate page would cannibalize that page's own ranking rather than add
  something new.
- **Electric vs. Gas** — already exists: `/comparisons/gas-vs-electric-log-splitter/`.
- **Best for Homeowners** / **Best for Hardwood** — with one electric and
  three gas models (two of them near-identical), there isn't enough real
  tier variety yet to say something a use-case page couldn't just say in
  a sentence. Revisit once the catalog has products spanning more
  distinct homeowner/hardwood-suitability tiers.
- **Best Under a Practical Budget** — blocked on more than data: the site
  deliberately doesn't publish prices anywhere (they drift and go stale).
  A "budget" page would need approximate price bands, which is a policy
  call for the owner, not something to decide silently while building a
  content page. Needs an explicit decision before this is even worth
  templating further.
- **Fastest Cycle Time** — real, verified data exists for this today (the
  comparison table already sorts on it), but four data points doesn't
  support a standalone ranking page with real explanatory value beyond
  what the table and `/buying-guide/#g-cycle` already say. Revisit once
  there are enough products for a ranking to mean something.
- **Best Portable** — the catalog doesn't have a distinct "portability"
  field beyond `towable` (currently true for exactly one product), so
  there isn't a real spread to compare yet.

None of these are "no forever" — `comparison-template.js` exists
specifically so that once the catalog grows enough to make one of these
genuinely useful, publishing it is a new `tools/pages/compare-*.js` file
plus one line in `build.js`, not a rebuild.

## Future interactive tools (not yet built)

Ranked roughly by effort vs. value:

1. **Cost-per-cord calculator.** Compare buying pre-split firewood over N years vs. buying a splitter once. This is the single highest-value tool for affiliate conversion because it makes the purchase decision concrete — and it's honest, since it's just arithmetic, not a fabricated claim.
2. **Extension cord gauge calculator.** Input distance to outlet + the electric splitter's amp draw → recommended cord gauge. Small, useful, cheap to build, reinforces the existing extension-cord safety content.
3. **Expanded "Splitter Finder"** — a richer version of the existing 5-question quiz with more inputs (wood species, typical diameter, annual volume, budget band, outlet access) feeding a weighted recommendation instead of the current simpler scoring. Only worth building once the catalog has enough products that a richer recommendation actually differentiates.
4. **Side-by-side comparison tool.** Let a reader pick 2–3 products from the catalog and see specs in a dedicated comparison view, rather than only the static tables on `best-*` pages. Natural once the catalog grows past ~6 products.
5. **Wood drying-time estimator.** Species + split date + rough region → estimated ready-to-burn date. More speculative — moisture/drying science varies enough by climate that this needs real sourcing before publishing, not a guess dressed up as a tool.

None of these should be built before the product catalog and content base
are big enough to make them genuinely useful — a calculator with only 4
products behind it doesn't add much.

## Future resources

- **Glossary of log splitter terminology** (tonnage, cycle time, two-stage pump, kinetic energy, wedge, beam, etc.) — short, highly citable by AI (definitional content is exactly what gets extracted into AI answers), and cheap to maintain.
- **Printable pre-purchase checklist** (PDF or print-friendly page) derived from the existing buying-guide checklist section.
- **Regional firewood species guide** — what's commonly available/burned by US region, which ties wood-species content to a geographically relevant angle without inventing anything.
- Video content, downloadable spec-sheet comparisons, or a reader Q&A section are all plausible later additions, but none should be built or implied to exist until they're real.

## What this strategy deliberately avoids

- Publishing thin pages just to hit a page count (explicit instruction from the owner, and bad for AI citation too — thin pages get ignored by both Google and LLMs).
- Building a tool before there's enough real product data to make it useful.
- Any interactive feature that would require collecting personal data — none of the ideas above do.
- Video/photo content implying professional testing until that's real.

## How this connects to `CONTENT_PLAN.md`

`CONTENT_PLAN.md`'s 12-week schedule is the near-term execution of clusters
1 ("Log splitter types") and 3 ("Sizing & selection") above, plus early
maintenance content. Once that's done, the next planning pass should pull
from clusters 2, 4, 6, and 7 here, roughly in that order — safety (4) and
wood science (2) are both strong AI-citation candidates (definitional,
factual, low ambiguity) and don't require new verified products to write.
