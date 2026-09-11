# ALMA by Reem Fragrances — implementation handoff

Fresh handoff started at the user's request on 2026-09-11. Previous README update entries have been removed. Record implementation and future updates here from this point onward; earlier changes remain recoverable through Git history.

## Current work

- The user authorized starting the build directly in the supplied Shopify theme and pushing completed edits to GitHub.
- Repository: https://github.com/omarashraaf/almafragrances.git
- Branch: `main`, tracking `origin/main`.
- Base: supplied Shopify Dawn 15.5.0, imported in `d35f787`. The selected design is implemented within this theme.
- Current design reference: https://diptyqueparis.com/fr-fr.
- Website logo: the user-selected icon in `research/brand/logo-icon.png`. Use its exact artwork; do not change existing product packaging.
- The user selected **option 1**, `research/design/previews/diptyque-direction-1.png`, and authorized implementation and pushes. No further design approval is needed for this selection.
- Implemented campaign/ritual and favourites sections, the supplied icon, editorial styling and ALMA category navigation. The reported desktop hero width defect is fixed and verified on the connected Shopify theme.
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

Homepage: announcement bar → centered icon/utility header and category navigation → campaign hero → ritual introduction → favourites with All / Spray Perfumes / Solid Perfumes tabs → native footer/newsletter. Hero and ritual are inside the same `image_banner` section ID; existing top-level order is preserved.

```text
header-group.order:           [announcement-bar, header]
announcement-bar.block_order: [announcement-bar-0]
index.order:                  [image_banner, featured_collection]
image_banner.block_order:     [heading, button]
featured_collection.block_order: [all, spray, solid]
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
- `sections/alma-favourites.liquid`: replaces the type at `index.sections.featured_collection`. Blocks `[all, spray, solid]` supply selected Shopify products or collections. Default All picks the imported `alma-hair-and-body-perfume` and `lolo-vanilla` products, with best-sellers then All products fallback. Other tabs use the imported `alma-perfumes` and `alma-solids-مخمريات` collections. Empty secondary tabs are omitted. Native `price` handles currency and sale prices; product links open native PDPs.
- `assets/alma-favourites.js`: accessible tabs with mouse, arrow keys, Home/End, roving focus and Theme Editor block selection. Without JavaScript, panels remain visible and tab links act as anchors.
- `assets/alma-theme.css`: responsive campaign/grid, regular Georgia serif headings, native body font, warm ivory/espresso colors, rectangular CTA and cropped icon. Mobile uses a central hero crop and one product column. Header background matches the source icon's exact `#EDEBDB` background; artwork pixels are unchanged.
- `snippets/alma-logo.liquid` and `assets/alma-logo-icon.png`: exact supplied artwork, cropped visually with CSS. `header.liquid` retains Dawn's utility controls, menu drawer, app blocks, account and cart.
- `snippets/alma-navigation-links.liquid`: six category links in the requested order, mapped to the collections created by the catalog import: `alma-perfumes`, `alma-solids-مخمريات`, `alma-lotions`, `alma-dokhon`, `alma-solid-charms`, and `layering-kits`. Optional Gifting/About URLs are in Theme settings → ALMA identity. They remain hidden until real destinations are selected. Disable ALMA navigation to restore the selected native Shopify menu.
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
- Screenshots: `research/design/previews/implemented-desktop.png` and `implemented-mobile.png`. See `design-qa.md` for scope, comparisons and known differences.
- Remaining broader rebuild work: confirmed Gifting/About content and pages, additional homepage story/category/scent/review sections, and richer PDP layering/scent content from the strategy. These are not claimed complete by the selected opening-page implementation. Store synchronization and actual commerce still need verification on Shopify.

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

## Continuation prompt

```text
Continue ALMA by Reem Fragrances at https://github.com/omarashraaf/almafragrances on main.
Read AGENTS.md and the entire README first, then inspect files and recent Git history. The README was intentionally reset at the user's request; append all future updates from that point.
The user authorized building directly within the supplied Dawn 15.5.0 theme and pushing completed work to main. Preserve store data, URLs, native commerce and integrations. Use research/brand/logo-icon.png as the website logo without redesigning product packaging.
The user selected research/design/previews/diptyque-direction-1.png. The first design is implemented with alma-campaign and alma-favourites sections; do not ask for design/build approval again. Main is connected to the verified test storefront https://dk5qhx-ax.myshopify.com/. The test store contains 23 products/189 variants and six category collections imported from the public source snapshot; read the currency and inventory limitations above before production work.
Use Context7 before external API/package-dependent implementation. Pull before edits. Update README in every change commit, documenting current structure/order, implementation, checks, limitations and next steps. Push and verify remote main; verify Shopify connection, synchronization and publication separately.
Next requested work: [describe the next change].
```
