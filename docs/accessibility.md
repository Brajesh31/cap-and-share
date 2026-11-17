# ♿ Accessibility Review Guide

Accessibility is part of feature completion, not a final cosmetic pass. This is a manual review guide for the current React interface and future changes.

## Interaction requirements

- Every form control has a persistent, programmatically associated label.
- Required fields and validation errors are communicated in text, not color alone.
- All actions work with keyboard only.
- Focus is visible and follows a logical order.
- Dialogs, menus, and expanded regions expose state and support keyboard dismissal.
- Links describe their destination; buttons describe the action they perform.
- Do not use clickable non-semantic containers when a button or link is appropriate.

## Content and visual requirements

- Provide meaningful alternative text for informative images.
- Decorative images use empty alternative text or are hidden from assistive technology.
- Heading levels reflect the page structure.
- Text remains usable at browser zoom and narrow viewport widths.
- Color contrast is checked for text, controls, focus indicators, and disabled states.
- Avoid conveying availability, food condition, or status using color alone.
- Respect reduced-motion preferences for nonessential animation.

## Food-sharing specific considerations

- Food titles, portion counts, location descriptions, and expiry information must be readable without relying on icons.
- Allergen uncertainty must be communicated in plain language.
- A claim confirmation must be announced to assistive technology when implemented.
- Pickup instructions must not rely solely on a map or visual marker.
- Do not expose private location details in accessible names or announcements.

## Manual test sequence

1. Navigate every route using Tab, Shift+Tab, Enter, and Space.
2. Test forms with empty, invalid, and valid values.
3. Inspect focus after route changes and error messages.
4. Review pages at 200% zoom and a narrow mobile viewport.
5. Use a screen reader to confirm labels, headings, landmarks, and status updates.
6. Check images and contrast in both default and high-contrast settings where available.
7. Confirm no interaction requires dragging, hovering, or precise pointer movement alone.

## Checklist for pull requests

- [ ] Semantic HTML is used.
- [ ] Labels and error messages are associated.
- [ ] Keyboard operation is complete.
- [ ] Focus is visible and not obscured.
- [ ] Images have appropriate alternatives.
- [ ] Contrast and zoom behavior are acceptable.
- [ ] Status changes are announced.
- [ ] Reduced motion is respected.
- [ ] Accessibility impact is described in the pull request.

No automated accessibility audit is currently configured. Manual review is not a substitute for testing with people who use assistive technology.
