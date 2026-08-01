# Business Requirements Document (BRD) — Satori Rattan Website

**Project:** Satori Rattan marketing website
**Type:** Public B2B marketing / lead-generation website
**Status:** In active development
**Last updated:** 2026-07

> ⚠️ Some figures in the live copy (years in business, countries served, client
> names, testimonials) are currently placeholders and must be replaced with
> verified facts before launch. See §8 Risks.

---

## 1. Purpose
Provide Satori Rattan with a professional online presence that presents its
rattan furniture capabilities to business buyers (hospitality, residential,
commercial, retail) and converts interest into **qualified sales leads** —
without requiring a backend or e-commerce system.

## 2. Background
Satori Rattan is a rattan furniture manufacturer serving B2B clients. It does
**not** sell online (no checkout/payments). The website's job is to build
credibility and capture inquiries that the sales team follows up by email.

## 3. Business objectives
| # | Objective | How the site supports it |
|---|-----------|--------------------------|
| O1 | Generate qualified B2B leads | Contact RFQ form + catalog request form (both email the team) |
| O2 | Showcase product range & quality | Collections catalog, Craftsmanship & Bespoke pages, imagery |
| O3 | Establish credibility | About, "Who We Serve" industries, trusted-by brands, testimonials |
| O4 | Be reachable & professional worldwide | Fast, mobile-friendly, multi-language-ready copy |

## 4. Stakeholders
- **Business owner / sales** — receives leads, owns content and brand claims.
- **Content editor** (likely the owner) — updates products, images, copy.
- **Developer** — maintains code, deploys.
- **End users** — B2B buyers, interior designers, procurement teams.

## 5. Scope
### In scope
- Public marketing pages: Home, Collections, Bespoke, Craftsmanship, About, Contact.
- Product catalog display (preview) with color options and quick-view.
- Lead capture: Contact RFQ form + Collections "Request Full Catalog" soft gate,
  both delivered by email (EmailJS), no backend.
- Responsive (mobile + desktop), animated, brand-consistent UI.

### Out of scope (V1)
- User accounts / login / authentication.
- Online payments / e-commerce / cart.
- A database or server-side application.
- CMS (content is edited in code/data files).
- Multi-language switching (copy is English; structure allows future i18n).

## 6. Functional requirements
| ID | Requirement |
|----|-------------|
| FR1 | Visitors can browse all marketing pages via a persistent nav + footer. |
| FR2 | Collections shows products as cards (image, name, specs). |
| FR3 | Products may offer color options shown as clickable dots that swap the photo. |
| FR4 | Clicking a product opens a quick-view modal (full photo, specs, colors, CTA). |
| FR5 | Visitors can submit a Contact "Request for Quotation" form → emails the team. |
| FR6 | Visitors can submit a Collections "Request Full Catalog" short form → emails the team; shows a thank-you promising a reply within 3 working days. |
| FR7 | Home surfaces credibility hooks: industries served + trusted-by brand logos. |
| FR8 | External/social links open safely in a new tab. |

## 7. Non-functional requirements
| ID | Requirement | Target |
|----|-------------|--------|
| NFR1 | Responsive | Usable at 320px → large desktop |
| NFR2 | Performance | Fast first load (image optimization is a known debt) |
| NFR3 | Accessibility | Semantic HTML, labeled form fields, alt text, visible focus |
| NFR4 | SEO | Unique title/description (per-page titles are a known gap) |
| NFR5 | Maintainability | Content edited via clearly-commented data files |
| NFR6 | Security | No secrets in code beyond the public EmailJS key; safe external links |
| NFR7 | Hosting | Static host / CDN (e.g. Netlify), HTTPS, no server to maintain |

## 8. Assumptions, constraints, risks
- **Assumption:** all leads are handled by a human via email; no auto-fulfillment.
- **Constraint:** no backend — dynamic behavior limited to what runs in the browser + EmailJS.
- **Risk (content):** placeholder brand names, testimonials, and statistics must be
  replaced with **verified, permission-cleared** facts before launch, or they are
  misleading/legally risky.
- **Risk (spam):** the email forms have no spam protection yet (add honeypot/captcha if abused).
- **Risk (images):** large source images hurt load speed until converted to WebP.

## 9. Success metrics
- Number of RFQ / catalog-request emails received per month.
- Bounce rate / time on Collections and Contact.
- Lead-to-quote conversion (tracked by the sales team offline).
