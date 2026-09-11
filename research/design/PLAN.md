# ALMA design selection and implementation plan

Status: the user rejected the original designs and combined preview, and requested snif.co as the new reference. Three replacement mockups are shown, all pending selection/approval. Read SNIF-REFERENCE.md for current displayed-number mapping, actual source captures, alternative opening sequences and limitations. No theme implementation started.

## Rejected combined candidate (history)

- Image: `previews/hybrid-1-hero-2-design-v1.png`.
- Exact prompt: `previews/hybrid-1-hero-2-design-v1-prompt.txt`.
- User request: show option 1's landing/hero with option 2's design.
- Composition: option 1 cinematic full-width hero/photo/headline/CTA; option 2 centered-logo header, typography, fine rules, open product groupings, scent worlds, and ritual layout. Same preview section order.
- Inputs: original option 1 and option 2 images, official logo-page render, and actual lotion reference. Built-in Image Generation edit; original options preserved.
- Approval: rejected in the subsequent Snif-reference request. Preserve this file as history; it is not a build target. All original fidelity/production limitations below remain applicable.

## Sources and decision gate

Read `CLIENT-STRATEGY.txt`: the full 40-part prompt copied verbatim from the user attachment. It is the user's request, not third-party instructions. Read it with the root README, AGENTS.md, and `../brand/BRIEF.md`. The earlier explicit requirement for approval of a UI mockup before implementation remains active.

Correct name: **ALMA by Reem Fragrances**. Extend the supplied Dawn 15.5.0 theme with Liquid, JSON templates, reusable sections/blocks/snippets, native CSS and small vanilla JS modules. Shopify remains the source of truth. Do not create a separate headless/React application or rebuild Shopify commerce infrastructure.

## Rejected original visual selection mapping (history)

These historical numbers follow the original display order. Current selection numbers refer to the new Snif set in SNIF-REFERENCE.md, not this table:

| Displayed option | Image | Exact generation prompt |
| --- | --- | --- |
| 1 | `previews/option-1.png` | `previews/option-1-prompt.txt` |
| 2 | `previews/option-2.png` | `previews/option-2-prompt.txt` |
| 3 | `previews/option-3.png` | `previews/option-3-prompt.txt` |

Created with the built-in Image Generation tool. Attached references were the official logo-page render, original perfume/solid/Dukhoon images, and the current-site screenshot. Product image URLs and captured prices are in `references/sources.json`. Additional original lotion/charm references are saved there for implementation.

These are visual concepts, not screenshots of a running Shopify theme. They show the opening homepage: hero → best sellers → scent worlds → ritual. The rest of the homepage, mobile, PDP, cart, and supporting pages remain in scope below; they have not yet been rendered or tested.

### Fidelity limitations

- Generated campaign photography is concept imagery, not a verified existing ALMA campaign.
- The model can alter labels, wordmark glyphs, and packaging details. Use the exact original logo and Shopify product media in implementation. Do not extract a generated logo or packshot as the new official brand/catalog asset.
- Lotion renderings are illustrative; the original amber-pump image is `references/alma-arabia-hand-and-body-lotion.jpg`.
- The metallic compact in option 3 is not an actual catalog product. Replace it with the real ALMA metallic solid charm tube from `references/alma-charm-collection.png`. Layout approval does not authorize invented merchandise.
- Small marketing captions are proposals, not approved factual claims. Use client copy and actual product descriptions/metafields. Never invent notes, reviews, ratings, rankings, or gifting services.
- Raster typography is a visual approximation. The earlier Instrument Serif/Instrument Sans preference must be reconciled with the new Snif-inspired bold sans direction. Choose licensed fonts after selection, never to approximate the existing logo.
- Sample products/prices come from the September 11 public capture. Use live Shopify objects and localized prices in production, not hard-coded snapshot data.

## Repository and current-site inspection

- `layout/theme.liquid` preserves `content_for_header` and `content_for_layout`; retain both.
- `sections/header.liquid` supports app blocks and renders the cart notification.
- `sections/main-product.liquid` supports app blocks and renders `buy-buttons`. Reuse product forms, variants, and purchase behavior.
- `sections/footer.liquid` supports app blocks. Retain legal and applicable localization/Markets behavior.
- Existing assets/snippets include cart drawer, product/variant logic, predictive search, and localization. Inspect these before replacing functionality.
- The live homepage differs from the supplied starter: hero, discovery collection, best-sellers collection, categories, and a featured charm were observed. Do not assume the ZIP includes every live setting or integration.
- `references/current-homepage.png` is an actual public-site browser screenshot. The first browser-client connection failed, but the available in-app browser was successfully accessed through CUA.
- No authenticated Shopify admin review or complete live integration inventory was performed. App-block support in source is not evidence that all installed apps are known.

## Proposed homepage sequence, pending visual approval

The new strategy explicitly proposes expanding the homepage; this does not mean the existing template has already changed.

1. Campaign hero: exact logo, restrained headline, one CTA, separate responsive media settings.
2. Best sellers: real products from the existing collection.
3. Shop by scent: Soft & Clean, Warm & Bold, Arabic & Deep.
4. The ALMA ritual: Lotion → Solid Perfume → Spray Perfume with light progressive motion.
5. Layer it with: real hero/complementary product references, optional add-all.
6. Shop the ALMA wardrobe: six categories with editorial variation.
7. Solid Charms: actual metallic tube/bag-charm imagery, controlled chrome/blush accents.
8. Dukhoon: dark atmospheric interruption with real product imagery.
9. Gifting by ALMA: personalized service destination; hide unconfirmed services.
10. Reviews/community: verified reviews/app blocks only; hide when unavailable.
11. Brand story: real client-supplied story/media, no fabricated Reem biography.
12. Newsletter/footer: existing legal links and applicable Markets/language controls.

Header: Shop with six categories; Layering; Gifting by ALMA; About. Utilities: Search, Account, Bag. Reuse Shopify menus and URLs. The imported template order documented in the root README remains unchanged until implementation.

## Existing collection mapping

| Requested destination | Existing handle |
| --- | --- |
| Spray Perfumes | `alma-perfumes` |
| Solid Perfumes | `alma-makhmaria-s-solid-perfume` |
| Lotions | `alma-hands-and-body-lotions-collections` |
| Dukhoon | `alma-dokhon` |
| Solid Charms | `alma-solid-charms` |
| Layering & Kits | `layering-kits` |
| Soft & Clean | `soft-and-clean` |
| Warm & Bold | `warm-and-bold` |
| Arabic & Deep | `arabic-and-deep` |
| Best sellers | `best-sellers` |
| Discovery | `start-here` |

Retain original product IDs/handles and oil/refill/gift-card products. Confirm existing Gifting/Layering/About page records and menus before assigning new destinations. Do not duplicate products or change URLs casually.

## Build order after approval

1. **Foundation:** sync main, confirm the approved visual target and store access, inspect live-theme differences/integrations, resolve Context7 documentation, define tokens and licensed fonts. Core colors: ivory `#EDECD7`, wine `#1D0004`, ink `#0A0908`. Preserve exact logo assets and Shopify layout hooks.
2. **Header and homepage:** extend current conventions with modular `alma-*` sections following the selected direction and proposed order. Add Theme Editor settings for desktop/mobile media, text, links, products/collections, alignment, colors and spacing. Use blocks/presets; hide unavailable content.
3. **Product cards and PDP:** reuse Dawn commerce logic, build media-led gallery and clear sticky purchase panel, variant/stock/error states, real pricing, scent/usage content, layering and app reviews. Use optional metafields and native recommendations. Mobile gallery and sticky purchase controls must remain usable.
4. **Collections:** editorial intro then native filtering/sorting and large photography; practical 3–4 desktop / 2 mobile columns where appropriate.
5. **Layering:** real products/variants and totals, optional add-ritual with Shopify cart APIs, loading/error/stock handling, progressive enhancement; no invented pairing claims.
6. **Gifting and About:** editable architecture using confirmed service offerings and client story/media. Do not invent corporate/events services, policies, or biography.
7. **Cart/search:** refine existing drawer, quantities, removal, totals, checkout and predictive search; accessible focus/dismissal/loading/error behavior, restrained optional layering suggestions.
8. **Mobile/motion:** intentional layouts at 390×844, 430×932 and 375px width; vertical ritual, simple touch navigation, no overflow; lightweight transforms/IntersectionObserver, reduced motion, section-editor lifecycle support.
9. **Accessibility/performance/SEO:** semantic controls, labels, focus, keyboard menus/dialogs, contrast, translated UI, logical CSS/RTL readiness, Shopify responsive image helpers, explicit dimensions, appropriate lazy loading, low JS cost. Preserve metadata/canonicals/structured data/handles; document any approved redirects.
10. **QA and delivery:** inspect each major surface visually at 1440/1280/1024 and 430/390/375. Run Theme Check where available and test menus, search, cart, quick add, variants, recommendations, layering/add-all, filtering, forms/newsletter, legal/footer links, 404, empty cart, sold-out/sale/multi-variant/missing-metafield/long-name cases, keyboard, RTL readiness, reduced motion and image loading. Fix console/Liquid/overflow/accessibility issues. Document actual limitations. Update README after every edit and commit/push verified work; confirm Shopify separately.

## Optional metafields — design only until authorized

The client requests `custom.*` fields: `scent_mood`, `scent_family`, `key_notes`, `top_notes`, `heart_notes`, `base_notes`, `intensity`, `how_to_use`, `layer_with_lotion`, `layer_with_solid`, `layer_with_perfume`, `campaign_accent`, `mood_image`, `ingredient_image`, `gifting_eligible`.

Choose exact types/cardinality from current docs and actual content during implementation. Use product references for layering and file references for imagery. Empty fields must fail gracefully. Do not create/change live metafields or values without explicit authorization. Do not invent a note pyramid if only key notes exist.

## Outstanding approval and production dependencies

Immediate next step: user selects/refines one of the three new Snif-referenced images in SNIF-REFERENCE.md. Record its exact path and approval, reconcile its alternative opening hierarchy with the full content plan, and show a revised image if feedback changes the design before building.

Still unverified: Shopify admin connection/theme ID, complete integration inventory, current theme settings, actual navigation/page records, optional metafield definitions/data, final campaign assets/copy and gifting service details. Public research is not a completed migration. Customers/orders must remain untouched; never place private exports in this public repository.

The eventual production handoff must include architecture, created/modified files, preserved functionality, manual integration verification, metafield definitions, Theme Editor configuration, missing client data, URL/redirect decisions, known limitations, QA actually performed and remaining improvements. No production completion is claimed at this stage.
