# Frontend QA — restored CSS logo transition

**Target flow**

The flow under test is: homepage at scroll 0 → scroll through the opening header range → the supplied static wordmark scales and crossfades into the supplied static icon → mobile/tablet remain horizontally centered while desktop moves left → stopping scroll freezes the exact intermediate state.

**Environment and evidence**

- URL: `http://127.0.0.1:9293/` using the local Liquid fixture.
- Browser: Codex in-app Browser; no fallback browser was used.
- Desktop viewport: 1265 × 720 CSS px, density 1.
- Mobile viewport: 390 × 844 CSS px with a 375 px layout width, density 1.
- Start, midpoint and endpoint captures were rendered directly in the in-app browser; temporary QA captures are not committed.

**Findings and iteration history**

1. P1 — the supplied WebM was still present in markup, JavaScript, CSS and theme assets after the user requested the previous transition. Removed the video and restored the static-image scroll crossfade.
2. P2 — reverting blindly to the historical version would also have restored mobile center-to-left travel. The latest responsive decision is preserved: mobile/tablet interpolate between centered start and centered scaled endpoints; only desktop travels left.
3. Final result — no actionable P0/P1/P2 issues remain.

**Interaction proof**

- Desktop scroll 0/66/132 maps to progress 0/.5/1. The visible header contracts from 132.5 px to 71.5 px, and the logo stage moves from center to left x=50.
- Mobile scroll 0/48/96 maps to progress 0/.5/1 while the 78 px row stays fixed. The logo stage center remains x=187.5 throughout.
- The midpoint combines the partially transparent wordmark and icon. After 700 ms without further input, scroll position, progress, geometry and both opacities remain unchanged.
- No `<video>` or WebM request exists in the rendered homepage; the deleted `assets/alma-logo-morph.webm` is no longer in the theme.

**Required checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | URL and title are the ALMA local homepage. |
| Meaningful content | Pass | DOM contains “Discover the collection” and “A ritual, entirely yours.” |
| Framework overlay | Pass | No framework error overlay appears in the DOM or captures. |
| Console health | Pass | Browser error/warning log is empty. |
| Screenshot evidence | Pass | Start, midpoint and endpoint checked on desktop and mobile. |
| Interaction proof | Pass | Real wheel checkpoints and frozen-state recheck. |
| Video removal | Pass | Zero rendered video elements, zero WebM references and the theme asset is deleted. |
| Responsive containment | Pass | Desktop and mobile document overflow delta is 0. |

**Visual surfaces**

- Typography: logo lettering remains in the exact supplied static raster artwork; category typography and ordering are unchanged.
- Spacing/layout: desktop connects the 132.5 px opening geometry to the 72 px compact geometry; mobile retains the 78 px row and centered mark.
- Colors: white header, black utilities and original logo pixels remain unchanged.
- Image quality: both endpoints use the exact supplied wordmark and icon assets; neither was redrawn or replaced.
- Copy/content: all six English category tabs and existing utilities remain unchanged.

**Static checks**

- Theme Check: 0 errors and the same 9 inherited Dawn warnings.
- Header JavaScript syntax, preview JavaScript syntax, `sections/header-group.json`, `templates/index.json`, video-reference search and Git whitespace checks pass.

**Remaining risk**

- The local Liquid fixture cannot validate Shopify Theme Editor events, live search/cart forms, checkout, third-party apps or customer-facing publication.
- GitHub branch synchronization can be verified after push; Shopify theme synchronization/publication remains a separate external state.

final result: passed
