# ALMA by Reem Fragrances — implementation handoff

Fresh handoff started at the user's request on 2026-09-11. Previous README update entries have been removed. Record implementation and future updates here from this point onward; earlier changes remain recoverable through Git history.

## Current work

- The user authorized starting the build directly in the supplied Shopify theme and pushing completed edits to GitHub.
- Repository: https://github.com/omarashraaf/almafragrances.git
- Branch: `main`, tracking `origin/main`.
- Base: supplied Shopify Dawn 15.5.0, imported in `d35f787`. The selected design is implemented within this theme.
- Current design reference: https://diptyqueparis.com/fr-fr.
- Website identity: the homepage opening header uses the newly supplied transparent `assets/alma-logo-wordmark.png`, centered above desktop navigation and centered between the mobile controls; after scrolling it uses the previously selected icon from `research/brand/logo-icon.png`. The wordmark scales down across tablet, mobile and narrow-phone breakpoints. Both source artworks remain exact and product packaging is unchanged.
- The user selected **option 1**, `research/design/previews/diptyque-direction-1.png`, and authorized implementation and pushes. No further design approval is needed for this selection.
- Implemented the complete Diptyque-referenced homepage rhythm with ALMA content: campaign/ritual opening, favourites, layering feature, Dukhoon feature, gifting feature, six-category wardrobe, service band, newsletter and footer. The supplied icon and real Shopify catalog imagery are used throughout.
- Verified test store: `https://dk5qhx-ax.myshopify.com/`. The user confirms `main` is connected to its Shopify theme. The store is a trial account and the connected theme is visible on the public storefront; publication state and exact theme ID were not inspected.
- The test store now contains the current public ALMA catalog: 23 active products, 189 variants, 42 product images and six requested category collections. Twenty-two standard products were imported from the generated CSV; the gift card was created through Shopify's gift-card product flow.
- English is the only customer-facing language in the current theme. Arabic source copy remains in the existing Shopify catalog for a later dedicated Arabic locale, but the English storefront filters it from product and collection descriptions. The Shopify store currency is now United Arab Emirates Dirham (AED), and theme currency-code display is enabled.

## Approved visual target

The latest displayed images map exactly as follows:

| Option | Image | Opening composition |
| --- | --- | --- |
| 1 | `research/design/previews/diptyque-direction-1.png` | Warm campaign hero → ritual introduction → favourites |
| 2 | `research/design/previews/diptyque-direction-2.png` | Blush campaign hero → scent introduction → category gallery → layering line |
| 3 | `research/design/previews/diptyque-direction-3.png` | Dark ritual hero → introduction → layering feature |

Option 1 is selected. Read `research/design/DIPTYQUE-REFERENCE.md` for source screenshots and image limitations. Generated campaign artwork is illustrative: labels are approximations. The source icon and real Shopify product media remain authoritative.

## Theme structure and preserved behavior

Work in the repository root. Do not replace Dawn with React, another starter, or a headless storefront.

| Directory | Responsibility |
| --- | --- |
| `assets/` | CSS, JavaScript, icons and theme media |
| `config/` | Global settings schema and saved settings |
| `layout/` | Theme and password page shells |
| `locales/` | Translations |
| `sections/` | Liquid sections and header/footer groups |
| `snippets/` | Reusable theme components |
| `templates/` | Page templates and customer templates |
| `research/` | Client strategy, source branding, catalog snapshot and design references |

Retain Shopify's `content_for_header` and `content_for_layout`, native product forms, variants, cart, checkout, search, app blocks, localization, metadata and structured data. Existing products, customers, orders, handles/URLs and integrations must be preserved. No customer/order data belongs in this repository.

### Current actual sequence

Homepage: expanded opening header with the centered ALMA wordmark above the category tabs on desktop and centered between the menu and utilities on mobile/tablet; after scrolling it contracts to the compact icon header (a 72 px desktop row with tabs centered and utilities right, and the established mobile control row) → original wide campaign artwork with a viewport-tracking CTA → compact centered ritual introduction → tabbed fragrance carousel with four products visible and 15 fragrance products in its combined tab → 50/50 layering editorial feature with three product steps → full-width Dukhoon image and centered story → four-product gifting carousel → six-category ALMA wardrobe (four-card carousel on desktop, two-column grid on mobile) → restored descriptive ALMA experience band → one compact warm-neutral footer containing brand identity, the original four navigation groups, newsletter and copyright. Payment badges are intentionally not rendered. The campaign is restored to its original 56.25vw presentation instead of being cropped into a viewport-height frame. Its CTA is visible on the first screen and remains bottom-centred while the artwork scrolls on both desktop and compact mobile viewports, then releases with a 50 px desktop or 30 px mobile inset before the image boundary. Product rails and the desktop wardrobe rail include inset transparent previous/next controls and progress indicators; the mobile wardrobe is a static grid without carousel controls. The ALMA experience uses three image-free divided text columns on desktop and three stacked cards on mobile. Footer navigation changes from four visible desktop columns to four closed native disclosures on mobile. The announcement strip and separate footer utility strip are intentionally removed. Hero and ritual remain inside the same `image_banner` section ID.

```text
header-group.order:           [header]
index.order:                  [image_banner, featured_collection, layering_story, dukhon_story, gifting_story, wardrobe, services]
image_banner.block_order:     [heading, button]
featured_collection.block_order: [all, spray, solid]
layering_story.block_order:   [lotion, solid, spray]
gifting_story.block_order:    [gifts]
wardrobe.block_order:         [spray, solid, lotions, dukhon, charms, layering]
services.block_order:         [gifting, ritual, wardrobe]
footer-group.order:           [footer]
product.order:                [main, disclosures, related-products]
product.main.block_order:     [vendor, title, price, variant_picker, quantity_selector, buy_buttons, description, share]
collection.order:             [banner, product-grid]
cart.order:                   [cart-items, cart-footer]
cart.cart-footer.block_order:  [subtotal, buttons]
page.contact.order:           [main, form]
article.main.block_order:     [featured_image, title, share, content]
password.main.block_order:    [heading, paragraph, email_form]
```

Article, blog, collection list, generic page, search, 404, password and customer templates each have `[main]` as their section order; gift card is a Liquid template. Preserve existing arrays during unrelated edits. Document any intentional design-related sequence change as it is implemented.

## Content and build scope

Read `research/brand/BRIEF.md`, `research/design/CLIENT-STRATEGY.txt`, and `research/design/PLAN.md` together with this current handoff. Newer user decisions in this README override stale historical approval statements.

Core ritual: Lotion → Solid Perfume → Spray Perfume. Categories: Spray Perfumes, Solid Perfumes, Lotions, Dukhoon, Solid Charms, Layering & Kits. Include scent discovery, complementary layering, personalized Gifting by ALMA and About with confirmed content.

The broader requested homepage content remains campaign, best sellers, scent worlds, ritual, complementary products, categories, charms, Dukhoon, gifting, verified reviews, brand story and newsletter/footer. Reconcile its order with the selected visual target; do not claim all these areas appear in the mockups.

The public catalog snapshot under `research/storefront/` contains 23 products, 189 variants, 11 collections and 40 sitemap URLs. Use live Shopify objects in production, not hard-coded snapshot prices or duplicated products. Public capture is not a private data migration or an integration audit.

## Workflow for every account and team

### Implementation map and editing controls

- `sections/alma-campaign.liquid`: replaces the section type at `index.sections.image_banner`. The approved original campaign image is restored to its wide 56.25vw presentation before the compact centered ritual heading, body and link. A separate full-height action layer makes the CTA visible immediately, pins it near the bottom of the viewport while the image moves underneath, and releases it 50 px before the desktop image boundary. Mobile retains the established 640 px central crop; on compact-height screens the CTA follows the viewport during the hero scroll, then settles 30 px inside the image, while taller screens use that same natural resting position. Existing block IDs/order `[heading, button]` remain. The hero uses an editable image picker with `assets/alma-campaign-hero.png` as fallback.
- `sections/alma-favourites.liquid`: replaces the type at `index.sections.featured_collection`. Blocks `[all, spray, solid]` supply selected Shopify products or collections. The main instance's combined tab is an explicit 15-product fragrance assortment, while the other tabs use the imported `alma-perfumes` and `alma-solids-مخمريات` collections. It supports up to 24 products per tab with four visible on desktop; the gifting instance retains four. Product cards intentionally omit catalog-description excerpts so bilingual source copy cannot leak into the English homepage. Empty secondary tabs are omitted. Native `price` handles currency and sale prices; product links open native PDPs.
- `assets/alma-favourites.js`: accessible tabs with mouse, arrow keys, Home/End, roving focus and Theme Editor block selection. It refreshes the selected panel's carousel state after tab changes. Without JavaScript, panels remain visible and tab links act as anchors.
- `assets/alma-language.js`: keeps the current English locale English-only by filtering Arabic blocks from Shopify product and collection descriptions, normalizing incorrectly marked RTL English blocks, hiding mixed truncated collection captions, and reapplying the behavior after Theme Editor section reloads. It does not delete the Arabic catalog source or create the future Arabic locale.
- `assets/alma-scroll-gallery.js` and `snippets/alma-scroll-controls.liquid`: reusable previous/next carousel controls for custom ALMA product and category rails. Controls move one card per activation, support Enter/Space, update a progress line, disable at each boundary and remain disabled when a rail has no overflow.
- `assets/alma-theme.css`: responsive campaign/grid, regular Georgia serif headings, native body font, white/soft-gray surfaces, rectangular CTA and high-resolution transparent logo windows with breathing room around every visible stroke. The opening wordmark uses progressively smaller desktop, tablet, mobile and narrow-phone crops, then yields to the icon after scroll. The landing hero uses the original wide aspect and a bounded sticky action layer instead of a cropped sticky image frame; mobile uses a central crop with an image-contained CTA. Horizontal page overflow is suppressed only on the root `html` element so the document retains one main vertical scrollbar. Mobile product rails use one product column.
- `snippets/alma-logo.liquid`, `assets/alma-logo-icon.png` and `assets/alma-logo-wordmark.png`: exact supplied transparent artworks at their native dimensions. On the desktop homepage, the 132.5 px opening header centers the wordmark above navigation while keeping utilities at right; after scrolling it becomes a 72 px row with the icon left and navigation centered. Mobile and tablet show smaller page-centred versions of the opening wordmark, then restore the left-aligned icon after scroll. The wordmark's transparent source canvas is cropped only by its CSS viewport, not edited. While the mobile menu is open below 990 px, the header is fixed to the current viewport so Dawn's drawer cannot fall back to the header's original document position. `header.liquid` retains Dawn's utility controls, menu drawer, app blocks, account and cart.
- `snippets/alma-navigation-links.liquid`: six category links in the requested order, mapped to the collections created by the catalog import: `alma-perfumes`, `alma-solids-مخمريات`, `alma-lotions`, `alma-dokhon`, `alma-solid-charms`, and `layering-kits`. Optional Gifting/About URLs are in Theme settings → ALMA identity. They remain hidden until real destinations are selected. Disable ALMA navigation to restore the selected native Shopify menu.
- `sections/alma-editorial-feature.liquid`: reusable Diptyque-referenced image-and-copy feature with split or full-width-image layouts, left/right media, optional live featured product/price and up to three linked product steps. The homepage uses the split layout for layering and the immersive image-then-copy layout for Dukhoon. Dukhoon's default media is a responsive `<picture>` with dedicated generated desktop and mobile campaign assets, while a Theme Editor image override still takes precedence. All text, products, images, links and treatments remain editable.
- `sections/alma-wardrobe.liquid`: six-category gallery using curated ALMA packshots, optional Theme Editor image overrides and direct links to the imported collections. It remains a four-card horizontal carousel with arrows/progress on desktop and switches to the reference-matched two-column, three-row grid with square images and underlined labels on mobile.
- `sections/alma-service-band.liquid`: restored descriptive service band for three factual ALMA destinations: gift cards, the three-step ritual and the complete catalog. It uses black star markers, headings, descriptions and separate underlined links in three bounded desktop columns and stacked mobile cards. No images or third-party overlays render in this section. It does not invent shipping, samples, returns or client-service promises.
- `config/settings_schema.json`: ALMA identity controls. `settings_data.json.current` was expanded from the Dawn preset string to its equivalent full object before applying ALMA toggles and scheme-1 colors. Other preset values remain intact.
- `layout/theme.liquid`: loads ALMA CSS and optional body class; native Shopify metadata, integrations and commerce hooks remain.
- `sections/footer.liquid` and `assets/alma-footer.js`: retain the compact reference-inspired composition as one warm-neutral section using the site's ivory, black and gray palette. The exact logo artwork, UAE/English context, copyright, original Shop, Explore ALMA, Help and Legal data and native customer newsletter form are present. Payment badges, including PayPal, are intentionally not rendered. The four groups remain expanded on desktop and become native `details` disclosures below 750 px. Contact links normalize Shopify's internal page URI to `/pages/contact`; configured social hooks remain available without inventing empty icons or claims.

### Test-store catalog and operational limits

Theme synchronization transfers theme code, **not products, collections, customers or orders**. The test catalog was therefore populated separately in Shopify Admin from the public source snapshot under `research/storefront/`. `tools/build-shopify-product-csv.mjs` regenerates `research/storefront/shopify-products-import.csv`; the file contains 22 standard products, 183 variants and 41 image URLs, with English-only product descriptions, SEO descriptions and collection titles for future imports. Shopify Admin created six manual collections from its `Collection` column. The gift card was added separately with its source image and six numeric denominations, bringing the store to 23 products, 189 variants and 42 images. Existing store records retain their original bilingual source content until they are edited or re-imported; the English theme filters the Arabic blocks from view.

The source exposes only availability, not exact inventory counts. Available variants are imported without inventory tracking; unavailable variants are tracked at zero with overselling denied. Three unavailable product groups remain visible and active exactly as in the public catalog. The source prices are numeric AED values, and the authenticated Shopify Admin store-currency setting was changed from EGP to AED on 2026-09-13. Shopify does not convert numeric product prices or shipping rates during this change; review them before treating checkout as production-ready. No billing or payment setup was performed.

No customers, orders, private integrations, discount rules, shipping rules, taxes or app configurations were copied. The catalog import does not alter those resources. Product images can continue processing after the product records appear. Checkout transactions and payment processing remain untested on the trial store.

### Validation and local preview

- Run `npm ci`, then `npm run check:theme` (Shopify CLI pinned to 4.8.0). Current result: 0 errors, 9 warnings in existing Dawn code. JavaScript syntax and Git whitespace checks pass.
- Run `npm run preview:local`, open `http://127.0.0.1:9293`. `?empty=1` exercises an empty catalog. `tools/preview.mjs` renders the actual Liquid layout/sections/snippets using LiquidJS 10.29.0, public catalog fixtures and limited Shopify filters. It is a visual harness, not a Shopify emulator: real store routes, checkout, localization and form submissions are not served. Preview body font uses Arial; deployed theme uses Dawn's configured Assistant font.
- Desktop 1280×720, reference mobile 353×603, standard mobile 390×844 and compact mobile 316×599 have been checked across the latest responsive work. The wardrobe renders four desktop carousel cards with its controls intact and a static two-column mobile grid with all carousel controls removed; it has no broken images or horizontal overflow. The landing CTA remains visible and bounded as documented, and the mobile menu remains fixed to the current viewport after scrolling. Earlier tab selection by click/keyboard checks remain documented. The latest local browser checks show meaningful content and no framework error overlay.
- The older tracked screenshots in `research/design/previews/` document the preceding implementation and are not the current fidelity result. Current desktop/mobile checks and comparison findings are recorded in `design-qa.md`; temporary browser evidence is intentionally not committed.
- Remaining broader rebuild work: dedicated Gifting/About/Layering pages, richer PDP scent/layering metafields, verified review integration and final client campaign photography/copy. The homepage architecture is now complete for the requested Diptyque reference rhythm; these supporting surfaces remain separate tasks.

### Required change workflow

1. Read this entire README and AGENTS.md; inspect relevant files and recent Git history.
2. Check the working tree and pull remote changes before editing. Preserve Shopify-generated and other contributors' work; never force-push.
3. Use Context7 for external library/API documentation and package-dependent setup/code. Prefer version-specific documentation.
4. Implement within Dawn. Make content and media editable through Theme Editor where appropriate.
5. Check JSON/section references and Liquid schemas, run Theme Check and appropriate browser/Shopify checks when available. Verify relevant desktop/mobile and shopping behavior. Report checks that could not run.
6. Update this README after every edit, including current state, exact sequence, decisions, affected files, checks, limitations and next steps. Append new entries below from this reset onward.
7. Commit relevant files and README together; push to `origin/main` and verify the remote hash. Standing user authorization covers these pushes.
8. Verify Shopify separately. A connected branch synchronizes theme code; customer-facing publication depends on the linked theme's actual status. Do not claim either without evidence.

Use local Git authentication for `omarashraaf`; the Codex connector previously used a different account. Credentials are never included in documentation.

## Updates from this point

### 2026-09-11 — Fresh implementation handoff

- Request: start building on the existing GitHub Shopify theme, remove previous README updates and start documentation afresh.
- Change: replaced the old README with this current handoff and new update log; updated AGENTS and design notes to record build authorization and the unresolved layout selection.
- Checks: pulled main successfully, inspected theme configuration and section sequences, read Shopify theme/asset and GitHub-sync documentation through Context7, reviewed the documentation diff and confirmed no theme files changed.
- Remaining: resolve the Diptyque option number, implement its design and supplied icon within Dawn, validate, commit/push, and verify the Shopify connection/preview where access permits.
- Shopify CLI was not found on PATH during this check. No Theme Check or live Shopify preview was run for this documentation-only update.

### 2026-09-11 — Implement approved first Diptyque design

- Request/decision: user selected “first one”; implement in the supplied theme and push to main. User confirmed the main branch is connected to a Shopify test account.
- Changed: new campaign/ritual and favourites sections, exact icon, warm editorial styles, six-category desktop/mobile navigation, optional real Gifting/About links, native catalog cards and empty-test-store editorial fallback. Added pinned local validation/preview tooling, generated campaign asset/prompt and rendered screenshots. Updated AGENTS and design status to record the actual approval.
- Sequence: top-level index/header/footer orders unchanged; image_banner now renders campaign then ritual, featured_collection has `[all, spray, solid]` tabs. Native product, cart, collection and customer templates were not replaced.
- Checks: Context7 Shopify theme/CLI and LiquidJS docs consulted; Theme Check 0 errors/9 existing Dawn warnings; JS syntax and diff whitespace pass; local desktop/mobile imagery, overflow, tab interactions and drawer Escape behavior checked. Original product images override generated mockup packshots; actual store prices remain authoritative.
- Limits/remaining: Shopify synchronization and commerce are not independently verified without the store URL/access. The theme does not copy catalog/private data into the test store. Gifting/About and the broader strategy's additional sections/PDP content remain future work. Commit and push this complete change set together; verify `origin/main` against HEAD when handing off.

### 2026-09-11 — Populate test catalog and correct live hero alignment

- Request: correct the desktop hero alignment, populate the empty connected Shopify test store from the current ALMA storefront and make the catalog usable.
- Root cause/fix: a desktop `max-height: 80rem` constrained the hero media to 1,440 px inside a measured 1,905 px content width. The desktop rule now computes the capped height while preserving full viewport width. Homepage product handles and all six navigation collection handles now match the imported store objects; section and block order are unchanged.
- Catalog: generated a repeatable Shopify CSV from the public snapshot and imported 22 standard products with 183 variants, bilingual descriptions, options, SKUs, prices, comparison prices, weights, availability behavior, SEO fields, 41 images and six collections. Created the gift-card product separately with its source image and six denominations. Verified 23 products/189 variants in total and collection memberships of 6 spray, 9 solid, 2 lotion, 1 Dukhoon, 1 solid charm and 2 layering products.
- Store limitation: the test store uses EGP while the source catalog uses AED. Shopify blocks market-currency customization until payment/account setup is completed. Values are preserved numerically, but the currency label must be corrected before production use. Customer/order/private integration migration was outside the public-data import and was not performed.
- Files: `assets/alma-theme.css`, `templates/index.json`, `snippets/alma-navigation-links.liquid`, `tools/build-shopify-product-csv.mjs`, `research/storefront/shopify-products-import.csv`, and this README.
- Checks: Shopify import preview reported 22 products, 183 SKUs and 41 images without category warnings; admin product, variant image, category and collection views were visually checked. Theme Check passed with 0 errors/9 inherited Dawn warnings; generator JavaScript syntax, homepage JSON parsing, CSV regeneration and Git whitespace checks passed. After GitHub/Shopify sync, the live 1,920 px viewport measured a 1,905 px hero and 1,905 px page body with no horizontal overflow; all six navigation URLs resolve to their real collections and both selected homepage products render with source images and prices. The imported Alma perfume PDP renders its bilingual description, sale pricing, recommendations and native purchase form; adding it produced Shopify's “Item added to your cart” state and a one-item cart indicator. Checkout/payment was not attempted.

### 2026-09-11 — Complete the Diptyque-referenced homepage

- Request/clarification: the user expected the full reference homepage rather than only the approved mockup's opening sections. This explicitly authorizes expanding the homepage sequence.
- Reference mapping: inspected the current Diptyque homepage structure from hero through product tabs, alternating editorial media stories, related-product storytelling, visual category universe, service band, newsletter/help and footer. Recreated that rhythm for ALMA without copying Diptyque text, branding or media.
- Changed: added reusable editorial features for layering, Dukhoon and gifting; a six-category ALMA wardrobe gallery; and an ALMA experience band. All visuals resolve from real imported Shopify products/collections by default and support Theme Editor overrides. Responsive layouts stack cleanly on mobile and reduced-motion preferences disable gallery scaling.
- Sequence: `[image_banner, featured_collection, layering_story, dukhon_story, gifting_story, wardrobe, services]`; nested orders are recorded above. Header/footer and native commerce templates remain intact.
- Files: `sections/alma-editorial-feature.liquid`, `sections/alma-wardrobe.liquid`, `sections/alma-service-band.liquid`, `templates/index.json`, `assets/alma-theme.css`, `tools/preview.mjs`, and this README.
- Checks: Context7 Shopify section/schema guidance consulted; Theme Check passes with 0 errors/9 inherited Dawn warnings; all new schemas and homepage JSON parse; preview JavaScript syntax and Git whitespace checks pass. Local 1280 px and 390×844 visual checks confirm seven homepage sections, responsive stacking, no horizontal overflow, no broken loaded images, working real product/collection links and the intended alternating ivory/blush/dark editorial rhythm. After GitHub/Shopify sync, the live store reports the same seven headings, all product and collection objects resolve, the 1,920 px desktop body is 1,905 px wide, the 390 px mobile body is 375 px wide, no loaded images are broken and the dark Dukhoon heading computes to the intended light text color.

### 2026-09-11 — Rebuild homepage against the live Diptyque reference

- Request: resolve the visible differences from `https://diptyqueparis.com/fr-fr` and make the ALMA storefront follow the reference much more faithfully.
- Reference audit: inspected the live 1,280 px experience from announcement/header through hero, centered introduction, four-product tabbed rail, 50/50 editorial story, full-width image story, related-product rail, universe gallery, service band and split newsletter/help footer. Measured a white page canvas, pale-gray rails/service surfaces, restrained 32 px serif headings, 720–802 px editorial media, rectangular bordered CTAs and compact body/UI typography.
- Changed: replaced the earlier ivory/blush/dark oversized treatment with the reference's white/soft-gray system and restrained typography; resized the header and campaign; expanded favourites to four live products; added product excerpts and rail progress treatment; added split and immersive editorial layouts; converted gifting to a four-product rail; converted the wardrobe to a four-visible horizontal universe rail; compacted services; and rebuilt the footer top as newsletter/help panels. Added a defensive native-header search-modal guard for the local fixture and included product descriptions in preview fixtures.
- Current sequence remains `[image_banner, featured_collection, layering_story, dukhon_story, gifting_story, wardrobe, services]`, but `gifting_story` is now an `alma-favourites` product rail with `[gifts]`, layering is split media-right, and Dukhoon is immersive full-width media followed by centered copy.
- Files: `assets/alma-theme.css`, `config/settings_data.json`, `sections/alma-editorial-feature.liquid`, `sections/alma-favourites.liquid`, `sections/alma-service-band.liquid`, `sections/header.liquid`, `sections/header-group.json`, `sections/footer.liquid`, `sections/footer-group.json`, `templates/index.json`, `tools/preview.mjs`, `design-qa.md`, and this README.
- Checks: live reference inspected in the in-app browser; local 1,280×720 desktop and 390×844 mobile renderings checked; page identity/content, section headings, tab selection, mobile menu open/Escape-close, rail containment, first viewport crop, footer panels and console health verified. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; JavaScript syntax, JSON parsing and Git whitespace checks pass. After the theme commit was pushed, the documented test-store root redirected to `/password` and displayed Shopify's generic “Opening soon” page, so branch synchronization and the customer-facing theme could not be verified without storefront access. The local visual fixture cannot validate Shopify Theme Editor, live forms, checkout, third-party apps or publication. Context7 was required by repository guidance but was unavailable in this environment, and no external package API implementation was introduced.
- Intentional ALMA differences: the exact ALMA icon, products, product photography, names, prices, categories and claims remain authoritative; proprietary Diptyque branding, fonts, copy, video and imagery were not copied. These content/asset differences are required even though the layout, proportions and rhythm now closely follow the reference.

### 2026-09-11 — Replace and reposition the header logo

- Request: replace the storefront mark with the newly supplied transparent PNG, move the logo to the left, move search to the right and remove the upper quote bar.
- Changed: replaced both the served and authoritative brand PNG with the exact supplied file; updated intrinsic image dimensions and the non-destructive CSS crop; selected Dawn's `top-left` desktop and `left` mobile logo positions; removed the announcement section from the header group. With `top-left`, Dawn no longer renders its conditional left-side desktop search instance, so the remaining search control stays in the right utility group beside account and cart.
- Files: `assets/alma-logo-icon.png`, `research/brand/logo-icon.png`, `snippets/alma-logo.liquid`, `sections/header-group.json`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; snippet dimensions match the supplied 1055×1491 PNG and both repository copies match its SHA-256 exactly; header JSON and preview JavaScript parse; `git diff --check` passes. The local fixture passed 1280×720 desktop and 390×844 mobile checks with no announcement elements, the logo on the left, search on the right, no relevant console errors or framework overlay, and meaningful content. Dawn's search modal opens/closes and the mobile drawer opens with all six category links and closes again. The desktop header measured logo x=50–101 and search x=1068–1112; mobile measured logo x=47–97 and search x=274–318.

### 2026-09-11 — Improve logo clarity and center navigation in the header bar

- Request: correct the logo's soft/cropped appearance and move the navigation tabs after the logo into the middle of the same bar.
- Changed: enlarged the high-resolution supplied PNG, reduced the CSS crop and added transparent inset space so no visible stroke touches the frame. Switched desktop from Dawn's two-row `top-left` header to its single-row `middle-left` layout, then centered the navigation in the flexible middle column while preserving search/account/cart at the right. The mobile logo is also larger while remaining beside the drawer control.
- Files: `assets/alma-theme.css`, `sections/header-group.json`, `design-qa.md`, and this README.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; header JSON and preview JavaScript parse; `git diff --check` passes. The local fixture passed 1280×720 desktop and 390×844 mobile checks with meaningful content, no framework overlay and no relevant console errors. Desktop measured the 70×74 px logo frame at x=45–115, all six tabs in the same 94 px bar centered exactly at x=625, and search at x=1068–1112. Mobile measured the enlarged 58×61 px logo frame at x=49–107 and search at x=274–318. The native search modal opens/closes and the mobile drawer opens with all six category links and finishes closing cleanly.

### 2026-09-11 — Remove the duplicate page scrollbar

- Request: retain only the main vertical scrollbar.
- Root cause/fix: `overflow-x: hidden` was applied to both `html` and the theme body. CSS computes the paired vertical overflow to `auto`, making both elements independent vertical scrolling containers. Removed the body-level rule and retained the root `html` rule, so horizontal page overflow remains suppressed while `HTML` is the sole main scroller.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; preview JavaScript and Git whitespace checks pass. At 1280×720, computed browser layout reports `HTML` as the document scrolling element and the only vertical container (`overflow-y: auto`, 6334 px content); body overflow computes to `visible` and no longer owns a scrollbar. A programmatic page scroll from y=0 to y=600 and back succeeds, meaningful content renders, no framework overlay appears and the console has no errors or warnings.

### 2026-09-11 — Add arrows to horizontal product and category rails

- Request: add left/right arrows to the products section and every other section that needs horizontal scrolling.
- Changed: added reusable circular previous/next controls and a live progress indicator to both `alma-favourites` product instances and the six-category wardrobe. The main favourites section can now render up to eight products per tab while retaining four-visible desktop proportions. Buttons move exactly one card, disable at their boundaries or when no overflow exists, and support click, Enter and Space. Dawn's native slider sections were left unchanged because they already provide their own controls.
- Files: `assets/alma-scroll-gallery.js`, `snippets/alma-scroll-controls.liquid`, `assets/alma-favourites.js`, `assets/alma-theme.css`, `sections/alma-favourites.liquid`, `sections/alma-wardrobe.liquid`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; both JavaScript assets and preview JavaScript parse; homepage JSON and Git whitespace checks pass. At 1280×720, selecting Spray Perfumes exposes a 1810 px product track in a 1201 px viewport: Next moves one 304 px card and enables Previous, and Previous returns to zero and disables itself. The wardrobe has the same measured movement and boundary behavior. At 390×844, the product track is 1324 px in a 345 px viewport; Next advances 335 px, and keyboard Enter on Previous moves it back 335 px while retaining focus. All five carousel instances report correct overflow states, the document has no horizontal page overflow, `HTML` remains the sole vertical page scroller, meaningful content renders, no framework overlay appears and the console has no errors or warnings.

### 2026-09-11 — Show the complete catalog with generated packshots and reference controls

- Request: replace “ALMA favourites” with language that represents the full catalog, show every product, replace lifestyle product images with product-only WebP packshots and restyle the rail arrows to match the Diptyque reference.
- Changed: renamed the homepage rail to “The complete ALMA collection” and its first tab to “All products”; removed the four-product override, connected that tab to Shopify's `all` collection and raised the per-tab limit to 24 so all 23 current products render. Generated and reviewed one square studio packshot for each current product handle, converted the accepted outputs to optimized 1000 px WebP theme assets and mapped cards to those stable assets. Packshots use a seamless `#F4F2ED` field that visually disappears into the card instead of lifestyle scenery; the image generator did not return true alpha reliably, so the solid field preserves clean edges without a fake checkerboard. Replaced the text arrows with 40 px SVG chevrons in edge-overlay buttons, hid unavailable directions and retained the existing one-card scroll/progress behavior for every reusable rail.
- Generated-image method: built-in image generation in product-mockup mode, using each catalog image as the exact packaging reference; the shared prompt required product-only framing, uniform warm off-white field, centered uncropped composition, soft studio light, preservation of shape/colors/label placement and no people, props, scenery, gradients, checkerboard or extra text. The Lolo Vanilla jar received a second pass to make its complete front label visible. Final files are `assets/alma-packshot-*.webp` (23 assets).
- Files: `assets/alma-packshot-*.webp`, `assets/alma-theme.css`, `sections/alma-favourites.liquid`, `snippets/alma-scroll-controls.liquid`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: the local fixture renders 23 products in the All products tab and all 23 cards resolve their handle-specific WebP without broken images. At 1280×720 the next control moves exactly 304 px, reaches a disabled end state and introduces no document overflow; at 390×844 it moves exactly 335 px and remains contained. `HTML` remains the sole vertical page scroller. The live Diptyque reference was re-inspected for the 40 px side-overlay control treatment. Theme Check, syntax, JSON, whitespace and final desktop/mobile screenshot results are recorded in `design-qa.md`.

### 2026-09-11 — Keep the main product rail fragrance-only

- Request: remove products unrelated to perfume, especially the gift card, from the main All products rail.
- Changed: renamed the main rail to “The ALMA fragrance collection” and the first tab to “All fragrances”. Replaced the entire-catalog source with the combined 15-product spray and solid fragrance assortment: six spray-related products and nine solid-related products. Gift cards, lotions, Dukhoon, charms, shimmer oil and layering kits no longer appear in this rail; they remain available through their dedicated gifting, editorial and wardrobe sections. The existing Spray Perfumes and Solid Perfumes tabs remain unchanged.
- Files: `sections/alma-favourites.liquid`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: the local fixture renders exactly 15 items in All fragrances, contains no gift card or unrelated category handles, retains functional one-card controls and has no document horizontal overflow. Theme Check, syntax, JSON and desktop/mobile browser results are recorded in `design-qa.md`.

### 2026-09-11 — Correct rail controls and curate wardrobe imagery

- Request: stop the carousel arrows from being cropped, remove their white fill and improve the low-quality/random imagery in Explore the ALMA wardrobe.
- Changed: inset every reusable rail control inside its clipping boundary and made the circle interior fully transparent while retaining the thin outline and SVG chevron. Replaced the wardrobe's automatic collection thumbnails with six deliberate 1000 px WebP packshots: spray perfume bottle, solid perfume jar, lotion bottle, Dukhoon jar, solid charm and layering box. Theme Editor image overrides still take precedence, and unknown/new category labels still fall back to their Shopify collection image. Wardrobe media now uses a consistent 4:5 pale studio tile with contained, padded products instead of cropping lifestyle photos.
- Files: `assets/alma-theme.css`, `sections/alma-wardrobe.liquid`, `design-qa.md`, and this README.
- Checks: all six wardrobe images resolve at 1000×1000 with no broken media; rendered tiles measure 288×360 at 1280 px. Controls are fully inside their rail, compute to a transparent background and retain 40 px resting dimensions. Product/wardrobe movement is 304/304 px on desktop and 335/305 px on mobile, with no document overflow. Theme Check, syntax, whitespace and final browser evidence are recorded in `design-qa.md`.

### 2026-09-13 — Separate the English storefront and prepare AED currency

- Request: remove Arabic/English mixing from the current site, keep this version fully English until a separate Arabic version is added, and use UAE currency.
- Changed: removed bilingual product-description excerpts from the custom homepage rails; added English-locale filtering to native product and collection descriptions; normalized English paragraphs that were incorrectly stored as RTL; replaced the mixed-language solid-perfume collection title wherever Dawn renders it; and made mixed truncated collection captions disappear instead of exposing Arabic. Updated the catalog generator and CSV so future imports contain English-only descriptions, SEO copy and collection titles. Arabic source data was preserved for the planned locale rather than deleted.
- Currency: Dawn's native money filters and `currency_code_enabled: true` remain authoritative. The store itself is still configured as EGP, and the Shopify Admin page redirected to sign-in, so AED was not falsely hard-coded into the theme. An authenticated store owner must change Settings → General → Store defaults → Currency display to AED; review Shopify's currency-change warning before saving because numeric prices remain unchanged and operational settings can be affected.
- Files: `assets/alma-language.js`, `assets/alma-theme.css`, `layout/theme.liquid`, `sections/alma-favourites.liquid`, `sections/featured-collection.liquid`, `sections/main-collection-banner.liquid`, `sections/main-product.liquid`, `sections/predictive-search.liquid`, `snippets/card-collection.liquid`, `tools/build-shopify-product-csv.mjs`, `research/storefront/shopify-products-import.csv`, `design-qa.md`, and this README.
- Checks: both changed JavaScript files pass syntax checks; a DOM-behavior fixture confirms English remains visible, Arabic description blocks are hidden, mixed captions are hidden and retained English RTL markup is normalized; CSV regeneration reports 22 products/183 variants/188 rows and contains no Arabic characters; `git diff --check` passes. The local Liquid endpoint returned HTTP 200 and contained no removed product-excerpt elements. Browser automation and two Theme Check attempts stalled in the local environment, so this change has no new completed visual-browser or Theme Check result; the preceding commit's Theme Check baseline remains 0 errors/9 inherited warnings. Store-currency correction remains blocked on Shopify Admin authentication.

### 2026-09-13 — Match the reference landing hero and sticky-scroll behavior

- Request: keep the campaign CTA visible on the first landing screen, crop the opening image to fit without an initial scroll, and carry the upper navigation through the image scroll before moving into the remaining sections, as shown in the two supplied Diptyque screenshots.
- Changed: sized the hero to the exact viewport space below the header; added separate desktop/mobile focal crops; placed image and CTA in a sticky frame; added a 120 px desktop hold so the image and bottom-centred CTA remain fixed during the opening scroll; switched Dawn's header to `reduce-logo-size`; added smooth ALMA icon contraction and an explicit sticky stacking layer; then released the hero naturally into the unchanged ritual and homepage sequence. The removed announcement quote bar remains removed, and the user-selected left ALMA icon/current navigation layout are preserved.
- Files: `assets/alma-theme.css`, `sections/alma-campaign.liquid`, `sections/header-group.json`, `design-qa.md`, and this README. Section and block-order arrays are unchanged.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; header JSON, preview JavaScript and Git whitespace checks pass. At the normalized 1365×617 reference content viewport, the initial header is 95 px, hero frame is 522 px, CTA is fully visible at y=519–567 and the first screen ends exactly at 617 px. At 99 px scroll, the sticky header contracts to 74 px while the frame grows to the remaining 543 px and the CTA remains at y=519–567; after the 120 px hold, the hero releases and the ritual enters. At 390×844, the 82 px header plus 762 px hero fill the viewport exactly, both products and CTA remain visible, no images are broken, no horizontal overflow occurs and browser console error checks are empty. The screenshot comparison and iteration history are recorded in `design-qa.md` with `final result: passed`.

### 2026-09-13 — Change the Shopify store currency to AED

- Request: finish the previously blocked UAE-currency setup after the user authenticated the Shopify Admin account connected to the ALMA test store.
- Changed: updated Settings → General → Store defaults → Currency display from Egyptian Pound (EGP) to United Arab Emirates Dirham (AED). Dawn continues to use Shopify's native money filters with currency-code display enabled; no price strings were hard-coded and no theme section/block order changed.
- Files: this README only. The currency itself is Shopify store configuration and is not stored in the theme repository.
- Checks: Shopify Admin displayed `United Arab Emirates Dirham (AED)` after the save, including Shopify's reminder to review product pricing and shipping rates. The refreshed local Shopify-backed storefront preview contained 39 `AED` labels and no `EGP`/`E£` labels. Numeric catalog prices were not converted by Shopify and still require commercial review; checkout/payment processing remains untested.

### 2026-09-13 — Tighten the ritual introduction spacing

- Request: remove the excessive white space around “A ritual, entirely yours.”
- Changed: reduced the ritual block's forced desktop minimum height from 400 px to 260 px and its mobile minimum from 340 px to 240 px; reduced vertical padding while preserving centered alignment, copy, links, section order and block order.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: the rendered ritual block measures 260 px at 1365×768 and 240 px at 390×844, with balanced 61/60 px desktop and 54/54 px mobile space around the content group. Scrolling from the hero reveals the complete ritual and following fragrance rail without overlap or horizontal overflow. Page identity, meaningful content, framework-overlay absence and console health pass; Theme Check and Git whitespace validation also pass.

### 2026-09-13 — Replace the cropped Dukhoon editorial image

- Request: replace the badly cropped Dukhoon banner and make the image presentation responsive.
- Changed: generated separate landscape and portrait ALMA Dukhoon campaign photographs from the existing product packshot, keeping the complete jar and lid inside responsive safe areas. The immersive Dukhoon section now uses a `<picture>` element to serve the landscape image above 749 px and the portrait image at mobile widths. A merchant-selected Theme Editor override still takes precedence, and all section/block ordering is unchanged.
- Generated-image method: built-in image generation in product-mockup mode. The exact ALMA Dukhoon packshot was the packaging reference; prompts required a premium warm editorial setting, complete product visibility, preserved black jar/transparent bowl/incense/lid artwork, generous crop-safe margins, and no people, extra products, text or watermark.
- Files: `assets/alma-dukhon-editorial-desktop.jpg`, `assets/alma-dukhon-editorial-mobile.jpg`, `assets/alma-theme.css`, `sections/alma-editorial-feature.liquid`, `design-qa.md`, and this README.
- Checks: at 1365×768 the immersive media serves the 1774×887 desktop asset at 1350×768; at 390×844 it serves the 1024×1536 mobile asset at 375×500. Both rendered views keep the complete ALMA jar and lid visible, select the expected responsive source, have no broken images or horizontal overflow, and show meaningful section content without a framework overlay or console errors. Theme Check, homepage JSON parsing and Git whitespace validation pass.

### 2026-09-13 — Restore the original landing image and bound the sticky CTA

- Request: restore the landing campaign's earlier wide image presentation, keep the collection button visible on the first screen, and have it travel with the hero until reaching its natural location before normal scrolling continues, like the selected reference.
- Changed: removed the viewport-height sticky image crop and restored the approved `assets/alma-campaign-hero.png` to the earlier 56.25vw campaign height. Moved the CTA into a dedicated overlay track: on desktop it stays at the same bottom-centred viewport position as the image scrolls, then releases exactly at the image boundary; on mobile it remains 30 px inside the established 640 px image and cannot overlap the ritual. The image asset, header, section sequence and block order are unchanged.
- Files: `assets/alma-theme.css`, `assets/alma-favourites.js`, `sections/alma-campaign.liquid`, `design-qa.md`, and this README.
- Checks: at 1365×617 the image measures 767.8 px high with only the source/aspect edge trim, the CTA is visible at y=519–567, remains there through y=260 scroll and releases upward when the media bottom reaches it. At 390×844 the CTA sits at y=644–692, 30 px above the image bottom and before the ritual. Both views have zero horizontal overflow, no broken images, meaningful content and no framework overlay. A pre-existing carousel-upgrade race surfaced during the final reload; the refresh call now waits for the custom element definition and the clean reload has no console errors or warnings. Theme Check, JavaScript syntax, Liquid/JSON-related validation and Git whitespace checks are recorded in `design-qa.md`.

### 2026-09-13 — Add breathing room below the landing CTA

- Request/evidence: the supplied screenshot showed the sticky collection button touching the exact bottom edge of the campaign image when it reached its released position, crowding the transition into “A ritual, entirely yours.”
- Changed: shortened the desktop CTA's sticky boundary by 50 px so it now settles with the same 50 px inset used by its first-screen position. The mobile action layer keeps its existing 30 px inset. The hero image, initial CTA position, scrolling behavior, ritual spacing, section sequence and block order are unchanged.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at 1280×720 the released CTA maintains an exact 50 px gap above the campaign boundary at both 203 px and 339 px page scroll. The initial CTA remains visible near the viewport bottom. The mobile-specific rule still resets the desktop boundary and preserves its previously verified 30 px inset. Page identity, meaningful content, framework-overlay absence and console health pass; Theme Check and Git whitespace validation are recorded in `design-qa.md`.

### 2026-09-13 — Keep the mobile menu in the current viewport

- Request: fix the left mobile menu opening only at the top of the page after the customer has scrolled down.
- Root cause/fix: Dawn's drawer is absolutely positioned below the header. When the menu applied its body scroll lock, the sticky header could resolve at its original document position, placing the drawer more than 1,000 px above the visible viewport. Below 990 px, an open menu now fixes the header to the viewport; the drawer therefore remains directly below it regardless of page scroll.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README. Menu links, header layout, section sequence and block order are unchanged.
- Checks: at 390×844 after scrolling to the product area, the open header measures y=0–79 and the drawer y=78–844; all six category links are visible and the menu closes normally. Page identity, meaningful content, framework-overlay absence, console health, Theme Check and Git whitespace validation are recorded in `design-qa.md`.

### 2026-09-13 — Extend the landing CTA scroll behavior to mobile

- Request/evidence: the supplied compact mobile screenshot showed the hero filling the visible screen while the CTA remained below the fold; the user requested the same immediately visible, viewport-following CTA behavior as desktop.
- Changed: replaced the mobile CTA's static bottom placement with a height-aware sticky track. When the 640 px hero exceeds the available screen, the CTA appears near the viewport bottom and follows the customer during the early image scroll; it then releases 30 px above the image boundary. On taller screens where the full hero already fits, the same calculation resolves directly to that natural 30 px resting position.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README. The image, CTA destination, header, section sequence and block order are unchanged.
- Checks: at 316×599 the CTA is visible at y=521–569 at page load, remains at y=521–569 through 80 px of scroll and releases to a 30 px media inset by 147 px scroll. Standard 390×844 behavior, browser health, Theme Check and Git whitespace validation are recorded in `design-qa.md`.

### 2026-09-13 — Match the mobile wardrobe reference grid

- Request/evidence: restyle “Explore the ALMA wardrobe” to match the supplied narrow Diptyque universe screenshot: a centered two-line heading followed by paired square category images and compact underlined labels.
- Changed: below 750 px, replaced the horizontal wardrobe rail with a static two-column, three-row grid; tightened the section opening, hid the supporting sentence, made every media tile square, centered and underlined each label, and removed the carousel progress/arrows. The six approved ALMA packshots, English category names, destination links and block order remain unchanged. Desktop retains its four-card horizontal rail and existing controls.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at the normalized 353×603 reference viewport, the section uses two 145 px columns with an 8 px column gap and 55 px row gap; all six cards remain in the requested order, no carousel footer is rendered, all images load, and document width remains contained. At 390×844 the two columns measure 163.5 px and remain contained. At 1280×720 the unchanged desktop rail shows four 288.25 px cards, horizontal overflow and an enabled next control. The category link interaction was exercised in the local fixture; Theme Check and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Complete the reference-style footer

- Request: improve the footer. The current approved Diptyque reference was audited on desktop and mobile before implementation.
- Audit: ALMA's newsletter/help split was already directionally correct, but the page jumped directly to a nearly empty copyright strip. The reference has a substantial navigation layer and a dark closing utility bar; its mobile columns collapse into compact accordions.
- Changed: increased the newsletter/help panel scale, added four purposeful navigation groups (Shop, Explore ALMA, Help and Legal), added responsive native-details behavior through `assets/alma-footer.js`, normalized both contact destinations to `/pages/contact`, removed the generic Powered by Shopify line, and rebuilt the closing area as a dark UAE/English and copyright bar. Existing newsletter form behavior, localization, payments, optional social links, footer group order and all homepage section/block arrays remain intact. No unverified delivery, returns, phone, opening-hour or customer-service promises were added.
- Files: `sections/footer.liquid`, `assets/alma-footer.js`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at 1280×720 all four groups are expanded with 15 valid theme destinations, the form remains present, both Contact us links resolve to `/pages/contact`, and the page has no broken footer images or horizontal overflow. At 390×844 all four groups initialize closed, Shop expands to expose its four links, the page remains contained, and no framework error overlay appears. Theme Check, JavaScript syntax, JSON and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Compact The ALMA experience

- Request: replace the oversized “The ALMA experience” presentation with a more compact pattern taken from the approved reference.
- Reference mapping: used Diptyque's “À votre service” row—one restrained heading, small framed imagery and concise labels—as the layout source. ALMA has three verified destinations rather than six service promises, so all three fit in one row instead of forcing a partially visible mobile carousel.
- Changed: reduced the mobile section from approximately 789 px to 256 px and the desktop section from approximately 343 px to 257 px. Replaced the decorative text glyph, descriptions and separate CTA lines with three real ALMA packshots in framed tiles and made each complete image/title card the existing destination link. Added an optional image override to each existing block. Product/collection links are normalized for the local fixture; section order and block order `[gifting, ritual, wardrobe]` remain unchanged.
- Files: `sections/alma-service-band.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at 390×844 all three 109.7 px cards remain visible in one row, use loaded 1000×1000 WebPs, link to the existing gift card/layering/all-products destinations and introduce no horizontal overflow. At 1280×720 the row is centred at 960 px with three equal 306.7 px columns and the complete section measures 257.3 px. Theme Check, homepage JSON and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Rebuild the footer as one compact black section

- Request/evidence: replace the existing white navigation/dark utility combination with the supplied compact black footer reference. The other supplied image records the prior ALMA state. The source's unrelated scrolling ticker was not added because the user previously removed the upper announcement bar.
- Changed: combined ALMA branding, primary Shop links, Customer care links and the native newsletter form into one near-black desktop grid; added the reference-like uppercase headings, muted white links, bordered email field and wine-red submit block; and reduced the ending to one divided copyright/legal row. Mobile stacks the brand and newsletter before two closed native navigation disclosures. The exact supplied ALMA icon, UAE/English context, contact normalization, localization/payment/social hooks and legal routes remain. Reference-specific social icons, sale links, shipping/returns and exchange promises were not invented.
- Files: `sections/footer.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. Footer group order and all homepage section/block arrays are unchanged.
- Checks: at 1350×720 the footer measures 326.5 px versus approximately 316 px in the normalized source, fills the 1335 px client width without overflow, loads the logo, retains 12 working links and the customer form, and renders the submit block in ALMA wine. At 390×844 it remains contained, both navigation groups initialize closed, Shop opens/closes and exposes its four links, all footer imagery loads and browser console error logs are empty. Theme Check and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Restore the previous ALMA experience band

- Request: undo the compact image-row redesign because the user preferred the earlier ALMA experience presentation.
- Changed: restored the exact pre-image-row Liquid and CSS from the last approved footer commit: three burgundy star markers, descriptive text, separate underlined links, three divided desktop columns and three stacked mobile cards. Removed the temporary image override and compact-row image treatment. The new black footer and every section/block order remain unchanged.
- Files: `sections/alma-service-band.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at 390×844 the restored section measures 788.6 px with three stacked cards, three descriptions and three links; at 1280×720 it measures 342.9 px with three equal columns. Both viewports remain horizontally contained and the browser console has no errors. Theme Check, homepage JSON and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Apply ALMA branding and restore the full footer data

- Clarification: keep the compact layout idea from the supplied dark reference, but use ALMA's own colors and brand treatment and retain the complete data created for the first footer.
- Changed: replaced the generic black surface with the site's warm neutral footer field, burgundy headings/accent button and a burgundy closing row; removed the white logo tile so the exact wine-colored ALMA mark sits naturally on the brand field; restored all four original navigation groups and all 15 links (Shop, Explore ALMA, Help and Legal). The native newsletter, UAE/English context, policy links, localization/payment/social hooks and mobile disclosures remain.
- Files: `sections/footer.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. Footer group order and all homepage section/block arrays are unchanged.
- Checks: at 1350×720 the footer measures 335.5 px, shows four expanded groups containing 4/4/4/3 links, retains the customer form and exact logo, uses `#f6f6f5`/`#3d0010` rendered brand surfaces and has no horizontal overflow. At 390×844 all four groups initialize closed; Explore ALMA opens to expose its four destinations; the logo loads, the page remains contained and browser console error logs are empty. Theme Check and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Remove the burgundy footer strip and correct the desktop experience

- Request/evidence: burgundy is not part of the selected site palette; remove the separate lower footer bar, retain any needed information in the upper footer, and correct the desktop ALMA experience shown with an oversized retired image treatment.
- Changed: removed the complete `footer__content-bottom` region; moved copyright into the brand column and available payment icons into the newsletter column; retained all policies in the existing Legal group and UAE/English in the brand column. Footer headings, controls and interaction accents now use site black on the warm-neutral surface. The exact supplied logo artwork remains unaltered. Tightened the restored experience band to a bounded 1120 px desktop grid with black markers and explicitly image-free markup.
- Files: `sections/footer.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. Homepage/footer section order and all block-order arrays are unchanged.
- Checks: at a 1265 px desktop client width, the experience is 297.9 px high with three equal 373.3 px text columns and zero images; the one-piece footer is 298.8 px high with four groups, copyright and newsletter, and no `footer__content-bottom`. At a 375 px mobile client width, the lower strip remains absent, all four groups initialize closed, Explore ALMA opens correctly, and the document has no horizontal overflow. Theme Check, JavaScript, JSON and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Force the restored experience markup through Shopify theme sync

- Finding: the public Shopify storefront loaded the latest footer/CSS but retained the retired image-based `alma-service-band` Liquid from commit `5cf2a15`. Because those legacy images no longer had sizing rules, they expanded across the desktop section. The local fixture was already rendering the intended text-only section, so local-only verification missed this partial theme-sync state.
- Changed: added an explicit `alma-service-band--text` class and `data-alma-service-layout="text"` marker to the restored section, reformatted its three text blocks so the section file is included in a new Git change, and added a defensive CSS rule that hides legacy service imagery if Shopify temporarily serves stale markup again. No content or section/block order changed.
- Files: `sections/alma-service-band.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: the restarted local fixture renders the new `data-alma-service-layout="text"` marker with zero service images, three descriptions, three links and no horizontal overflow. Theme Check passes with no errors and the same inherited Dawn warnings; homepage JSON and Git whitespace checks pass. Public Shopify verification remains blocked by the storefront password until the connected theme receives the commit and an authenticated view is refreshed.

### 2026-09-13 — Remove PayPal from the footer

- Request: remove the PayPal badge shown below the newsletter field.
- Changed: removed the footer payment-badge renderer, its responsive styling and the unused payment toggle from the footer schema/configuration. This removes PayPal and prevents it from returning when Shopify reports PayPal as an enabled payment method. Checkout payment configuration is unchanged.
- Files: `sections/footer.liquid`, `sections/footer-group.json`, `assets/alma-theme.css`, `design-qa.md`, and this README. Footer group order and homepage section/block arrays are unchanged.
- Checks: footer rendering contains no payment list or PayPal badge; newsletter, copyright and all four navigation groups remain. Theme Check, footer-group JSON and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Add the expanding homepage wordmark header

- Request/reference: match the supplied Diptyque header hierarchy by placing the supplied ALMA wordmark above the category tabs on the first homepage screen, then minimize on scroll to the simple icon-left/tab-centered header without the main wordmark.
- Changed: added the exact 1055 × 1491 transparent wordmark asset byte-for-byte; its visible artwork is cropped from the source's transparent canvas through CSS. The desktop homepage header now uses a 132.5 px two-row opening state and switches to a 72 px one-row sticky state after scrolling. Existing search/account/cart utilities remain right-aligned per the earlier user decision. Mobile and non-home pages retain the compact icon header. Sticky-header height is recalculated after state changes so the campaign CTA continues to use the current header height.
- Files: `assets/alma-logo-wordmark.png`, `sections/header.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. Header/footer group order and all homepage block arrays are unchanged.
- Checks: at 1265 × 720, the opening wordmark is loaded at 140 × 71 px, navigation begins below it, the icon is hidden and there is no horizontal overflow. After scrolling, the wordmark is hidden, the icon appears at left, navigation and utilities share the 72 px row, and overflow remains zero. The earlier mobile behavior was superseded by the responsive opening-wordmark change below.

### 2026-09-13 — Extend the opening wordmark header across mobile and tablet

- Request/reference: the supplied 315 px mobile screenshot showed the compact ALMA icon on the first screen; the user requested the main ALMA wordmark there as well, at a smaller responsive size across mobile and other screen widths.
- Changed: the homepage now opens with the exact supplied wordmark centered independently of Dawn's unequal left/right control columns. It measures 115 × 58 px on tablet, 105 × 53 px on standard mobile and 92 × 47 px on narrow phones. Scrolling hides the wordmark and restores the compact icon without changing the menu, search, account/cart behavior, campaign, section order or block order.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at 390 × 844 the opening wordmark is centered at x=135–240 in the 375 px content width, with the icon hidden and menu/search/cart visible; at scroll y=220 the wordmark is hidden and the 52 × 55 px icon returns. At 320 × 568 the wordmark scales to 92 × 47 px without colliding with the 44 px menu or 86 px utility group. At 768 × 1024 it scales to 115 × 58 px and remains centered with all header controls visible. Header-specific overlap checks pass in all three viewports; the established off-canvas product rails continue to determine the document's internal `scrollWidth` at the tablet breakpoint while the root overflow remains clipped.

## Continuation prompt

```text
Continue ALMA by Reem Fragrances at https://github.com/omarashraaf/almafragrances on main.
Read AGENTS.md and the entire README first, then inspect files and recent Git history. The README was intentionally reset at the user's request; append all future updates from that point.
The user authorized building directly within the supplied Dawn 15.5.0 theme and pushing completed work to main. Preserve store data, URLs, native commerce and integrations. Use research/brand/logo-icon.png as the website logo without redesigning product packaging.
The user selected research/design/previews/diptyque-direction-1.png and later clarified that the full Diptyque homepage rhythm is required. The homepage is expanded through layering, Dukhoon, gifting, wardrobe and service sections; do not collapse it back to only the opening sections. Main is connected to the verified test storefront https://dk5qhx-ax.myshopify.com/. The test store contains 23 products/189 variants and six category collections imported from the public source snapshot; read the currency and inventory limitations above before production work.
The current storefront locale is English-only; preserve Arabic source copy for a future separate Arabic locale. Currency-code display is enabled and the authenticated Shopify store currency was changed from EGP to AED on 2026-09-13. Numeric product prices and shipping rates were not converted automatically and must be reviewed before production.
The opening campaign uses the restored original wide artwork height rather than a viewport-height image crop. On desktop and compact mobile screens, the CTA is visible immediately, stays near the bottom of the viewport while the campaign scrolls, and releases with a responsive inset before the ritual and existing later sections continue normally. Preserve this interaction unless the user requests another landing behavior.
Use Context7 before external API/package-dependent implementation. Pull before edits. Update README in every change commit, documenting current structure/order, implementation, checks, limitations and next steps. Push and verify remote main; verify Shopify connection, synchronization and publication separately.
Next requested work: [describe the next change].
```
