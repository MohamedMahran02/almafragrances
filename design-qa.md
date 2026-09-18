# Frontend QA — mobile swipe rails without arrows

**Target flow**

The flow under test is: homepage loads → mobile product rail shows no arrow buttons → horizontal touch-style scrolling advances the products → desktop still shows and operates its previous/next controls.

**Environment and evidence**

- Source: Shopify Dawn theme rendered through the local Liquid fixture with catalog data.
- Browser path: Codex Browser plugin with separate compact and desktop tabs.
- Mobile viewport: 333 × 600 CSS px.
- Desktop viewport: 1280 × 720 CSS px.

**Required checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | Local fixture reports title `ALMA by Reem Fragrances – Page` at `127.0.0.1:9293`. |
| Meaningful content | Pass | Campaign, product cards, editorial sections, wardrobe, experience and footer render. |
| Framework overlay | Pass | No error overlay at either viewport. |
| Console health | Pass | Zero browser warnings or errors in both tabs. |
| Mobile controls | Pass | All four product-control wrappers compute to `display: none` at 333 px. |
| Mobile swipe | Pass | A Browser-plugin horizontal gesture moved the visible all-fragrances rail from `scrollLeft: 0` to `288`; it retains `overflow-x: auto` and `scroll-snap-type: x mandatory`. |
| Desktop controls | Pass | Control wrappers compute to `display: flex` at 1280 px; activating **Next products** moved the rail from `scrollLeft: 0` to `304`. |
| Responsive containment | Pass | Page-level horizontal overflow is 0 px at both tested viewport widths. |

**Static checks**

- `npm run check:theme` passes with 0 errors and the same 9 inherited Dawn warnings; `git diff --check`, the gallery JavaScript syntax check and homepage JSON parsing pass.

**Remaining risk**

- Automated horizontal scrolling approximates a touch swipe; final feel on physical iOS and Android hardware remains a device-level check.
- Shopify branch synchronization and preview refresh are external states verified after push when available.

final result: passed
