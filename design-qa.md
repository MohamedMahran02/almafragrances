# Design QA — compact ALMA experience row

- Source visual truth: live `https://diptyqueparis.com/fr-fr` “À votre service” section captured on 2026-09-13.
- Source screenshot: `C:\Users\TYARA12\AppData\Local\Temp\diptyque-service-mobile-current.png` (390 × 844 px).
- Browser-rendered implementation: `C:\Users\TYARA12\AppData\Local\Temp\alma-service-mobile-final.png` (390 × 844 px) and `C:\Users\TYARA12\AppData\Local\Temp\alma-service-desktop-final.png` (1280 × 720 px).
- Combined comparison evidence: `C:\Users\TYARA12\AppData\Local\Temp\alma-service-mobile-comparison.png` (780 × 844 px).
- CSS viewports and density: 390 × 844 mobile and 1280 × 720 desktop at device scale factor 1. The Windows scrollbar leaves 375 px/1265 px document client widths.
- State: homepage scrolled so the service section begins immediately below ALMA's sticky header. The live reference auto-hides its header in the equivalent downward-scroll state; the comparison judges the service component itself.

## Full-view comparison evidence

The combined source/implementation image shows the same core pattern: a centred serif heading, one shallow row of framed product/service images, concise labels beneath and a clean border before the newsletter. ALMA intentionally uses three verified destinations and its own product imagery instead of Diptyque's six proprietary service illustrations and claims.

## Focused region comparison evidence

The service row occupies the top third of both 390 px captures, so its heading, framing, scale and labels are readable in the full-view board. No additional crop is needed. ALMA's 256.4 px mobile section is materially smaller than the prior 788.6 px stack and keeps all three destinations visible at once.

## Required fidelity surfaces

- Fonts and typography: regular Georgia heading and 13 px card labels reproduce the restrained reference hierarchy. Longer ALMA titles wrap to two lines without truncation.
- Spacing and layout rhythm: mobile uses three equal 109.7 px columns and 8 px gaps; desktop uses a centred 960 px row with three equal 306.7 px columns. The section transitions directly into the newsletter.
- Colors and visual tokens: white canvas, near-black one-pixel frames and warm off-white packshot fields match the reference pattern and existing ALMA palette.
- Image quality and asset fidelity: three approved 1000 × 1000 WebP packshots render at 76–96 px without cropping or broken media. The reference illustrations were not copied or approximated with CSS, glyphs or handcrafted SVG.
- Copy and content: Personal gifting, A three-step ritual and The complete wardrobe remain English, accurate and linked to existing store destinations. Unverified shipping, returns, samples and service promises are excluded.

## Findings and comparison history

1. Before — P1: mobile stacked three text-heavy cards into a 788.6 px section, consuming nearly a full viewport. Desktop measured 342.9 px and repeated descriptions/CTA lines already available elsewhere.
2. Pass 1 — P2: a reference-like horizontal mobile rail reduced the section to 242 px, but because ALMA has only three items, it left the third label visibly clipped at the viewport edge.
3. Pass 2 — passed: fitted all three verified items into one responsive row, reduced image size with `clamp()` for compact screens and removed internal overflow. No actionable P0/P1/P2 findings remain.

## Interaction and responsive checks

- Every complete card is its link; destinations resolve to `/products/alma-fragrances-gift-card`, `/collections/layering-kits` and `/collections/all`.
- 390 × 844: section 256.4 px high; three 109.7 px cards; all imagery loaded; document `scrollWidth` equals `clientWidth` (375 px).
- 1280 × 720: section 257.3 px high; three equal 306.7 px columns; all imagery loaded; document `scrollWidth` equals `clientWidth` (1265 px).
- The section keeps its labelled heading and descriptive image `alt` values. Screenshots do not establish full screen-reader or keyboard compliance; live-theme assistive-technology testing remains separate.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; homepage JSON parsing and Git whitespace validation also pass.

## Implementation checklist

- [x] Replace the tall mobile stack with one compact row.
- [x] Use real ALMA assets rather than placeholder or drawn icons.
- [x] Keep only verified ALMA destinations and claims.
- [x] Preserve section and block ordering.
- [x] Verify mobile and desktop containment.

final result: passed
