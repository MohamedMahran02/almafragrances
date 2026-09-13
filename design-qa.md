# Frontend QA — scroll-scrubbed homepage logo morph

**Target flow**

The flow under test is: homepage at scroll 0 → scroll through the opening header range → the centred ALMA wordmark moves and scales toward the left while crossfading into the compact icon → stopping scroll freezes the exact intermediate state.

**Environment and evidence**

- URL: `http://127.0.0.1:9293/` using the local Liquid fixture.
- Browser: Codex in-app Browser; no fallback browser was used.
- Desktop viewport: 1265 × 720 CSS px, density 1.
- Mobile viewport: 390 × 844 CSS px with a 375 px layout width, density 1.
- Desktop captures: `C:\Users\TYARA12\AppData\Local\Temp\alma-logo-scroll-start-desktop.jpg`, `alma-logo-scroll-mid-desktop.jpg`, and `alma-logo-scroll-end-desktop.jpg` (each 1250 × 711 px browser capture from the stated CSS viewport).
- Mobile captures: `C:\Users\TYARA12\AppData\Local\Temp\alma-logo-scroll-start-mobile.jpg`, `alma-logo-scroll-mid-mobile.jpg`, and `alma-logo-scroll-end-mobile.jpg` (each 375 × 812 px browser capture from the stated CSS viewport).

**Findings and iteration history**

1. P1 — the existing implementation changed between two complete header states after a threshold; it did not preserve intermediate positions when scrolling stopped. Fixed by deriving a normalized progress value directly from document scroll position and writing the interpolated geometry to CSS custom properties.
2. P1 — the first contracting-header implementation changed document layout height, causing browser scroll anchoring to feed back into `scrollY` and move progress after the requested position. Fixed by preserving a constant transparent sticky-wrapper height while only the visible inner header contracts.
3. P2 — the mobile icon endpoint inherited Dawn's absolute grid-area containing block and landed at x=94 instead of the intended x=47. Fixed by removing the grid area from the absolutely positioned icon heading; the wordmark and icon now share the exact x=47 endpoint.
4. Final result — no actionable P0/P1/P2 issues remain.

**Interaction proof**

- Desktop scroll positions 0/33/66/99/132 produced progress 0.0000/0.2500/0.5000/0.7500/1.0000.
- Corresponding desktop visible header heights were 132.5/123/102/81.1/71.5 px; final browser evidence records wordmark x positions 562.5/302.5/50 px at progress 0/.5/1.
- Mobile scroll positions 0/24/48/72/96 produced the same five progress values while the header remained 78 px high. The wordmark moved from x=135 to x=47 and the compact icon finished at x=47.
- A real 48 px wheel scroll reached progress 0.5000. After 700 ms with no further input, progress, scroll position, logo geometry and both opacities were unchanged, proving there is no time-driven continuation.
- At the completed state, the wordmark has opacity 0 and the icon opacity 1. Pointer and keyboard access are removed from whichever logo link is inactive during the crossfade.

**Required checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | URL and title are the ALMA local homepage. |
| Meaningful content | Pass | DOM contains “Discover the collection” and “A ritual, entirely yours.” |
| Framework overlay | Pass | No framework error overlay appears in the DOM or captures. |
| Console health | Pass | Browser error/warning log is empty. |
| Screenshot evidence | Pass | Start, midpoint and endpoint captured on desktop and mobile. |
| Interaction proof | Pass | Programmatic checkpoints plus a real wheel scroll and frozen-state recheck. |
| Responsive containment | Pass | Desktop and mobile document overflow delta is 0. |

**Visual surfaces**

- Typography: logo lettering remains in the exact supplied raster artwork; category typography and ordering are unchanged.
- Spacing/layout: the morph connects the approved 132.5 px desktop opening geometry to the approved 72 px compact geometry; mobile retains the approved 78 px control row.
- Colors: white header, black utilities and original logo pixels remain unchanged.
- Image quality: both endpoints use the exact supplied wordmark and icon assets; neither was redrawn, resampled or replaced.
- Copy/content: all six English category tabs and existing utilities remain unchanged.

**Static checks**

- Theme Check: 0 errors and the same 9 inherited Dawn warnings.
- Header JavaScript syntax, `sections/header-group.json`, `templates/index.json`, and Git whitespace checks pass.

**Remaining risk**

- The local Liquid fixture cannot validate Shopify Theme Editor events, live search/cart forms, checkout, third-party apps or customer-facing publication.
- GitHub branch synchronization can be verified after push; Shopify theme synchronization/publication remains a separate external state.

final result: passed
