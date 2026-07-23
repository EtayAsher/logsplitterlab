# Owner Setup Checklist

This file is for the site owner (not written by or requiring Claude Code to
follow) — a step-by-step checklist for turning on the pieces of
LogSplitterLab that only you can supply: real affiliate links, analytics,
Search Console, a contact email, and licensed images.

Nothing on this list is required for the site to work — every page already
renders correctly with all of this left unconfigured. This is what makes it
"commercially live" once completed.

---

## 1. Amazon Associates

### 1.1 Register or log in
Go to [affiliate-program.amazon.com](https://affiliate-program.amazon.com/) and sign in, or create a new Associates account if you don't have one.

### 1.2 Add the LogSplitterLab URL to your account
In your Associates account under **Account Settings → Websites and Mobile Apps**, add:
```
https://logsplitterlab.com/
```
(The site previously lived at `etayasher.github.io/logsplitterlab` — that URL now redirects to the domain above, but register the real domain with Amazon, not the old one.)

### 1.3 Find your tracking ID
Your tracking ID (also called your "Associate ID" or "Store ID") is shown in your Associates account under **Account Settings**. It looks like `yourname-20`.

Paste it into `tools/data/site-config.js`:
```js
amazonAssociatesTag: 'yourname-20',
```

### 1.4 Create a Special Link with SiteStripe
1. Log into Amazon while signed into your Associates account — the **SiteStripe** toolbar appears at the top of Amazon product pages.
2. Navigate to the exact product page (matching the model number in `tools/data/products.js` — double-check it's the right model, since some product families have several).
3. Click **Text** in SiteStripe and copy the generated Special Link (it already includes your tracking tag).

### 1.5 Identify an ASIN
The ASIN is in the product URL, right after `/dp/`, e.g. `amazon.com/dp/B0XXXXXXXX` → ASIN is `B0XXXXXXXX`. It's also listed under "Product information" on most listings.

Two ASINs are already confirmed in `tools/data/products.js` (WEN 56207, Boss Industrial ES7T20) — verified by directly opening the listing and matching the model number. The Champion 100424 and YARDMAX YU2566 entries are left as `null` because that direct confirmation wasn't possible during this build; please verify and fill them in yourself before adding affiliate links for those two, since Champion in particular sells multiple 27-ton model numbers and it's easy to grab the wrong one.

### 1.6 Where to paste each link
Open `tools/data/affiliate-links.js`. For each product you have a link for, replace `null` with an object:

```js
'wen-56207': {
  directUrl: 'https://www.amazon.com/dp/B074H739NS',
  taggedUrl: 'https://amzn.to/xxxxxxx',   // your SiteStripe Special Link — preferred if you have it
  ctaLabel: 'Check Price on Amazon',
  enabled: true,
  lastVerified: '2026-08-01',
},
```
If you paste a `taggedUrl`, it's used as-is (it already has tracking baked in). If you only have a `directUrl`, the site appends your `amazonAssociatesTag` from site-config.js automatically. Nothing goes live until `enabled: true` is set.

### 1.7 How to rebuild
From the repo root:
```
node tools/build.js
```
This regenerates every HTML file, including the button state for the product(s) you just configured.

### 1.8 How to test the tracking tag
1. After rebuilding, open the relevant product page locally or on the live site.
2. Click the "Check Price on Amazon" button.
3. Confirm the URL you land on includes `?tag=youraffiliatetag-20` (or matches your Special Link).
4. In your Amazon Associates dashboard, under **Reports**, clicks and orders typically take a few hours to appear — don't expect them instantly.

### 1.9 How to verify the disclosure
Confirm all of these are present after rebuilding:
- Footer of every page: the exact sentence "As an Amazon Associate I earn from qualifying purchases." (this comes from `amazonDisclosureFull` in `tools/data/site-config.js` — do not edit the wording, Amazon requires it verbatim)
- `/affiliate-disclosure/` page: same sentence, plus fuller detail
- Near the first commercial link/table on the homepage and each review page: the shorter link-level disclosure (from `amazonDisclosureShort` in the same config file)

### 1.10 Why images must come from authorized or licensed sources
Amazon's Associates Operating Agreement restricts how their product images and data may be used and displayed — using scraped Amazon images or fabricated "photorealistic" product renders risks both a program violation and misleading readers. Until you have images through an approved path (see §3 below), the site intentionally uses generic illustrated placeholders instead.

---

## 2. Google Search Console

Two ways to add the property — pick one. **Domain property** (option A) is
the more robust choice since you now control DNS at Namecheap: it covers
`http://`, `https://`, `www`, and non-`www` under one property
automatically. **URL-prefix** (option B) is simpler and is what this
project's `searchConsoleVerification` config field is already wired for.

### Option A — Domain property (recommended, covers www + non-www automatically)
1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add a property using the **Domain** method with just `logsplitterlab.com` (no `https://`, no path).
3. Google gives you a TXT record to add. In Namecheap, go to **Advanced DNS** (see the DNS section below) and add:
   ```
   Type: TXT Record
   Host: @
   Value: (the exact string Google gives you)
   ```
4. Back in Search Console, click **Verify** (DNS TXT records can take a few minutes to propagate).
5. Skip to step 7 below (sitemap submission) — no code change needed for this option, since verification lives in DNS, not in the site itself.

### Option B — URL-prefix with HTML tag (what this project's config supports directly)
1. Add a property using the **URL-prefix** method with:
   ```
   https://logsplitterlab.com/
   ```
2. Choose the **HTML tag** verification method. Google gives you a `<meta name="google-site-verification" content="...">` tag — copy just the `content` value (the token).
3. Paste it into `tools/data/site-config.js`:
   ```js
   searchConsoleVerification: 'the-token-google-gave-you',
   ```
4. Rebuild (`node tools/build.js`) and deploy (see §7 below). The token now appears in every page's `<head>`.
5. Back in Search Console, click **Verify**.

### Then, either way
6. Submit the sitemap: in Search Console, go to **Sitemaps** and submit:
   ```
   https://logsplitterlab.com/sitemap.xml
   ```
7. To check a specific article got indexed, use **URL Inspection** in Search Console and paste the full article URL.
8. The site may keep changing after indexing (new articles, corrected specs) — that's normal and expected.
9. Once a URL is published, avoid changing its path — moving `/reviews/wen-56207/` to a different URL later would need a redirect Search Console can't set up for you on GitHub Pages, so treat published URLs as stable.

---

## 3. Product images

Every product currently uses a `generic-placeholder` image (a neutral illustrated silhouette, not a photo of the real product) — see `tools/data/products.js`, field `imageMode`.

To replace a placeholder:

1. Get a properly licensed image. Options, in order of ease:
   - **`owner-uploaded`**: a photo you took yourself, or one you have explicit written permission to use.
   - **`licensed-manufacturer`**: an image the manufacturer has explicitly agreed you may use (check their press/media kit page, or email and ask).
   - **`authorized-amazon`**: an image obtained through an Amazon-approved tool (e.g. the Amazon Associates SiteStripe image embed, or the Product Advertising API) rather than right-clicking and saving from a product page.
2. Save the file under `assets/img/products/` with a descriptive filename, e.g. `assets/img/products/wen-56207-front.webp`. Prefer WebP for photos; keep the file reasonably sized (under ~150KB).
3. Update the product's record in `tools/data/products.js`:
   ```js
   imageMode: 'owner-uploaded',
   imageSrc: '/assets/img/products/wen-56207-front.webp',
   imageAlt: 'WEN 56207 electric log splitter on its stand',
   imageWidth: 320,   // match the actual file's aspect ratio
   imageHeight: 240,
   imageSourceNote: 'Photographed by [you], 2026-08-01.',
   ```
4. Rebuild. The new image now appears on the homepage, reviews index, and that product's review page automatically — nowhere else needs editing.

Never download images by scraping Amazon or Google Images, and never present an AI-generated "photorealistic" image as if it depicts the real product.

---

## 4. Analytics (GA4)

1. Create a GA4 property in [Google Analytics](https://analytics.google.com/) for the site.
2. Copy the Measurement ID (looks like `G-XXXXXXXXXX`).
3. Paste it into `tools/data/site-config.js`:
   ```js
   ga4MeasurementId: 'G-XXXXXXXXXX',
   ```
4. **Update the Privacy Policy in the same change** — open `tools/pages/privacy-policy.js` and confirm the analytics section now accurately describes GA4 (it's written to auto-update once `ga4MeasurementId` is set, but re-read it before publishing to make sure the wording still matches what you've actually enabled).
5. Rebuild and deploy.

Event scaffolding for affiliate clicks, quiz opens/completions, and review filter usage is wired in `assets/js/site.js` and fires through `window.dataLayer` only when GA4 is enabled — it's inert otherwise and never blocks a click from navigating.

---

## 5. Contact email

Open `tools/data/site-config.js` and set:
```js
contactEmail: 'you@yourdomain.com',
```
Rebuild. The Contact page and footer will automatically switch from the "not yet configured" placeholder to a working `mailto:` link.

---

## 6. Logo files

The site currently uses the "LS" text wordmark badge defined inline in `tools/lib/layout.js` (search for `logo-badge`). If you commission a real logo:

1. Add the files under `assets/img/brand/`:
   - `logo-horizontal.svg` — full horizontal lockup (nav, footer)
   - `logo-icon.svg` — compact square icon
   - `favicon.svg` / `favicon.ico` — browser tab icon
   - `social-preview.png` or `.jpg` (1200×630) — replaces `assets/img/social-preview.svg`
2. Update `tools/lib/layout.js` (the `renderHeader`/`renderFooter` functions) to reference the new files instead of the text badge.
3. Update `socialImage` in `tools/data/site-config.js` to point at the new social preview file.
4. Rebuild.

Do not commit a logo you haven't actually approved — the current text wordmark is intentionally left in place until you have one.

---

## 7. How to rebuild and deploy (reference)

```
node tools/build.js
git add -A
git commit -m "Describe what changed"
git push origin main
```
GitHub Pages rebuilds automatically after the push (usually within 1–2 minutes). Verify at https://logsplitterlab.com/.
