# Frontend QA — catalog-free Vercel preview

**Target flow**

The flow under test is: static visual homepage loads → no saved catalog products, prices or product-card links render → the campaign, editorial layout, navigation and footer remain usable on desktop and mobile.

**Environment and evidence**

- Build: `npm run preview:build`, serving the ignored `dist/` output locally.
- Browser: regular Playwright fallback because the Codex Browser plugin was not available in this session.
- Desktop viewport: 1280 × 720 CSS px.
- Mobile viewport: 390 × 844 CSS px.
- The deployed Vercel URL is not fetched after deployment, as required by the deployment workflow.

**Findings and resolution**

1. P1 — the Vercel build called `render(false)`, which injected `research/storefront/products.json` into the generated homepage. Changed the static build to the existing empty-catalog rendering path.
2. The local development server keeps its explicit sample/empty modes; Shopify Liquid remains unchanged and continues to use live store objects.
3. The Git origin was moved to `MohamedMahran02/almafragrances` after confirming its `main` was identical to local `main`.

**Required checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | Local static output reports title `ALMA by Reem Fragrances – Page`. |
| Meaningful content | Pass | Campaign, ritual, layering, Dukhoon, wardrobe, experience and footer remain. |
| Framework overlay | Pass | No error overlay at either viewport. |
| Console health | Pass | Zero browser errors; two known fixture-only empty font-preload warnings remain. |
| Catalog isolation | Pass | Zero `.alma-product` cards, custom product rails, fixture product names and AED prices in the static output. The one `/products/` URL is the footer's configured Gift Cards navigation destination, not rendered catalog data. |
| Responsive containment | Pass | `scrollWidth` equals viewport width at 1280 × 720 and 390 × 844. |
| Mobile interaction | Pass | Menu opens and exposes all six collection links. |

**Static checks**

- Static build completes and reports that catalog fixtures are excluded.
- JavaScript syntax, Theme Check, JSON parsing and Git whitespace pass as recorded in the final handoff.
- The populated local development fixture still renders its product rails, confirming that fixture development and live Shopify behavior were not disabled globally.

**Remaining risk**

- Vercel is deliberately a catalog-free visual preview, not a Shopify or commerce emulator.
- Live products, collections, routes, forms, cart, checkout and Theme Editor behavior require an active Shopify store.

final result: passed
