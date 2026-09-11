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
- Horizontal page movement is visually suppressed while product and category rails retain local horizontal scrolling.
- Theme Check: 0 errors, 9 inherited Dawn warnings.
- JavaScript syntax, JSON parsing and `git diff --check`: passed.

## Required differences and remaining risk

The ALMA logo, photography, products, prices, category names, copy and claims intentionally replace Diptyque's proprietary brand assets and content. Proprietary Diptyque fonts, videos and imagery were not copied. The available in-app browser limited the live reference capture to 1280×720; ALMA itself was also verified at 390×844 using the local responsive fixture.

Unverified locally: Shopify Theme Editor behavior, live newsletter/contact submissions, checkout/payment, localization, apps, branch-to-theme synchronization and public publication. Those require checks on the connected Shopify theme after the pushed commit synchronizes.
