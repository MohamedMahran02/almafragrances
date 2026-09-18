# Frontend QA — unified Diptyque-referenced CTA system

**Comparison target**

- Boxed control: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-59107cee-e472-43a9-8946-e64d3daa83cc.png`.
- Text control: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-34f4f645-1880-4023-807e-6411ea531659.png`.
- Full composition reference: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-b4537cd8-2145-4e43-9c26-0c308cd03154.png`.
- Final rendered surface: `http://127.0.0.1:9293/` at 1280 × 720 and 390 × 844 CSS-pixel viewports.

**Findings**

- No actionable P0/P1/P2 mismatch remains in the CTA system.
- The former mix of shadowed, filled, plain-underlined and mobile-only category treatments has been replaced by the two supplied reference patterns.
- Operational controls remain intentionally distinct: icon-only header controls, carousel arrows, quantity controls, filter-removal actions, tabs, disclosures and the newsletter arrow do not receive decorative dot marks.
- P3: ALMA uses Georgia instead of Diptyque's proprietary serif. The measured size, line height, border, underline and dot geometry are preserved with the available brand-safe theme family.

**Required fidelity surfaces**

| Surface | Reference pattern | Final ALMA implementation | Result |
| --- | --- | --- | --- |
| Boxed CTA | 48 px white rectangle, 1 px black border, square corners, no shadow, 17 × 16 marks with 4 px label gaps | Campaign, editorial, native commerce, account and form conversion actions use the same geometry | Pass |
| Text CTA | Transparent serif link, 1 px underline beneath the label, 17 × 16 marks on both sides | Ritual, product-card, wardrobe, service and applicable Dawn underlined actions share the same treatment | Pass |
| Responsive behavior | Content-sized controls without clipped marks | Desktop and 390 px mobile retain complete marks, labels and borders with zero page overflow | Pass |
| Interaction hierarchy | Decorative styling only on customer actions | Tabs, arrows, icon controls and utility actions preserve their existing interaction-specific treatments | Pass |
| Asset quality | Crisp small dot ornaments | Existing `assets/alma-cta-dot.svg` is reused directly; no raster recreation or duplicated artwork | Pass |

**Measured browser results**

- Desktop boxed hero: 246.52 × 48 px, 24 px outer padding because its marks are real inline images.
- Desktop boxed editorial: 208.13 × 48 px, 45 px text inset, two loaded SVG backgrounds at 17 × 16 px and no shadow.
- Product text CTA: 158.72 × 22 px, 21 px side inset, 16/18 px Georgia and a 1 px underline.
- Wardrobe text CTA: 162.08 × 22 px on desktop; responsive labels remain complete within the two-column mobile grid.
- Both 1280 × 720 and 390 × 844 viewports report zero page-level horizontal overflow and no theme error surface.

**Visual review**

- Product links visibly match the supplied dotted-underlined reference across the four-card desktop rail.
- Editorial actions visibly match the supplied white bordered reference instead of the previous filled black control.
- Wardrobe and ALMA experience actions use the same text-link grammar while retaining the established section layouts.
- Footer navigation and newsletter utility remain visually quiet and functional.

**Validation checklist**

- [x] Preserve Shopify's native buttons, forms and destinations.
- [x] Preserve homepage section order and every JSON block-order array.
- [x] Reuse the exact existing dot asset.
- [x] Verify desktop and mobile geometry visually and through computed styles.
- [x] Verify zero page overflow and no framework/theme error overlay.
- [x] Run Theme Check and repository validation before handoff.

**Follow-up polish**

- Physical iOS/Android touch and font rasterization remain device-level checks.
- Shopify synchronization and the connected theme preview are external states verified after push when available.

final result: passed
