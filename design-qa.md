# Design QA — restored ALMA experience band

**Restoration target**

- Source of truth: repository commit `af15591`, immediately before the compact image-row change.
- Restored component: `sections/alma-service-band.liquid` and its matching rules in `assets/alma-theme.css`.
- Browser state: homepage scrolled to “The ALMA experience” at 390 × 844 and 1280 × 720 CSS viewports, density 1.

**Verification**

- The restored markup and service-band CSS match commit `af15591`: burgundy star marker, heading, description and separate underlined link for each of the three existing blocks.
- Mobile 390 × 844: the section measures 788.6 px; item heights are 196.1, 218.6 and 217.6 px; all three descriptions and links render; document `scrollWidth` equals its 375 px client width.
- Desktop 1280 × 720: the section measures 342.9 px; the three divided columns measure 400.3, 400.3 and 400.3 px; document `scrollWidth` equals its 1265 px client width.
- Browser console error logs are empty. The separately requested compact black footer remains unchanged.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; homepage JSON parsing and Git whitespace validation pass.

**Findings**

- No restoration drift was found. The compact image tiles, full-card links and service image-picker override are removed.
- The restored mobile section intentionally returns to its earlier tall stacked presentation because that is the exact state requested by the user.

**Implementation checklist**

- [x] Restore the pre-image-row Liquid.
- [x] Restore the pre-image-row desktop and mobile CSS.
- [x] Preserve service and homepage block order.
- [x] Preserve the new black footer.
- [x] Verify desktop/mobile containment and console health.

final result: passed
