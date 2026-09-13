# Design QA — mobile ALMA wardrobe grid

- Source visual truth: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-263c0385-48b0-4857-b132-4e7bca0c0d37.png`
- Browser-rendered implementation: `C:\Users\TYARA12\AppData\Local\Temp\alma-wardrobe-mobile-353-with-header.png`
- Combined comparison evidence: `C:\Users\TYARA12\AppData\Local\Temp\alma-wardrobe-mobile-comparison.png`
- Viewport: 353 × 603 CSS px at device scale factor 1.
- Pixels and normalization: source 353 × 603 px; implementation 353 × 603 px. The focused comparison removes the implementation's 78 px sticky site header, which is outside the supplied section reference, and compares equal-width 353 × 525 px regions side by side.
- State: homepage scrolled to the start of “Explore the ALMA wardrobe”; mobile breakpoint below 750 px.

## Full-view comparison evidence

The supplied reference and browser capture were combined into one 706 × 525 px comparison image. Both show a centered two-line serif title, two equal image columns, a compact gap between the columns, square image fields, centered labels with one-pixel underlines and generous repeated row spacing. ALMA's approved English category names and packshots intentionally replace Diptyque's French copy and proprietary imagery.

## Focused region comparison evidence

The first two rows are large enough in the combined comparison to evaluate the requested component without another crop. At 353 px, ALMA renders two 145 px cards separated by 8 px; the grid begins 121.7 px below the section edge and repeats with a 55 px row gap. The labels use 15.5 px Georgia with 1.15 line height and wrap only where the longer ALMA category names require it. All six 1000 × 1000 WebP packshots load without crop or distortion.

## Required fidelity surfaces

- Fonts and typography: regular Georgia serif matches the reference hierarchy; heading and labels are centered, with controlled wrapping and thin label underlines.
- Spacing and layout rhythm: two equal columns, 8 px column gap, 55 px row gap, square media and a compact section opening match the reference's mobile composition.
- Colors and visual tokens: white section canvas, warm off-white image fields and black typography remain consistent with both the reference and the existing ALMA system.
- Image quality and asset fidelity: approved ALMA 1000 px WebP packshots are contained and uncropped; no placeholder, CSS-drawn or substitute imagery is used.
- Copy and content: English ALMA category names and existing destinations remain authoritative; the mobile supporting sentence is hidden to match the reference's title-to-grid rhythm.

## Findings

- No actionable P0, P1 or P2 differences remain for the requested mobile section.
- Accepted product constraint: longer ALMA labels wrap more often than the shorter French reference labels.
- Accepted environment difference: the Windows preview scrollbar reduces the 353 px viewport's document client width to 338 px; the grid remains fully contained with no horizontal page overflow.

## Comparison history

1. Initial implementation rendered a one-card horizontal mobile rail with visible arrows/progress, 4:5 tiles and the supporting sentence. This was a P1 structural mismatch.
2. Rebuilt the mobile section as a two-column grid, removed mobile carousel chrome, hid the sentence, changed tiles to square and added underlined labels. The first pass used 150 px cards.
3. Increased horizontal padding from 15 px to 20 px, yielding 145 px cards and closer reference margins. The revised comparison has no actionable P0/P1/P2 findings.

## Interaction and responsive checks

- 353 × 603: six cards in a two-column grid, carousel footer hidden, no broken images, document `scrollWidth` equals `clientWidth` (338 px).
- 390 × 844: two 163.5 px columns, carousel footer hidden, no broken images or horizontal overflow, meaningful page content and no framework error overlay.
- 1280 × 720: desktop behavior preserved with four 288.25 px visible cards, horizontal overflow, progress/footer visible and next control enabled.
- The first category link was activated in the local preview harness and its real `/collections/alma-perfumes` destination remains present; the harness serves its homepage fixture for collection paths and is not a Shopify route emulator.

## Implementation checklist

- [x] Match the mobile two-column category layout.
- [x] Preserve approved ALMA imagery and English destinations.
- [x] Remove mobile-only carousel chrome.
- [x] Preserve desktop carousel behavior.
- [x] Verify responsive containment and loaded imagery.

final result: passed
