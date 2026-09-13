# Design QA — live Diptyque fidelity pass

Result: passed locally on 2026-09-11, including the user-directed header customization.

## Scope and reference

Reference: `https://diptyqueparis.com/fr-fr`, inspected live at the available 1280×720 browser viewport. For the latest user-directed header override, the flow under test is: homepage loads → header renders without an announcement strip → transparent ALMA logo remains left-aligned and search remains in the right utility group → search opens and closes → mobile navigation opens and closes.

Rendered target: the local Liquid fixture at `http://127.0.0.1:9293`, checked at 1280×720 desktop and 390×844 mobile. The local fixture renders the real Dawn layout, ALMA sections/snippets and public catalog snapshot; it is not a Shopify commerce emulator.

## Fidelity ledger

| Comparison point | Live reference | ALMA result |
| --- | --- | --- |
| Header | pale announcement, centered identity, utilities, shallow navigation row | intentional user override: no announcement; enlarged supplied transparent ALMA icon at left; six real category tabs centered in the same desktop bar; search/account/cart at right |
| Hero | full-width cinematic media, approximately 56vw/802px tall, centered bordered CTA | full-width ALMA campaign at the same proportion with centered rectangular CTA |
| Introduction | white centered band, restrained 32px serif title, narrow copy and underlined link | matching white band, scale, centered measure and link treatment |
| Product rails | pale-gray surface, four visible products, centered tabs, small typography and progress line | two four-product ALMA rails using live products/prices and the same visual hierarchy |
| Editorial split | 50/50 white composition, centered copy and dark purchase CTA opposite large media | ALMA layering story uses the same 50/50 media-right structure and CTA hierarchy |
| Immersive story | full-width 802px image followed by centered title/copy/actions | ALMA Dukhoon uses full-width media followed by a centered 367px-style copy band |
| Universe | centered heading and four visible image-led categories in a horizontal rail | six ALMA categories in a four-visible horizontal rail with hidden native scrollbar |
| Services/footer | compact pale service strip and two-column newsletter/help area | three factual ALMA services plus split newsletter/help panels and native Dawn footer controls |
| Mobile | reduced chrome, large image-led first viewport and horizontal content rails | 390×844 view uses drawer navigation, 640px campaign, horizontal product/category rails and stacked footer panels |

## Functional checks

- Page identity and meaningful DOM content: passed.
- Framework/error overlay: none.
- New desktop browser tab console: no errors or warnings.
- Favourites tabs: All → Spray Perfumes updates `aria-selected` and shows the corresponding panel.
- Mobile menu: opens with all six ALMA category links; Escape closes the drawer.
- Header override: no announcement elements render; the exact supplied transparent 1055×1491 logo loads at the left and search stays in the right utility group on 1280×720 and 390×844 layouts.
- Header interactions: the native search modal opens and its close control restores the closed state; the mobile drawer opens with all six category links and closes from its summary control.
- Header clarity follow-up: the logo window increased to 70×74 px on desktop and 58×61 px on mobile with transparent inset space around the visible strokes. Desktop navigation shares the 94 px header bar and its measured center aligns exactly with the header center.
- Scrolling follow-up: root `HTML` is the sole vertical page scroller; the theme body no longer creates a duplicate scrollbar.
- Carousel follow-up: custom product and wardrobe rails include visible previous/next controls, one-card movement, boundary-disabled states, keyboard activation and live progress treatment. Dawn-native sliders retain their existing controls.
- Horizontal page movement is visually suppressed while product and category rails retain local horizontal scrolling.
- Theme Check: 0 errors, 9 inherited Dawn warnings.
- JavaScript syntax, JSON parsing and `git diff --check`: passed.

## Required differences and remaining risk

The ALMA logo, photography, products, prices, category names, copy and claims intentionally replace Diptyque's proprietary brand assets and content. Proprietary Diptyque fonts, videos and imagery were not copied. The available in-app browser limited the live reference capture to 1280×720; ALMA itself was also verified at 390×844 using the local responsive fixture.

Unverified locally: Shopify Theme Editor behavior, live newsletter/contact submissions, checkout/payment, localization, apps, branch-to-theme synchronization and public publication. Those require checks on the connected Shopify theme after the pushed commit synchronizes.
# Complete catalog packshot rail — 2026-09-11

- Reference target: Diptyque's product rail uses restrained product-only tiles and 40 px circular previous/next controls overlaid at the track edges. The ALMA implementation now follows that control placement and visual weight with its own simple SVG chevrons.
- Content: the main rail heading is “The complete ALMA collection”; the All products tab renders all 23 imported Shopify products rather than the previous four-product override.
- Media: 23 generated 1000 px WebP packshots are mapped by product handle. All use a seamless warm off-white studio field with no lifestyle setting, people or decorative scenery. The complete generated contact sheet was visually reviewed; the Lolo Vanilla jar was regenerated once to correct its front-label framing.
- Desktop 1280×720: four cards are visible; the forward control is a 40 px edge overlay, one click advances exactly one 304 px card, the end state disables the forward control, all lazy-loaded packshots resolve and document horizontal overflow is 0 px.
- Mobile 390×844: one 82vw card is visible; one click advances exactly 335 px, controls remain inside the section and document horizontal overflow is 0 px.
- Console: the local fixture reports no errors. Its two existing preload warnings remain unrelated to this change.

# Fragrance-only main rail — 2026-09-11

- Main heading/tab: “The ALMA fragrance collection” / “All fragrances”.
- Included set: 15 perfume-related products, matching the union of the imported spray and solid collections.
- Excluded from the main rail: gift card, lotions, Dukhoon, charm accessory, shimmer oil and layering kits. Those product families remain linked from their dedicated homepage sections.
- Desktop and mobile: the first tab retains four-visible desktop and one-visible mobile proportions, one-card arrow movement, intact packshot loading and zero document horizontal overflow.

# Transparent controls and curated wardrobe — 2026-09-11

- Arrow correction: each 40 px control is inset within its rail instead of touching the clipped boundary; computed background is transparent and both button edges remain inside the containing gallery at 1280×720 and 390×844.
- Wardrobe media: six intentional 1000×1000 WebPs replace automatic collection thumbnails. The rendered desktop tiles are consistent 288×360 frames with `object-fit: contain`, internal padding and no broken images.
- Interaction: desktop product/wardrobe forward controls move 304/304 px; mobile controls move 335/305 px. The document remains free of horizontal overflow at both sizes.
- Intentional fallback: Theme Editor image overrides remain authoritative; newly named category labels without curated assets fall back to their Shopify collection image.

## 2026-09-13 English storefront and currency follow-up

- Removed product-description excerpts from ALMA homepage rails so bilingual catalog body copy cannot appear on cards.
- English-locale filtering now removes Arabic blocks from native product/collection descriptions, normalizes retained English stored with RTL attributes and hides mixed truncated collection captions.
- The mixed `Alma Solids-مخمريات` display title is rendered as `Alma Solid Perfumes`; its existing handle is preserved so collection URLs do not break.
- JavaScript syntax and a DOM-behavior fixture pass. The regenerated 22-product/183-variant CSV has no Arabic characters in customer-facing import content, and the local homepage endpoint returned HTTP 200 with no product-description excerpts.
- Browser automation and two Theme Check attempts stalled during this pass. The previous Theme Check baseline remains 0 errors and 9 inherited Dawn warnings; no new completed visual-browser result is claimed.
- AED cannot be validated locally: native prices follow Shopify's store currency. `currency_code_enabled` is already true, while the authenticated Shopify Admin currency change remains outstanding.

## 2026-09-13 landing hero and sticky-scroll comparison

Source visual truth:

- `C:\Users\TYARA12\OneDrive\Pictures\Screenshots\Screenshot 2026-09-13 145912.png` — initial Diptyque landing state, 1365×727 px including 110 px browser chrome.
- `C:\Users\TYARA12\OneDrive\Pictures\Screenshots\Screenshot 2026-09-13 145935.png` — early-scroll compact-header state, 1365×727 px including 110 px browser chrome.

Implementation evidence:

- `C:\Users\TYARA12\AppData\Local\Temp\alma-hero-desktop-initial-final.png` — local initial state.
- `C:\Users\TYARA12\AppData\Local\Temp\alma-hero-desktop-midscroll-final.png` — local state after 99 px scroll.
- `C:\Users\TYARA12\AppData\Local\Temp\alma-hero-mobile-final.png` — local mobile initial state.
- `C:\Users\TYARA12\AppData\Local\Temp\alma-hero-qa-comparison.png` — normalized two-state source/implementation comparison board.

Viewport and normalization:

- Desktop CSS viewport: 1365×617 at device density 1. Browser screenshots are 1350×617 because the 15 px vertical scrollbar is excluded. Each source screenshot was cropped from y=110 to y=727, then scaled from 1365×617 to the same 1350×617 comparison slot.
- Mobile CSS viewport: 390×844 at device density 1; rendered page width is 375 px plus the 15 px scrollbar.
- States compared: top-of-page landing and 99 px opening scroll. The full viewport already isolates the header, hero crop and CTA at readable scale, so an additional focused crop was not needed.

Full-view comparison:

- Layout and rhythm: the implementation now follows the reference's full first-screen hero, bottom-centred rectangular CTA, compact sticky scroll state and clean release into the next content section.
- Typography: Georgia provides the intended restrained serif CTA treatment; header navigation retains Dawn's configured body font and ALMA's existing scale. No actionable hierarchy or wrapping mismatch remains.
- Colors and tokens: white header, black type/borders and warm full-bleed campaign palette match the reference structure. Hover remains ALMA's approved black inversion.
- Image quality: the existing 1683×934 ALMA campaign artwork remains sharp and uses a deliberate 52%/54% desktop and 50%/52% mobile crop. It replaces Diptyque's proprietary video intentionally; no placeholder or CSS-drawn imagery is used.
- Copy/content: `Discover the collection`, ALMA navigation and the user-selected icon remain authoritative. The reference announcement quote stays omitted because the user previously requested its removal.

Comparison history:

- Pass 1 — P1: the sticky header could render behind the hero in the local section-group fixture, and the CTA moved from y=519 to y=399 after 99 px scroll instead of retaining the reference position. Fix: added an explicit z-index to the sticky section, wrapped the image/CTA in a sticky campaign frame and introduced a 120 px desktop hold with compact-header dimensions.
- Pass 2 — passed: initial header/hero heights measure 95/522 px and end exactly at the 617 px viewport boundary. At 99 px scroll, header/hero heights measure 74/543 px; CTA remains y=519–567 in both states, the header stays visible and the image fills the remaining viewport. At 359 px scroll, the frame releases and the ritual begins at y=357.
- Mobile — passed: header/hero heights measure 82/762 px and total exactly 844 px; CTA is visible at y=766–814, the central crop shows both ALMA products, broken-image count is zero and horizontal overflow is zero.

Findings:

- No actionable P0, P1 or P2 differences remain within the requested interaction and the existing ALMA identity constraints.
- Intentional differences: no announcement strip, ALMA icon remains left in the single-row header, and ALMA photography/copy replaces proprietary Diptyque media and branding.

Validation:

- Theme Check: 0 errors, 9 inherited Dawn warnings across 186 files.
- Header JSON and preview JavaScript parse successfully; `git diff --check` passes.
- Desktop and mobile browser console error lists are empty; no horizontal overflow or broken mobile images were detected.

final result: passed

## 2026-09-13 ritual introduction spacing

Reference evidence:

- `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-eeda6922-2f0e-4f7c-a96b-4baede7c748f.png` shows the 400 px ritual block with visibly excessive empty space above and below its centered copy.

Rendered evidence:

- `C:\Users\TYARA12\AppData\Local\Temp\alma-ritual-compact-desktop.png` — compact desktop block at 1365×768.
- `C:\Users\TYARA12\AppData\Local\Temp\alma-ritual-compact-mobile.png` — compact mobile block at 390×844.

Mismatch ledger and fix:

- P1: `.alma-ritual` forced a 400 px desktop / 340 px mobile minimum height with 70 px / 50 px vertical padding, leaving approximately 131 px of empty space on each side of the desktop content group.
- Fix: reduced the minimum height to 260 px desktop / 240 px mobile and padding to 45 px / 40 px. Copy, centered alignment, links and section/block order are unchanged.

Validation:

- Desktop: section height 260 px; heading begins 60.5 px from the top and the link ends 60.5 px from the bottom; horizontal overflow is zero.
- Mobile: section height 240 px; heading begins 53.6 px from the top and the link ends 53.6 px from the bottom; horizontal overflow is zero.
- Scroll interaction reveals the complete compact ritual and the following fragrance rail with no clipping or overlap. Page identity and meaningful DOM content pass; no framework overlay or relevant console error is present.
- Theme Check: 0 errors and the same 9 inherited Dawn warnings. `git diff --check` passes.

final result: passed
