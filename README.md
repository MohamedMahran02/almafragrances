# ALMA by Reem Fragrances — implementation handoff

Fresh handoff started at the user's request on 2026-09-11. Previous README update entries have been removed. Record implementation and future updates here from this point onward; earlier changes remain recoverable through Git history.

## Current work

- The user authorized starting the build directly in the supplied Shopify theme and pushing completed edits to GitHub.
- Repository: https://github.com/MohamedMahran02/almafragrances.git
- Branch: `main`, tracking `origin/main`.
- Base: supplied Shopify Dawn 15.5.0, imported in `d35f787`. The selected design is implemented within this theme.
- Current design reference: https://diptyqueparis.com/fr-fr.
- Website identity: the homepage opening header uses the supplied transparent wordmark, centered above desktop navigation and centered between the mobile controls. Over the first 132 px of desktop scroll, the wordmark moves left, scales down and crossfades into the supplied static icon. Mobile/tablet use the same scroll-scrubbed scale/crossfade over 96 px but keep the mark centered throughout; spatial movement is reserved for desktop and larger screens. Stopping scroll freezes the exact intermediate state. The user-provided WebM has been removed. Both static source artworks remain exact and product packaging is unchanged.
- The user selected **option 1**, `research/design/previews/diptyque-direction-1.png`, and authorized implementation and pushes. No further design approval is needed for this selection.
- Implemented the complete Diptyque-referenced homepage rhythm with ALMA content: campaign/ritual opening, favourites, layering feature, Dukhoon feature, gifting feature, six-category wardrobe, service band, newsletter and footer. The supplied icon and real Shopify catalog imagery are used throughout.
- Active Shopify review store: `https://app-test-1111231327.myshopify.com/`. GitHub `main` is connected to its live `almafragrances/main` theme, Shopify theme ID `167361839354`. Theme settings that Shopify preserves in the Theme Editor must be verified and, when necessary, synchronized directly to this exact theme rather than inferred from GitHub delivery alone.
- The catalog-free Vercel deployment is an archived non-commerce visual artifact and is not the user's requested review or deployment target. Do not create or use further Vercel deployments unless the user explicitly asks; validate current work on the connected Shopify theme.
- The test store now contains the current public ALMA catalog: 23 active products, 189 variants, 42 product images and six requested category collections. Twenty-two standard products were imported from the generated CSV; the gift card was created through Shopify's gift-card product flow.
- The theme contains an Arabic storefront locale alongside English, Arabic versions of the current custom homepage and policy copy, RTL document direction and a globe language control in the header. English product and collection description filtering is retained; Arabic removes standalone English paragraphs from bilingual descriptions when Arabic paragraphs exist. Arabic has been added to the Shopify Admin store domain and its Translate & Adapt job has completed. The 22 product titles and bodies, current collection names, imported options, menus, 12 fragrance-note metaobjects, page titles, product SEO fields and generated Privacy Policy have been reviewed or translated in Admin. Shopify still labels Arabic **Not published** and offers no Publish action in its language menu on this Basic Development store. The `/ar` preview renders translations, but public language availability, checkout and notifications are unverified. The Shopify store currency is United Arab Emirates Dirham (AED), and theme currency-code display is enabled. Storefront prices omit redundant leading `Dhs.`; Arabic theme output replaces the visible `AED` code with `د.إ`.
- Active typography comparison: **option 2**, using self-hosted Cormorant Garamond for headings/display actions and self-hosted Jost for body/interface text. Shopify rejected the proposed Cormorant Garamond font-picker handle, so the exact open-source files are served as theme assets through Shopify's CDN instead of substituting another font. This is a temporary preview pending the user's final selection.

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

Homepage: expanded opening header with the centered ALMA wordmark above five launch-focused links—Products, Sale, Find Your Aura, Gifting and Contact—on desktop and centered between the menu and utilities on mobile/tablet; the opening scroll continuously scales and crossfades the two supplied static logos. Desktop and larger screens move the transition into the compact left icon while proportionally lifting the navigation and contracting the header. Mobile/tablet perform the scale/crossfade in place at the exact horizontal center. The final state is a 72 px desktop row with links centered and utilities right, or the established 78 px mobile control row with the icon centered. The desktop market selector shows the compact `AED` code so it does not collide with navigation or search/account/cart controls. The transition has no independent timer: stopping at an intermediate scroll position freezes that exact visual state → original wide campaign artwork with a viewport-tracking CTA → reference-proportioned centered ritual introduction → collection-driven fragrance carousel with four products visible on desktop → “Find Your Aura” live fragrance-note matcher → 50/50 layering editorial feature with its original desktop title panel and a mobile-only title overlay on the photograph → full-width Dukhoon photo panel with the authentic Shopify portrait image blended over a generated wide atmospheric background, followed by its centered desktop story, with the title moving onto the photograph only on mobile → four-product gifting carousel → six-category ALMA wardrobe (four-card carousel on desktop, two-column grid on mobile) → restored descriptive ALMA experience band → one compact logo-wine-and-ivory footer containing brand identity, a concise eight-link navigation, newsletter and copyright. Payment badges are intentionally not rendered. The campaign is restored to its original 56.25vw presentation instead of being cropped into a viewport-height frame. Its CTA is visible on the first screen and remains bottom-centred while the artwork scrolls on both desktop and compact mobile viewports, then releases with a 50 px desktop or 30 px mobile inset before the image boundary. Product rails and the desktop wardrobe rail include inset transparent previous/next controls on desktop; below 750 px product arrows are hidden in favor of native touch swiping, and the mobile wardrobe is a static grid without carousel controls. The ALMA experience uses a title column beside three divided text columns on desktop and a compact swipe rail on mobile. Footer navigation is always visible in three essential groups—Shop, Help and Legal—on desktop and mobile, with no disclosure arrows or hidden links. The announcement strip and separate footer utility strip are intentionally removed. Hero and ritual remain inside the same `image_banner` section ID.

```text
header-group.order:           [header]
index.order:                  [image_banner, featured_collection, scent_finder, layering_story, dukhon_story, gifting_story, wardrobe, services]
image_banner.block_order:     [heading, button]
featured_collection.block_order: [perfumes, solid, lotions, dokhoon, charms, layering]
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

- `sections/alma-campaign.liquid`: replaces the section type at `index.sections.image_banner`. The approved original campaign image is restored to its wide 56.25vw presentation before the measured reference-proportioned ritual heading, body and link. The ritual now has a 230 px minimum height with a 653 px inner measure on desktop and a 315 px minimum height with a 240 px inner measure on mobile; its heading, six-line mobile/two-line desktop copy and CTA row follow the supplied reference rhythm while keeping English ALMA content. A separate full-height action layer makes the CTA visible immediately, pins it near the bottom of the viewport while the image moves underneath, and releases it 50 px before the desktop image boundary. Mobile retains the established 640 px central crop; on compact-height screens the CTA follows the viewport during the hero scroll, then settles 30 px inside the image, while taller screens use that same natural resting position. The opening bordered CTA is labeled “Shop all” and opens the full product collection; it and the ritual text link use the reference's 17 × 16 dot marks, 4 px label gaps, 48 px button height and 1 px underlined text treatment while retaining English copy and real ALMA destinations. Existing block IDs/order `[heading, button]` remain. The hero uses an editable image picker with `assets/alma-campaign-hero.png` as fallback.
- `sections/alma-favourites.liquid`: replaces the type at `index.sections.featured_collection`. Best Sellers leads the main rail, followed by the configured collection blocks `[perfumes, solid, lotions, dokhoon, charms, layering]`. Each tab renders products and their Shopify featured images from its selected collection, with up to 24 products per tab and four visible on desktop; the gifting instance retains four. Product cards omit catalog-description excerpts so bilingual source copy cannot leak into the English homepage. Selected collection tabs remain visible even when a collection has no products. Native `price` handles currency and sale prices; product links open native PDPs.
- `assets/alma-favourites.js`: accessible tabs with mouse, arrow keys, Home/End, roving focus and Theme Editor block selection. It refreshes the selected panel's carousel state after tab changes. Without JavaScript, panels remain visible and tab links act as anchors.
- `sections/alma-scent-finder.liquid` and `assets/alma-scent-finder.js`: power the “Find Your Aura” note-selection experience immediately after the main fragrance collection. A permanent `#AlmaScentFinder` anchor gives the header Find Your Aura link a stable destination and uses the current sticky-header height as scroll clearance. The visible note choices are generated automatically from the reusable `Fragrance note` metaobject entries, eliminating duplicated Theme Editor note blocks. The section reads live products from the configured Shopify collection and derives searchable note data primarily from the `custom.fragrance_note_refs` selector; product titles, descriptions, tags and the legacy `custom.fragrance_notes` text list remain compatibility fallbacks. It does not contain a hard-coded product catalog. Results rank by the number of selected-note matches, preserve live product URLs/prices/images, and use a centered touch-swipe rail on mobile. New products participate automatically when added to the selected collection and assigned note entries.
- `assets/alma-language.js`: keeps the current English locale English-only by filtering Arabic blocks from Shopify product and collection descriptions, normalizing incorrectly marked RTL English blocks, hiding mixed truncated collection captions, and reapplying the behavior after Theme Editor section reloads. It does not delete the Arabic catalog source or create the future Arabic locale.
- `assets/alma-money-format.js`: removes only a leading `Dhs.`/`Dhs` token when it directly precedes a numeric storefront price. It observes later variant/cart DOM updates, preserves the amount and any trailing `AED`, and deliberately skips scripts, styles, form values and embedded JSON. Core product-card/PDP prices also use `money_without_currency` plus Shopify's active currency ISO code in `snippets/price.liquid`.
- `assets/alma-scroll-gallery.js` and `snippets/alma-scroll-controls.liquid`: reusable previous/next carousel controls for custom ALMA product and category rails. Controls move one card per activation, support Enter/Space, disable at each boundary and remain disabled when a rail has no overflow.
- `assets/alma-theme.css`: responsive campaign/grid, Shopify-configured heading and body typography, white/soft-gray surfaces, and transparent logo staging with breathing room around every visible stroke. Customer-facing controls share the approved Diptyque-referenced system: 48 px white bordered box buttons or 22 px dotted-underlined text actions, both using the exact existing 17 × 16 SVG marks; operational icon, carousel, quantity, tab, disclosure and footer-navigation controls remain distinct. Product detail pages use an image-led 56/44 desktop composition and image-first mobile stack; their native Add to cart and dynamic checkout controls deliberately omit decorative dots and use complementary wine/white hover reversals. CSS custom properties supplied by the sticky header interpolate the morph stage's position and scale plus the desktop brand row, navigation and utilities without a time-based transition. The landing hero uses the original wide aspect and a bounded sticky action layer instead of a cropped sticky image frame; mobile uses a central crop with an image-contained CTA. Horizontal page overflow is suppressed only on the root `html` element so the document retains one main vertical scrollbar. Mobile product rails use one centered product column, retain native horizontal touch scrolling, snap every card to the viewport center and hide the desktop arrow buttons below 750 px.
- `snippets/alma-logo.liquid`, `assets/alma-logo-icon.png` and `assets/alma-logo-wordmark.png`: exact supplied transparent static artworks. On the desktop homepage, the 132.5 px opening header centers the wordmark above navigation; scroll 0–132 px moves/scales it left while crossfading into the icon, lifts the navigation and contracts the visible header to 72 px. Mobile/tablet use the same scale/crossfade over 0–96 px but keep both logos centered in their fixed-height control row. A fixed-size transparent sticky wrapper prevents header contraction from changing document scroll position, so stopping scroll also stops the transition. While the mobile menu is open below 990 px, the header is fixed to the current viewport so Dawn's drawer cannot fall back to its original document position. `header.liquid` retains Dawn's utility controls, menu drawer, app blocks, account and cart.
- `snippets/alma-navigation-links.liquid`: five launch-focused links shared by the desktop header and mobile drawer: Products (`/collections/all`), Sale (the currently discounted `alma-layering-box` product), Find Your Aura (`/#AlmaScentFinder`), Gifting (the configured URL or permanent homepage gifting-section fallback) and Contact (the live contact page). Category discovery remains available through Products and the homepage wardrobe. Disable ALMA navigation to restore the selected native Shopify menu.
- `sections/alma-editorial-feature.liquid`: reusable Diptyque-referenced image-and-copy feature with split or image-led layouts, left/right media, optional live featured product/price and up to three linked product steps. At desktop widths, the editable eyebrow and heading use the original clean content-panel placement: beside the split layering photograph and beneath the full-width Dukhoon photo panel. Below 750 px, those same values become code-native photo overlays: bottom-left for layering and 80 px from the top for Dukhoon, each with a localized contrast gradient that does not obscure the product. Dukhoon uses its Shopify featured product image by default, with a Theme Editor image override taking precedence. The desktop portrait product image stays sourced from Shopify and is blended at its edges over a generated 16:9 environmental background, keeping the original jar artwork intact within the full-width panel and centered story below. Mobile retains its 500 px image and title overlay. Supporting copy, live product/price, actions and ritual steps remain in the content panel; all text, products, images, links and treatments remain editable.
- `sections/alma-wardrobe.liquid`: six-category gallery using Shopify collection or product images, optional Theme Editor image overrides and direct links to the imported collections. It remains a four-card horizontal carousel with arrow controls on desktop and switches to the reference-matched two-column, three-row grid with square images and underlined labels on mobile.
- `sections/alma-service-band.liquid`: restored descriptive service band for three factual ALMA destinations: curated personal gifting, the three-step ritual and the complete catalog. It uses logo-wine markers, headings, descriptions and separate underlined links in three bounded desktop columns and stacked mobile cards. No images or third-party overlays render in this section. It does not invent shipping, samples, returns or client-service promises.
- `config/settings_schema.json`: ALMA identity controls. `settings_data.json.current` was expanded from the Dawn preset string to its equivalent full object before applying ALMA toggles and scheme-1 colors. Other preset values remain intact.
- `layout/theme.liquid`: loads ALMA CSS and optional body class; native Shopify metadata, integrations and commerce hooks remain.
- `sections/footer.liquid`: retains the compact reference-inspired logo-wine-and-ivory composition. The exact logo artwork, UAE/English context, copyright and native customer newsletter form are present. Navigation is intentionally limited to eight useful destinations across Shop, Help and Legal; redundant category, search, cart and refund-policy links are omitted because those actions already exist elsewhere or are lower priority. All three groups stay visibly open in a three-column desktop/mobile layout; payment badges remain removed and no disclosure script is used. The contact link normalizes Shopify's internal page URI to `/pages/contact`; configured social hooks remain available without inventing empty icons or claims.

### Test-store catalog and operational limits

Theme synchronization transfers theme code, **not products, collections, customers or orders**. The test catalog was therefore populated separately in Shopify Admin from the public source snapshot under `research/storefront/`. `tools/build-shopify-product-csv.mjs` regenerates `research/storefront/shopify-products-import.csv`; the file contains 22 standard products, 183 variants and 41 image URLs, with English-only product descriptions, SEO descriptions and collection titles for future imports. Shopify Admin created six manual collections from its `Collection` column. The gift card was added separately with its source image and six numeric denominations, bringing the store to 23 products, 189 variants and 42 images. Existing store records retain their original bilingual source content until they are edited or re-imported; the English theme filters the Arabic blocks from view.

The source exposes only availability, not exact inventory counts. Available variants are imported without inventory tracking; unavailable variants are tracked at zero with overselling denied. Three unavailable product groups remain visible and active exactly as in the public catalog. The source prices are numeric AED values, and the authenticated Shopify Admin store-currency setting was changed from EGP to AED on 2026-09-13. Shopify does not convert numeric product prices or shipping rates during this change; review them before treating checkout as production-ready. No billing or payment setup was performed.

No customers, orders, private integrations, discount rules, shipping rules, taxes or app configurations were copied. The catalog import does not alter those resources. Product images can continue processing after the product records appear. Checkout transactions and payment processing remain untested on the trial store.

### Validation and local preview

- Run `npm ci`, then `npm run check:theme` (Shopify CLI pinned to 4.8.0). Current result: 0 errors, 9 warnings in existing Dawn code. JavaScript syntax and Git whitespace checks pass.
- Run `npm run preview:local`, open `http://127.0.0.1:9293`. `?empty=1` exercises an empty catalog. `tools/preview.mjs` renders the actual Liquid layout/sections/snippets using LiquidJS 10.29.0, public catalog fixtures and limited Shopify filters. It is a visual harness, not a Shopify emulator: real store routes, checkout, localization and form submissions are not served. Self-hosted theme font assets render through the same ALMA stylesheet locally and on Shopify.
- Run `npm run preview:build` to create the visual homepage and all theme assets under ignored `dist/` for Vercel. Unlike the optional local fixture, this static build deliberately renders with an empty catalog so it cannot expose a stale hard-coded product list. `vercel.json` publishes that directory as a preview deployment. `.shopifyignore` excludes the Vercel configuration and build output from Shopify CLI synchronization, so the standard theme structure remains the production source. The shareable Vercel surface is intentionally homepage-only and does not emulate live catalog data, product routes, cart, accounts, forms, localization, apps or checkout.
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

Use local Git authentication for the configured `MohamedMahran02` origin; the Codex connector may use a different account. Credentials are never included in documentation.

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

### 2026-09-13 — Make the logo morph directly follow scrolling

- Request: replace the abrupt state change with a scroll-scrubbed transition in which the main logo moves from the centre to the left and becomes the icon; when scrolling stops, the transition must stop at the same point.
- Changed: added a normalized `data-alma-scroll-progress` controller to Dawn's existing sticky-header component. Desktop maps 0–132 px and mobile/tablet maps 0–96 px to exact progress. The supplied wordmark follows a smoothstep position/scale path toward the compact logo slot while fading out, the supplied icon fades in at that same endpoint, and desktop header/navigation/utilities contract and rise from the approved opening geometry to the approved compact geometry. No CSS duration, timeout or inertial animation drives the effect. The inactive logo link is removed from keyboard/pointer access during the crossfade. A constant-height transparent sticky wrapper prevents browser scroll anchoring from feeding layout changes back into the animation.
- Files: `sections/header.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. Images, menus, utilities, campaign content, section order and every block-order array are unchanged.
- Checks: at 1265 × 720, scroll positions 0/33/66/99/132 map to progress 0/.25/.5/.75/1, header heights 132.5/123/102/81.1/71.5 px and the final 0/.5/1 wordmark x positions are 562.5/302.5/50 px. At 390 × 844, 0/24/48/72/96 maps to the same progress sequence while the fixed 78 px row moves the wordmark from x=135 to x=47 and ends with the icon at x=47. A real 48 px wheel scroll held exactly 0.5000 progress, unchanged after a further 700 ms without scrolling. Both viewports have zero page overflow, meaningful content, no framework overlay and no console errors/warnings. Theme Check, JavaScript syntax, homepage/header JSON and Git whitespace checks are recorded in `design-qa.md`.

### 2026-09-13 — Replace the CSS crossfade with the supplied true morph

- Request: replace the previous wordmark-to-icon transition with the supplied `ALMA_true_morph.webm` while retaining the scroll-controlled behavior.
- Changed: copied the transparent 1080×1080, 2.2-second WebM byte-for-byte into theme assets and placed it in the existing moving logo stage. The video never autoplays: Dawn's sticky-header controller maps desktop scroll 0–132 px and mobile/tablet scroll 0–96 px directly to video `currentTime`, while the existing header geometry moves the stage from center to left and scales it into the compact slot. The supplied static wordmark/icon remain as fallback content until usable video data loads or when WebM is unsupported. Corrected the video endpoint crop and vertical alignment. Added `video/webm` and HTTP byte-range support to the local preview fixture so real seeking is testable.
- Integrity: `assets/alma-logo-morph.webm` is 313,458 bytes and matches the supplied source SHA-256 `A916B893518EA0664C2F446C93C61C673E19977460863065C9567D9C54C35B8B`.
- Files: `assets/alma-logo-morph.webm`, `assets/alma-theme.css`, `sections/header.liquid`, `tools/preview.mjs`, `design-qa.md`, and this README. Menu, utilities, campaign, section order and all block-order arrays are unchanged.
- Checks: local desktop 0/66/132 px and mobile 0/48/96 px scroll positions map exactly to video times 0/1.10/2.20 seconds. The video reports paused at every checkpoint; after 700 ms without scrolling the midpoint remained at 1.10 seconds. Start/mid/end captures show the supplied wordmark/morph/icon states, the compact icon is fully visible at x=50 desktop and x=47 mobile, and both viewports have zero horizontal overflow. Browser page identity, meaningful content, framework-overlay and console checks pass. Theme Check, JavaScript, JSON, range-response and Git whitespace results are recorded in `design-qa.md`.

### 2026-09-13 — Keep the mobile and tablet morph centered

- Request: the logo must not travel left on mobile; the supplied scroll-controlled morph should remain centered there, with horizontal motion reserved for PC and larger screens.
- Changed: below the existing 990 px desktop breakpoint, the morph stage now interpolates between centered start and centered scaled endpoints. Its wordmark-to-icon frames and responsive scaling still follow scroll, but its horizontal center stays fixed. Desktop retains the approved center-to-left travel, contracting two-row header and compact left icon.
- Files: `sections/header.liquid`, `design-qa.md`, and this README. Video, header controls, menu behavior, campaign, section order and block-order arrays are unchanged.
- Checks: at 390×844, scroll 0/48/96 maps to video time 0/1.10/2.20 seconds while the stage center remains x=187.5 at all three points; the complete icon ends centered and the header remains 78 px high. At 1265×720, desktop still moves from the centered opening to x=50 at 132 px scroll. Both viewports remain horizontally contained, and browser/static validation is recorded in `design-qa.md`.

### 2026-09-13 — Remove the supplied video and restore the CSS transition

- Request: remove the user-provided WebM and restore the previous transition created before the video integration.
- Changed: deleted `assets/alma-logo-morph.webm` and removed its Liquid markup, video-loading/seeking JavaScript, video-only CSS and local-preview byte-range support. Restored the scroll-scrubbed static wordmark-to-icon scale/crossfade. Preserved the latest responsive decision: mobile/tablet remain centered throughout, while desktop alone travels from center to the compact left slot.
- Files: removed `assets/alma-logo-morph.webm`; updated `sections/header.liquid`, `assets/alma-theme.css`, `tools/preview.mjs`, `design-qa.md`, and this README. Header controls, campaign, menus, section order and block-order arrays are unchanged.
- Checks: the rendered homepage contains no video element or WebM request/reference. Desktop and mobile scroll checkpoints, frozen midpoint behavior, responsive centering, browser health, Theme Check, JavaScript/JSON syntax and Git whitespace are recorded in `design-qa.md`.

### 2026-09-16 — Add a shareable Vercel visual preview

- Request: the Shopify trial ended and the user needs a non-local link that friends can open while future work remains Shopify-template friendly.
- Changed: extended the existing LiquidJS visual fixture with a deterministic static build mode, added `npm run preview:build`, and configured Vercel to publish the generated `dist/` directory. Added Git and Shopify ignore rules so generated output, local Vercel state and Vercel configuration do not become Shopify theme assets. The Dawn Liquid theme, homepage section order and every block-order array remain unchanged.
- Files: `tools/preview.mjs`, `package.json`, `.gitignore`, `.shopifyignore`, `vercel.json`, and this README. `dist/` is generated and intentionally untracked.
- Scope: the deployed preview is for visual review and sharing. It renders the current homepage with catalog fixtures and theme assets, but product routes, cart, customer accounts, newsletter submission, localization, apps, Theme Editor and checkout still require Shopify.
- Checks: static preview build completes, produces the homepage plus 226 theme assets, contains the expected ALMA title and campaign CTA, and excludes generated output from Git. Theme Check, JavaScript syntax, configuration parsing, Git whitespace and the deployed preview result are verified before handoff. Context7 was required by repository guidance but is unavailable in this environment; no new external package or library was introduced.

### 2026-09-16 — Make the Vercel preview public

- Request/root cause: friends opening the deployment were redirected to Vercel login because project-level Vercel Authentication covered all generated domains.
- Changed: disabled Vercel Authentication for the `alma-fragrances-preview` project. Password protection is also off, so existing and future project deployments are available to anyone with the URL. The stable share URL is `https://alma-fragrances-preview.vercel.app`.
- Files: this README only. Hosting access changed in Vercel project settings; no Liquid, CSS, JavaScript, asset, section order or block order changed.
- Checks: the authenticated Vercel Project API now returns `ssoProtection: null` and no password protection for `alma-fragrances-preview`. Vercel documentation states that disabling authentication unprotects existing deployments. The deployment itself was not fetched during verification because the deployment workflow explicitly prohibits fetching the published URL after deployment.

### 2026-09-16 — Remove frozen catalog data from Vercel and move the Git remote

- Request/root cause: products appeared on Vercel even though that host has no Shopify runtime. The static build was explicitly rendering the repository's development catalog fixture, which made the visual preview look like a hard-coded storefront.
- Changed: the Vercel build now always uses the existing empty-catalog rendering path, so saved product names, images and prices are not published. Removed the two invented empty-store product cards and made each custom product rail disappear when none of its Shopify products resolve. The local Liquid fixture still supports sample catalog rendering for theme development and `?empty=1` for empty-state checks. Shopify theme files continue to use native live `product` and `collection` objects; no commerce code, homepage order or block order changed. The tracked Git origin and handoff instructions now point to `https://github.com/MohamedMahran02/almafragrances.git` on `main`.
- Files: `tools/preview.mjs`, `sections/alma-favourites.liquid`, `.gitignore`, `AGENTS.md`, `design-qa.md`, and this README. Generated `dist/` and Playwright evidence remain ignored.
- Checks: the static build contains zero product cards, custom product rails, fixture product names and prices; JavaScript syntax, JSON parsing and Git whitespace pass; Theme Check reports 0 errors and the same 9 inherited Dawn warnings. Playwright checks at 1280×720 and 390×844 confirm meaningful content, no framework overlay, no horizontal overflow and a working mobile menu. A public preview deployment completed at `https://alma-fragrances-preview-9ilk2929v-omarashraafs-projects.vercel.app`; it was not fetched after deployment per the deployment workflow. The Vercel surface remains a non-commerce design preview; real catalog data and commerce behavior must be reviewed through Shopify when a store is available.

### 2026-09-18 — Use touch swiping without product arrows on mobile

- Request: remove carousel arrows on mobile because customers can swipe the product rails directly.
- Changed: below 750 px, product-rail previous/next controls are hidden while the native horizontally scrollable, snap-aligned product track and progress line remain. Desktop product arrows and the existing arrow-free mobile wardrobe grid are unchanged. Homepage section order and every block-order array remain unchanged.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: Codex Browser checks at 333 × 600 and 1280 × 720 confirm meaningful content, no framework overlay, no console warnings/errors and no page-level horizontal overflow. On mobile, every product-arrow wrapper computes to hidden and a horizontal gesture advances the visible rail by 288 px; on desktop the controls remain visible and **Next products** advances the rail by 304 px. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; Git whitespace, gallery JavaScript syntax and homepage JSON parsing pass. Shopify synchronization and the connected theme preview are verified separately after the push when available.

### 2026-09-18 — Center product cards after mobile swipes

- Request/root cause: after removing mobile arrows, cards still used start-edge snapping, so a touch swipe could settle with the product visibly offset instead of centered.
- Changed: below 750 px, product cards now use center snap alignment and the rail adds equal responsive start/end breathing room derived from the 82 vw card width. This centers the first, intermediate and final cards at their snap positions while preserving native touch scrolling, the progress line and hidden mobile arrows. Desktop sizing, arrows and movement are unchanged; homepage section and block-order arrays remain unchanged.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: Codex Browser checks at 333 × 600 and 1280 × 720 confirm zero page overflow, no framework overlay and no console warnings/errors. The first, second and final mobile cards settle within 0.008 px, 0.039 px and 0.352 px of the visible rail center respectively; mobile controls remain hidden. Desktop mobile-only padding remains 0 px and **Next products** retains its 304 px movement. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; Git whitespace, gallery JavaScript syntax and homepage JSON parsing pass. Physical iOS/Android touch feel remains a final device-level check.

### 2026-09-18 — Match the Diptyque opening CTA treatments

- Request/reference: reproduce the two supplied Diptyque CTA crops—the bordered “Découvrir la sélection” control and the dotted, underlined “Découvrir tous les parfums” link—within ALMA's opening campaign and ritual.
- Changed: translated the labels to “Discover the selection” and “Discover all fragrances”; added the exact reference 17 × 16 dot-mark geometry on both sides; matched the 4 px internal gaps, 48 px bordered-button height, 24 px horizontal inset, transparent/no-shadow treatment and 1 px text underline. Removed the old fixed button width so the control sizes from its translated content. The ritual link now jumps directly to the existing all-fragrances rail. Theme Editor editability, the campaign's sticky motion, English-only storefront, section order and block orders remain unchanged.
- Files: `assets/alma-cta-dot.svg`, `assets/alma-theme.css`, `sections/alma-campaign.liquid`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: the live reference measures 48 px high with 24 px side padding and a 4 px label gap; ALMA computes the same geometry at 1280 × 720. The translated hero button is 246.5 × 48 px and the text link is 216.4 × 22 px; all four dot images load at their intrinsic 17 × 16 size. Activating the ritual link lands on `#AlmaFavourites-featured_collection`, with no page overflow, framework overlay or console warnings/errors. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; homepage JSON, dot SVG and Git whitespace validation pass. The in-app browser's fixed desktop viewport prevented a separate mobile screenshot in this run; the intrinsic component treatment has no mobile-only geometry beyond the preserved sticky position.

### 2026-09-18 — Match the full ritual composition

- Request/root cause: the dotted link matched, but the ALMA introduction remained a short 235–240 px block with a one-line heading and two-line paragraph, unlike the supplied 347 px Diptyque crop with its two-line heading, six-line copy and spacious vertical rhythm.
- Changed: added a measured ritual inner grid and matched the live reference at both breakpoints: 272 px section/653 px inner measure/32-over-38 heading on desktop and 358 px section/240 px inner measure/28-over-34 heading on mobile. Expanded the ALMA-specific English copy so it naturally occupies two desktop lines and six mobile lines. Matched the reference link's 22 px inline box, 24 px top margin and mobile optical placement. Existing dot assets, link destination, hero behavior, Theme Editor fields, section order and block order remain unchanged.
- Files: `assets/alma-theme.css`, `sections/alma-campaign.liquid`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: the normalized 302 × 347 source/implementation comparison aligns heading, paragraph and link rhythm. Browser measurements at 319 × 478 and 1280 × 720 match the reference section, inner-grid, typography and CTA dimensions; both have zero page-level horizontal overflow, no framework overlay and no console warnings/errors. Theme Check, homepage JSON and Git whitespace validation pass. Shopify synchronization and the connected theme preview remain external states verified after push when available.

### 2026-09-18 — Unify all customer-facing CTA treatments

- Request: apply the two supplied Diptyque control designs consistently to the site's boxed buttons and text buttons, rather than limiting them to the opening campaign and ritual.
- Changed: introduced a shared theme-level CTA treatment using the existing exact `alma-cta-dot.svg` asset. Boxed conversion actions now use a 48 px white rectangular control, 1 px black border, square corners, no shadow, 17 × 16 marks and measured label spacing. Text actions now use the matching two marks, 16/18 px Georgia label and 1 px underline. The system covers product-card actions, editorial actions, wardrobe category labels, ALMA experience links, applicable Dawn underlined actions and native commerce/account/form buttons. Icon controls, carousel arrows, quantity controls, tabs, disclosures, filter-removal utilities, footer navigation and the newsletter arrow remain intentionally unchanged so their function stays clear.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README. Section order, block order, destinations, Shopify forms and commerce behavior are unchanged.
- Checks: browser review at 1280 × 720 and 390 × 844 confirms the exact 48 px boxed and 22 px text-link geometries, loaded SVG marks, no clipped controls, zero page-level horizontal overflow and no theme error surface. Theme Check, JSON parsing and Git whitespace validation pass before push. Shopify synchronization and publication remain external states verified after the push when available.

### 2026-09-18 — Vertically center editorial box labels

- Request/root cause: the supplied screenshot showed “Discover Dukhoon” sitting against the top edge of its otherwise correct 48 px bordered control. The custom editorial link inherited the correct height but did not use a centering layout.
- Changed: made editorial boxed CTAs inline flex containers with centered alignment on both axes. The existing 48 px frame, 1 px border, white background, dot positions, label spacing, destinations and responsive section layouts are unchanged.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README. Homepage section order and every block-order array remain unchanged.
- Checks: desktop and mobile browser measurements confirm the label midpoint and button midpoint are aligned, both dot backgrounds remain vertically centered, the control stays 48 px high and the page has no horizontal overflow. Theme Check, static preview build and Git whitespace validation pass before push.

### 2026-09-18 — Redesign the mobile editorial story blocks

- Request/root cause: the user rejected the mobile layering and Dukhoon content blocks. Their featured-product title and price were forced into competing columns, creating uneven wrapping, while the large boxed CTA made each compact story feel dense and visually heavy.
- Changed: below 750 px, both editorial stories now use a calmer centered composition with 48/55 px vertical padding, a constrained heading and body measure, a single stacked product/pricing group separated by a fine top rule, centered sale pricing and the approved 22 px dotted-underlined text action. The layering story keeps its three ritual steps in a separately ruled row. Desktop retains the approved split/immersive layouts and 48 px boxed CTAs.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README. Products, prices, links, Theme Editor controls, homepage section order and every block-order array remain unchanged.
- Checks: mobile browser review at 390 × 844 shows a 494.36 px layering content block and 393.17 px Dukhoon content block, 280 px centered product groups, 22 px actions, zero page overflow, no theme error surface and no console warnings/errors. Desktop checks confirm both editorial buttons remain 48 px bordered controls. Theme Check, static preview build and Git whitespace validation pass before push.

### 2026-09-18 — Redesign the ALMA Experience and footer

- Request: replace the disliked closing sequence beginning with “The ALMA experience” and continuing through the footer.
- Changed: rebuilt the Experience as a numbered editorial service system. Desktop uses three equal ruled columns; mobile uses a compact 82 vw native-swipe rail with the next card visibly peeking in, eliminating the long stacked list without adding arrows. Reworked the footer into a black-and-ivory brand close based on the previously supplied dark footer direction: exact logo artwork rendered in white, original four navigation groups, newsletter, market and copyright retained, stronger contrast, outlined email field and white submit control. Mobile keeps the existing accessible disclosure behavior in a tighter dark layout.
- Files: `sections/alma-service-band.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. Footer data, links, newsletter form, homepage section order and every block-order array remain unchanged.
- Checks: at 390 × 844 the Experience is 430.19 px high with three 319.8 × 250 px snap cards and the footer is 677.81 px high; at 1280 × 720 the Experience uses three 400.33 px columns and the footer is 304.88 px high. Both viewports have zero page overflow, no theme error surface and no console warnings/errors. Theme Check, static preview build and Git whitespace validation pass before push.

### 2026-09-18 — Recompose the closing structure

- Clarification: the user wanted the structure and presentation changed as well, not only the Experience card styling and footer colors.
- Changed: wrapped the Experience in a true editorial split. Desktop now places the large section title in its own left column and the three numbered services in the right grid; mobile retains the compact heading-over-swipe-rail composition. Rebuilt the footer grid into two deliberate desktop rows: a full-width newsletter introduction/form row, then a brand-signature column beside the four navigation groups. Mobile now deliberately orders newsletter first, closed navigation disclosures second and the centered brand signature/copyright last.
- Files: `sections/alma-service-band.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README. All service copy, footer links, newsletter form, Theme Editor settings, homepage order and block-order arrays remain unchanged.
- Checks: at 1280 × 720 the Experience computes as a 222.53 px title column plus a 927.28 px service region, and the footer grid reports `newsletter newsletter / brand nav`. At 390 × 844, computed flex order is newsletter `1`, navigation `2`, brand `3`; disclosures remain closed, the service rail remains swipeable, page overflow is zero and browser logs are clear. Theme Check, static preview build and Git whitespace validation pass before push.

### 2026-09-18 — Replace the footer accordions with open navigation

- Clarification: the user specifically rejected the collapsed Shop, Explore ALMA, Help and Legal accordion rows shown in the mobile footer.
- Changed: replaced the four `details` disclosures with one semantic navigation region containing four always-visible groups. Mobile now presents the complete link set in a compact two-column grid without arrows or extra taps; desktop retains four visible columns. Removed the obsolete accordion JavaScript while preserving every footer link, the newsletter form, exact logo, market label, copyright and closing-section order.
- Files: `sections/footer.liquid`, `assets/alma-theme.css`, removed `assets/alma-footer.js`, `design-qa.md`, and this README. Homepage order and every JSON block-order array remain unchanged.
- Checks: at 390 × 844 the footer reports four visible groups with 4/4/4/3 links, two equal navigation columns, zero `details` elements and zero page overflow. At 1280 × 720 it reports four equal columns, all lists visible, zero overflow, no theme error surface and no console warnings/errors. Theme Check, static preview build and Git whitespace validation pass before push.

### 2026-09-18 — Add the “Find Your Aura” fragrance finder

- Request: let shoppers choose favorite fragrance notes and receive perfume suggestions, with a catchy feature name.
- Changed: added “Find Your Aura” after the main fragrance collection. Twelve editable note controls feed an accessible client-side matcher that scores products from the live `alma-perfumes` Shopify collection and displays up to four strongest matches. Matching reads product title, description, tags and `custom.fragrance_notes`, so product recommendations are not hard-coded and can update with Shopify catalog data. Results keep native product images, URLs and AED prices. Mobile recommendations use a centered arrow-free swipe rail; desktop uses a four-column result grid. A live status message, no-match state and keyboard-accessible clear action complete the flow.
- Data convention: place recognizable note words in the product description, add tags such as `note:vanilla`, or populate a product metafield with namespace/key `custom.fragrance_notes`. Add the product to the section's configured collection; no code edit is required.
- Files: `sections/alma-scent-finder.liquid`, `assets/alma-scent-finder.js`, `assets/alma-theme.css`, `templates/index.json`, `design-qa.md`, and this README. Existing homepage sections retain their relative order; only `scent_finder` was inserted between `featured_collection` and `layering_story`.
- Checks: browser-tested at 1280 × 720 and 390 × 844. Vanilla plus Musk returns four ranked results; Oud returns Alma Oud Intense Perfume and AlmaXEman from the local Shopify snapshot; Clear selection resets all controls and hides results; note controls expose native checkbox semantics; the first mobile result is centered in its snap rail; the new section has no viewport-width escape; and browser console warnings/errors are empty. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; static preview build and Git whitespace validation pass before push. The catalog-free static build intentionally omits this data-dependent section, while Shopify renders it from the configured live collection.

### 2026-09-18 — Configure Shopify fragrance-note data

- Request: create the product data field used by “Find Your Aura” and provide the exact new-product workflow.
- Verified store change: in the authenticated `app-test-1111231327` Shopify Admin, created and pinned the product metafield definition **Fragrance notes** with namespace/key `custom.fragrance_notes` and type **List of single line text**. Storefront API access remains enabled. The definition appears on the Lolo Vanilla perfume product metafields screen. No existing product values, product copy, pricing, inventory or publication state were changed.
- New-product workflow: create and save the product, add it to the `alma-perfumes` collection, open its Product metafields, enter one fragrance note per `Fragrance notes` list item, save, and keep the product active/published to Online Store. If a note is not among the finder’s existing Theme Editor note blocks, add a Fragrance note block to the “Find Your Aura” section with the customer-facing label and lowercase matching word.
- Files: this README only. This commit records external Shopify configuration; theme code and all section/block order arrays are unchanged.
- Checks: revisited Settings → Metafields and metaobjects → Products and confirmed the definition name, exact key and list text type; opened Lolo Vanilla perfume → Product metafields and confirmed Fragrance notes is present in the pinned group.

### 2026-09-18 — Replace typed product notes with a reusable selector

- Request/root cause: repeatedly typing product-note values could introduce spelling differences that prevent the fragrance finder from matching a product.
- Verified store configuration: created the storefront-enabled **Fragrance note** metaobject definition and populated twelve reusable entries: Vanilla, Oud, Musk, Amber, Rose, Floral, Citrus, Coconut, Sandalwood, Leather, Pear and Powdery. Created and pinned the product metafield **Fragrance notes (select)** with namespace/key `custom.fragrance_note_refs`, type **List of metaobject references**, restricted to the Fragrance note definition. The authenticated product editor displays all twelve options as checkboxes and provides **Add new entry** for adding a new reusable note by typing it once. Existing product data was not changed or deleted; the earlier `custom.fragrance_notes` text field remains stored as a compatibility fallback but is unpinned so product editors see only the new selector in the default metafield group.
- Theme integration: the matcher now reads selected metaobject names from `custom.fragrance_note_refs` before its existing title, description, tag and legacy text-field sources, so newly assigned picker values participate without hard-coded product records.
- New-product workflow: save the product, add it to the finder’s configured perfume collection, open **Product metafields → Fragrance notes (select)**, tick every matching note and choose **Done**, then save the product. To introduce a note that is not listed, choose **Add new entry**, type the new note once and save it; it then becomes selectable for every product. Add a matching note block in the “Find Your Aura” Theme Editor section only when the new note should also appear as a shopper-facing filter.
- Files: `sections/alma-scent-finder.liquid`, `design-qa.md`, and this README. Homepage section order and all JSON block-order arrays are unchanged.
- Checks: Shopify Admin visibly confirms the twelve-entry checkbox picker and **Add new entry** action on Alma leather luxe perfume. Theme Check, JSON parsing, static preview build and Git whitespace validation are run before push; the catalog-free static build still intentionally omits the Shopify-data-dependent finder.

### 2026-09-18 — Simplify note presentation and editing

- Request/root cause: the customer-facing note matrix felt visually heavy, while maintaining a second set of note blocks in the Theme Editor made additions and edits unnecessarily difficult.
- Changed: the finder now builds its visible choices directly from `metaobjects.fragrance_note.values`. Adding, renaming or removing an entry under Shopify **Content → Metaobjects → Fragrance note** updates the storefront list without a theme-code or Theme Editor block change. Removed the duplicated note blocks from the section schema and homepage template. Replaced the rigid four/three-column matrix with a compact centered composition of wrapping ivory scent chips; each chip has a clear plus/check state, stronger focus treatment and smaller mobile proportions. Recommendation scoring, live product data, result limits and mobile result swiping remain unchanged.
- Files: `sections/alma-scent-finder.liquid`, `templates/index.json`, `assets/alma-theme.css`, `design-qa.md`, and this README. The `scent_finder` section stays between `featured_collection` and `layering_story`; all unrelated section and block ordering is preserved.
- Editing workflow: manage the master customer-facing list only in **Content → Metaobjects → Fragrance note**. Assign those entries to products through **Product metafields → Fragrance notes (select)**. The section setting itself now explains this workflow and no longer exposes per-note blocks.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; homepage JSON parsing, static preview build and Git whitespace validation pass. The connected Shopify storefront renders all twelve live metaobject notes. At 1280 × 720 the chips form two centered compact rows; selecting Vanilla changes its plus to a checked dark state and reveals three ranked live products. At the available 617 × 600 compact viewport the chips wrap cleanly with zero horizontal page overflow. Both browser sessions have no console warnings/errors or framework error surface. The catalog-free static build still omits this live-data section by design.

### 2026-09-18 — Align dark UI color with the ALMA logo

- Request: replace the site's black brand color with the burgundy/espresso color used by the supplied ALMA logo, and prepare font directions for a separate typography decision.
- Changed: standardized the active ALMA ink token and Dawn color-scheme text, button, shadow and dark-background values on the approved logo-wine `#1D0004`. Updated finder chip text, selected states, focus rings and clear action to use the shared token. White and muted neutral surfaces remain unchanged, preserving contrast and the approved layout. The media-only black backdrops in inherited Dawn video/image components are intentionally untouched because they are functional fallbacks rather than brand UI.
- Typography decision pending: the current fonts remain unchanged until the user chooses a direction. Recommended candidates are **Bodoni Moda + Manrope** (editorial luxury), **Cormorant Garamond + Jost** (soft romantic), or **Instrument Serif + Inter** (modern minimal). Shopify's existing global heading/body font pickers remain the implementation path.
- Files: `assets/alma-theme.css`, `config/settings_data.json`, `design-qa.md`, and this README. Section order, template order, block order and content are unchanged.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; JSON parsing, static preview build and Git whitespace validation pass. After the GitHub-connected theme synchronized, the authenticated Shopify storefront rendered body text, the opening ritual heading and the footer background as `rgb(29, 0, 4)` (`#1D0004`). Selecting Vanilla rendered the same logo-wine selected state and returned three live Shopify products. The browser console reported no errors or warnings.

### 2026-09-18 — Typography comparison: option 1

- Request: show the three proposed typography directions one at a time before the user makes a final selection.
- Preview applied: option 1 uses **Bodoni Moda** for headings and display/action typography with **Manrope** for body and interface text. The pair is configured through Dawn's native Shopify font-picker values so font files are emitted and preloaded by the theme rather than added through a third-party runtime embed.
- Theme integration: removed the ALMA stylesheet's hard-coded Georgia heading override and routed every custom heading, customer-facing CTA, product line and wardrobe/service label through Dawn's `--font-heading-family`. This keeps future font comparisons controlled by the native global typography setting instead of requiring selector-by-selector rewrites.
- Files: `assets/alma-theme.css`, `config/settings_data.json`, and this README. Layout, content, products, routes, section order and every block-order array are unchanged.
- Review state: option 1 is a temporary comparison candidate pending the user's “choose this” or “next” decision. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; static preview build, JSON parsing and Git whitespace validation pass. The connected Shopify theme reported “Last saved: Just now”; the storefront loaded `Bodoni Moda, serif` for the ritual heading and `Manrope, sans-serif` for the page body, and both webfonts reported ready.

### 2026-09-18 — Blend fragrance-note chips into the finder surface

- Request: remove the white fill from the fragrance-note buttons so their resting background matches the surrounding “Find Your Aura” section.
- Changed: unselected note chips now use a transparent fill over the section's existing soft-neutral `#F7F5F1` background. Their outline, plus icon, spacing, typography and accessibility semantics are unchanged; selected notes still switch to logo-wine `#1D0004` with white text and a check mark.
- Files: `assets/alma-theme.css` and this README. Finder data, matching behavior, products, layout, homepage order and every block-order array are unchanged.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; static preview build and Git whitespace validation pass. On the connected Shopify mobile viewport, the section computes to `rgb(247, 245, 241)` and an unselected chip to a transparent fill, so the two surfaces visually match. Selecting Vanilla settles to `rgb(29, 0, 4)` with white text and returns three live recommendations. The page contains meaningful content, no framework error overlay and no console warnings/errors.

### 2026-09-18 — Typography comparison: option 2

- Request: try the second proposed typography direction after reviewing option 1.
- Initial attempt: option 2 was configured with proposed Shopify font-library handles for **Cormorant Garamond** headings/display actions and **Jost** body/interface text. Shopify later rejected `cormorant_garamond_n4` as invalid, so this attempt did not change the connected theme and was superseded by the direct Shopify fix below.
- Files: `config/settings_data.json` and this README. The shared heading routing added for option 1 remains in place; layout, content, products, routes, homepage section order and every block-order array are unchanged.
- Review state: option 2 is the active temporary comparison candidate pending the user's “choose this” or “next” decision. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; settings JSON parsing, the catalog-free static preview build and Git whitespace validation pass. Connected Shopify synchronization, rendered font families and publication remain separate external states unless explicitly verified.

### 2026-09-18 — Render typography choices in the visual preview

- Finding: the user saw no change because the current Vercel/local visual renderer replaced both configured Shopify font objects with Arial. The Option 2 theme settings were committed correctly, but that review surface could not display any typography selection.
- Changed: the preview now resolves the configured Dawn font handles to matching open-source family names, emits the correct heading/body CSS variables and loads only the selected families for the visual fixture. Option 2 therefore renders Cormorant Garamond headings/actions and Jost body/interface text on the catalog-free Vercel preview. Shopify production behavior is unchanged and continues to use native `font_picker`, `font_face` and Shopify CDN delivery.
- Files: `tools/preview.mjs` and this README. No Liquid theme layout, content, product data, routes, section order or block-order arrays changed.
- Checks: JavaScript syntax and the catalog-free static build pass; generated HTML contains `Cormorant Garamond, serif` and `Jost, sans-serif`, requests only those selected webfonts and contains no Arial font-variable override. Headless Chrome at 1280 × 720 and 390 × 844 reports both fonts loaded, the expected computed families on the ritual heading and page body, meaningful content, no framework overlay and zero page overflow. The only local browser log is the fixture's unrelated missing-favicon 404. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; Git whitespace validation passes. The public Vercel preview deployed successfully at `https://alma-fragrances-preview-dkcegryp8-omarashraafs-projects.vercel.app`; an HTTP 200 check and rendered Chrome session confirm the same loaded/computed font families, meaningful content, no framework overlay and zero page overflow. The preview remains catalog-free by design.

### 2026-09-18 — Apply option 2 to the connected Shopify theme

- Clarification: the user reviews updates on `https://app-test-1111231327.myshopify.com/` and does not want Vercel used as the deployment target.
- Root cause: an authenticated pull from live Shopify theme `almafragrances/main` (`#167361839354`) showed it still used Bodoni Moda and Manrope. A settings-only live-theme push then proved Shopify rejects `cormorant_garamond_n4` as an invalid font handle, explaining why the GitHub settings commit did not change the rendered store.
- Changed: added exact self-hosted Latin WOFF2 assets for Cormorant Garamond Regular and Jost, declared them in the ALMA stylesheet and made them authoritative through the existing heading/body CSS variables. Restored valid Bodoni Moda/Manrope picker values in `settings_data.json` so Shopify validation and future synchronization remain healthy; those saved fallbacks no longer determine ALMA's visible typography while option 2 is active. Reverted the Vercel-specific Google Fonts renderer because Shopify is the requested review surface.
- Files: `assets/alma-cormorant-garamond-regular.woff2`, `assets/alma-jost-latin.woff2`, `assets/alma-theme.css`, `config/settings_data.json`, `tools/preview.mjs`, and this README. The local renderer now accepts Shopify's auto-generated leading comment in synchronized JSON files. Layout, content, products, routes, homepage section order and every block-order array remain unchanged.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; JavaScript syntax, settings JSON, static build and Git whitespace validation pass. At 1280 × 720 the local rendered page computes `"ALMA Cormorant Garamond", Georgia, serif` for the ritual heading and `"ALMA Jost", Arial, sans-serif` for the body, reports both font faces loaded, has meaningful content, no framework overlay and zero page overflow. The targeted live-theme upload to Shopify theme `#167361839354` completed successfully. A subsequent authenticated pull confirms that `alma-theme.css` and both WOFF2 assets match the repository byte-for-byte and that the live settings retain valid Bodoni Moda/Manrope fallback handles. Shopify then committed its synchronized Theme Editor state back to GitHub in `764cb23`. The public storefront redirects to Shopify's password gate, so post-password computed-font inspection remains available only to an authenticated viewer; no further Vercel deployment is required or authorized for this change.

### 2026-09-18 — Place both editorial titles on their photographs

- Request: redesign “The ALMA ritual” and the Dukhoon section beneath it so each title sits directly on and fits its photograph.
- Design: created `research/design/previews/alma-editorial-overlay-concept.png` as the section-specific implementation reference using the approved ALMA/Diptyque direction and the current layering/Dukhoon media. The implementation keeps one title instance per section rather than repeating the concept image's title in both media and copy.
- Changed: moved each editable eyebrow and heading into its media frame. The split layering story uses a bottom-left white overlay over a localized wine-toned fade; Dukhoon uses the quiet upper-left wall area with a restrained diagonal fade. Supporting copy, live product title/pricing, CTA and ritual steps remain on clean ivory/white panels. The desktop layering feature now has a deliberate 720–802 px media height instead of inheriting the portrait image's full intrinsic height. Mobile keeps both media frames at 500 px, and the Dukhoon title begins below the sticky header safe area. Images, products, links, text, Theme Editor controls, homepage section order and every block-order array are unchanged.
- Files: `sections/alma-editorial-feature.liquid`, `assets/alma-theme.css`, `research/design/previews/alma-editorial-overlay-concept.png`, `design-qa.md`, and this README.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; preview JavaScript syntax, static build and Git whitespace validation pass. Browser checks at 1280 × 720 and 390 × 844 confirm both headings are children of their media frames, remain fully contained, render in white self-hosted Cormorant Garamond, keep the existing CTA focus path, and introduce no horizontal overflow, error overlay or console warnings/errors. Final desktop/mobile screenshots were inspected against the saved concept; the initial mobile Dukhoon placement was lowered to clear the sticky header before sign-off. A targeted authenticated upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully. A subsequent pull confirms `assets/alma-theme.css` is byte-identical and `sections/alma-editorial-feature.liquid` is text-identical after normalizing Shopify's line endings. The public storefront still redirects unauthenticated visitors to the Shopify password gate, so the local Shopify-backed fixture supplies the rendered post-password visual evidence.

### 2026-09-18 — Keep photo titles mobile-only and restore desktop

- Request: keep the approved mobile editorial redesign, move the Dukhoon title slightly upward away from the lid, and restore the previous PC presentation.
- Changed: the layering and Dukhoon photo overlays/gradients now activate only below 750 px. Desktop again renders each editable eyebrow and heading in its original content panel, restores the previous unshaded photographs, returns the split layering section to its original image-led height and restores Dukhoon's 367 px story panel. Mobile remains otherwise unchanged; the Dukhoon overlay moved from 88 px to 80 px from the top of its 500 px media frame, increasing the gap above the lid while staying below the 78 px sticky header. Copy, products, prices, links, images, Theme Editor controls, homepage order and every block-order array are unchanged.
- Files: `sections/alma-editorial-feature.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; preview JavaScript syntax, static build and Git whitespace validation pass. Playwright CLI screenshots using the installed Chrome channel at 1280 × 720 and 390 × 844 confirm the requested desktop/mobile split. Browser-debug measurements confirm desktop overlays/gradients are hidden and content headings visible; mobile content headings are hidden, both overlays/gradients are visible, Dukhoon's overlay top is exactly 80 px, both mobile media frames are 500 px, both CTAs receive focus, page overflow is zero and browser warnings/errors are empty. A targeted authenticated upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully; the subsequent pull confirms the CSS is byte-identical and the Liquid is text-identical after line-ending normalization.

### 2026-09-18 — Center mobile wardrobe labels between their dots

- Request: correct the mobile wardrobe labels whose two decorative dots appeared aligned with the first text line instead of the complete label.
- Changed: wrapped each category's editable label in a dedicated text span. Below 750 px, the label now uses equal 17 px ornament columns on both sides of a centered text column, with both dots vertically centered against the full one- or two-line label. Desktop keeps its existing presentation; category images, names, links, two-column mobile grid, homepage order and block-order arrays are unchanged.
- Files: `sections/alma-wardrobe.liquid`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: at 390 × 844, browser measurements confirm every mobile label has equal 17 × 16 px ornaments, symmetric grid columns, vertically centered alignment and a 0 px text-to-label center delta; the first category link receives keyboard focus, page overflow is zero and browser warnings/errors are empty. Desktop and mobile screenshots confirm the existing layouts remain intact. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; preview JavaScript syntax, static build and Git whitespace validation pass. A targeted authenticated upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully; the subsequent pull confirms the CSS is byte-identical and the wardrobe Liquid is text-identical after line-ending normalization.

### 2026-09-18 — Simplify the footer content

- Request: reduce the amount of information in the footer to a more normal, easier-to-scan set.
- Changed: reduced visible footer navigation from 15 links in four groups to eight links in three essential groups: Shop (All products, Perfumes, Dukhoon and Gift Cards), Help (Contact us and My account), and Legal (Privacy policy and Terms of service). Removed the duplicated “Fragrances by Reem” tagline and shortened the newsletter description. Desktop and mobile now use three always-visible navigation columns. The newsletter form, exact logo, market/language line, copyright, social hook, contact destination and footer section order remain unchanged.
- Files: `sections/footer.liquid`, `sections/footer-group.json`, `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: browser verification at 1280 × 720 and 390 × 844 confirms exactly three visible groups and eight links, equal three-column navigation, the shortened newsletter copy, no duplicate tagline, zero page overflow and no console warnings/errors. Contact us receives keyboard focus and resolves to `/pages/contact`. Theme Check, footer-group JSON parsing, preview JavaScript syntax, static build and Git whitespace validation pass. A targeted authenticated upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully; the pull-back confirms the CSS is byte-identical, footer Liquid is text-identical after line-ending normalization and the auto-formatted footer group is semantically identical.

### 2026-09-18 — Restore mobile editorial buttons and center dotted actions

- Request: return “Explore layering” and “Discover Dukhoon” to buttons on mobile and center every remaining text label between its two decorative dots.
- Changed: removed the mobile-only conversion of editorial CTAs into underlined text links, restoring the same 48 px white bordered buttons used on desktop. All dotted text actions now place their equal 17 × 16 px ornaments at the full control's vertical midpoint and center the label; wardrobe labels use the existing symmetric three-column structure at desktop and mobile widths. Products, prices, action destinations, section content, homepage order and block-order arrays are unchanged.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: browser verification at 1280 × 720 and 390 × 844 confirms both editorial actions are 48 px high with 1 px borders, white backgrounds, centered 24 px-inset ornaments, no underline and preserved destinations. Every rendered dotted text action reports centered text and `0% 50%, 100% 50%` ornament positions; every wardrobe label reports symmetric 17 px columns and a 0 px text-to-control center delta. The first editorial button receives keyboard focus, page overflow is zero and browser warnings/errors are empty. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; preview JavaScript syntax, static build and Git whitespace validation pass. A targeted authenticated upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully, and the subsequent pull confirms the CSS is byte-identical.

### 2026-09-18 — Add matched button hovers and link the hero to the finder

- Request: make “Explore layering” and “Discover Dukhoon” change color on cursor hover like the opening button, rename that first button to “Find Your Aura,” and send it to the fragrance-note section.
- Changed: both editorial buttons now reuse the opening CTA's explicit inline dot markup and switch to ALMA wine with white text and white dots on hover. The opening campaign button is now “Find Your Aura” and links to the permanent `#AlmaScentFinder` anchor. The anchor uses the live sticky-header height as scroll clearance so the destination is not covered. The finder remains Shopify-data-driven; all images, products, editorial destinations, homepage order and block-order arrays are unchanged.
- Files: `assets/alma-theme.css`, `sections/alma-campaign.liquid`, `sections/alma-editorial-feature.liquid`, `sections/alma-scent-finder.liquid`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: local browser verification at 1280 × 720 and 390 × 844 confirms all three boxed CTAs hover to `rgb(29, 0, 4)` with white text and `invert(1)` dot marks, the opening label/href are `Find Your Aura`/`#AlmaScentFinder`, the hash navigation resolves to the permanent anchor, page overflow is zero and no theme error surface appears. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; preview JavaScript syntax, homepage JSON parsing, static build and Git whitespace validation pass. A targeted authenticated upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully. The subsequent pull confirms the CSS is byte-identical, all three Liquid files are text-identical after line-ending normalization, the homepage JSON is semantically identical, and its saved values are `Find Your Aura`/`#AlmaScentFinder`.

### 2026-09-18 — Simplify launch navigation and repair storefront destinations

- Request: replace the category-heavy header with useful launch navigation, stop the market/currency control from overlapping the links, and audit all clickable homepage controls before launch. Follow-up evidence showed “Discover all fragrances” did not open Products and the ALMA Experience actions reached incorrect or missing destinations.
- Changed: desktop and mobile navigation now share Products, Sale, Find Your Aura, Gifting and Contact. Sale links to the live discounted Layering Box rather than an uncreated sale collection. The desktop market selector renders only `AED`; compact-desktop link spacing tightens between 990 and 1099 px to preserve a visible gap before the market/search/account/cart group. “Discover all fragrances” now opens `/collections/all`; the three ALMA Experience links use explicit `/products/alma-fragrances-gift-card`, `/collections/layering-kits` and `/collections/all` paths instead of resource references. No homepage section or block order changed.
- Files: `snippets/alma-navigation-links.liquid`, `snippets/country-localization.liquid`, `sections/header.liquid`, `assets/alma-theme.css`, `config/settings_schema.json`, `templates/index.json`, `design-qa.md`, and this README.
- Checks: local browser validation at 1280 × 720, 1024 × 768 and 390 × 844 covers 148 rendered links and 19–20 controls per viewport. It finds no blank/placeholder links, missing same-page anchors, unlabeled controls, unresolved `shopify://` hrefs, horizontal overflow, theme error surface or console warnings/errors. The live-like compact `AED` control leaves 113 px between navigation and utilities at 1280 px and 20.5 px at 1024 px. Search opens with its input, the mobile drawer opens with all five links, the hero resolves its finder anchor, tabs switch visible panels and carousel Next moves the rail. The newsletter retains a required email field and submit control. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; JSON parsing, preview JavaScript syntax, static build and Git whitespace validation pass. A targeted upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully. Pull-back verification confirms byte-identical CSS, normalized-text-identical Liquid files and semantically identical JSON. The remote campaign and ALMA Experience settings contain the four explicit verified paths documented above.

### 2026-09-18 — Remove the redundant Dhs. price prefix

- Request: remove the meaningless-looking `Dhs.` text shown before prices.
- Changed: product-card and product-detail price markup now formats the numeric value without Shopify's currency symbol prefix and appends the active ISO code when currency-code display is enabled. Added a narrowly scoped storefront observer that removes `Dhs.`/`Dhs` only when it directly precedes a number, including dynamically refreshed variant and cart price text. Amounts, trailing `AED`, metadata, scripts, form values, embedded JSON, products, checkout data, homepage structure and block orders are unchanged. The authenticated Shopify Admin browser was unavailable, so the store-level money-format fields were not modified.
- Files: `assets/alma-money-format.js`, `layout/theme.liquid`, `snippets/price.liquid`, `design-qa.md`, and this README.
- Checks: at 1280 × 720 and 390 × 844, browser fixtures confirm initial `Dhs. 125.00 AED` and dynamically inserted `Dhs 360.00 AED` become `125.00 AED` and `360.00 AED`. Input values and embedded JSON retain their original strings, rendered price surfaces contain zero numeric `Dhs.` prefixes, page overflow is zero, meaningful content remains visible and browser warnings/errors are empty. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; both JavaScript files pass syntax checks, the static build and Git whitespace validation pass. A targeted upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully, and the subsequent pull confirms the new JavaScript asset, theme layout and price snippet are text-identical after line-ending normalization.

### 2026-09-18 — Redesign product detail pages and purchase actions

- Request: replace the visually cramped product information panel and dotted purchase buttons shown on Lolo Vanilla and Arabia, and make both purchase actions visibly respond to pointer hover.
- Changed: product detail pages now use an editorial 56/44 image-information composition on desktop and an image-first stack on mobile. The information hierarchy uses the active ALMA heading/body fonts, a quieter vendor label, balanced title and price spacing, a compact square quantity selector, a rectangular sale label and a ruled description. Add to cart is a solid logo-wine primary action that reverses to white on hover; Buy it now is the complementary white bordered action that reverses to wine. Both are 56 px, square-cornered and explicitly exclude the site's decorative CTA dots. Shopify's native product form, variants, quantity input, dynamic checkout, pricing, product content, routes, template order and block order are unchanged.
- Files: `assets/alma-theme.css`, `design-qa.md`, and this README.
- Checks: a Shopify-structured product fixture using real theme CSS, Dawn quantity behavior and the Lolo Vanilla packshot was inspected at 1280 × 900 and 390 × 844. Both buttons compute to 56 px with no background ornaments, the expected base and hover color inversions, square corners and Cormorant display type; quantity increments from 1 to 2, the mobile information column is contained and the rendered composition matches the approved ALMA/Diptyque direction. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; the static preview build and Git whitespace validation pass. The targeted live-theme upload to `almafragrances/main` (`#167361839354`) completed successfully, and a subsequent authenticated pull confirms `assets/alma-theme.css` is byte-identical to the repository. The browser plugin was unavailable, so installed Chrome's DevTools protocol supplied the rendered interaction check; physical-device checkout remains a final owner test.

### 2026-09-18 — Repair the unavailable gifting destination

- Root cause: “Explore gifting,” the header Gifting item and the footer Gift Cards item all pointed to `/products/alma-fragrances-gift-card`. The original source catalog used that handle, but the product is currently unavailable on the connected Online Store, so Shopify returns its 404 template.
- Changed: all three gifting entry points now use the permanent `/#shopify-section-gifting_story` homepage anchor, which opens the live “Gifting by ALMA” product rail instead of an unavailable product. Renamed the footer item to “Gifting” and replaced the service card's gift-card-specific sentence with accurate curated-set and ritual-piece copy. The configured Gifting page Theme Editor setting can still override the header fallback when a dedicated published destination becomes available. Homepage section order and all block-order arrays are unchanged.
- Files: `templates/index.json`, `snippets/alma-navigation-links.liquid`, `sections/footer.liquid`, `design-qa.md`, and this README.
- Checks: the generated homepage contains the exact gifting anchor once and four repaired links (desktop/mobile header, service and footer), with the updated service copy and no rendered link to the unavailable gift-card route. Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; homepage JSON parsing, the static build and Git whitespace validation pass. The targeted upload to live Shopify theme `almafragrances/main` (`#167361839354`) completed successfully. Pull-back verification confirms both Liquid files are normalized-text-identical, the homepage template is semantically identical, and its live saved values contain the repaired anchor and updated copy.

### 2026-09-19 — Normalize collection product-card media

- Request: make every product card on the products/collection page the same size.
- Changed: changed the collection grid's saved image ratio from `adapt` to `square`. Every product card now reserves the same square media frame at desktop and mobile breakpoints, while the existing native Dawn image treatment continues to crop and center each product image consistently. Product records, images, prices, collection order, filters, sorting, pagination and card behavior are unchanged.
- Files: `templates/collection.json` and this README.
- Checks: collection template JSON parsing, Theme Check and Git whitespace validation pass. Theme Check reports 7 pre-existing Dawn warnings across 6 files and no errors. The static preview build succeeds after restoring the lockfile-pinned dependencies; it produces the catalog-free visual artifact under ignored `dist/`. Git is configured to use `MohamedMahran02`, but this machine still needs that account's GitHub credential before the commit can be pushed.

### 2026-09-19 — Add the footer shipping-policy dialog

- Request: add a Shipping policy entry in the footer that opens a smoothly animated popup containing the supplied UAE and GCC shipping message.
- Changed: added Shipping policy to the Help links and an accessible native dialog with the exact supplied copy: “Free shipping is available to UAE. For all other GCC countries, a shipping fee of 40 AED applies”. It opens with a restrained fade-and-rise treatment, closes by its control, Escape, or clicking the overlay, and respects reduced-motion preferences. The panel uses ALMA wine, warm ivory, Cormorant Garamond display type, Jost supporting type, square edges, and the existing quiet footer-link treatment.
- Files: `sections/footer.liquid`, `assets/alma-theme.css`, `assets/alma-shipping-policy.js`, `layout/theme.liquid`, and this README.
- Checks: JavaScript syntax, Theme Check, static preview build and Git whitespace validation pass. Theme Check reports 7 pre-existing Dawn warnings across 6 files and no errors. The generated homepage includes the trigger, dialog, exact message, shipped script and styling. The in-app Browser runtime is unavailable in this session, so rendered desktop/mobile click-through verification remains a Shopify preview check after push.

### 2026-09-19 — Add the expandable Terms of Service dialog

- Request: replace the footer Terms of service destination with a larger popup using collapsible sections for the supplied Terms of Service content.
- Changed: the Legal footer link now opens a larger, scrollable ALMA dialog. It uses the shared overlay, close, Escape, and outside-click behavior from the Shipping policy dialog, then presents the overview and all 20 numbered terms in native expandable sections. The ALMA wine, ivory, Cormorant Garamond, Jost, and reduced-motion treatments are retained.
- Files: `sections/footer.liquid`, `snippets/alma-terms-of-service.liquid`, `assets/alma-shipping-policy.js`, `assets/alma-theme.css`, and this README.
- Checks: JavaScript syntax, Theme Check, static preview build and Git whitespace validation pass. Theme Check reports 7 pre-existing Dawn warnings across 6 files and no errors. The generated homepage contains the Terms trigger, the dialog, and 24 native expandable sections including the overview and all 20 numbered terms. Rendered browser interaction verification remains unavailable in this session.

### 2026-09-19 — Present Find Your Aura as the opening dialog

- Request: show Find Your Aura as a popup when the website first opens instead of as an inline homepage section.
- Changed: kept the existing Shopify-managed ALMA scent finder section and its fragrance-note, collection, recommendation-limit, heading, prompt and supporting-copy settings, then placed it in a branded native dialog. It opens once per browser session on the visitor’s first site view, can be reopened from any existing `#AlmaScentFinder` link, and closes through its close control, Escape or the overlay. The dialog uses the existing ALMA wine, warm ivory, Cormorant Garamond and Jost styling, with mobile sizing and reduced-motion support. The homepage template order and all block-order arrays remain unchanged.
- Files: `sections/alma-scent-finder.liquid`, `assets/alma-scent-finder-modal.js`, `assets/alma-theme.css`, `layout/theme.liquid`, and this README.
- Checks: both scent-finder JavaScript assets pass syntax validation; Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; Git whitespace validation passes. The local static preview build was started but did not complete within the available command window, so rendered desktop/mobile interaction remains a Shopify preview check after synchronization.

### 2026-09-19 — Fit the scent finder before recommendations

- Request: remove the empty area at the start of the Find Your Aura popup and fit its length to the content until a scent is selected.
- Changed: the dialog now takes its natural content height before recommendations are available. Once a matching fragrance result is shown, it expands into the existing capped, scrollable recommendation view. Clearing the selection returns it to the compact introductory height. Mobile follows the same behavior.
- Files: `assets/alma-scent-finder.js`, `assets/alma-theme.css`, and this README.
- Checks: both scent-finder JavaScript assets pass syntax validation; Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; Git whitespace validation passes. Rendered browser interaction remains a Shopify preview check after synchronization.

### 2026-09-19 — Animate the scent finder expansion and reopen on refresh

- Request: make the Find Your Aura popup grow smoothly when recommendations appear and show it again after a website refresh.
- Changed: recommendation changes now animate the dialog between its compact and expanded heights over 460 ms with the ALMA easing curve, while respecting reduced-motion preferences. The popup now opens on every page load, including a browser refresh, instead of being suppressed after the first browser-session view.
- Files: `assets/alma-scent-finder.js`, `assets/alma-scent-finder-modal.js`, and this README.
- Checks: both scent-finder JavaScript assets pass syntax validation; Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; Git whitespace validation passes. Rendered browser interaction remains a Shopify preview check after synchronization.

### 2026-09-19 — Remove the first-selection jump in the scent finder dialog

- Request: make the popup expansion smoother when a scent is first selected.
- Changed: the dialog now captures and locks its compact height before the recommendation layout is painted, then animates directly to the measured expanded height. This removes the first-frame jump that occurred before the height transition began.
- Files: `assets/alma-scent-finder.js` and this README.
- Checks: scent-finder JavaScript passes syntax validation; Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; Git whitespace validation passes. Rendered browser interaction remains a Shopify preview check after synchronization.

### 2026-09-19 — Remove white image frames

- Request: remove the white borders visible around most images.
- Changed: removed Dawn's global media border through the native Theme Editor media-border setting and the ALMA override. Wardrobe and scent-finder product imagery now fills its media frame without the earlier internal padding or white background. Image aspect ratios, source images, responsive layouts and product links remain unchanged.
- Files: `assets/alma-theme.css`, `config/settings_data.json`, and this README.
- Checks: Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; settings JSON parses successfully after Shopify's generated-file header; Git whitespace validation passes. Rendered browser review remains a Shopify preview check after synchronization.

### 2026-09-19 — Point the hero CTA to Products

- Request: replace the hero-image button with “Shop all” and send visitors to the products page.
- Changed: updated the live ALMA campaign button setting to display “Shop all” and use `/collections/all`, Shopify’s all-products collection. The button remains editable through the Campaign button block in the Theme Editor.
- Files: `templates/index.json` and this README.
- Checks: homepage JSON parses successfully and Git whitespace validation passes. Theme Check was started but did not return within the local command window; rendered review remains a Shopify preview check after synchronization.

### 2026-09-19 — Set beige and off-white surfaces to white

- Request: replace beige and off-white background colors with white.
- Changed: changed the ALMA warm-ivory, soft-gray, product-media, campaign-fallback, contact, policy-dialog, scent-finder and product-panel backgrounds to white. The Shopify Theme Editor's second color-scheme background and matching button label are now white as well. Wine and dark background accents remain unchanged.
- Files: `assets/alma-theme.css`, `config/settings_data.json`, and this README.
- Checks: targeted search confirms no beige or off-white CSS background declarations remain; settings JSON parses successfully after Shopify's generated-file header; Git whitespace validation passes. Rendered browser review remains a Shopify preview check after synchronization.

### 2026-09-19 — Simplify the navbar branding and navigation

- Request: remove the two-logo homepage animation, retain only the final compact logo and final navbar size, remove the profile icon, raise the remaining utility icons, and remove Sale and Find Your Aura from navigation.
- Changed: removed the animated homepage wordmark and retained the compact ALMA icon as the sole home link. The desktop homepage header now holds its former 72 px settled height from load. The search/cart utility group moves slightly upward, and the account icon is no longer rendered. Desktop and mobile navigation now list Products, Gifting and Contact.
- Files: `sections/header.liquid`, `snippets/alma-navigation-links.liquid`, `assets/alma-theme.css`, and this README.
- Checks: Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; targeted source search confirms the animated wordmark, account icon, Sale and Find Your Aura navigation entries are absent; Git whitespace validation passes. Rendered browser review remains a Shopify preview check after synchronization.

### 2026-09-19 — Keep the header divider below the compact logo

- Request: fix the navbar height because its divider line crosses the logo.
- Changed: set the inner desktop homepage header to the same 72 px settled height as its wrapper. The divider now sits at the bottom edge of the navbar, below the compact logo.
- Files: `assets/alma-theme.css` and this README.
- Checks: Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; Git whitespace validation passes. Rendered browser review remains a Shopify preview check after synchronization.

### 2026-09-19 — Fit the hero image within the first viewport

- Request: fit the hero image to the screen because it extends past the screen length.
- Changed: capped the desktop hero at the available small-viewport height below the live header and set the mobile hero to the same available viewport height. The image retains its cover crop and responsive positioning, while the hero CTA remains inside that screen-sized frame.
- Files: `assets/alma-theme.css` and this README.
- Checks: Theme Check passes with 0 errors and the same 7 inherited Dawn warnings; Git whitespace validation passes. Rendered browser review remains a Shopify preview check after synchronization.

### 2026-09-19 — Open Find Your Aura once, then use a side tab

- Request: open the finder popup once, then leave a side-screen Find Your Aura button that reopens it; do not reopen the popup after visiting products and returning to the homepage.
- Changed: the finder now records its first opening for the active browser session. Later page views keep the popup closed and show a fixed branded side tab instead. On the homepage, the tab reopens the dialog. On any other page, it takes the visitor to the homepage finder. The tab hides while the dialog is open and the dialog can still be opened from a direct `#AlmaScentFinder` link.
- Files: `assets/alma-scent-finder-modal.js`, `layout/theme.liquid`, `assets/alma-theme.css`, and this README.
- Checks: both scent-finder JavaScript assets pass syntax validation and Git whitespace validation passes. Theme Check was started but did not return within the local command window; rendered browser review remains a Shopify preview check after synchronization.

### 2026-09-19 — Add predictive product previews and the Products hover menu

- Request: show previews for typed product searches and show collection choices when Products is hovered in the navbar.
- Changed: Shopify's native predictive-search request now asks for up to six matching products and collections, and its native Theme Editor setting now displays product prices in the preview. The desktop Products navigation entry is an accessible native disclosure menu that reveals Shop all, Perfumes, Lotions, Dukhoon, Solid charms and Layering & kits on hover; mobile retains the direct Products link.
- Files: `assets/predictive-search.js`, `config/settings_data.json`, `snippets/alma-navigation-links.liquid`, `assets/alma-theme.css`, and this README.
- Checks: predictive-search JavaScript passes syntax validation; settings JSON parses successfully after Shopify's generated-file header; Git whitespace validation passes. Theme Check was started but did not return within the local command window; rendered search and hover interaction remain a Shopify preview check after synchronization.

### 2026-09-19 - Add an inline search field and normalize header sizing

- Request: replace the search icon with a text box that has room for typed product previews, make Products open on hover without a click, fix its overlapping caret, and match the products-page navbar size to the homepage header.
- Changed: desktop headers now show Shopify's native predictive-search field with a visible product placeholder and room for result previews; the compact search icon remains on mobile. Products now opens and closes through desktop hover events, and its caret has dedicated spacing. Desktop non-home headers now use the homepage header's 72 px height and compact logo scale.
- Files: `snippets/alma-header-predictive-search.liquid`, `assets/alma-products-menu.js`, `sections/header.liquid`, `layout/theme.liquid`, `assets/alma-theme.css`, and this README.
- Checks: predictive-search and hover-menu JavaScript pass syntax validation; Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification passed for `origin/main`.

### 2026-09-19 - Expand header search and position AED beside cart

- Request: provide more room for the desktop search bar and move AED to the top right beside the cart.
- Changed: the desktop Shopify predictive-search field now grows from 260 px to 360 px according to viewport width. The currency selector now follows the search field and sits immediately before the cart in the right-side utility group; its mobile visibility remains unchanged.
- Files: `sections/header.liquid`, `assets/alma-theme.css`, and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-19 - Center header navigation and refine search width

- Request: move the header titles to the middle of the screen and reduce the search-bar size slightly.
- Changed: desktop navigation is now anchored to the exact horizontal center of the viewport on home, product, collection, and other pages. The search field now ranges from 240 px to 320 px, preserving space for the centered navigation and top-right AED/cart controls.
- Files: `assets/alma-theme.css` and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-19 - Align navigation links and widen search previews

- Request: restore the header links to one horizontal navigation row, vertically align them with the search input, and widen only the predictive-search preview panel.
- Changed: restored the desktop header navigation to Dawn grid flow so Products, Gifting, and Contact remain horizontal. Homepage links now shift 5 px upward to share the search field centerline. The search input remains 240-320 px while the results panel can now expand to 520 px.
- Files: `assets/alma-theme.css` and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-19 - Align header link centerline to utility controls

- Request: align the horizontal navigation titles with the cart and other header controls.
- Changed: removed the homepage-only upward translation from the navigation. The links now use the header grid centerline, matching the vertically centered search, AED selector, and cart utility controls.
- Files: `assets/alma-theme.css` and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Rename the campaign call to action

- Request: change the homepage hero button copy to Explore Alma Collection.
- Changed: updated the Campaign button block label to Explore Alma Collection while retaining its editable Shopify setting and /collections/all destination.
- Files: `templates/index.json` and this README.
- Checks: index template JSON parsing and Git whitespace validation pass; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Rename the campaign text link

- Request: restore the previous hero button copy and apply Explore Alma Collection to the Discover all fragrances text link.
- Changed: restored the Shopify Campaign button block label to Shop all. Renamed the separate Campaign text link from Discover all fragrances to Explore Alma Collection; both controls continue to point to /collections/all.
- Files: `templates/index.json` and this README.
- Checks: index template JSON parsing and Git whitespace validation pass. Theme Check was started twice but did not return in the local command window; GitHub push verification is pending.

### 2026-09-20 - Add animated search and collection-driven fragrance tabs

- Request: return desktop search to an icon that smoothly opens a search field, and replace the All fragrances, Spray Perfumes tabs with configurable Shopify collections led by Best Sellers.
- Changed: desktop search now starts as an icon, expands into Shopify native predictive search on activation, focuses the input after the motion, and closes with Escape or an outside click. Mobile retains Dawn search. The ALMA fragrance collection now uses the selected Best Sellers collection as its first tab, followed by collection-only Theme Editor blocks. The homepage initially selects Best Sellers, Perfumes, Solid Perfumes, Lotions, Dukhoon, Solid Charms, and Layering & Kits. Each tab derives its label and products from its selected Shopify collection; up to 12 subsequent collection tabs can be added in the Theme Editor.
- Files: `sections/header.liquid`, `assets/alma-header-search.js`, `layout/theme.liquid`, `assets/alma-theme.css`, `sections/alma-favourites.liquid`, `templates/index.json`, and this README.
- Checks: new header-search and existing tabs JavaScript pass syntax validation; homepage JSON parses successfully; Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Restore Best Sellers and Alma Solid Perfumes tabs

- Request: make the missing Best Sellers and Alma Solid Perfumes collections appear in the fragrance tabs.
- Changed: retained the Best Sellers Theme Editor selection and added a Best Sellers collection fallback when no selection is saved. Corrected the featured-section Solid Perfumes collection handle to the published `alma-makhmaria-s-solid-perfume` collection.
- Files: `sections/alma-favourites.liquid`, `templates/index.json`, and this README.
- Checks: homepage JSON parsing and Git whitespace validation pass; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Always display selected fragrance collections

- Request: make the selected collections visible in The ALMA fragrance collection section.
- Changed: removed the collection product-presence checks that could suppress a selected tab before its products resolve. The section now renders each selected Best Sellers or collection-block tab and its associated product rail whenever a collection is selected.
- Files: `sections/alma-favourites.liquid` and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Resolve configured collection handles and animate tab changes

- Request: show Best Selling first, show Alma Solid Perfumes, and make collection changes smoother.
- Changed: normalize every collection setting through Shopify collections lookup before rendering its title or products. Best Selling resolves from its selected handle with both common handle fallbacks and is the first tab. The configured solid collection now displays the exact Alma Solid Perfumes tab label. Tab changes animate the incoming product rail with a 420 ms fade-and-rise transition.
- Files: `sections/alma-favourites.liquid`, `assets/alma-favourites.js`, `assets/alma-theme.css`, `templates/index.json`, and this README.
- Checks: JavaScript syntax, homepage JSON parsing, and Git whitespace validation pass; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Configure separate perfume collections and full-width progress

- Request: ensure Alma perfumes and Alma Solid Perfumes are distinct visible tabs, and make the horizontal rail progress line span the window.
- Changed: set the ALMA fragrance collection Perfumes tab to `alma-perfumes` and the separate Alma Solid Perfumes tab to `alma-solid-perfumes`. The rail progress track now extends edge to edge across the viewport for this section while retaining the existing scroll position indicator.
- Files: `templates/index.json`, `assets/alma-theme.css`, and this README.
- Checks: homepage JSON parsing and Git whitespace validation pass; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Repair mobile search, collection tabs, layering, and scent finder

- Request: remove the product-scroll progress line, fix mobile search and mobile collection tabs, repair the mobile Layering section, and fit the Find Your Aura result dialog without an inner scrollbar.
- Changed: removed custom rail progress markup while retaining desktop carousel buttons. Mobile now explicitly uses Dawn native search, and collection tabs remain in one horizontal scroll row. The mobile ritual-layering layout overrides the desktop fixed-height and inner-scroll rules. The mobile scent finder uses a compact auto-height result dialog, smaller horizontal cards, and no inner scroll container after selecting a scent.
- Files: `snippets/alma-scroll-controls.liquid`, `assets/alma-theme.css`, and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Strengthen mobile search and compact scent-match cards

- Request: fix the mobile search and reduce the selected-scent popup so matching product text is not cropped.
- Changed: mobile explicitly restores Dawn details-modal search with a dedicated 44 px icon control and modal stacking layer; the desktop expanding search remains hidden. Selected-scent results now compact the dialog heading, notes, image cards, product type, reason and price, and hide the introductory body copy after results appear so all matching product text fits without an inner scrollbar.
- Files: `assets/alma-theme.css` and this README.
- Checks: Git whitespace validation passes. Theme Check was started but did not return in the local command window; GitHub push verification is pending.

### 2026-09-20 - Repair mobile search field and preview panel

- Request: fix the mobile search textbox and preview, and add clearance before the first Best Selling collection tab.
- Changed: mobile search now opens as a fixed full-width layer below the header, with a correctly sized textbox, close control, and viewport-bounded predictive preview panel. Increased the mobile collection-tab horizontal inset from 15 px to 24 px so Best Selling clears the screen edge.
- Files: `assets/alma-theme.css` and this README.
- Checks: Git whitespace validation passes; Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.

### 2026-09-20 - Center the mobile logo and contain mobile search

- Request: center and slightly reduce the mobile logo, then keep mobile search and its preview within the screen below the navbar.
- Changed: centered the mobile homepage logo, reduced its size to 4.4rem, and removed the transformed mobile utility container that shifted the fixed search panel. The panel now uses the viewport width with mobile-safe sizing and sits directly below the 7.8rem navbar.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Restore the mobile search panel position

- Request: fix the blank, centered mobile search screen and further reduce the mobile logo.
- Changed: cleared Dawn modal bottom positioning on the fixed mobile search panel and its content, so the search form has its natural height directly below the navbar. Reduced the centered mobile logo to 4rem.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Match Jozee mobile search behavior

- Request: use the same mobile search technique as jozeeboutique.com.
- Changed: removed Alma-only mobile positioning for the native Shopify search modal. Mobile now follows Dawn's standard header search behavior used by the reference: it opens from the header, shows its built-in overlay, and retains Shopify predictive search.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Adjust mobile logo alignment

- Request: move the centered mobile logo slightly downward without changing navbar height.
- Changed: applied a 0.3rem visual translation to the mobile homepage logo only; the navbar dimensions and document layout stay unchanged.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Add the ALMA ritual 5% signup offer

- Request: show a branded popup for name and email when visitors reach The ALMA ritual, then provide a corner launcher after dismissal like Find Your Aura.
- Changed: added an IntersectionObserver-driven ritual popup with an ALMA-styled dialog, left-edge launcher, and motion-reduced fallback. The native Shopify customer form stores first name and email and applies the `newsletter` and `alma-ritual-5-percent-off` tags. Successful signups receive the configured code in the popup.
- Shopify customization: the ritual editorial section now provides settings for enabling the popup; the offer, success, and launcher copy; fine print; and the code shown after signup. Ensure that its code matches an active Shopify 5% discount.
- Files: `sections/alma-editorial-feature.liquid`, `assets/alma-ritual-signup.js`, `assets/alma-theme.css`, `layout/theme.liquid`, `README.md`.
- Checks: `node --check assets/alma-ritual-signup.js` and `git diff --check` pass; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Repair the ALMA ritual layout after signup integration

- Request: fix the broken The ALMA ritual section.
- Changed: made the native Shopify signup form layout-transparent so it no longer becomes a third grid or flex item beside the ritual media and content. The dialog remains available for form submission without affecting the editorial section layout.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Isolate the ritual signup from the editorial grid

- Request: repair the desktop The ALMA ritual section.
- Changed: moved the signup form and dialog outside the editorial section entirely. They remain connected to the ritual through the section identifier and observer, but can no longer affect its desktop grid or mobile flex layout.
- Files: `sections/alma-editorial-feature.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: `node --check assets/alma-ritual-signup.js` and `git diff --check` pass; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Align mobile header logo and collection tabs

- Request: move the mobile navbar logo down to align with the icons without changing header height, and add mobile edge spacing to the ALMA fragrance collection labels.
- Changed: applied a 0.3rem visual translation to every mobile header logo while retaining the centered homepage position. Increased mobile collection-tab inset and scroll padding so Best Selling and every collection label clear the screen edge.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Further adjust the mobile logo alignment

- Request: move the mobile logo farther down without changing the navbar length.
- Changed: increased the mobile logo visual translation from 0.3rem to 0.6rem across the centered homepage header and other mobile headers. Header dimensions are unchanged.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes; Shopify Theme Check completes with 7 existing warnings across 6 unchanged Dawn files and no errors. GitHub push verification is pending.
### 2026-09-20 - Use Shopify product media throughout the storefront

- Request: remove hardcoded product image fallbacks so product imagery comes only from Shopify.
- Changed: collection cards now render each product's Shopify featured image; wardrobe cards use their Shopify image picker, collection image, or first product image; and editorial product features use their selected Shopify image or product image. Removed the generated packshot and Dukhoon editorial product-image assets that previously backed those fallbacks.
- Files: `sections/alma-favourites.liquid`, `sections/alma-wardrobe.liquid`, `sections/alma-editorial-feature.liquid`, `templates/index.json`, removed `assets/alma-packshot-*.webp`, `assets/alma-dukhon-editorial-*.jpg`, `assets/alma-solid-reference.png`, `assets/alma-perfume-reference.jpg`, and `README.md`.
- Checks: `git diff --check` passes; direct source assertions confirm there are no generated packshot, Dukhoon editorial fallback, or removed setting references in storefront code. Shopify Theme Check did not return a result in two local attempts and its stale process was stopped; this change remains unverified by that command. GitHub push verification is pending.
### 2026-09-20 - Tighten homepage spacing and show the full Dukhoon photo

- Request: reduce white space between homepage sections and fix the cropped Dukhoon photograph in the PC preview.
- Changed: reduced desktop and mobile vertical padding around the ritual, product rails, scent finder, editorial copy and service band, and reduced desktop layering and wardrobe heights. The Dukhoon desktop section now places the Shopify portrait image beside its story in a dark media panel and uses contain sizing so the full source photo remains visible. Mobile retains the photo overlay and cover treatment. Section and block order, product media source, links and commerce behavior are unchanged.
- Files: assets/alma-theme.css and this README.
- Checks: the catalog snapshot Dukhoon source image measures 870 × 1080; static CSS inspection confirms desktop contain and mobile cover rules. CSS braces are balanced, Git diff whitespace validation passes, and Theme Check passes with 0 errors and 9 existing warnings. A targeted authenticated pull from the connected Shopify theme (almafragrances/main, #167361839354) confirms the CSS is normalized-text identical to the repository after the GitHub push. Rendered browser verification remains outstanding because no browser surface is available in this session. Publication status is unverified.
- Next: inspect the connected Shopify theme at desktop and mobile widths, confirm the Dukhoon photo and section rhythm, and complete the outstanding owner review of currency presentation and storefront destinations.
### 2026-09-20 - Restore Dukhoon layout and reduce photo zoom

- Correction: the user wanted the original PC Dukhoon design, with the image full-width and the centered story below. Only the photo itself appeared too zoomed in.
- Changed: restored the full-width image-then-story desktop layout and its original image-panel proportions. The portrait Shopify product photo now uses contain sizing against a matching dark panel so the full source image is visible without enlarging it to fill the wide frame. Kept the tighter section spacing from the prior request and a compact story panel. Mobile retains its existing 500 px cover crop and title overlay. Homepage section/block order, image source, content, links and commerce behavior are unchanged.
- Files: assets/alma-theme.css and this README.
- Checks: Theme Check passes with 0 errors and 9 existing warnings; Git whitespace check passes. Static CSS assertions confirm the desktop stacked layout and contained image plus the mobile media reset and cover treatment; CSS braces are balanced. A targeted authenticated pull from the connected Shopify theme (almafragrances/main, #167361839354) after the GitHub push confirms the CSS is normalized-text identical to the repository. Rendered browser inspection remains pending; publication status is unverified.
- Next: inspect the restored Dukhoon section in the connected Shopify PC preview and on mobile.
### 2026-09-20 - Extend the Dukhoon scene without altering the product

- Request: make the Dukhoon photograph fit and visibly fill the original wide desktop frame; generation of a new fitting image was authorized.
- Changed: generated a 1672 × 941 dark textured wall and linen background plate with no product or branding. The original Shopify Dukhoon product photograph remains the foreground image and its jar, lid and logo pixels are not replaced. Desktop blends only the portrait photo's side edges over the wide background; mobile keeps the original product image and cover treatment. The background applies only to the immersive Alma Dokhon product section when no Theme Editor image override is selected. The centered story and all section/block sequences remain unchanged.
- Files: assets/alma-dukhon-wide-background.png, assets/alma-theme.css, sections/alma-editorial-feature.liquid, research/design/dukhon-wide-background-prompt.txt, and this README.
- Checks: generated background visually inspected for no product or lettering; asset measures 1672 × 941 and 1,846,987 bytes. The authentic source photo matches research/design/references/alma-dokhon.jpg by SHA-256. Theme Check passes with 0 errors and 9 existing warnings; Git whitespace check passes. Context7 was not available in the tool inventory; the Liquid change follows the theme's existing conditional-class pattern. A targeted authenticated pull from connected theme almafragrances/main (#167361839354) after the GitHub push confirms the generated PNG is byte-identical and the CSS and Liquid are normalized-text identical to the repository. Rendered PC/mobile inspection remains pending; publication status is unverified.
- Next: verify the composite on the connected Shopify PC preview and the unchanged mobile presentation.
### 2026-09-20 - Align the mobile logo with header icons

- Request: the supplied narrow mobile screenshot shows the ALMA icon sitting above the menu, search, and cart icon row.
- Changed: moved the mobile logo artwork down by 8 px, from a 0.6rem to a 1.4rem visual translation, without changing the 78 px header height, logo size, horizontal centering, or icon positions. The correction applies to homepage and other mobile headers; desktop styling and section/block sequences remain unchanged.
- Files: `assets/alma-theme.css` and this README.
- Checks: Git whitespace validation passes; Shopify Theme Check passes with 0 errors and the same 9 inherited Dawn warnings. The connected Shopify mobile preview was visually inspected at its narrow 326 px viewport after a reload, both over the hero and farther down the homepage: the visible logo is now centered on the menu/search/bag icon row, without clipping or changing the header height. The mobile menu opens and closes normally. A targeted authenticated pull from theme `almafragrances/main` (`#167361839354`) confirms `assets/alma-theme.css` is normalized-text identical to the repository. Desktop rendering is unchanged by the mobile-only media query; other physical-device widths remain for owner review.

### 2026-09-20 - Add the Arabic theme version and language control

- Request: let visitors switch between English and Arabic, with the same storefront content translated into Arabic and no English copy after switching.
- Changed: added `locales/ar.json` with every Dawn storefront key and current ALMA homepage, footer, contact and password copy in Arabic. Added a globe language control to the header using Shopify's localization form, made the page RTL for Arabic, adapted the current typography and currency display, localized the scent finder and ritual signup interface, and translated the custom shipping, privacy, refund and terms dialogs. Prepared a handle-based Arabic catalog draft for all 23 current product titles/descriptions, collection names and imported option names/values; it requires matching to live Shopify resources before publication. English remains driven by the existing Theme Editor settings. Added matching ALMA fallback keys to other inherited theme locale files so Theme Check does not reject the new keys. The homepage section and block order, logo artwork, product packaging, product URLs and native purchase flow are unchanged.
- Files: `locales/*.json` (storefront locales only), `research/localization/ar-catalog-draft.json`, `assets/alma-language.js`, `assets/alma-money-format.js`, `assets/alma-scent-finder.js`, `assets/alma-theme.css`, `layout/theme.liquid`, `layout/password.liquid`, the affected ALMA and Dawn Liquid sections/snippets, `snippets/alma-localized-copy.liquid`, `snippets/alma-note-name.liquid`, `snippets/alma-terms-of-service-ar.liquid`, and this README.
- Checks: Shopify Theme Check passes with 0 errors and 9 existing warnings. A structural comparison confirms every English locale key exists in Arabic and all other inherited locale files, with matching Liquid placeholders; the Arabic locale has no unintentional Latin words outside Liquid placeholders and HTML attributes. The catalog draft covers all 23 imported product handles and all imported option names and values, including the two Dukhoon size labels. JavaScript syntax checks and Git whitespace validation pass. GitHub `main` was verified at `0a284f1`. An authenticated pull from connected theme `almafragrances/main` (`#167361839354`) confirms `sections/header.liquid` and `snippets/language-localization.liquid` match after line-ending normalization, and `locales/ar.json` has identical parsed translation data after Shopify adds its auto-generated header comment. The local preview fixture's build was stopped after it continued rendering for several minutes without output; live Arabic rendering and publication remain unverified.
- Limitation at implementation handoff: Admin login was unavailable then. The 2026-09-20 Admin update below supersedes that access status. Adding `ar.json` alone does not publish Arabic. Product and collection titles/descriptions, variant option names/values, navigation resources, metaobjects, page content, SEO copy, checkout and system messages require translations in Shopify Admin, separate from theme files. The Arabic custom-section copy reflects the current English content and must be updated if merchants change that content later. Existing bilingual descriptions are filtered by locale where possible, but mixed-language blocks and untranslated resources can still expose English. The Arabic legal-policy text should receive an owner review before production use. The supplied logo and product-packaging artwork may also contain fixed Latin lettering and must remain unchanged.
- Next: complete and audit the running Admin translation job, manually handle unsupported text such as the generated privacy policy, publish Arabic only after checking the visible content, then inspect homepage, collection, product, cart, account, contact and checkout in both languages at desktop and mobile widths.

### 2026-09-20 - Enable Arabic in Shopify Admin and start catalog translation

- Request: sign in to the connected Shopify Admin so Arabic can be enabled and live product and collection content translated.
- Changed in Admin: the store owner completed Google verification; Arabic was added to `app-test-1111231327.myshopify.com` as an unpublished language. Shopify Translate & Adapt was installed through the language setup flow, and its store-wide Arabic auto-translation was started without publication. This Admin work does not change theme section or block ordering.
- Files: this README only. The existing `research/localization/ar-catalog-draft.json` remains a translation reference and has not been imported.
- Checks: Settings > Languages showed Arabic assigned to one domain with `Not published` status, and the app showed a translation job in progress. Shopify says it will email the store owner when complete and that large jobs may take several hours. The job's output, storefront text and language switch are not yet verified.
- Remaining work: wait for completion; review product, collection, option, menu, metaobject, page and SEO translations against current live content; supply any untranslated fields; check checkout and notification language; manually address the generated Privacy Policy because Translate & Adapt excludes legal policies from auto-translation; then publish and test the connected storefront. Arabic is deliberately unpublished while these checks remain.

### 2026-09-20 - Finish Arabic Admin translations and repair preview copy

- Request: complete the Arabic storefront and language switch after the store owner signed into Shopify Admin.
- Changed in Admin: Shopify Translate & Adapt completed its Arabic job. Manually aligned all 22 present product titles and descriptions with the Arabic catalog draft, including imported option names and values; corrected the 10 collection titles, main menu labels, contact page title and all 12 fragrance-note metaobjects; and supplied Arabic product SEO text where English SEO text existed. The customer account and footer menus and the Your Privacy Choices page were already auto-translated. Imported `research/localization/ar-privacy-policy-draft.html` into the generated Privacy Policy and confirmed it survived a reload. The policy uses the Arabic brand name in place of the temporary store name. The legal text needs owner review before production.
- Changed in theme: translated the fixed scent-finder launcher, supplied the missing Arabic gifting collection tab label, localized the product vendor badge, and added a direct globe link for the unpublished-language preview. Once Shopify exposes more than one available language, the existing Shopify localization form takes over. The direct link switches the current page between English and `/ar`; it cannot by itself publish Arabic in Shopify. Section and block sequences, logo and packaging artwork are unchanged.
- Files: `layout/theme.liquid`, `sections/header.liquid`, `sections/main-product.liquid`, `sections/featured-product.liquid`, `locales/*.json`, `research/localization/ar-privacy-policy-draft.html`, and this README. The non-Arabic locale files carry a matching fallback gifting-tab key required by Theme Check.
- Checks: read back 22 product title/body pairs and imported options in Translate & Adapt; a storefront sweep of 22 present product pages matched the draft titles. The catalog draft's gift-card handle currently returns a 404 and did not appear among the 22 products in Admin; the earlier 23-product count is historical and needs catalog reconciliation. The `/ar` homepage, all-products and Dukhoon collections, product, cart, contact and Privacy Policy rendered with `lang=ar` and `dir=rtl`. Before the theme fixes, the visible Latin-text scan found the launcher, gifting-tab missing key and vendor badge; the Privacy Policy's only remaining Latin text after the Admin correction was the required contact email address. Theme fixes require connected-theme synchronization and a repeat sweep. Checkout, customer account, notifications and a visitor session without Admin access remain unverified.
- Publication blocker: Settings > Languages still shows Arabic as `Not published`, assigned to one domain. Its More actions menu offers Preview, Assign to domain, disabled Set as domain default and Remove language, but no Publish. Shopify documents Publish in that menu for eligible stores. The plan page shows Basic — Development store; whether that is the specific restriction has not been confirmed. Do not change the store plan or billing to resolve this without the owner. The store itself remains password protected.
- Next: verify theme sync and the fixed English-to-Arabic globe link; resolve Shopify's missing Publish action, then test a visitor session, mobile layouts, checkout, customer account and notifications. Review legal text and current catalog inventory before production.

### 2026-09-20 - Place the language switch after the cart

- Request: move the header language globe to the right of the cart and align it with the cart icon.
- Changed: reordered the existing Shopify language localization control after the cart in the header icon row. The existing centered flex alignment and language-switch behavior remain in place.
- Files: `sections/header.liquid`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check reports 970 matching-translation errors in the pulled `locales/ar.json` plus 7 existing warnings across 7 files; those locale errors predate this header-only change and need separate correction. GitHub push verification is pending.
### 2026-09-20 - Align the header language globe

- Request: enlarge the language globe and align it with the remaining header icons.
- Changed: set the existing language globe artwork to 24px inside its unchanged 44px header control, retaining the shared centered flex alignment, cart placement and touch target.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check continues to report the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no icon-specific errors were reported.
### 2026-09-20 - Use Shopify's native language selector

- Request: remove the custom language globe and use the language control supported by Shopify Translate & Adapt.
- Changed: removed the custom globe fallback and restored Shopify's standard language selector, including the current language label, dropdown caret and Shopify-managed list of published storefront languages. The selector appears only when Shopify reports more than one published language.
- Files: `sections/header.liquid`, `snippets/language-localization.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check continues to report the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no selector-specific errors were reported.

### 2026-09-20 - Complete storefront RTL alignment

- Request: make Arabic render right-to-left correctly on product pages and throughout the storefront.
- Changed: added scoped RTL positioning and alignment for product information and forms, predictive search, cart drawer, header controls, custom sections, policy dialogs and fixed launchers. Arabic product accordions and labels now use Arabic-friendly spacing. Updated the custom product rails so their controls and disabled state use the correct logical scroll position in RTL browsers.
- Files: `assets/alma-theme.css`, `assets/alma-scroll-gallery.js`, `README.md`.
- Checks: `node --check assets/alma-scroll-gallery.js` and `git diff --check` pass. Shopify Theme Check continues to report the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no RTL-specific errors were reported.

### 2026-09-20 - Force Arabic product-copy alignment

- Request: fix remaining left-aligned Arabic text on the products page.
- Changed: explicitly override Dawn's configured left card alignment and apply right alignment to the product information wrapper, product details, collection cards, collection heading, filters and product search results whenever the storefront is Arabic.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check reports the same pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no alignment-specific errors were reported.

### 2026-09-21 - Localize Arabic price currency labels

- Request: replace the English price currency in Arabic.
- Cause: the custom product-price snippet explicitly appended the ISO currency code `AED`, and Shopify's money output in cart and search can also use `AED` or `Dhs.`.
- Changed: product, collection and featured prices now use the Arabic dirham symbol whenever the active Shopify locale is Arabic and the cart currency is AED. Updated the live price normalizer to convert either prefix or suffix AED/Dhs values in cart and predictive-search updates, while preserving the English storefront format.
- Files: `snippets/price.liquid`, `assets/alma-money-format.js`, `README.md`.
- Checks: `node --check assets/alma-money-format.js`, currency-normalizer assertions and `git diff --check` pass. Shopify Theme Check continues to be blocked by the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no price-format-specific errors were reported.

### 2026-09-21 - Keep the mobile language selector in the side menu

- Request: show the mobile language switcher only in the side menu rather than both the navbar and menu.
- Changed: applied Dawn's mobile-only hide utility to the header language selector. The existing Shopify-native language selector in the mobile drawer remains the only mobile control; desktop behavior is unchanged.
- Files: `sections/header.liquid`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check reports the same pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no selector-specific errors were reported.

### 2026-09-21 - Match the homepage mobile header on product pages

- Request: keep the same mobile navbar logo size, orientation and placement on product and collection pages as on the homepage.
- Changed: applied the homepage's centered, vertically aligned 4rem logo composition to the direct header logo link rendered on non-home pages. Desktop navigation and homepage header behavior are unchanged.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check continues to be blocked by the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no header-specific errors were reported.

### 2026-09-21 - Remove the homepage hero CTA

- Request: remove the Explore Alma Collection button shown over the hero image.
- Changed: removed the campaign section's rendered CTA layer. The hero image and homepage section/block ordering remain unchanged.
- Files: `sections/alma-campaign.liquid`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check continues to be blocked by the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no CTA-specific errors were reported.

### 2026-09-21 - Match the navbar to the footer burgundy

- Request: make the navbar the same dark burgundy color as the footer.
- Changed: applied the footer's existing `--alma-ink` surface to every header state, with white logo artwork, navigation and utility controls. Dropdown and predictive-search panels retain their white surface and dark text.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check continues to be blocked by the pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no header-color-specific errors were reported.

## Continuation prompt

```text
Continue ALMA by Reem Fragrances at https://github.com/MohamedMahran02/almafragrances on main.
Read AGENTS.md and the entire README first, then inspect files and recent Git history. The README was intentionally reset at the user's request; append all future updates from that point.
The user authorized building directly within the supplied Dawn 15.5.0 theme and pushing completed work to main. Preserve store data, URLs, native commerce and integrations. Use research/brand/logo-icon.png as the website logo without redesigning product packaging.
The user selected research/design/previews/diptyque-direction-1.png and later clarified that the full Diptyque homepage rhythm is required. The homepage is expanded through layering, Dukhoon, gifting, wardrobe and service sections; do not collapse it back to only the opening sections. GitHub main is connected to the live `almafragrances/main` theme (`#167361839354`) on https://app-test-1111231327.myshopify.com/; this Shopify theme is the user's requested review and deployment target. Do not create or use Vercel deployments unless the user explicitly asks. The test catalog contains the imported public source snapshot; read the currency and inventory limitations above before production work.
The theme includes an Arabic locale, current homepage and custom policy translations, a header globe switch and RTL styling. Shopify Admin Arabic was added to the store domain on 2026-09-20. Translate & Adapt's store-wide job completed; 22 present products, collections, imported options, menus, metaobjects, page and product SEO fields were reviewed or corrected. The generated Shopify Privacy Policy was translated manually from research/localization/ar-privacy-policy-draft.html and requires owner review. The Arabic /ar preview renders but Settings > Languages still says Not published and its menu has no Publish action on this Basic Development store. Do not claim public Arabic availability or fully English-free checkout and notifications until publication and visitor testing. The catalog draft's gift-card product handle returns 404 despite the older 23-product baseline; reconcile this in Admin. Currency-code display is enabled and the authenticated Shopify store currency was changed from EGP to AED on 2026-09-13. Numeric product prices and shipping rates were not converted automatically and must be reviewed before production.
The opening campaign uses the restored original wide artwork height rather than a viewport-height image crop. On desktop and compact mobile screens, the CTA is visible immediately, stays near the bottom of the viewport while the campaign scrolls, and releases with a responsive inset before the ritual and existing later sections continue normally. Preserve this interaction unless the user requests another landing behavior.
Use Context7 before external API/package-dependent implementation. Pull before edits. Update README in every change commit, documenting current structure/order, implementation, checks, limitations and next steps. Push and verify remote main; verify Shopify connection, synchronization and publication separately.
Latest change: Admin translations are saved, the generated Privacy Policy is in Arabic, and the theme's remaining visible English preview strings were corrected locally. Run checks, push and verify theme sync, then test the globe link and repeat the Arabic storefront sweep. Investigate why Settings > Languages omits Publish; confirm whether the Development store plan blocks it before asking the owner to choose a paid plan. Then test visitor access, checkout, customer account, notifications and mobile layouts. Preserve the tightened spacing and wide Dukhoon composite from the previous work. Typography option 2 (Cormorant Garamond + Jost) remains the active temporary English comparison candidate; Arabic uses system Arabic-capable fonts until an approved Arabic font is selected.
```

### 2026-09-21 - Simplify header localization controls

- Request: remove the currency selector, restyle the EN/AR selector and place it at the far edge of the navbar.
- Changed: removed the Shopify-native country/currency localization forms from the desktop header and mobile drawer. The remaining Shopify language form uses compact EN/AR labels in the desktop header, with a bordered burgundy-header style and logical far-edge ordering. The mobile side menu retains its full-name language selector.
- Files: `sections/header.liquid`, `snippets/header-drawer.liquid`, `snippets/language-localization.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check reports the same pre-existing 970 matching-translation errors in `locales/ar.json` and 7 warnings across 7 files; no localization-control-specific errors were reported.

### 2026-09-21 - Use direct AR and EN header links

- Request: match the supplied `AR | EN` language-control reference using ALMA typography and header styling.
- Changed: replaced the desktop language dropdown button with native Shopify locale links for every available language, displayed as direct AR | EN ISO labels with a separator. The active language is bright and the alternate language is subdued; the control remains at the header edge. The mobile drawer language selector remains unchanged.
- Files: `sections/header.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: git diff --check passes. Shopify Theme Check reports the same pre-existing 970 matching-translation errors in locales/ar.json and 7 warnings across 7 files; no language-link-specific errors were reported.

### 2026-09-21 - Increase header language-link spacing

- Request: move the AR | EN links farther from the cart toward the header edge.
- Changed: increased the desktop language-control outer spacing in both text directions without changing the header height.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes.

### 2026-09-21 - Match mobile drawer language links

- Request: apply the AR | EN language-link treatment on mobile while keeping language selection in the side drawer.
- Changed: kept the mobile navbar free of language controls and replaced the drawer language dropdown with native Shopify AR | EN locale links that match the desktop treatment.
- Files: `snippets/header-drawer.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: git diff --check passes. Shopify Theme Check reports the same pre-existing 970 matching-translation errors in locales/ar.json and 7 warnings across 7 files; no mobile-language-link-specific errors were reported.

### 2026-09-21 - Update Products navigation collections

- Request: replace the generic Perfumes item in the desktop Products dropdown with Spray Perfumes and Solid Perfumes.
- Changed: the Products dropdown now links to the existing Alma Perfumes collection as Spray Perfumes and the existing Alma Solid Perfumes collection as Solid Perfumes. Existing localized wardrobe labels are used for the new entries.
- Files: `snippets/alma-navigation-links.liquid`, `locales/en.default.json`, `locales/ar.json`, `README.md`.
- Checks: git diff --check passes. Shopify Theme Check did not finish before the command timeout; its preceding full run reported the pre-existing 970 matching-translation errors in locales/ar.json and 7 warnings across 7 files.

### 2026-09-21 - Improve the ritual 5% signup form

- Request: add a mobile-number field, remove the signup submission glitch, and match the mobile submit button to desktop.
- Changed: added a required Shopify `contact[phone]` field to the native customer form, retained its value after validation errors, and added submission locking so a form cannot be posted twice or dismissed mid-submit. The submit button now has one explicit ALMA style at every viewport size.
- Files: `sections/alma-editorial-feature.liquid`, `assets/alma-ritual-signup.js`, `assets/alma-theme.css`, `README.md`.
- Checks: `node --check assets/alma-ritual-signup.js` and `git diff --check` pass. Shopify Theme Check reports 1,001 existing errors and 7 warnings across 38 files; JSON output contains no offenses in the changed signup or navigation files.

### 2026-09-21 - Add a Shopify collection banner page

- Request: map the corrected collection set and create a branded page displaying every collection with its Shopify image.
- Changed: added the `page.alma-collections` template and an editor-configurable ALMA collection-banner section. The template maps Alma dokhon, Alma Discovery Collection, Alma solid charms, Layering & kits, Best sellers, Alma lotions, Warm and bold, Alma perfumes, Arabic and Deep, Alma Solids-???????, and Soft and clean. Each banner uses its live Shopify collection image, with the first Shopify product image only as a fallback when a collection has no featured image. Restored the existing Perfumes locale key used by the footer.
- Files: `sections/alma-collection-banners.liquid`, `templates/page.alma-collections.json`, `assets/alma-theme.css`, `locales/en.default.json`, `locales/ar.json`, `README.md`.
- Checks: JSON template parsing and `git diff --check` pass. Shopify Theme Check JSON output reports no offenses in the new collection section or template.
- Shopify setup: create a Shopify Page and assign the `page.alma-collections` template to publish it; collection selection, copy and order remain editable in the Theme Editor.

### 2026-09-21 - Link the branded collections page in navigation

- Request: add a Collections navigation item beside Products that opens the branded collections page.
- Changed: added a Collections link immediately after Products in the desktop navigation and mobile drawer. It uses the Shopify Page titled/handled `collections` when present, with `/pages/collections` as its page-route fallback. That page uses the ALMA collection-banner template and live collection imagery added in the preceding change.
- Files: `snippets/alma-navigation-links.liquid`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check JSON output contains no offenses in `snippets/alma-navigation-links.liquid`.

### 2026-09-21 - Render collection banners through the Default page template

- Request: make the Collections page work when Shopify only offers the Default page and contact templates.
- Changed: the Default page template now renders the branded ALMA collection banner grid only when the Shopify page handle is `collections`. All other pages retain the standard Dawn page output. The grid uses the mapped live Shopify collection and product images.
- Files: `sections/main-page.liquid`, `snippets/alma-collections-page-banners.liquid`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check JSON output contains no offenses in the changed default-page section or collection-banner snippet.

### 2026-09-21 - Restore Find Your Aura popup on the current store

- Request: fix the non-working Find Your Aura popup.
- Changed: the popup now renders whenever the selected perfume collection has products, even when the current store has no `Fragrance note` metaobjects. It uses Shopify-editable fallback notes and falls back to all Shopify products if the selected collection is empty. Product titles, descriptions and existing fragrance metafields continue to drive matching.
- Files: `sections/alma-scent-finder.liquid`, `README.md`.
- Checks: `git diff --check` passes. Shopify Theme Check JSON output contains no offenses in `sections/alma-scent-finder.liquid`.

### 2026-09-23 - Add close controls to side popup launchers

- Request: add an X control to remove the Find Your Aura and 5% offer launchers from the page edges after their popups close.
- Changed: both side launchers now have accessible close buttons. Dismissing one hides it immediately and remembers the choice in the visitor's browser, including across page loads. The popup itself remains available until dismissed and existing Arabic side placement is preserved.
- Files: `layout/theme.liquid`, `sections/alma-editorial-feature.liquid`, `assets/alma-scent-finder-modal.js`, `assets/alma-ritual-signup.js`, `assets/alma-theme.css`, `README.md`.
- Checks: `node --check` passes for both modified scripts and `git diff --check` passes. Shopify Theme Check reports its existing `layout/theme.liquid` finding; no offenses were reported in the modified popup scripts or editorial section.

### 2026-09-23 - Restore side launchers after refresh

- Request: restore the Find Your Aura and 5% offer side launchers when a visitor refreshes after closing them.
- Changed: dismissing either side launcher now applies only to the current page view. Refreshing the page restores the launcher, while the existing popup display rules remain unchanged.
- Files: `assets/alma-scent-finder-modal.js`, `assets/alma-ritual-signup.js`, `README.md`.
- Checks: `node --check` passes for both modified scripts and `git diff --check` passes.

### 2026-09-23 - Use a single product-media viewer

- Request: replace the stacked product-image catalogue with one image window and arrows for previous and next media.
- Changed: the main product template now uses an ALMA-styled single-slide gallery. It shows one Shopify-managed product medium at a time, with overlay arrow controls on desktop and mobile. The native hidden thumbnail DOM remains available to preserve variant-media changes and the Shopify media lightbox.
- Files: `snippets/product-media-gallery.liquid`, `templates/product.json`, `assets/alma-theme.css`, `README.md`.
- Checks: product-template JSON parsing and `git diff --check` pass.

### 2026-09-23 - Show product gallery controls and previews

- Request: show the missing gallery arrows and add small product-media previews beneath the main product image.
- Changed: gallery arrows now remain visibly rendered at every viewport size. Every product with more than one Shopify medium now shows a compact horizontal thumbnail strip under the single-image viewer; selecting a preview updates the main medium through Dawn's native gallery behavior.
- Files: `snippets/product-media-gallery.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: product-template JSON parsing and `git diff --check` pass.

### 2026-09-23 - Remove ritual popup phone field

- Request: remove the phone field from the 5% offer popup and retain the existing Shopify-native name-and-email signup flow.
- Changed: removed the required `contact[phone]` input from the ritual popup. First name, email, newsletter tagging, success state and the existing native customer-form submission remain unchanged.
- Files: `sections/alma-editorial-feature.liquid`, `README.md`.
- Checks: confirmed the phone field is absent and `git diff --check` passes.

### 2026-09-23 - Populate Find Your Aura product-note data on the current store

- Request: use the installed Alma App to read product descriptions, create Shopify-native fragrance-note data and assign product notes for Find Your Aura.
- Verified store configuration: authenticated the installed Alma App against `4deffe-4.myshopify.com`. Created the merchant-owned **Fragrance note** metaobject definition (`fragrance_note`) with a public storefront-readable Name field. Created the product metafield definition **Fragrance notes (select)** at `custom.fragrance_note_refs`, as a public storefront-readable list of references to that metaobject.
- Data applied: created 21 reusable note entries and assigned extracted note references to 28 of 43 products. The import reads explicit note/contains text and product scent names; it did not modify titles, descriptions, images, prices, variants or unidentifiable products.
- Verification: Admin API confirms 21 note entries and 28 products with saved references. Both `www.almafragrances.com` and `4deffe-4.myshopify.com` returned 200 but do not render `AlmaScentFinder` or `alma-theme.css`, so the public current-store theme is not the GitHub theme in this repository. The data is ready; connect/publish the repository theme on this store before claiming the popup is live.
- Files: `README.md`.
- Checks: authenticated Admin API scope inspection, post-write metafield count query and storefront HTML checks pass.

### 2026-09-23 - Use Layering & kits for gifting

- Request: use the Shopify **Layering & kits** collection instead of Best sellers in the Gifting by ALMA section.
- Changed: selected `layering-kits` as the Gifting by ALMA product rail collection and renamed its tab to Layering & kits. The products, imagery, availability and prices remain managed in Shopify.
- Files: `templates/index.json`, `README.md`.
- Checks: JSON-template parsing and `git diff --check` pass.

### 2026-09-23 - Add static ALMA product ratings

- Request: add a static star rating to each product using the dark burgundy from the ALMA navigation and footer.
- Changed: added a reusable, accessible five-star rating below product titles across standard Shopify cards, ALMA homepage, gifting and scent-match cards, plus main and featured product detail layouts. The rating uses the shared `--alma-ink` dark-burgundy brand color and remains readable in RTL.
- Files: `snippets/alma-static-rating.liquid`, `snippets/card-product.liquid`, `sections/alma-favourites.liquid`, `sections/alma-scent-finder.liquid`, `sections/main-product.liquid`, `sections/featured-product.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: Liquid render placement review and `git diff --check` pass.

### 2026-09-23 - Restore product-gallery arrows

- Request: show the previous and next arrows that switch product images on the product page.
- Changed: overrode Dawn's desktop product-media rule that hid every gallery slider button. The ALMA gallery controls now render as visible, clickable previous and next arrows while keeping the existing single-image behavior and thumbnail previews.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: CSS selector review and `git diff --check` pass.

### 2026-09-23 - Add community video section and rating counts

- Request: add a UGC section after The ALMA experience with video placeholders, and show a 20–50 count beside each static product star rating.
- Changed: added a three-card ALMA community-video section immediately after the services band. Each card uses Shopify's native Files video picker, supports an optional placeholder image and begins with a branded vertical-video placeholder. Static ratings now show a stable per-product count derived from the Shopify product ID, ranging from 20 to 50, beside the five stars.
- Files: `sections/alma-ugc-videos.liquid`, `templates/index.json`, `snippets/alma-static-rating.liquid`, `snippets/card-product.liquid`, `sections/alma-favourites.liquid`, `sections/alma-scent-finder.liquid`, `sections/main-product.liquid`, `sections/featured-product.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: homepage-template and section-schema JSON parsing, UGC order validation, Shopify-video-picker validation, static-count range logic review and `git diff --check` pass.
- Shopify setup: upload each clip in the Theme Editor's ALMA community videos block picker (or Shopify Content > Files), then select it in the corresponding block. The clips remain editable without code changes.

### 2026-09-23 - Hide gallery arrows for one-image products

- Request: do not show product-page image arrows when a product has only one image.
- Changed: restored the ALMA gallery's single-media exception after the visible-arrow override. Products with multiple Shopify media retain their previous and next controls; products with one visible medium show neither control.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: selector precedence review and `git diff --check` pass.

### 2026-09-23 - Restore the hero Shop now button

- Request: restore the missing Shop now button over the homepage hero image.
- Changed: restored rendering for the existing campaign `buttons` block as a positioned hero action. The Shopify-editable label is set to Shop now and its existing destination remains the full product collection at `/collections/all`.
- Files: `sections/alma-campaign.liquid`, `templates/index.json`, `README.md`.
- Checks: campaign block-render and homepage-template JSON validation, plus `git diff --check`, pass.

### 2026-09-23 - Align the hero Shop now button

- Request: correct the broken Shop now button text and restore its original visual treatment.
- Changed: made the hero action an inline-flex control so its label centers vertically and horizontally within the existing ALMA border, white background, typography and hover styling.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: CSS layout-rule review and `git diff --check` pass.

### 2026-09-23 - Center homepage ratings, add reviews and update ALMA pillars

- Request: center homepage product rating rows, add a customer-review section after UGC, and reframe The ALMA experience around Smelling amazing, Layering and Gifting.
- Changed: centered the ALMA homepage and gifting card rating rows. Updated the three service blocks in the requested order with new brand copy for fragrance presence, layering and gifting. Added a responsive, Shopify-editable customer-review section immediately after UGC with three clearly temporary Dubai-based placeholder reviews and names: Noura A. (Jumeirah), Mariam S. (Dubai Marina), and Hala R. (Downtown Dubai).
- Files: `assets/alma-theme.css`, `sections/alma-customer-reviews.liquid`, `templates/index.json`, `README.md`.
- Checks: homepage-template and review-section-schema JSON parsing, service-pillar order validation, review-content completeness validation and `git diff --check` pass.
- Shopify setup: edit or replace the temporary review text, names and locations in Theme Editor > ALMA customer reviews before publishing them as customer testimonials.

### 2026-09-23 - Normalize customer-review stylesheet formatting

- Changed: removed an extra trailing stylesheet blank line introduced while adding the customer-review section.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: `git diff --check` passes.
### 2026-09-23 - Link navbar gifting to Layering & kits

- Request: make the navbar Gifting item open the Layering & kits collection, matching the homepage gifting rail.
- Changed: the desktop navbar and mobile drawer now resolve Gifting directly to the live Shopify `layering-kits` collection URL.
- Files: `snippets/alma-navigation-links.liquid`, `README.md`.
- Checks: Liquid destination review and `git diff --check` pass.

### 2026-09-23 - Keep active Products navigation visible

- Request: keep Products visible in the navbar while viewing the products page.
- Changed: set the active desktop Products label and its underline to white so they remain legible on the burgundy header surface.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: CSS selector review and `git diff --check` pass.

### 2026-09-23 - Fit Find Your Aura to the viewport

- Request: remove the vertical scroll from the Find Your Aura pop-up and keep it within the screen.
- Changed: constrained the dialog and its result state to the dynamic viewport height, removed the modal's vertical scroll container, and condensed the mobile selected-scent layout so the notes and horizontal product recommendations remain visible without a vertical scrollbar.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: responsive selector and viewport-height rule review, plus `git diff --check`, pass.

### 2026-09-23 - Show Find Your Aura product details in full

- Request: prevent product text from being cropped after a scent note is selected.
- Changed: changed mobile scent-match cards to compact horizontal cards with a smaller image and dedicated text column, keeping the matching note, product title, rating, type and price visible inside the fixed-height dialog.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: responsive card-layout and overflow review, plus `git diff --check`, pass.

### 2026-09-23 - Show full Find Your Aura matches on desktop

- Request: fix cropped selected-scent product text on desktop.
- Changed: converted desktop result cards to compact image-and-details grids, retaining each match's note, title, rating, type and price within the fixed-height Find Your Aura dialog.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: desktop responsive card-layout and overflow review, plus `git diff --check`, pass.

### 2026-09-23 - Restrict Find Your Aura to matching products

- Request: show only the products counted as matches after selecting a scent note, without changing the popup height.
- Changed: restored the finder cards' `hidden` state at the same specificity as the desktop and mobile card layouts, so a selection such as Oud displays only its matched products and their complete details.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: selector-specificity review, matching-card hidden-state validation and `git diff --check` pass.

### 2026-09-23 - Close the desktop Find Your Aura results gap

- Request: remove the large desktop gap between the scent-selection status and matched products.
- Changed: removed the desktop result rail's automatic top margin so matching products follow the selection status with the existing intentional spacing only.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: desktop flex-layout spacing review and `git diff --check` pass.

### 2026-09-23 - Close the mobile Find Your Aura results gap

- Request: remove the large mobile gap between the scent-selection status and matched products.
- Changed: removed the mobile result rail's automatic top margin while retaining its compact spacing and horizontal product browsing.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: mobile flex-layout spacing review and `git diff --check` pass.

### 2026-09-23 - Size mobile Find Your Aura to its matches

- Request: show every matching product on mobile and remove the empty area below a short match list.
- Changed: made the selected-scent mobile dialog size to its visible content and changed the result rail to a compact vertical list. The dialog now grows or shrinks with one to four matches while preserving the viewport limit and avoiding a vertical scroll.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: mobile result-state layout and hidden-card behavior review, plus `git diff --check`, pass.

### 2026-09-23 - Center the mobile Find Your Aura dialog

- Request: center the mobile popup and make its variable-height expansion extend above and below its center.
- Changed: positioned the mobile dialog at the viewport center with a centered transform, so its content-sized height changes stay balanced rather than attaching the popup to the top edge.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: mobile dialog positioning and dynamic-height interaction review, plus `git diff --check`, pass.

### 2026-09-23 - Restore reliable mobile Find Your Aura closing

- Request: make the Find Your Aura mobile close control work.
- Changed: changed the X control to a native dialog form submitter while keeping the existing JavaScript close handler. The popup can now close through the browser dialog mechanism even when a touch click does not reach the script handler.
- Files: `sections/alma-scent-finder.liquid`, `README.md`.
- Checks: dialog markup and close-handler compatibility review, plus `git diff --check`, pass.

### 2026-09-24 - Fix mobile Aura closing and normalize hero CTA

- Request: close the mobile Find Your Aura popup without clearing scent selections, and make the hero Shop now button match other ALMA buttons.
- Changed: added a direct touch close handler that closes the dialog before the selected-result layout can intercept the interaction, while keeping selections intact. Updated the hero CTA to use the same boxed, dotted ALMA button treatment, typography, padding and hover state used elsewhere.
- Files: `assets/alma-scent-finder-modal.js`, `assets/alma-theme.css`, `README.md`.
- Checks: touch and keyboard close-path review, CTA style-token review, and `git diff --check` pass.

### 2026-09-24 - Keep mobile Aura close control above homepage actions

- Request: fix the mobile Find Your Aura popup close action after a scent is selected.
- Changed: made the close action run on pointer-down in the capture phase and placed the mobile dialog and its X control above sticky homepage controls such as Shop now and the side launchers. Selected notes remain unchanged when closing.
- Files: `assets/alma-scent-finder-modal.js`, `assets/alma-theme.css`, `README.md`.
- Checks: close-event order and mobile stacking-context review, `node --check`, and `git diff --check` pass.

### 2026-09-24 - Harden mobile Find Your Aura closing

- Request: make the mobile Find Your Aura X close action work after choosing a scent.
- Changed: added a direct dialog-close action to the X, a document-level capture listener, and cleanup for in-progress dialog height animations before closing. The selected notes remain stored in the open dialog; closing never requires clearing them.
- Files: `sections/alma-scent-finder.liquid`, `assets/alma-scent-finder-modal.js`, `README.md`.
- Checks: close-path review for touch, click and declarative dialog actions, `node --check`, and `git diff --check` pass.

### 2026-09-24 - Restore the native Find Your Aura close flow

- Request: identify and remove the blocker that prevents closing the mobile Find Your Aura popup after a product match appears.
- Cause: the selected-result update had accumulated multiple competing close mechanisms and a custom transformed dialog position. Those changes interfered with the native dialog interaction after its height changed.
- Changed: restored the native dialog position and one standard button click handler that calls `dialog.close()` directly. The result layout and selected notes are unaffected.
- Files: `sections/alma-scent-finder.liquid`, `assets/alma-scent-finder-modal.js`, `assets/alma-theme.css`, `README.md`.
- Checks: complete finder close-flow audit, `node --check`, and `git diff --check` pass.

### 2026-09-24 - Align mobile popup side launchers

- Request: align the X controls and names of the mobile Find Your Aura and 5% ritual popup launchers.
- Changed: placed both launchers in the same fixed-size mobile frame, giving their dismiss controls identical top positions and their vertical labels identical available height.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: mobile launcher dimension and shared-position review, plus `git diff --check` pass.

### 2026-09-24 - Close the mobile side-launcher label gap

- Request: remove the excessive space between each side-launcher X and vertical label.
- Changed: aligned the vertical label to the start of its shared launcher frame, immediately after the X clearance, instead of centering it in the full frame height.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: mobile vertical flex alignment review and `git diff --check` pass.

### 2026-09-24 - Prevent closed Aura finder rendering in the homepage

- Request: stop the closed Find Your Aura popup appearing again within the homepage after scrolling, and remove empty space in its side launchers.
- Cause: the selected-result `display: block` rule overrode the browser's default hidden style after `dialog.close()` removed the `open` attribute.
- Changed: added an explicit closed-dialog rule so the finder cannot render as page content after closing. Reduced the shared mobile launcher frame to 14rem and tightened its top and bottom padding so the labels sit directly under the X without a long empty tail.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: dialog open-state selector precedence and screenshot-based mobile launcher dimension review, plus `git diff --check`, pass.

### 2026-09-25 - Use a static Layer it your way image

- Request: use the supplied Layer it your way image and remove the image animation.
- Changed: added the supplied image as the static default for The ALMA ritual / Layer it your way editorial section. Removed the product-slide markup and the loaded ritual-motion script. The existing Theme Editor **Override image** picker still lets the store owner replace this default with a Shopify-managed image.
- Files: `assets/alma-layer-it-your-way.jpg`, `sections/alma-editorial-feature.liquid`, `layout/theme.liquid`, `README.md`.
- Checks: Liquid fallback and static-image rendering path review, asset existence check, and `git diff --check` pass.

### 2026-09-25 - Fit Layer it your way to the viewport

- Request: reduce the static Layer it your way section so it fits within the screen.
- Changed: added a dedicated static-ritual class with viewport-based dimensions. Desktop uses the available viewport height; mobile divides that height between the static image and compact content area, retaining access to all Shopify product and CTA content.
- Files: `sections/alma-editorial-feature.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: responsive class targeting and viewport-height selector review, plus `git diff --check` pass.

### 2026-09-25 - Fill the desktop Layer it your way viewport

- Request: make the desktop Layer it your way section fill the screen.
- Changed: removed the desktop 72rem height cap; the static ritual editorial now uses the full viewport height beneath the header.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: desktop viewport-height rule review and `git diff --check` pass.

### 2026-09-25 - Add the ALMA layering page

- Request: create a branded page reached from Explore Layering, with separate Layering and Spray Perfumes Layering views.
- Changed: added a Shopify-native two-tab layering hub. Each tab is connected to an independently selectable Shopify collection and renders its collection products. Added the page template with Layering & kits and Alma perfumes selected, and redirected the homepage layering calls to action to `/pages/layering`.
- Files: `sections/alma-layering-hub.liquid`, `assets/alma-layering-hub.js`, `assets/alma-theme.css`, `templates/page.alma-layering.json`, `templates/index.json`, `README.md`.
- Configuration: create or edit the Shopify page with handle `layering`, assign the `page.alma-layering` template, then choose the two collections in the Theme Editor as needed.
- Checks: Liquid structure, tab accessibility states, JSON validity, and `git diff --check`.

### 2026-09-25 - Simplify the layering page title

- Request: use only ?Layering? as the page title.
- Changed: updated the layering page and its section default heading to ?Layering?; the two selectable product views remain unchanged.
- Files: `templates/page.alma-layering.json`, `sections/alma-layering-hub.liquid`, `README.md`.
- Checks: section schema JSON and template JSON validation, plus `git diff --check`.

### 2026-09-25 - Use responsive videos in the homepage hero

- Request: replace the homepage hero with supplied desktop and mobile videos.
- Changed: added the supplied MP4 files as theme assets and updated the campaign hero to choose the desktop video at 750px and above, and the mobile video below 750px. The autoplaying video is muted, loops, and plays inline; the existing theme image remains as the no-video fallback.
- Files: `assets/alma-hero-desktop.mp4`, `assets/alma-hero-mobile.mp4`, `sections/alma-campaign.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: video asset size review, Liquid schema review, and `git diff --check`.

### 2026-09-25 - Render Layering from the default page template

- Request: fix the Layering page showing only its title.
- Changed: extracted the two-option hub into shared markup and render it for the `layering` page handle from both the dedicated template and Shopify's Default page template. This prevents the page from falling back to a title-only screen if the default template remains selected.
- Files: `snippets/alma-layering-hub-content.liquid`, `sections/alma-layering-hub.liquid`, `sections/main-page.liquid`, `README.md`.
- Checks: shared Liquid markup review, section schema JSON validation, and `git diff --check`.

### 2026-09-25 - Show spray perfume bundles in Layering

- Request: show the newly created spray perfume layering bundles on the Layering page.
- Changed: updated the second Layering tab to source the Shopify `spray-perfumes-layering` collection in both the dedicated template and Default-page fallback.
- Files: `templates/page.alma-layering.json`, `sections/main-page.liquid`, `README.md`.
- Checks: template JSON validation, source handle review, and `git diff --check`.

### 2026-09-25 - Add a collection switcher to All Products

- Request: make the All Products page switch between collections like the Layering page.
- Changed: added an accessible collection tab interface for `/collections/all`; it starts with All Products and uses Shopify-selected collection blocks for the ALMA collections, including Spray Perfumes Layering. Individual collection pages retain Dawn?s existing collection grid.
- Files: `snippets/alma-all-products-hub.liquid`, `assets/alma-products-hub.js`, `sections/main-collection-product-grid.liquid`, `assets/alma-theme.css`, `templates/collection.json`, `README.md`.
- Configuration: manage the tab collection order and labels in the All Products collection template in the Theme Editor.
- Checks: section schema and collection template JSON validation, JavaScript syntax check, and `git diff --check`.

### 2026-09-25 - Remove selected tabs from All Products

- Request: remove Best Sellers, Warm and Bold, Arabic and Deep, Soft and Clean, and Spray Perfumes Layering from the All Products page while retaining the other collection tabs.
- Changed: removed only those five collection-tab blocks from the All Products template.
- Files: `templates/collection.json`, `README.md`.
- Checks: collection template JSON validation and `git diff --check`.

### 2026-09-25 - Point the navbar Layering link to the Layering page

- Request: replace Collections in the navbar with Layering and link it to the Layering page.
- Changed: updated the shared desktop and mobile navigation link to use the Shopify Layering page URL and title.
- Files: `snippets/alma-navigation-links.liquid`, `README.md`.
- Checks: Liquid link and active-state review, plus `git diff --check`.

### 2026-09-25 - Add spacing around All Products cards

- Request: move products away from the screen corners on the All Products page.
- Changed: constrained the All Products switcher to a centered desktop content width and increased its responsive horizontal inset, including mobile card spacing.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: responsive spacing selector review and `git diff --check`.

### 2026-09-25 - Enforce product-grid edge spacing

- Request: ensure products are visibly inset from the screen corners.
- Changed: applied the spacing directly to the All Products product grid and added a dedicated inset class to Dawn?s standard collection grid, so both All Products and individual collection pages have enforced edge spacing.
- Files: `sections/main-collection-product-grid.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: product-grid selector review and `git diff --check`.

### 2026-09-25 - Brand the All Products page title

- Request: improve the generic Products title above the collection switcher.
- Changed: replaced the All Products route?s generic heading with editable ALMA FRAGRANCES eyebrow and The ALMA collection title styling; individual collection page headings remain unchanged.
- Files: `sections/main-collection-banner.liquid`, `templates/collection.json`, `assets/alma-theme.css`, `README.md`.
- Checks: section schema and collection template JSON validation, plus `git diff --check`.

### 2026-09-25 - Use the new Layering collection on the Layering page

- Request: use the Shopify collection named Layering for the first Layering tab.
- Changed: updated the first tab to source the `layering` collection in both the dedicated template and Default-page fallback. Spray Perfumes Layering remains the second tab.
- Files: `templates/page.alma-layering.json`, `sections/main-page.liquid`, `README.md`.
- Checks: template JSON validation, source handle review, and `git diff --check`.

### 2026-09-25 - Show every product in the Layering tabs

- Request: remove the Layering View all links and show all products from both Layering collections directly on the page.
- Changed: removed the product display limit and View all links from the shared Layering hub; each tab now renders its complete Shopify collection.
- Files: `snippets/alma-layering-hub-content.liquid`, `sections/alma-layering-hub.liquid`, `sections/main-page.liquid`, `templates/page.alma-layering.json`, `assets/alma-theme.css`, `README.md`.
- Checks: section schema and template JSON validation, Liquid collection-loop review, and `git diff --check`.

### 2026-09-25 - Use responsive Dukhoon images on the homepage

- Request: use the supplied Dukhoon images for desktop and mobile on the homepage.
- Changed: added the supplied desktop and mobile Dukhoon images as theme assets and made the homepage Dukhoon editorial select the mobile source below 750px and desktop source at wider widths. The existing Theme Editor image override remains available.
- Files: `assets/alma-dukhon-desktop.jpg`, `assets/alma-dukhon-mobile.jpg`, `sections/alma-editorial-feature.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: image dimension review, Liquid fallback-path review, section schema validation, and `git diff --check`.

### 2026-09-25 - Fill the desktop Dukhoon media frame

- Request: make the desktop Dukhoon image fill the screen instead of appearing small.
- Changed: cropped the white matte embedded in the supplied desktop artwork inside the homepage media frame, allowing the Dukhoon photograph to fill the section. The mobile image remains unscaled because it has no matte.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: desktop and mobile source-image visual review, responsive selector review, and `git diff --check`.

### 2026-09-25 - Correct Products navigation and standardize product-card ratios

- Request: make Products dropdown names resolve to the correct collection pages and use a 3:4 product aspect ratio throughout the website.
- Changed: changed each Products dropdown target from a constructed path to the corresponding Shopify collection URL, including the Layering page link. Updated the shared Shopify product-card renderer and custom ALMA homepage product rail to use portrait 3:4 media.
- Files: `snippets/alma-navigation-links.liquid`, `snippets/card-product.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: navigation collection-target review, shared card-ratio review, and `git diff --check`.

### 2026-09-25 - Sync navbar and collection sections with live Shopify handles

- Request: correct Products navigation and Explore the ALMA collections links so they open the intended current Shopify collections.
- Changed: verified the current public Shopify collection data and replaced obsolete handles for Alma Lotions and Alma Solids Perfumes everywhere those collections are configured in the homepage, all-products hub, collection page, and ALMA collections page. The Products dropdown now reads each listed collection title and URL directly from its live Shopify collection object.
- Files: `snippets/alma-navigation-links.liquid`, `snippets/alma-collections-page-banners.liquid`, `snippets/card-collection.liquid`, `sections/predictive-search.liquid`, `templates/index.json`, `templates/collection.json`, `templates/page.alma-collections.json`, `README.md`.
- Checks: live collection endpoint review, configured-handle review, JSON validation, and `git diff --check`.

### 2026-09-25 - Rename the kits collection in theme navigation

- Request: update the renamed Layering & kits collection to its current name, `kits`.
- Changed: made the Products dropdown use the live `kits` collection title and URL, while preserving the separate Layering page link. Updated the homepage gifting rail and All Products collection-tab label to `kits`.
- Files: `snippets/alma-navigation-links.liquid`, `templates/index.json`, `templates/collection.json`, `README.md`.
- Checks: collection URL/title mapping review, JSON validation, and `git diff --check`.

### 2026-09-25 - Extend ALMA collection headings to every collection page

- Request: refine the title and description styling on the remaining collection screens to match All Products, while retaining filters.
- Changed: gave individual collection pages the same centered ALMA heading rhythm, editable eyebrow, display type, measured description, and responsive spacing as All Products. Removed the obsolete hard-coded solid-perfume title exception. The native Dawn filters, sorting, pagination, and product grid remain untouched.
- Files: `sections/main-collection-banner.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: Liquid structure and section-schema review, CSS selector review, and `git diff --check`.

### 2026-09-25 - Style native collection filters, sorting and pricing

- Request: style filtering, sorting and prices on collection pages to match the branded collection headings.
- Changed: added a collection-only ALMA treatment for the existing native Dawn filter summaries, active filter chips, desktop and mobile sort controls, product count, filter drawers, and card prices including sale states. Existing facets markup, filter JavaScript, sorting options, pagination, and product data remain unchanged.
- Files: `sections/main-collection-product-grid.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: collection-control selector and Liquid class review, plus `git diff --check`.

### 2026-09-25 - Align the collection filter-row label

- Request: align the Filter label with the other controls in the collection filter row.
- Changed: restored the native filter-row heading offset within the ALMA filter styling so its text shares the same visual line as the filter controls.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: desktop facets flex-row alignment review and `git diff --check`.

### 2026-09-25 - Restore Dukhoon image framing

- Request: restore the original Dukhoon homepage image with its visible borders.
- Changed: removed the desktop-only scale crop from the responsive Dukhoon image, restoring the supplied artwork’s original framing.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: responsive Dukhoon selector review and `git diff --check`.

### 2026-09-25 - Simplify homepage editorial products and enable collection quick add

- Request: remove the Alma Dukhoon and Alma Layering Box title-price lines from the homepage, and replace Choose options with Add to cart in The ALMA fragrance collection.
- Changed: added a Theme Editor visibility setting for editorial featured-product lines and disabled it only for the homepage Dukhoon and Layer it your way sections. Added an opt-in, Shopify-native AJAX Add to cart form to the ALMA fragrance collection; it adds each product’s first available variant and uses the existing cart drawer. Gifting retains its existing Discover link.
- Files: `sections/alma-editorial-feature.liquid`, `sections/alma-favourites.liquid`, `templates/index.json`, `assets/alma-theme.css`, `README.md`.
- Checks: index JSON and section-schema validation, native product-form structure review, and `git diff --check`.

### 2026-09-25 - Refine homepage Add to cart styling

- Request: style the Add to cart button in The ALMA fragrance collection to match the brand identity.
- Changed: replaced the utility-style quick-add label with the ALMA dotted editorial CTA treatment, using the display typeface, ivory surface, fine dark border, subtle offset, and wine hover state. The Shopify-native add-to-cart behavior remains unchanged.
- Files: `sections/alma-favourites.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: repeated quick-add markup review and `git diff --check`.

### 2026-09-25 - Show lotion variants as individual storefront cards

- Request: show the separate lotion variants from shared Shopify products on the homepage and product browsing pages.
- Changed: added a reusable Shopify-native lotion variant card. The homepage Alma Lotions tab, All Products Alma Lotions tab, and direct Alma Lotions collection page now render one card per variant with its assigned image, variant URL, exact price, availability, and native Add to cart form. Inventory and product records remain on the existing Shopify parent products.
- Files: `snippets/alma-lotion-variant-card.liquid`, `snippets/price.liquid`, `sections/alma-favourites.liquid`, `snippets/alma-all-products-hub.liquid`, `sections/main-collection-product-grid.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: variant-specific URL and product-form review, price target review, Liquid loop review, and `git diff --check`.

### 2026-09-25 - Constrain lotion variant media to the shared product-card frame

- Request: fix stretched lotion variant images so they match the other product cards.
- Changed: made the lotion card media link the fixed 3:4 frame and made each variant image fill it with `object-fit: cover`, removing the mobile fixed-height override that could stretch cards.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: responsive 3:4 media-frame selector review and `git diff --check`.

### 2026-09-25 - Add Shopify descriptions for all layering bundles

- Request: add generated bundle descriptions that state the included products for all 17 layering bundles.
- Changed: used the authenticated Shopify Admin GraphQL API to update and verify descriptions for the seven `Spray Perfumes Layering` products (`Fresh Vanilla`, `Vanilla Leather`, `Vanilla Oud`, `Fresh Oud`, `Soft Alma`, `Leather & Oud`, `Fresh Alma`) and the ten `Layering` products (`Soft Vanilla`, `Fresh & Feminine`, `Warm Arabia`, `Deep Oud`, `Leather Ritual`, `Rosy Oud`, `Soft Signature`, `Creamy Fresh`, `Modern Oriental`, `Sweet & Bold`). Every description includes an ALMA-aligned scent summary plus an `Included in this bundle` product list.
- Files: Shopify product records; `README.md`.
- Checks: Admin API response and stored-description verification completed for all 17 products.

### 2026-09-25 - Enable quick add for Gifting by ALMA

- Request: replace the homepage Gifting by ALMA product-card `Discover` links with Add to cart controls.
- Changed: enabled the existing Shopify-native quick-add setting for the Gifting by ALMA section. Its kit cards now submit the selected available variant to the native cart and open the cart drawer, using the established ALMA add-to-cart styling.
- Files: `templates/index.json`, `README.md`.
- Checks: homepage section setting, native product-form path, and JSON diff review.

### 2026-09-25 - Repair the mobile Layer it your way layout

- Request: fix the homepage layering section on mobile.
- Changed: removed the mobile-only fixed-height grid and its internal scrolling/cropping from the static Layer it your way editorial. The section now stacks its image and content naturally on mobile, while its desktop viewport-fit presentation remains unchanged.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: mobile selector and cascade review, plus `git diff --check`.

### 2026-09-25 - Match mobile lotion cards to the homepage carousel behavior

- Request: make the homepage Alma Lotions variant cards scroll horizontally on mobile like the other collection cards.
- Changed: gave mobile lotion variant cards the same centered mandatory scroll-snap target used by standard homepage product cards, including a stop at each card.
- Files: `assets/alma-theme.css`, `README.md`.
- Checks: homepage gallery structure and mobile scroll-snap selector review, plus `git diff --check`.

### 2026-09-25 - Restore regular prices and clear active product sale pricing

- Request: use each active variant's Compare-at price as its regular price, then remove the Compare-at price so sales are no longer displayed on the homepage or product cards.
- Changed: used the Shopify Admin GraphQL API to move Compare-at price to Price and clear Compare-at price on 172 variants across 21 active products. Discount codes were not changed.
- Files: Shopify product-variant pricing records; `README.md`.
- Checks: `productVariantsBulkUpdate` responses verified each updated variant, followed by a store-wide active-product scan confirming zero remaining Compare-at prices.

### 2026-09-25 - Keep one homepage lotion card per scent

- Request: prepare the homepage lotion carousel for scent-and-size variants while keeping one card per scent and moving size selection to the product page.
- Changed: homepage lotion cards now group variants by the first option (Scent), choose an available representative variant for each scent, and link to that product variant with a `Choose size` action instead of adding a preselected size directly to cart. Other uses of the reusable lotion card preserve native quick add.
- Files: `sections/alma-favourites.liquid`, `snippets/alma-lotion-variant-card.liquid`, `README.md`.
- Checks: Liquid grouping, representative-variant, product URL, and quick-add path review; `git diff --check`.

### 2026-09-25 - Create 250 ml lotion variants and attach product media

- Request: create the supplied large lotion variants at 130 AED and attach the matching images; inventory will be entered manually later.
- Changed: added the `Size` option to Shopify product `Alma Daily Essentials Lotion`, retaining current scent variants as `Small`, and created six `250 ml` variants for Arabia, Leather luxe, Oud, Sandalwood, Vanilla bloom, and Delice vanilla. Each new variant is priced at 130 AED and linked to its supplied product image. Luma remains Small-only because no 250 ml image was supplied.
- Files: Shopify product options, variants, and product media; `README.md`.
- Checks: Admin GraphQL query verified all six 250 ml variant titles, 130 AED prices, and image-alt associations. Inventory was intentionally left for manual entry.

### 2026-09-26 - Align lotion variants with the product catalog

- Request: make lotion listing cards match the text styling, spacing, and layout of the rest of the products page.
- Changed: wrapped lotion variant details in the native product-card information pattern; aligned the card text left, matched the catalog heading and price treatment, and applied the same desktop and mobile information spacing. Homepage lotion cards retain their centered carousel presentation.
- Files: `snippets/alma-lotion-variant-card.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: `shopify theme check --path .` found no offenses in the changed files; it still reports 970 existing `MatchingTranslations` errors in `locales/ar.json` and seven existing warnings in unrelated Dawn files. `git diff --check` passed.
- Remaining work: confirm the connected Shopify theme reflects the pushed update.


### 2026-09-26 - Add Rose Noir solid perfume

- Request: create a Rose Noir solid perfume from the supplied product and notes images, with a description based on its scent notes, at 260 AED and zero inventory.
- Changed: created active Shopify product `Rose Noir`, added it to `Alma Solids Perfumes`, uploaded the supplied product and notes images with descriptive alt text, and set its single tracked variant to 260 AED with `DENY` inventory policy. The product was created without inventory quantities, so it begins at zero stock.
- Product copy: sandalwood, white musk, and dark caramel; 25g; a warm, smooth solid perfume for hair and skin.
- Files: Shopify product, media, variant, and collection data; `README.md`.
- Checks: Admin GraphQL query verified title, active status, 260 AED price, tracked inventory policy, collection membership, description, and both media records.
- Remaining work: add stock in Shopify when the product is ready to sell.


### 2026-09-26 - Match lotion cards to the catalog card design

- Request: make lotion product cards look like the spray perfume and other product cards, and remove anything preventing that shared design.
- Changed: catalog lotion cards now hide the custom parent-product label and action button, use the standard product-card heading scale and spacing, and retain their individual variant image, rating, price, and link. The homepage grouped scent cards retain their label and Choose size action.
- Files: `snippets/alma-lotion-variant-card.liquid`, `sections/main-collection-product-grid.liquid`, `snippets/alma-all-products-hub.liquid`, `assets/alma-theme.css`, `README.md`.
- Checks: `shopify theme check --path .` found no offenses in the changed files; it still reports 970 existing `MatchingTranslations` errors in `locales/ar.json` and seven existing warnings in unrelated Dawn files. `git diff --check` passed.
- Remaining work: confirm the connected Shopify theme reflects the pushed update.
