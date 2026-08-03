# Test Plan — Satori Rattan Website

**Type:** Manual QA checklist for a static marketing site (no automated test suite).
**Last updated:** 2026-07. Run the smoke tests before every deploy; run the full
list before a launch or a big change.

How to use: copy the checklist, tick each item, note anything that fails.

---

## 1. Pre-flight (developer)
- [ ] `npx tsc --noEmit` → no type errors.
- [ ] `npm run build` → succeeds, no errors/warnings that matter.
- [ ] `npm run preview` → the production build loads.
- [ ] Browser console has no red errors on any page.

## 2. Smoke test (fast — every deploy)
- [ ] Home loads; hero image + text visible.
- [ ] All nav links open the right page (Home, Collections, Bespoke, Craftsmanship, About, Contact).
- [ ] Collections shows products; a product opens the quick-view; it closes.
- [ ] Contact form and Collections catalog form both submit and show a thank-you.
- [ ] Footer links work.

## 3. Per-page checks
For **each** page (Home, Collections, Bespoke, Craftsmanship, About, Contact):
- [ ] Loads with no layout breakage.
- [ ] All images appear (no broken-image icons).
- [ ] Headings/paragraphs read correctly (no leftover placeholder text you meant to change).
- [ ] Refreshing the page (deep link) does not 404.

## 4. Responsive (test each at mobile + desktop widths)
Resize the browser narrow (~375px) and wide (~1280px):
- [ ] No horizontal scrollbar; nothing overflows.
- [ ] **Mobile:** top menu collapses to the hamburger; the drawer opens/closes; body doesn't scroll behind it.
- [ ] **Desktop:** full nav bar shows; hamburger hidden.
- [ ] Grids reflow (products, industries, cards) without squishing.

## 5. Collections — product interactions
- [ ] Clicking a product **photo** opens the quick-view modal.
- [ ] Modal shows the whole photo (wide sets not cropped).
- [ ] **Colour dots** (products with `colors`): clicking a dot swaps the photo; active dot highlighted — on the card AND in the modal.
- [ ] **Gallery** (products with `gallery`): thumbnail row appears in the modal; clicking a thumbnail swaps the main image; active thumbnail highlighted.
- [ ] Modal closes via **X**, **Escape**, and **clicking the dark backdrop**.
- [ ] After closing, the page scrolls normally again.
- [ ] "Request a Quote" in the modal goes to Contact.

## 6. Forms (do one REAL submission each — you'll get an email)
Contact "Request for Quotation" **and** Collections "Request Full Catalog":
- [ ] Required fields block submit when empty.
- [ ] Email field rejects an obviously bad email.
- [ ] Valid submit → "Sending…" → thank-you message.
- [ ] The email actually arrives in the inbox with the entered details.
- [ ] (Optional) Simulate failure (offline) → an inline error appears, no crash.

## 7. Accessibility (quick pass)
- [ ] Tab through a page with the keyboard — focus is visible and logical.
- [ ] Form fields announce their labels (each input has a label).
- [ ] Images have meaningful `alt` text.
- [ ] The modal and mobile drawer close with the **Escape** key.

## 8. Links & safety
- [ ] External links (footer social, any product links) open in a new tab.
- [ ] No link leads to an unrelated/placeholder site.

## 9. Browser matrix (spot-check)
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS) — check fonts, forms, modal
- [ ] Firefox
- [ ] Edge

## 10. Post-deploy (production)
- [ ] Live URL loads over HTTPS.
- [ ] Favicon shows in the tab (hard-refresh if stale).
- [ ] One real form submission from the live domain arrives by email.
- [ ] Deep links (e.g. `/about`) work on refresh.
