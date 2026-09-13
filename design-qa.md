# Design QA — ALMA footer rebuild

- Source visual truth: live `https://diptyqueparis.com/fr-fr` footer captured on 2026-09-13.
- Source screenshots: `C:\Users\TYARA12\AppData\Local\Temp\diptyque-footer-reference-01.png`, `C:\Users\TYARA12\AppData\Local\Temp\diptyque-footer-reference-02.png`, and `C:\Users\TYARA12\AppData\Local\Temp\diptyque-footer-mobile-reference.png`.
- Browser-rendered implementation: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-desktop-final-top.png`, `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-desktop-final-bottom.png`, and `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-mobile-final.png`.
- Combined comparison evidence: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-comparison.png`.
- Desktop viewport: 1280 × 720 CSS px at density 1; screenshots exclude the 15 px Windows scrollbar from the 1265 px content area.
- Mobile viewport: 390 × 844 CSS px at density 1; the rendered document client width is 375 px.
- State: homepage at the footer; reference country prompt dismissed; desktop groups expanded; mobile groups initially collapsed and Shop tested open.

## Audit findings before implementation

- P1 structural gap: ALMA had no footer navigation between the newsletter/help panels and copyright, while the reference uses a substantial four-column destination layer.
- P2 hierarchy gap: the white copyright-only ending lacked the clear visual closure of the reference's black market/social utility bar.
- P2 responsive gap: no compact mobile navigation pattern existed because no footer link groups were present.
- Confirmed strength: the existing split newsletter/help panels already matched the reference's broad composition and preserved a real Shopify customer form.

## Full-view comparison evidence

The combined 1280 × 360 evidence places the live reference and revised implementation together. Both now use a split newsletter/help area, a spacious four-column navigation layer and a dark full-width closing bar. ALMA intentionally uses its own English navigation, UAE context, products and verified destinations. The reference has more service links and configured social accounts; these were not fabricated for ALMA.

## Focused region comparison evidence

The desktop navigation and closing bar are readable in the combined comparison. The mobile screenshot and DOM measurements separately verify the reference's accordion behavior: four ALMA groups initialize closed and the Shop group expands from 64.9 px to 240.9 px to expose four links. Another focused crop was not needed.

## Required fidelity surfaces

- Fonts and typography: regular Georgia headings and group titles preserve the reference's restrained serif hierarchy; body links remain compact, readable and consistently spaced.
- Spacing and layout rhythm: 460 px desktop newsletter/help panels lead into a 328 px four-column navigation area and a 116 px dark closing bar. Mobile panels stack at 360 px each, followed by 64.9 px collapsed rows.
- Colors and visual tokens: white newsletter, soft-gray help panel, one-pixel separators and near-black utility bar match the reference's hierarchy using existing ALMA tokens.
- Image quality and asset fidelity: the footer introduces no new imagery or fake assets. Existing theme-provided caret and social/payment assets remain authoritative.
- Copy and content: all text is English and ALMA-specific. No unverified shipping, returns, phone, opening hours, samples or service promises were copied from the reference.

## Accessibility and interaction evidence

- The new navigation wrapper exposes `role="navigation"` and `aria-label="Footer navigation"` inside the existing contentinfo landmark.
- Mobile groups use native `details`/`summary`, preserving keyboard and assistive-technology disclosure semantics; no-JavaScript fallback leaves all groups expanded.
- The Shopify newsletter retains its visible label, required email input, submission button and success/error output.
- The Shop disclosure was activated in the in-app browser and exposed All products, Spray Perfumes, Solid Perfumes and Lotions.
- Screenshots cannot prove full keyboard traversal, screen-reader announcements or policy-page content; those remain live-theme verification items.

## Comparison history

1. Before: split newsletter/help panels followed directly by an 81 px white copyright strip. P1/P2 findings remained.
2. Pass 1: added four desktop columns, native mobile disclosures and dark utility bar. Browser refresh initially showed cached Liquid; the local preview server was restarted.
3. Pass 2: normalized the Theme Editor contact URI so both visible Contact us links resolve to `/pages/contact`. Desktop and mobile retests have no actionable P0/P1/P2 findings.

## Responsive verification

- 1280 × 720: 15 navigation links, four expanded groups, one customer form, `/pages/contact` on both contact links, zero broken footer images and document `scrollWidth` equal to `clientWidth` (1265 px).
- 390 × 844: four groups initialize closed; Shop opens and exposes four links; the newsletter form remains present; zero broken footer images; document `scrollWidth` equals `clientWidth` (375 px); no framework error overlay.
- Desktop keeps localization, payment and optional social hooks. With no social profile URLs configured, no social icons are invented.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; `alma-footer.js` syntax, footer-group JSON and Git whitespace checks pass.

## Findings

- No actionable P0, P1 or P2 differences remain within the requested footer scope and ALMA's verified content constraints.
- P3: the live store can populate real social profile URLs later; the dark utility bar will render Dawn's native icons automatically.

## Implementation checklist

- [x] Preserve native Shopify newsletter behavior.
- [x] Add useful ALMA footer destinations.
- [x] Match the desktop four-column hierarchy.
- [x] Match the mobile accordion behavior.
- [x] Add the dark closing utility bar.
- [x] Avoid unverified service claims.
- [x] Verify responsive containment and links.

final result: passed
