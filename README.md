# ALMA by Reem Fragrances — implementation handoff

Fresh handoff started at the user's request on 2026-09-11. Previous README update entries have been removed. Record implementation and future updates here from this point onward; earlier changes remain recoverable through Git history.

## Current work

- The user authorized starting the build directly in the supplied Shopify theme and pushing completed edits to GitHub.
- Repository: https://github.com/omarashraaf/almafragrances.git
- Branch: `main`, tracking `origin/main`.
- Base: supplied Shopify Dawn 15.5.0, imported in `d35f787`. The selected design is implemented within this theme.
- Current design reference: https://diptyqueparis.com/fr-fr.
- Website logo: the user-selected transparent icon in `research/brand/logo-icon.png`. Use its exact artwork; do not change existing product packaging.
- The user selected **option 1**, `research/design/previews/diptyque-direction-1.png`, and authorized implementation and pushes. No further design approval is needed for this selection.
- Implemented the complete Diptyque-referenced homepage rhythm with ALMA content: campaign/ritual opening, favourites, layering feature, Dukhoon feature, gifting feature, six-category wardrobe, service band, newsletter and footer. The supplied icon and real Shopify catalog imagery are used throughout.
- Verified test store: `https://dk5qhx-ax.myshopify.com/`. The user confirms `main` is connected to its Shopify theme. The store is a trial account and the connected theme is visible on the public storefront; publication state and exact theme ID were not inspected.
- The test store now contains the current public ALMA catalog: 23 active products, 189 variants, 42 product images and six requested category collections. Twenty-two standard products were imported from the generated CSV; the gift card was created through Shopify's gift-card product flow.

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

Homepage: single-row utility header with a larger left-aligned transparent ALMA icon, centered category navigation and right-side search/account/cart utilities → campaign hero → ritual introduction → tabbed favourites carousel with four products visible and up to eight available per tab → 50/50 layering editorial feature with three product steps → full-width Dukhoon image and centered story → four-product gifting carousel → horizontally scrollable six-category ALMA wardrobe → compact three-part ALMA experience band → split newsletter/help footer. Product and wardrobe rails include previous/next arrows and progress indicators. The announcement strip is intentionally removed. Hero and ritual remain inside the same `image_banner` section ID. The 2026-09-11 fidelity pass explicitly changed the visual anatomy to follow the live Diptyque homepage more closely while retaining ALMA content and commerce.

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

- `sections/alma-campaign.liquid`: replaces the section type at `index.sections.image_banner`. Campaign image and CTA appear before the ritual heading, body and link. Its existing block IDs/order `[heading, button]` remain; the two block types have intentional fixed visual placement. The hero uses an editable image picker with `assets/alma-campaign-hero.png` as fallback. The bundled campaign is generated artwork, not exact catalog photography; its prompt is in `research/design/alma-campaign-hero-prompt.txt`.
- `sections/alma-favourites.liquid`: replaces the type at `index.sections.featured_collection`. Blocks `[all, spray, solid]` supply selected Shopify products or collections. Default All picks the imported `alma-hair-and-body-perfume` and `lolo-vanilla` products, with best-sellers then All products fallback. Other tabs use the imported `alma-perfumes` and `alma-solids-مخمريات` collections. The main favourites instance exposes up to eight products per tab with four visible on desktop; the gifting instance retains four. Empty secondary tabs are omitted. Native `price` handles currency and sale prices; product links open native PDPs.
- `assets/alma-favourites.js`: accessible tabs with mouse, arrow keys, Home/End, roving focus and Theme Editor block selection. It refreshes the selected panel's carousel state after tab changes. Without JavaScript, panels remain visible and tab links act as anchors.
- `assets/alma-scroll-gallery.js` and `snippets/alma-scroll-controls.liquid`: reusable previous/next carousel controls for custom ALMA product and category rails. Controls move one card per activation, support Enter/Space, update a progress line, disable at each boundary and remain disabled when a rail has no overflow.
- `assets/alma-theme.css`: responsive campaign/grid, regular Georgia serif headings, native body font, white/soft-gray surfaces, rectangular CTA and a high-resolution transparent logo window with breathing room around every visible stroke. Horizontal page overflow is suppressed only on the root `html` element so the document retains one main vertical scrollbar. Mobile uses a central hero crop and one product column.
- `snippets/alma-logo.liquid` and `assets/alma-logo-icon.png`: exact supplied transparent artwork at its native 1055×1491 dimensions. The header group uses Dawn's single-row `middle-left` desktop layout, centers navigation after the left logo, removes the announcement strip and leaves search in the right utility group alongside account and cart. Mobile keeps the enlarged logo left-aligned. `header.liquid` retains Dawn's utility controls, menu drawer, app blocks, account and cart.
- `snippets/alma-navigation-links.liquid`: six category links in the requested order, mapped to the collections created by the catalog import: `alma-perfumes`, `alma-solids-مخمريات`, `alma-lotions`, `alma-dokhon`, `alma-solid-charms`, and `layering-kits`. Optional Gifting/About URLs are in Theme settings → ALMA identity. They remain hidden until real destinations are selected. Disable ALMA navigation to restore the selected native Shopify menu.
- `sections/alma-editorial-feature.liquid`: reusable Diptyque-referenced image-and-copy feature with split or full-width-image layouts, left/right media, optional live featured product/price and up to three linked product steps. The homepage uses the split layout for layering and the immersive image-then-copy layout for Dukhoon; all text, products, images, links and treatments are editable in Theme Editor.
- `sections/alma-wardrobe.liquid`: six-category horizontal image gallery using each live collection's image or first product image, with optional image overrides and the shared carousel arrows/progress indicator. It preserves the requested category order and links directly to the imported collections.
- `sections/alma-service-band.liquid`: restrained three-column closing band for factual ALMA destinations: gift cards, the three-step ritual and the complete catalog. It does not invent shipping, samples, returns or client-service promises.
- `config/settings_schema.json`: ALMA identity controls. `settings_data.json.current` was expanded from the Dawn preset string to its equivalent full object before applying ALMA toggles and scheme-1 colors. Other preset values remain intact.
- `layout/theme.liquid`: loads ALMA CSS and optional body class; native Shopify metadata, integrations and commerce hooks remain.

### Test-store catalog and operational limits

Theme synchronization transfers theme code, **not products, collections, customers or orders**. The test catalog was therefore populated separately in Shopify Admin from the public source snapshot under `research/storefront/`. `tools/build-shopify-product-csv.mjs` regenerates `research/storefront/shopify-products-import.csv`; the file contains 22 standard products, 183 variants and 41 image URLs. Shopify Admin created six manual collections from its `Collection` column. The gift card was added separately with its bilingual description, source image and six numeric denominations, bringing the store to 23 products, 189 variants and 42 images.

The source exposes only availability, not exact inventory counts. Available variants are imported without inventory tracking; unavailable variants are tracked at zero with overselling denied. Three unavailable product groups remain visible and active exactly as in the public catalog. The source prices are numeric AED values, but the trial store is configured with EGP as its store currency, so Shopify currently displays the same numeric values as EGP. Shopify requires payment/account setup before the market currency can be customized; no billing or payment setup was performed. Change the store currency/market to AED before treating prices as production-ready.

No customers, orders, private integrations, discount rules, shipping rules, taxes or app configurations were copied. The catalog import does not alter those resources. Product images can continue processing after the product records appear. Checkout transactions and payment processing remain untested on the trial store.

### Validation and local preview

- Run `npm ci`, then `npm run check:theme` (Shopify CLI pinned to 4.8.0). Current result: 0 errors, 9 warnings in existing Dawn code. JavaScript syntax and Git whitespace checks pass.
- Run `npm run preview:local`, open `http://127.0.0.1:9293`. `?empty=1` exercises an empty catalog. `tools/preview.mjs` renders the actual Liquid layout/sections/snippets using LiquidJS 10.29.0, public catalog fixtures and limited Shopify filters. It is a visual harness, not a Shopify emulator: real store routes, checkout, localization and form submissions are not served. Preview body font uses Arial; deployed theme uses Dawn's configured Assistant font.
- Desktop 1024×1536 and mobile 390×844 checked. No horizontal overflow or broken visible images. Tab selection by click/keyboard and native mobile menu open/Escape-close were checked. The final local page had no browser console errors; two fixture font-preload warnings remain.
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

## Continuation prompt

```text
Continue ALMA by Reem Fragrances at https://github.com/omarashraaf/almafragrances on main.
Read AGENTS.md and the entire README first, then inspect files and recent Git history. The README was intentionally reset at the user's request; append all future updates from that point.
The user authorized building directly within the supplied Dawn 15.5.0 theme and pushing completed work to main. Preserve store data, URLs, native commerce and integrations. Use research/brand/logo-icon.png as the website logo without redesigning product packaging.
The user selected research/design/previews/diptyque-direction-1.png and later clarified that the full Diptyque homepage rhythm is required. The homepage is expanded through layering, Dukhoon, gifting, wardrobe and service sections; do not collapse it back to only the opening sections. Main is connected to the verified test storefront https://dk5qhx-ax.myshopify.com/. The test store contains 23 products/189 variants and six category collections imported from the public source snapshot; read the currency and inventory limitations above before production work.
Use Context7 before external API/package-dependent implementation. Pull before edits. Update README in every change commit, documenting current structure/order, implementation, checks, limitations and next steps. Push and verify remote main; verify Shopify connection, synchronization and publication separately.
Next requested work: [describe the next change].
```
