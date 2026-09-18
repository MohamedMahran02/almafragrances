# Frontend QA — centered mobile product snapping

**Target flow**

The flow under test is: mobile homepage product rail loads → customer swipes horizontally → the first, intermediate and final product cards settle at the rail center while arrows remain hidden; desktop arrows and card movement remain unchanged.

**Environment and evidence**

- Source: Shopify Dawn theme rendered through the local Liquid fixture with catalog data.
- Browser path: Codex Browser plugin with compact and desktop tabs.
- Mobile viewport: 333 × 600 CSS px.
- Desktop viewport: 1280 × 720 CSS px.

**Required checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | Local fixture reports title `ALMA by Reem Fragrances – Page` at `127.0.0.1:9293`. |
| Meaningful content | Pass | Campaign and live-fixture product cards render in both tabs. |
| Framework overlay | Pass | No error overlay at either viewport. |
| Console health | Pass | Zero browser warnings or errors in both tabs. |
| Mobile controls | Pass | All four product-control wrappers compute to `display: none` at 333 px. |
| First-card centering | Pass | At `scrollLeft: 0`, the first card center differs from the rail center by only `-0.008 px`. |
| Intermediate-card centering | Pass | A horizontal Browser gesture advances the rail to `scrollLeft: 288`; the second card settles within `0.039 px` of the rail center. |
| Final-card centering | Pass | A longer horizontal gesture reaches the `4033 px` maximum; the final card is the closest card and its center differs by only `-0.352 px`. |
| Desktop regression | Pass | At 1280 px, controls compute to `display: flex`, mobile padding is `0 px`, and **Next products** advances the rail by the unchanged `304 px`. |
| Responsive containment | Pass | Page-level horizontal overflow is 0 px at both tested viewport widths. |

**Static checks**

- `npm run check:theme` passes with 0 errors and the same 9 inherited Dawn warnings; `git diff --check`, the gallery JavaScript syntax check and homepage JSON parsing pass.

**Remaining risk**

- Browser-injected horizontal gestures approximate touch input; final kinetic feel on physical iOS and Android hardware remains a device-level check.
- Shopify branch synchronization and preview refresh are external states verified after push when available.

final result: passed
