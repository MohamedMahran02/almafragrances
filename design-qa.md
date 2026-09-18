# Frontend QA — CTA, editorial and closing experience system

**Comparison target**

- Boxed control: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-59107cee-e472-43a9-8946-e64d3daa83cc.png`.
- Text control: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-34f4f645-1880-4023-807e-6411ea531659.png`.
- Full composition reference: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-b4537cd8-2145-4e43-9c26-0c308cd03154.png`.
- Rejected mobile editorial states: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-46b2f019-2eab-45f1-9efa-24a02e850f9c.png` and `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-d2dbccd2-42eb-4cbe-9226-df012fd960e0.png`.
- Footer direction supplied earlier in the project: `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-fcb8807b-2797-441b-9d80-0f46d9daaac3.png` and `C:\Users\TYARA12\AppData\Local\Temp\codex-clipboard-820c4588-d5a7-4262-905f-9d8d28905b71.png`.
- Final rendered surface: `http://127.0.0.1:9293/` at 1280 × 720 and 390 × 844 CSS-pixel viewports.

**Findings**

- No actionable P0/P1/P2 mismatch remains in the CTA system.
- The former mix of shadowed, filled, plain-underlined and mobile-only category treatments has been replaced by the two supplied reference patterns.
- The rejected mobile editorial layout's split title/price columns remain removed. Product title and price form one centered, ruled group, while the user-requested 48 px boxed editorial action is restored on mobile.
- The closing sequence is now cohesive: a numbered editorial service grid closes the white content field, followed by a deep-wine-and-ivory footer using the same content and newsletter behavior with always-visible navigation.
- “Find Your Aura” extends the approved restrained editorial system with a functional note-selection grid and live Shopify-backed recommendations instead of a disconnected app-like card.
- The final structural pass moves beyond recoloring: desktop Experience uses a dedicated 222.53 px title column beside the service grid, while the footer uses a full-width newsletter row above the brand/navigation row. Mobile explicitly reorders the closing content to newsletter, navigation, then brand signature.
- Operational controls remain intentionally distinct: icon-only header controls, carousel arrows, quantity controls, filter-removal actions, tabs and the newsletter arrow do not receive decorative dot marks.
- ALMA uses the active self-hosted Cormorant Garamond/Jost option rather than Diptyque's proprietary type. The measured hierarchy and control geometry remain brand-safe and independent of third-party font delivery.

**Required fidelity surfaces**

| Surface | Reference pattern | Final ALMA implementation | Result |
| --- | --- | --- | --- |
| Boxed CTA | 48 px white rectangle, 1 px dark border, square corners, no shadow, 17 × 16 marks with 4 px label gaps | Campaign, editorial, native commerce, account and form conversion actions use the same geometry with the logo-wine ink; campaign and editorial CTAs share the wine/white hover reversal | Pass |
| Text CTA | Transparent serif link, 1 px underline beneath the label, 17 × 16 marks on both sides | Ritual, product-card, wardrobe, service and applicable Dawn underlined actions share the same treatment with the label centered between vertically centered marks | Pass |
| Responsive behavior | Content-sized controls without clipped marks | Desktop and 390 px mobile retain complete marks, labels and borders with zero page overflow | Pass |
| Interaction hierarchy | Decorative styling only on customer actions | Tabs, arrows, icon controls and utility actions preserve their existing interaction-specific treatments | Pass |
| Asset quality | Crisp small dot ornaments | Existing `assets/alma-cta-dot.svg` is reused directly; no raster recreation or duplicated artwork | Pass |
| Mobile editorial rhythm | Rejected screens showed awkward side-by-side product/price wrapping | Centered stacked product group, restrained rule, restored 48 px boxed action and balanced 48/55 px content padding | Pass |
| ALMA Experience | Long stacked mobile list and decorative star marks | Numbered three-card editorial grid on desktop; 82 vw native-swipe rail with a visible next-card edge on mobile | Pass |
| Footer | Low-contrast soft-gray close with weak hierarchy | Logo-wine `#1D0004` brand field, white identity, concise eight-link navigation in three essential groups and outlined newsletter | Pass |
| Closing structure | Generic heading-over-cards and dense four-group footer | Desktop editorial split plus two-row footer; mobile newsletter → open three-column essential navigation → signature sequence | Pass |
| Scent finder | New interactive discovery surface within the approved Diptyque/ALMA direction | Centered editorial introduction with compact wrapping scent chips on all viewports and touch-swipe results on mobile | Pass |
| Finder data | Recommendations must follow Shopify catalog changes without spelling-sensitive repeated entry | Reusable `custom.fragrance_note_refs` metaobject selections are scored first; product title, description, tags and legacy `custom.fragrance_notes` remain compatibility fallbacks. No product IDs or result list are hard-coded | Pass |
| Editorial title placement | Keep the approved image overlays on mobile, but restore the previous PC presentation | Below 750 px, layering uses a bottom-left localized scrim and Dukhoon uses the quiet upper-left wall area. Desktop hides both overlays/gradients and restores the original titles to their clean content panels | Pass |
| Editorial mobile crop | Move the Dukhoon title slightly farther from its lid without letting the sticky header cover it | Dukhoon begins its mobile overlay 80 px inside the photograph, 8 px above the preceding placement and immediately below the 78 px sticky header; both media frames remain 500 px high and horizontally contained | Pass |
| Mobile wardrobe labels | Multiline category text must remain centered between its decorative dots | Below 750 px, each label uses equal 17 px ornament columns and a centered text column; both dots align to the vertical midpoint of one- or two-line labels | Pass |

**Measured browser results**

- Desktop boxed hero: 246.52 × 48 px, 24 px outer padding because its marks are real inline images.
- Desktop boxed editorial: 208.13 × 48 px, 45 px text inset, two loaded SVG backgrounds at 17 × 16 px and no shadow.
- Editorial link labels use an inline-flex centering layout; label and control midpoints align on both desktop and mobile, correcting the top-aligned state shown in the user's follow-up screenshot.
- Product text CTA: 158.72 × 22 px, 21 px side inset, 16/18 px Georgia and a 1 px underline.
- Every dotted text action computes both 17 × 16 px ornaments to the vertical center (`0% 50%, 100% 50%`) with centered text; the campaign's explicit inline marks retain the same symmetric geometry.
- At 1280 × 720 and 390 × 844, the opening, layering and Dukhoon boxed CTAs all compute `rgb(29, 0, 4)` backgrounds, white text and `invert(1)` dot marks on hover.
- The opening CTA renders “Find Your Aura” with `href="#AlmaScentFinder"`; activating it updates the location hash and resolves to the permanent finder anchor, whose scroll margin follows the current `--header-height` value plus 10 px.
- Wardrobe text CTA: 162.08 × 22 px on desktop; responsive labels remain complete within the two-column mobile grid.
- Mobile wardrobe labels use symmetric 17 px dot columns around a centered text column, so the complete dot-label-dot unit remains centered and multiline labels no longer leave both dots aligned to the first line.
- Both 1280 × 720 and 390 × 844 viewports report zero page-level horizontal overflow and no theme error surface.
- At 390 px, the simplified footer is 664.63 px high with three equal 106 px navigation columns and eight links. At 1280 px it is 448.52 px high with three equal 271 px navigation columns; both retain the newsletter, identity and legal essentials without overflow.
- At 1280 × 720, the finder uses a large left title column and a four-column note matrix/results region. At 390 × 844, the note matrix is three columns, the visible result card is 78 vw and centered with equal 11 vw rail padding, and the section itself remains within the viewport.
- At 1280 × 720, both media overlays and their gradients compute to `display: none`, while both content headings compute visible; the restored layering media returns to its original image-led height and Dukhoon restores its 367 px story panel. At 390 × 844, both editorial media frames are 500 px high, content headings are hidden, photo overlays are visible and the Dukhoon overlay starts exactly 80 px from the media top.

**Visual review**

- Product links visibly match the supplied dotted-underlined reference across the four-card desktop rail.
- Editorial actions visibly match the supplied white bordered reference instead of the previous filled black control.
- Wardrobe and ALMA experience actions use the same text-link grammar while retaining the established section layouts.
- Mobile wardrobe dots align with the full label block rather than the first text line, keeping Spray Perfumes, Solid Perfumes and the shorter labels optically centered.
- Layering and Dukhoon mobile stories use centered product/pricing groups and restored boxed actions; the layering steps remain a clearly separated three-column ritual row.
- Footer navigation and newsletter utility remain visually quiet and functional.
- The deep-wine footer preserves the newsletter form, market, copyright and exact logo artwork while reducing navigation from 15 links/four groups to eight essential links across Shop, Help and Legal. Navigation stays semantic and always visible in three columns on both desktop and mobile.
- Browser-computed grid areas confirm `newsletter newsletter / brand nav` on desktop; mobile flex order confirms newsletter `1`, navigation `2`, and brand `3`.
- Finder interaction checks: Vanilla + Musk yields four ranked recommendations, Oud yields two matching perfumes in the fixture, Clear selection restores the initial state, and the no-result message replaces the result rail when no product matches.
- Editorial interaction checks: both existing CTAs receive keyboard focus and preserve their original destinations. Desktop screenshots confirm the titles are restored to the content panels with unshaded imagery; mobile screenshots confirm readable overlays, intentional crops and the increased Dukhoon lid clearance.
- Editorial action checks: “Explore layering” and “Discover Dukhoon” are 48 px bordered white buttons at both 1280 × 720 and 390 × 844, with centered 24 px-inset marks, no underline and intact destinations.

**Validation checklist**

- [x] Preserve Shopify's native buttons, forms and destinations.
- [x] Preserve all existing homepage sections in relative order; insert only the requested scent finder and its explicit note block order.
- [x] Reuse the exact existing dot asset.
- [x] Verify desktop and mobile geometry visually and through computed styles.
- [x] Verify zero page overflow and no framework/theme error overlay.
- [x] Run Theme Check and repository validation before handoff.

**Follow-up polish**

- Physical iOS/Android touch and font rasterization remain device-level checks.
- Shopify synchronization and the connected theme preview are external states verified after push when available.

final result: passed
