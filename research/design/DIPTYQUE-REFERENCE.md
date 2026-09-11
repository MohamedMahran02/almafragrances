# Diptyque reference and website logo decision — 2026-09-11

Implementation status update: the user selected option 1 (`previews/diptyque-direction-1.png`) and authorized building directly in the supplied GitHub Shopify theme. This authorization supersedes older approval statements below. The README has been reset for implementation at the user's request. Follow its current implementation status.

Latest request: explore https://diptyqueparis.com/fr-fr as the design reference and change the website logo to the user's supplied `E:/Alma Fragrances branding/logo icon.png`. This is the current exploration; the preceding Snif set remains unapproved historical reference. The user did not approve theme implementation by providing this reference.

## Approved identity asset

`../brand/logo-icon.png` is an unmodified copy of the supplied 1170 × 1654 PNG: a burgundy calligraphic monogram on an ivory background with substantial margins. It replaces the lowercase alma wordmark as the intended website logo. This explicit user decision supersedes earlier instructions to retain the wordmark in the header. Preserve the icon's original shape, proportions and colors; use the source file in production, never a generated approximation. Integrate with an appropriate crop/asset treatment after design selection so its existing margins do not make the visible mark too small. No transparent/vector version has been created.

The business name remains ALMA by Reem Fragrances. Product packaging, source product photos and their existing wordmarks remain unchanged. Changing the website logo does not authorize relabeling merchandise. The icon is approved as the identity choice; none of these complete UI designs is yet approved.

## Source inspection

Inspected the exact French homepage in the in-app browser, dismissed the country suggestion and cookie overlay, and captured:

- `references/diptyque-homepage-2026-09-11.jpg`: 1096 × 1018 viewport showing centered identity, separate horizontal navigation, atmospheric full-width campaign media, small rectangular CTA, centered serif editorial heading and body below.
- `references/diptyque-products-2026-09-11.jpg`: 1096 × 1018 viewport showing a centered serif heading, category tabs, open product gallery, serif titles, quiet descriptions/prices and restrained shopping controls.

The source header has tight spacing in the scrolled capture; do not reproduce overlapping utility/navigation text. ALMA proposals use readable spacing. Diptyque's labels, candles, oval bottles, artwork, slogans, claims and services do not transfer. Source campaign imagery is reference only.

## Latest displayed option mapping

Three independent built-in Image Generation results appeared in this exact order. Current option numbers refer to this set, not Snif or the original designs.

| Option | Image | Exact prompt | Visible opening sequence |
| --- | --- | --- | --- |
| 1 | `previews/diptyque-direction-1.png` | `previews/diptyque-direction-1-prompt.txt` | Campaign hero → Editorial ritual intro → ALMA favourites |
| 2 | `previews/diptyque-direction-2.png` | `previews/diptyque-direction-2-prompt.txt` | Campaign hero → Scent intro → Category gallery → Brief layering line |
| 3 | `previews/diptyque-direction-3.png` | `previews/diptyque-direction-3-prompt.txt` | Ritual campaign hero → Editorial intro → Layering feature |

All images are 1024 × 1536 raster mockups; prompts requested a 1440 × 2160 composition. Header arrangement is announcement → icon/utility row → category navigation. These proposed opening sequences do not change the actual Dawn template. Reconcile the full twelve-area homepage plan after selection; later content and other pages remain in scope.

Options 1 and 2 received both actual Diptyque screenshots, the new icon and original spray/solid photos. Option 3 received the homepage screenshot, new icon and original spray/solid/lotion photos. Actual product references remain under `references/`, with URLs in `references/sources.json`.

## Review and production limitations

Viewed the supplied icon, actual reference screenshots and all three generated images. All three show the new monogram in a centered header, separate navigation, rectangular hero CTA and restrained editorial typography. Layouts/copy/campaign photography remain proposals, not rendered Shopify pages. Generated icon details and product labels may drift: notably option 1 adds the monogram to the solid-jar label, which is not a requested packaging change and must not be implemented. Other generated labels/text also need replacement with exact source product media. Layout selection never approves invented packaging.

Prices in option 1 come from the September 11 catalog snapshot; use live localized Shopify prices in production. No mobile, functional, cart, accessibility or Shopify publication QA has been performed for these designs. No theme files, actual order arrays, product records, customer/order data or live Shopify settings changed. Next: select/refine a current image, record exact UI approval, then implement within Dawn with the new source logo.
