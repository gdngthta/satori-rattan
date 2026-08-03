# Low-Level Design (LLD) — Satori Rattan Website

**Last updated:** 2026-07
Companion docs: [BRD](./BRD.md) · [HLD](./HLD.md) · [Content Guide](./CONTENT-GUIDE.md)

This is the "exactly how it's built" reference — folders, routes, data shapes,
components, and the email integration.

---

## 1. Directory structure
```
satori-rattan/
├─ index.html                 # tab <title>, favicon, meta description, root div
├─ public/
│  ├─ Logo.png                # brand logo (also the favicon)
│  ├─ _redirects              # /* /index.html 200  (SPA deep-link fallback)
│  └─ images/
│     ├─ products/            # product photos
│     ├─ pages/               # hero / section images
│     └─ brands/              # client/brand logos (trusted-by wall)
├─ src/
│  ├─ main.tsx                # React entry -> RouterProvider
│  ├─ app/
│  │  ├─ App.tsx
│  │  ├─ routes.tsx           # route table
│  │  ├─ components/          # Layout, Header, Footer, ScrollToTop
│  │  ├─ pages/               # Home, Collections, Bespoke, Craftsmanship, About, Contact
│  │  └─ lib/animations.ts    # shared `fadeUp`
│  └─ styles/
│     ├─ index.css            # imports + @layer base resets + keyframes
│     ├─ tailwind.css         # @import "tailwindcss"
│     ├─ theme.css            # @theme design tokens
│     └─ fonts.css            # Google Fonts import
└─ docs/                      # this documentation
```

## 2. Routing (`src/app/routes.tsx`)
`createBrowserRouter`, all children under `Layout`:

| Path | Page |
|------|------|
| `/` (index) | Home |
| `/collections` | Collections |
| `/bespoke` | Bespoke |
| `/craftsmanship` | Craftsmanship |
| `/about` | About |
| `/contact` | Contact |

> The former `/projects` route/page was removed. Nav links live in
> `Header.tsx` (`navLinks`) and `Footer.tsx` (`footerLinks.company`).

## 3. Design tokens (`src/styles/theme.css`)
Defined once in `@theme`; Tailwind generates the utility classes.
| Token | Value | Utilities |
|-------|-------|-----------|
| `--color-cream` | `#fefdfb` | `bg-cream`, `text-cream` |
| `--color-sand` | `#f5f3f0` | `bg-sand` … |
| `--color-dune` | `#eae5de` | `border-dune` … |
| `--color-bark` | `#d4c5b9` | `text-bark` … |
| `--color-warm` | `#8b7969` | `text-warm` … |
| `--color-dark` | `#2c2926` | `bg-dark` … |
| `--color-darker` | `#221f1c` | `bg-darker`, `text-darker` |
| `--color-muted` | `#6b5e52` | `text-muted` … |
| `--font-serif` | Cormorant Garamond | `font-serif` |
| `--font-sans` | Inter | `font-sans` |
| `--ease-smooth` | cubic-bezier(.4,0,.2,1) | `ease-smooth` |

**Responsive rule:** no prefix = mobile; `md:` = desktop (≥768px).
**Cascade rule:** base resets live in `@layer base` so Tailwind utilities always win (see `index.css`).

## 4. Data models
Defined at the top of each page file as plain arrays (this is the "content").

### 4.1 Collections — `Product` (`Collections.tsx`)
```ts
type ColorVariant = { name: string; swatch: string; image: string };
type Product = {
  name: string;
  image: string;            // default photo (no color options)
  dimensions: string;
  material: string;
  customizable: string;
  leadTime: string;
  colors?: ColorVariant[];  // optional — color dots on card + modal
  gallery?: string[];       // optional — extra angle photos (thumbnails in modal)
};
```
Two arrays: `naturalProducts`, `syntheticProducts`. `specFields` defines the spec
rows rendered per card (keys are a typed union of the string spec fields).

**Precedence in the modal:** if `gallery` exists it drives the image (angle
thumbnails) and color dots are hidden; otherwise `colors` drive it; otherwise the
single `image`.

### 4.2 Home data (`Home.tsx`)
- `credentials: string[]` — ticker strip.
- `stats: {value,label}[]` — stat grid. *(numbers are placeholders — verify)*
- `industries: {icon,title,description}[]` — "Who We Serve" cards.
- `clients: {name,logo}[]` — trusted-by logo wall (`/images/brands/…` or `placeholderLogo()`).
- `processSteps`, `featuredProjects` — process cards + featured products.

### 4.3 Other page data
About: `stats`, `facilities`, `markets`, `qualityCommitments`.
Bespoke: `processSteps`, `capabilities`.
Craftsmanship: `materials`, `constructionDetails`, `qcStages`, `sustainabilityPoints`.

## 5. Collections interactions (component detail)
- **`ProductCard`** — local `selected` color state. The **photo is a button**
  (`onOpen(selected)`) that opens the modal; color dots (if any) swap the card
  thumbnail via `setSelected`. Hover shows a Maximize hint.
- **`ProductModal`** — props `{ product, initialColor, onClose }`. Local state:
  `color` (dot selection) and `imgIndex` (gallery angle).
  - Image uses `object-contain` (whole photo shows).
  - `gallery.length > 1` → thumbnail row (`setImgIndex`, active highlighted).
  - `hasColors && !gallery` → color dots.
  - Closes on **X**, **backdrop click**, or **Escape**; locks `body` scroll while open.
- **`ProductGrid`** — owns `active` (which product+color is open) and renders the
  single `ProductModal` via a plain conditional (no `AnimatePresence` — it hung on a
  custom-component child and blocked closing; open animation is kept).

## 6. Email integration (EmailJS)
Both forms use the same account/inbox:
- Public key: `pW1vDoZIFag3A6sY3`
- Service ID: `service_athfx8e`
- Template ID: `template_rz0s4di`

**Contact RFQ (`Contact.tsx`)** sends: `company_name, from_name, reply_to, phone,
project_type, quantity, budget, message, submission_time`.

**Catalog request (`CatalogRequest` in `Collections.tsx`)** sends the same field
names (short form): `company_name, from_name, reply_to, message`, with
`project_type: 'Full Catalog Request'` and the rest set to "Not provided/specified".

> These IDs are safe to expose (EmailJS public key by design). To split catalog
> requests into their own inbox/subject, create a new EmailJS template and change
> the Template ID in `CatalogRequest`.

## 7. Forms — validation & states
- Required fields use native `required`; inputs have linked `<label htmlFor>` + `id`
  and `autoComplete` (name/organization/email/tel).
- State per form: `loading`, `submitted` (→ thank-you view), `error` (→ inline banner).
- No client-side format validation beyond `type="email"`; no spam protection (debt).

## 8. Known technical debt
| Item | Location | Fix |
|------|----------|-----|
| Large images | `public/images/` | Convert to WebP |
| Per-page `<title>` | all pages | Set title per route |
| `prefers-reduced-motion` | global | Gate animations |
| Placeholder copy | stats, testimonial, founder name | Replace with verified facts |
| Form spam | both forms | Honeypot / captcha |
