# Design QA — compact black ALMA footer

**Source and state**

- Visual truth: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-820c4588-d5a7-4262-905f-9d8d28905b71.png`, supplied by the user on 2026-09-13. The unrelated ticker above the source footer was excluded because the user previously removed ALMA's announcement strip.
- Current-before screenshot: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-fcb8807b-2797-441b-9d80-0f46d9daaac3.png`.
- Implementation: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-black-desktop-final2.png` at a 1350 × 720 CSS viewport and `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-black-mobile-final.png` at 390 × 844, both density 1.
- Combined comparison: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-black-comparison.png`. The source footer was cropped below its ticker and normalized to the implementation footer's 327 px height; the implementation was cropped from its browser-rendered full view.
- State: homepage at the footer, desktop groups open; mobile groups initialized closed and Shop was opened and closed through its visible summary control.

**Full-view comparison evidence**

The combined board places the normalized source on the left and ALMA on the right. Both are one compact black region with a brand area, two narrow navigation columns, a right-side newsletter form, a fine divider and a single low copyright/legal row. The reference footer is approximately 316 px high and ALMA is 326.5 px high, so the overall density and hierarchy closely match.

**Focused region comparison evidence**

The combined 2752 × 327 board keeps headings, links, logo treatment, newsletter field and closing row legible; an additional crop was not necessary. ALMA deliberately uses its exact supplied icon in a white tile because its dark wine artwork would disappear against black. It omits the reference brand's social icons and shipping/refund promises because ALMA has no configured social URLs or verified service claims.

**Required fidelity surfaces**

- Typography: compact uppercase body-font headings with wide tracking, small neutral links and a restrained copyright row reproduce the reference hierarchy. ALMA keeps its own wording.
- Spacing/layout: desktop main content measures 253.1 px and the utility row 72.4 px. Four top-level areas align across the width: brand, Shop, Customer care and newsletter. Mobile becomes brand → newsletter → two native disclosure rows without horizontal overflow.
- Colors/tokens: near-black `#090909`, white headings, muted white body copy, low-contrast separators and the wine-red submit block match the supplied dark treatment while retaining ALMA's accent color.
- Image quality: the exact 1055 × 1491 ALMA logo asset is used and loads correctly. No generated, CSS-drawn or substitute logo was introduced.
- Copy/content: only existing store routes and verified UAE/English context are shown. Legal destinations are retained; proprietary reference branding and unverified shipping, sale, exchange and drop claims are excluded.

**Findings and comparison history**

1. Before — P1: the prior footer was split between large white newsletter/help panels, a separate four-column white navigation area and a dark utility band, which did not match the selected all-black compact source.
2. Pass 1 — P2: the black structure matched, but eight Shop links made the footer 530.7 px tall and the submit button inherited a transparent background.
3. Pass 2 — passed: limited Shop to the four primary shopping destinations, reducing the footer to 326.5 px, reduced main/bottom padding and explicitly restored the wine submit block. No actionable P0/P1/P2 findings remain.

**Interaction and responsive checks**

- Desktop 1350 × 720: footer width equals the 1335 px document client width; `scrollWidth` equals `clientWidth`; 12 footer links are present; logo and newsletter form load; the submit button computes to `rgb(141, 0, 40)`.
- Mobile 390 × 844: footer is 679.9 px tall; both groups initialize closed; activating Shop opens it and exposes All products, Spray Perfumes, Solid Perfumes and Lotions; activating it again closes it. Footer images load, `scrollWidth` equals the 375 px client width, and browser console error logs are empty.
- Shopify's customer form, localization selectors, payment hooks and legal links remain in Liquid. The local fixture cannot submit a real newsletter signup, inspect live payment methods or prove complete assistive-technology behavior.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; footer JavaScript syntax, footer-group JSON and Git whitespace validation pass.

**Implementation checklist**

- [x] Replace the multi-surface footer with one compact black composition.
- [x] Preserve ALMA branding and verified routes.
- [x] Preserve the native Shopify newsletter form and platform hooks.
- [x] Match the desktop reference density and red submit treatment.
- [x] Keep mobile disclosures usable and contained.
- [x] Verify browser console, imagery and horizontal overflow.

final result: passed
