# Design QA — responsive expanding homepage wordmark header

**Source visual truth**

- Header reference: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-1db214dc-9d65-47b0-a458-3ab735b2e63a.png` (1351 × 215 px).
- Mobile before-state/reference: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-ad0a2a4c-d4ed-424f-afe7-af7c6550525a.png` (315 × 334 px).
- Supplied ALMA wordmark: `F:\Alma Fragrances Branding\ChatGPT Image Sep 11, 2026, 07_29_34 PM (2).png` (1055 × 1491 px RGBA). Its SHA-256 matches the copied `assets/alma-logo-wordmark.png`.
- Requested states: wordmark centered above category tabs on the first desktop screen and centered at a smaller scale between mobile controls; after scrolling, no wordmark and the compact icon header returns.

**Implementation evidence**

- Expanded desktop: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-expanded-desktop.jpg` (1265 × 720 px), CSS viewport 1265 × 720, density 1.
- Scrolled desktop: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-compact-desktop.jpg` (1265 × 720 px), same viewport and density, page scroll 299 px.
- Combined reference/expanded/scrolled comparison: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-reference-comparison.jpg` (3819 × 220 px). Each panel is normalized to 1265 × 220 px.
- Expanded mobile: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-expanded-mobile.jpg` (375 × 844 px), CSS viewport 390 × 844 with a 375 px layout width and density 1.
- Scrolled mobile: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-compact-mobile.jpg` (375 × 844 px), same viewport and density, page scroll 220 px.
- Combined mobile before/expanded/scrolled comparison: `C:\Users\TYARA12\AppData\Local\Temp\alma-header-mobile-comparison.jpg` (985 × 374 px); implementation panels are width-normalized to the 315 px source while retaining the full header and opening hero context.

**Findings and comparison history**

1. Initial implementation — P1: the homepage used only the icon in a single desktop row, so it lacked the reference's centered brand-above-navigation hierarchy.
2. Revised implementation — passed: the first screen now has the supplied wordmark above navigation and transitions to the exact requested icon-left compact row after scrolling.
3. Intentional difference: search remains in the right utility group because the user previously explicitly moved it to the right. The removed announcement strip remains removed.
4. Mobile iteration — P2: placing the wordmark in Dawn's center grid track aligned it within the unequal leftover space and moved it about 36 px left of the page center. Fixed by anchoring the wordmark to the header's absolute 50% center; the post-fix capture shows equal page-centred placement without overlap.

**Required fidelity surfaces**

- Fonts/typography: navigation retains the established storefront body font and restrained size; logo lettering is raster artwork from the supplied wordmark rather than recreated text.
- Spacing/layout: expanded desktop header is 132.5 px; the wordmark viewport is 140 × 71 px and navigation sits at y=87–120.5 px. Mobile retains the 78 px row with a 105 × 53 px opening wordmark; tablet uses 115 × 58 px and narrow phones use 92 × 47 px. Scrolled desktop is 72 px and mobile remains 78 px.
- Colors/tokens: white surface, black navigation/utilities and the supplied logo's original pixels are preserved.
- Image quality: both header identities use exact source assets. The wordmark file is copied byte-for-byte; CSS crops its transparent outer canvas without resampling or editing the artwork.
- Copy/content: all six English category tabs remain in their established order. No reference-brand text was copied.

**Responsive and interaction checks**

- Desktop 1265 × 720 initial: wordmark loaded and visible; icon hidden; navigation below; document `scrollWidth` equals `clientWidth`.
- Desktop after scroll: `.scrolled-past-header` present; wordmark hidden; icon visible at left; navigation centered; utilities right; document remains contained.
- Mobile 390 × 844: opening wordmark visible and page-centred at x=135–240 in the 375 px content width; icon hidden; drawer and search/cart controls visible; no overlap or horizontal overflow. At y=220, the wordmark is hidden and the compact 52 × 55 px icon is visible.
- Narrow phone 320 × 568: opening wordmark is 92 × 47 px, centred with clearance from the 44 px drawer button and 86 px utility group.
- Tablet 768 × 1024: opening wordmark is 115 × 58 px, centred with all controls visible. Existing off-canvas product rails contribute internal document `scrollWidth` at this breakpoint, but root overflow remains clipped and the header itself neither overflows nor overlaps.
- Page identity and meaningful-content checks pass, no framework overlay is present, and browser error/warning logs are empty.
- Theme Check passes with 0 errors and the same 9 inherited Dawn warnings; header-group JSON, exact source/asset hash and Git whitespace validation pass.

**Implementation checklist**

- [x] Add the exact supplied wordmark above desktop homepage navigation.
- [x] Hide the compact icon in the expanded state.
- [x] Collapse to icon-left/tab-centered navigation after scroll.
- [x] Add a smaller, page-centred opening wordmark on tablet, mobile and narrow phones.
- [x] Preserve right-side utilities and restore the icon after mobile scroll.
- [x] Recalculate the header height after state changes.
- [x] Verify initial, scrolled and mobile states.

final result: passed
