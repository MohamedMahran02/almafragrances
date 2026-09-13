# Design QA — neutral one-piece footer and corrected desktop experience

**Source visual truth**

- User issue capture, separate burgundy footer strip: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-6d0f63de-bf55-43c6-9396-b232c957c5b4.png` (1351 × 101 px).
- User issue capture, retired oversized ALMA experience imagery: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-81025632-cade-424a-8662-e59311f34e58.png` (1300 × 531 px).
- Required target state: remove the first captured region, preserve its essential data in the upper footer, and restore the approved image-free three-column ALMA experience.

**Implementation evidence**

- Desktop screenshot: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-experience-corrected-desktop.jpg` (1265 × 720 px), CSS viewport 1265 × 720, density 1.
- Mobile screenshot: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-corrected-mobile.jpg` (375 × 844 px), CSS viewport 375 × 844, density 1.
- Combined desktop issue/implementation comparison: `C:\Users\TYARA12\AppData\Local\Temp\alma-footer-experience-correction-comparison.jpg` (2542 × 720 px). The two issue captures are normalized into the left 1265 px column; the implementation occupies the right 1265 px column.

**Findings and iteration history**

1. P1 — separate burgundy utility strip conflicted with the selected ivory/black/gray palette and created a second footer section. Fixed by removing `footer__content-bottom`, retaining policies in Legal, moving copyright into the brand column and moving available payment icons beside the newsletter.
2. P1 — the supplied desktop capture showed the retired service images at uncontrolled scale. Fixed by retaining image-free service markup and bounding the restored three-column grid to 1120 px; the final rendered section contains zero images.
3. Final comparison — passed. The combined view shows one neutral footer and a compact three-column text experience with no burgundy UI region or oversized image.
4. P0 live-sync regression — the public Shopify storefront served the retired image-based service markup while loading the newer CSS, producing uncontrolled full-width images. A new `alma-service-band--text`/`data-alma-service-layout="text"` section revision and defensive legacy-image rule are ready; public storefront verification is required after theme sync.

**Required fidelity surfaces**

- Fonts/typography: restrained serif experience headings and existing compact uppercase footer headings remain consistent with the established storefront.
- Spacing/layout: desktop experience measures 297.9 px with three equal 373.3 px columns; footer measures 298.8 px and no separate closing strip remains.
- Colors/tokens: footer background is `rgb(246, 246, 245)`; headings, markers, field outline and submit action use `rgb(17, 16, 15)`. Burgundy UI tokens and hard-coded burgundy controls are removed; the supplied logo pixels are unchanged.
- Image quality: the experience contains no images or third-party overlays. The exact supplied ALMA logo remains the only footer brand image.
- Copy/content: all four footer groups and 15 original links remain. Copyright and UAE/English context moved into the main footer; legal links were not duplicated.

**Responsive and interaction checks**

- Desktop 1265 × 720: three experience columns, zero experience images, four footer groups, newsletter and copyright; no `footer__content-bottom`; document `scrollWidth` equals `clientWidth` at 1265 px.
- Mobile 375 × 844: no lower strip; four groups initialize closed; Explore ALMA opens through its visible summary and exposes all four links; document `scrollWidth` equals `clientWidth` at 375 px.
- Restarted local sync-safeguard check: `data-alma-service-layout="text"` is present; the section contains zero images, three descriptions and three links; document `scrollWidth` equals `clientWidth` at 1265 px.
- Local preview reports no captured runtime errors. The fixture has no enabled payment types, so payment-icon rendering cannot be visually exercised locally.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; footer JavaScript syntax, footer-group/homepage JSON and Git whitespace validation pass. Public verification remains blocked because the unauthenticated storefront redirects to `/password` and the signed-in external Chrome session is not connected for browser control.
- PayPal removal: the footer payment renderer and setting are removed; the local footer contains no `.alma-footer__payment`, `.footer__payment`, `.list-payment` or PayPal badge. Newsletter and navigation remain present.

**Implementation checklist**

- [x] Remove the separate burgundy footer section.
- [x] Keep essential footer data in the neutral upper section.
- [x] Replace burgundy UI treatments with the site black/ivory/gray palette.
- [x] Restore and bound the image-free desktop ALMA experience.
- [x] Verify desktop/mobile containment and mobile disclosures.

final result: blocked
