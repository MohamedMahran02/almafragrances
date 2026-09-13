# Design QA — expanding homepage wordmark header

**Source visual truth**

- Header reference: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-1db214dc-9d65-47b0-a458-3ab735b2e63a.png` (1351 × 215 px).
- Supplied ALMA wordmark: `F:\Alma Fragrances Branding\ChatGPT Image Sep 11, 2026, 07_29_34 PM (2).png` (1055 × 1491 px RGBA). Its SHA-256 matches the copied `assets/alma-logo-wordmark.png`.
- Requested states: wordmark centered above category tabs on the first desktop screen; after scrolling, no wordmark and a compact row with the icon left and tabs centered.

**Implementation evidence**

- Expanded desktop: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-expanded-desktop.jpg` (1265 × 720 px), CSS viewport 1265 × 720, density 1.
- Scrolled desktop: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-compact-desktop.jpg` (1265 × 720 px), same viewport and density, page scroll 299 px.
- Combined reference/expanded/scrolled comparison: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-reference-comparison.jpg` (3819 × 220 px). Each panel is normalized to 1265 × 220 px.

**Findings and comparison history**

1. Initial implementation — P1: the homepage used only the icon in a single desktop row, so it lacked the reference's centered brand-above-navigation hierarchy.
2. Revised implementation — passed: the first screen now has the supplied wordmark above navigation and transitions to the exact requested icon-left compact row after scrolling.
3. Intentional difference: search remains in the right utility group because the user previously explicitly moved it to the right. The removed announcement strip remains removed.

**Required fidelity surfaces**

- Fonts/typography: navigation retains the established storefront body font and restrained size; logo lettering is raster artwork from the supplied wordmark rather than recreated text.
- Spacing/layout: expanded header is 132.5 px; the wordmark viewport is 140 × 71 px and navigation sits at y=87–120.5 px. Scrolled header is 72 px with icon, tabs and utilities in one row.
- Colors/tokens: white surface, black navigation/utilities and the supplied logo's original pixels are preserved.
- Image quality: both header identities use exact source assets. The wordmark file is copied byte-for-byte; CSS crops its transparent outer canvas without resampling or editing the artwork.
- Copy/content: all six English category tabs remain in their established order. No reference-brand text was copied.

**Responsive and interaction checks**

- Desktop 1265 × 720 initial: wordmark loaded and visible; icon hidden; navigation below; document `scrollWidth` equals `clientWidth`.
- Desktop after scroll: `.scrolled-past-header` present; wordmark hidden; icon visible at left; navigation centered; utilities right; document remains contained.
- Mobile 375 × 844: wordmark hidden, icon visible and the existing 78 px mobile header remains unchanged; no horizontal overflow.
- Page identity and meaningful-content checks pass, no framework overlay is present, and browser error/warning logs are empty.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; header-group JSON, exact source/asset hash and Git whitespace validation pass.

**Implementation checklist**

- [x] Add the exact supplied wordmark above desktop homepage navigation.
- [x] Hide the compact icon in the expanded state.
- [x] Collapse to icon-left/tab-centered navigation after scroll.
- [x] Preserve right-side utilities and mobile behavior.
- [x] Recalculate the header height after state changes.
- [x] Verify initial, scrolled and mobile states.

final result: passed
