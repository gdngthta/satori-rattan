# Satori Rattan

Marketing/portfolio website for a rattan furniture brand — a single-page app with
animated page transitions and a contact form.

## Tech stack

- **Vite** — build tool + dev server
- **React 18** + **TypeScript**
- **React Router 7** — client-side routing
- **Tailwind CSS v4** — styling
- **Motion** — page/element animations
- **Lucide React** — icons
- **EmailJS** — contact form delivery (no backend needed)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

## Available scripts

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the local dev server with hot reload          |
| `npm run build`   | Type-check (`tsc`) then build for production → `dist/` |
| `npm run preview` | Serve the production build locally to test it       |
| `npm run lint`    | Run ESLint over the source                          |

## Project structure

```
src/
  main.tsx            App entry point
  app/
    App.tsx           Root component
    routes.tsx        Route definitions
    components/       Shared UI (Header, Footer, Layout, ScrollToTop)
    pages/            One file per page (Home, Collections, Bespoke, etc.)
    hooks/            Custom React hooks
  styles/             Global CSS + theme
public/               Static assets served as-is
```

## Notes

- The EmailJS key in `src/app/pages/Contact.tsx` is a **public** key — it is meant to
  live in frontend code and is safe to commit.
- `node_modules/` and `dist/` are gitignored; run `npm install` after cloning to rebuild them.
