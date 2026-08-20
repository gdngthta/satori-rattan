# Architecture Decision Records (ADR) — Satori Rattan Website

Short notes on *why* key choices were made, so future-you (or a new developer)
doesn't re-litigate settled decisions. Newest first. Last updated: 2026-07.

Format: **Decision · Context · Consequences.**

---

## ADR-007 — Quick-view modal instead of wide cards for large items
**Decision:** Show every product as a uniform card; clicking a product opens a
modal that displays the whole photo (`object-contain`) plus specs, colours, and an
angle gallery.
**Context:** Wide items (dining sets, sofas) looked cramped in tall cards. A first
attempt (Option A: making some cards span 2 columns) made the grid look uneven.
**Consequences:** Uniform, tidy grid; wide items display fully in the pop-up.
Slightly more code (modal + state). `AnimatePresence` was dropped for the modal
because it hung on a custom-component child and blocked closing.

## ADR-006 — Soft-gate catalog request (email lead capture)
**Decision:** Collections has a short "Request the Full Catalog" form that emails
the team; the catalog preview stays visible (not locked).
**Context:** Business wants leads, not a hard paywall on a static site.
**Consequences:** More leads (low friction), no backend. Team fulfils the catalog
by email. Reuses the existing EmailJS setup.

## ADR-005 — Remove the Projects page
**Decision:** Delete the Projects page and add an honest "Who We Serve" (industries)
+ trusted-by (brand logos) section on Home instead.
**Context:** The Projects page held fabricated case studies linking to unrelated
companies — a credibility risk.
**Consequences:** No misleading content. Industries need no client permission;
brand logos require real, permission-cleared assets.

## ADR-004 — Tailwind CSS with `@theme` tokens (migrated from inline styles)
**Decision:** Style with Tailwind utility classes; define brand colours/fonts once
in `@theme`.
**Context:** The original code used ~431 inline `style={{…}}` blocks plus a JS
`isMobile` hook — hard to maintain, and Tailwind was installed but unused.
**Consequences:** One consistent system, responsive via `md:` (no JS breakpoints),
much smaller/cleaner code. Base resets must live in `@layer base` so utilities win.

## ADR-003 — EmailJS for form delivery
**Decision:** Send both forms via EmailJS from the browser.
**Context:** Need to receive leads without building/maintaining a backend.
**Consequences:** No server; the EmailJS **public** key ships in the client (safe by
design). Trade-off: no server-side spam protection (add honeypot/captcha if abused).

## ADR-002 — Static hosting / CDN over a VPS
**Decision:** Host the built site on a static CDN (Netlify recommended).
**Context:** A static marketing site has no server needs; audience is global.
**Consequences:** Faster worldwide, free tier, auto-HTTPS, zero server maintenance.
No root control (not needed). Revisit only if a real backend is introduced.

## ADR-001 — No backend / no database (static SPA)
**Decision:** Build a client-only React SPA; no server, no DB, no auth, no payments.
**Context:** Requirements are marketing + email lead capture (see BRD).
**Consequences:** Simple, cheap, secure (tiny attack surface). Any future need for
real accounts or a live catalog/DB would require revisiting this (managed backend
like Supabase preferred over a hand-run server).
