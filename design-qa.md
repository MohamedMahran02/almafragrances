# Frontend QA — reference-proportioned ritual introduction

**Comparison target**

- Source visual truth: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-b4537cd8-2145-4e43-9c26-0c308cd03154.png` (302 × 347 px supplied Diptyque crop), supported by live measurements from `https://diptyqueparis.com/fr-fr`.
- Earlier ALMA evidence: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-2574bdbe-da7b-4fcc-833b-87e25143b1fd.png` (311 × 235 px), which documents the short, dense state rejected by the user.
- Final rendered evidence: `C:\Users\TYARA12\AppData\Local\Temp\alma-ritual-implementation-mobile.png` (302 × 347 px normalized crop) from `http://127.0.0.1:9293/`.
- Combined comparison: `C:\Users\TYARA12\AppData\Local\Temp\alma-ritual-reference-vs-implementation-2.png` (628 × 347 px; reference left, implementation right).
- Viewports: mobile 319 × 478 CSS px at device scale 1, with the 304 px content width normalized to the supplied 302 × 347 crop; desktop 1280 × 720 CSS px with a 1265 px content width.
- State: homepage ritual introduction after the campaign, with the sticky header clear of the comparison crop.

**Findings**

- No actionable P0/P1/P2 mismatch remains. The final mobile and desktop structures reproduce the reference's responsive measures and rhythm while retaining ALMA's English copy and approved type families.
- P3: Georgia and Arial replace Diptyque's proprietary Saint Germain and Apercu Pro families. Font size, line height, wrapping, weight and hierarchy are matched; using ALMA's available theme families is an intentional brand-safe constraint.

**Required fidelity surfaces**

| Surface | Reference | Final ALMA implementation | Result |
| --- | --- | --- | --- |
| Typography | Mobile 28/34 two-line serif heading and 16/22 light body; desktop 32/38 single-line heading and 16/22 body | Same responsive sizes, line heights and wraps using Georgia/Arial | Pass |
| Layout rhythm | Mobile 358 px section, 40 × 32 px padding, 240 × 278 px inner grid, 8 px grid rhythm; desktop 272 px section, 56 × 120 px padding, 653 × 160 px inner grid | Exact measured dimensions at both viewports | Pass |
| Copy density | Six body lines on mobile and two on desktop | Six mobile lines and two desktop lines with ALMA-specific English ritual copy | Pass |
| CTA placement | 22 px inline link with 24 px top margin inside its 46 px row | Same 22 px link, 24 px margin, dotted marks and underline treatment | Pass |
| Colors/tokens | White field with black text/rule | Existing ALMA white and ink tokens | Pass |
| Image quality/assets | No raster imagery in this section; supplied dot geometry remains sharp | Existing 17 × 16 theme dot assets load at intrinsic size | Pass |

**Comparison history**

1. P1 initial state: ALMA was 235–240 px tall with a one-line heading, two-line copy and compressed gaps, while the supplied reference was 347 px tall with a two-line heading, six-line copy and much larger vertical rhythm.
2. Fix: introduced a measured inner grid, responsive section height/padding/measure, 28/34 mobile and 32/38 desktop headings, 16/22 body copy and six-line mobile copy.
3. P2 first comparison: the CTA label sat about 12 px too high because ALMA used symmetric vertical padding. Live inspection showed the reference uses a 22 px inline link with a 24 px top margin. Replacing the padding with that geometry aligned the link row.
4. P2 focused comparison: mobile body and link glyphs still sat 13–16 px above the supplied crop despite matching live box geometry. Mobile-only optical offsets aligned those visible baselines without altering desktop geometry or section height.
5. Post-fix combined comparison: heading, six-line body, link and overall section rhythm align. No actionable P0/P1/P2 difference remains.

**Browser and interaction checks**

- Mobile: 358 px section, 240 px inner measure, no page-level horizontal overflow, all CTA assets loaded.
- Desktop: 272 px section, 653 px inner measure, 160 px content group and no page-level horizontal overflow.
- The link remains keyboard-accessible and targets `#AlmaFavourites-featured_collection`.
- Page identity and meaningful content pass; no framework overlay and zero browser warnings/errors.

**Implementation checklist**

- [x] Match the responsive section frame and inner measure.
- [x] Match heading/body scale, wrapping and line height.
- [x] Match CTA row geometry and visible vertical placement.
- [x] Preserve English ALMA copy, live destination, section order and block order.
- [x] Run static theme checks and browser QA.

**Follow-up polish**

- Physical iOS/Android font rasterization remains a device-level check; it is not expected to change the measured layout.
- Shopify synchronization and the connected theme preview are external states verified after push when available.

final result: passed
