# Frontend QA — Diptyque-referenced opening CTAs

**Comparison target**

- Source visual truth: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-34f4f645-1880-4023-807e-6411ea531659.png` (228 × 47 px dotted text-link crop) and `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-59107cee-e472-43a9-8946-e64d3daa83cc.png` (251 × 55 px bordered-button crop), supported by the live `https://diptyqueparis.com/fr-fr` controls.
- Implementation evidence: Codex Browser session screenshots of `http://127.0.0.1:9293/?qa=reference-ctas-4` at a 1280 × 720 CSS viewport (1265 × 720 visible page capture). Browser evidence is session-owned and has no filesystem path.
- State: initial campaign CTA, ritual link, and ritual-link destination after activation.
- Density normalization: source crops and implementation are browser-rendered 1× CSS-pixel captures. The user crops contain only the focused controls, so focused-region comparison is the full available source comparison; a source full-page comparison is not applicable.

**Target flow**

The flow under test is: homepage opens → the campaign shows the dotted 48 px bordered selection CTA → the ritual shows the dotted underlined fragrance link → activating that link lands on the existing ALMA fragrance rail.

**Focused comparison**

| Surface | Reference evidence | Rendered ALMA evidence | Result |
| --- | --- | --- | --- |
| Bordered CTA | 48 px height, 1 px black border, white field, 24 px side padding, 4 px label gaps, 17 × 16 dot marks, no shadow | 48 px height, 1 px ink border, white field, 24 px side padding, 4 px gaps, exact 17 × 16 source geometry, no shadow | Pass |
| Text CTA | 22 px total height, transparent field, 4 px label gaps, 4 px underline offset, 1 px rule | 22 px total height, transparent field, 4 px gaps, 4 px underline offset, 1 px rule | Pass |
| Typography | Compact 16 px reference label scale | 16 px Georgia treatment consistent with ALMA's approved serif CTA system | Pass — intentional brand-family adaptation |
| Copy | French “Découvrir…” labels | English equivalents “Discover the selection” and “Discover all fragrances” | Pass — required by the English-only storefront decision |
| Assets | Two identical geometric dot icons per control | Four loaded `alma-cta-dot.svg` images with intrinsic 17 × 16 dimensions | Pass |

**Browser and interaction checks**

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity | Pass | Title is `ALMA by Reem Fragrances – Page` at the local fixture URL. |
| Meaningful content | Pass | Campaign, ritual and fragrance rail render with live fixture content. |
| Framework overlay | Pass | No error overlay is present. |
| Console health | Pass | Zero browser warnings or errors. |
| CTA destination | Pass | Activating “Discover all fragrances” sets `#AlmaFavourites-featured_collection`; the target heading reaches the viewport top. |
| Responsive containment | Pass | Page-level horizontal overflow is 0 px at 1280 px. |

**Comparison history**

1. Initial P2: the ALMA hero button retained a fixed 250 px minimum width and the ritual copy remained the much shorter “Explore layering,” producing visibly different control balance. Fixed by removing the minimum width and using the English reference-equivalent labels.
2. Initial P2: temporary punctuation glyphs approximated the source dots. Replaced them with a real theme asset using the exact 17 × 16 reference geometry; all four instances load at natural size.
3. Post-fix comparison: dimensions, spacing, border, underline, background and dot geometry match the source treatment. No actionable P0/P1/P2 mismatch remains.

**Static checks**

- `npm run check:theme` passes with 0 errors and the same 9 inherited Dawn warnings.
- Homepage JSON, dot SVG and Git whitespace validation pass.

**Remaining risk**

- The in-app browser exposed only its fixed 1280 × 720 viewport during this run, so a separate mobile screenshot was not available. The CTA internals use intrinsic sizing and shared CSS at all widths; only the previously verified sticky position changes below 750 px.
- Shopify branch synchronization and preview refresh remain external states verified after push when available.

final result: passed
