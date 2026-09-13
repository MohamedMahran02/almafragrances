# Frontend QA — supplied WebM homepage logo morph

**Target flow**

The flow under test is: mobile homepage at scroll 0 → scroll through the opening header range → the supplied ALMA WebM morphs and scales at the fixed horizontal center → desktop repeats the morph while moving it toward the left → stopping scroll freezes the exact video frame.

**Environment and evidence**

- URL: `http://127.0.0.1:9293/` using the local Liquid fixture.
- Browser: Codex in-app Browser; no fallback browser was used.
- Desktop viewport: 1265 × 720 CSS px, density 1.
- Mobile viewport: 390 × 844 CSS px with a 375 px layout width, density 1.
- Start, midpoint and endpoint captures were rendered directly in the in-app browser on both viewports; temporary QA captures are not committed.

**Findings and iteration history**

1. P1 — the CSS crossfade did not use the newly supplied true morph. Fixed by adding the exact 313,458-byte transparent WebM and seeking its 2.2-second timeline from the existing normalized scroll progress.
2. P1 — the local fixture originally served video without byte ranges, leaving its seekable range at zero and its frame fixed at the opening. Fixed the fixture's asset response with `video/webm`, byte-range support and streamed responses; the video now reports a 0–2.2 second seekable range.
3. P2 — the completed video icon was clipped by the wordmark crop window and sat too high. Once video data is ready, the crop opens and the transformed stage is vertically centred from its scaled height. The compact icon is now fully visible on desktop and mobile.
4. P1 — mobile/tablet inherited the desktop center-to-left travel. Fixed by calculating both mobile endpoints around the viewport center after scaling; the true morph remains scroll-scrubbed, but only desktop widths move horizontally.
5. Final result — no actionable P0/P1/P2 issues remain.

**Interaction proof**

- Desktop scroll 0/66/132 maps to video time 0/1.10/2.20 seconds and progress 0/.5/1. The visible header is 132.5/102/71.5 px high; the moving logo stage finishes at x=50.
- Mobile scroll 0/48/96 maps to the same three video frames while the header remains 78 px high. The stage center stays at x=187.5 throughout and finishes with the complete icon centered.
- Tablet scroll 0/48/96 keeps the stage center at x=376.5 in the 753 px layout width while mapping to video time 0/1.10/2.20 seconds. The pre-existing off-canvas product rails still determine tablet `scrollWidth`; root overflow clipping is unchanged.
- Desktop remains intentionally different: the stage begins centered at x=625 and completes at left x=50 after 132 px of scroll.
- At the 66 px desktop midpoint, the paused video held at 1.10 seconds. After 700 ms without further input, scroll, progress, current time and paused state were unchanged.
- The supplied video stays paused at all checkpoints; there is no autoplay, timer or CSS transition driving its frames. Static supplied wordmark/icon assets remain as a fallback until usable video data loads or when WebM is unsupported.

**Required checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | URL and title are the ALMA local homepage. |
| Meaningful content | Pass | DOM contains “Discover the collection” and “A ritual, entirely yours.” |
| Framework overlay | Pass | No framework error overlay appears in the DOM or captures. |
| Console health | Pass | Browser error/warning log is empty. |
| Screenshot evidence | Pass | Start, midpoint and endpoint captured on desktop and mobile. |
| Interaction proof | Pass | Real wheel checkpoints set the paused video to 0/1.10/2.20 seconds; frozen-state recheck stayed at 1.10 seconds. |
| Responsive containment | Pass | Desktop and mobile document overflow delta is 0. |

**Visual surfaces**

- Typography: logo lettering remains in the exact supplied raster artwork; category typography and ordering are unchanged.
- Spacing/layout: the morph connects the approved 132.5 px desktop opening geometry to the approved 72 px compact geometry; mobile retains the approved 78 px control row.
- Colors: white header, black utilities and the supplied transparent wine-colored morph remain unchanged.
- Image quality: the WebM is copied byte-for-byte from the supplied file (SHA-256 `A916B893518EA0664C2F446C93C61C673E19977460863065C9567D9C54C35B8B`); its native size is 1080×1080 and its duration is 2.2 seconds.
- Copy/content: all six English category tabs and existing utilities remain unchanged.

**Static checks**

- Theme Check: 0 errors and the same 9 inherited Dawn warnings.
- Header JavaScript syntax, preview JavaScript syntax, WebM byte-range response, `sections/header-group.json`, `templates/index.json`, and Git whitespace checks pass.

**Remaining risk**

- The local Liquid fixture cannot validate Shopify Theme Editor events, live search/cart forms, checkout, third-party apps or customer-facing publication.
- GitHub branch synchronization can be verified after push; Shopify theme synchronization/publication remains a separate external state.

final result: passed
