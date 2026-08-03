# Deployment Guide — Satori Rattan Website

**Last updated:** 2026-07. Target: a static host / CDN. Recommended: **Netlify**
(Vercel or Cloudflare Pages work the same way).

---

## 1. What "deploying" means here
The site is static. Deploying = running the build (`npm run build`) to produce a
`dist/` folder of plain files, then serving that folder from a CDN. No server to
run or maintain.

## 2. Build settings (any static host)
| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish / output directory | `dist` |
| Node version | 18+ |
| SPA redirect | handled by `public/_redirects` (`/* /index.html 200`) |

## 3. Deploy to Netlify (recommended, ~5 min)
1. Push the repo to GitHub (already set up: `gdngthta/satori-rattan`).
2. Netlify → **Add new site → Import from Git** → pick the repo.
3. Netlify auto-detects Vite. Confirm: build `npm run build`, publish `dist`.
4. **Deploy.** You get a `*.netlify.app` URL with free HTTPS.
5. Every `git push` to the deployed branch auto-builds and re-deploys.

> `public/_redirects` already tells Netlify to serve `index.html` for any path, so
> deep links like `/collections` work on refresh. No extra config needed.

## 4. Custom domain (optional)
Netlify → **Domain settings → Add a custom domain** → follow the DNS steps.
HTTPS is issued automatically. Point your domain's DNS as Netlify instructs.

## 5. EmailJS (forms) — important
The contact + catalog forms call **EmailJS** from the browser. For them to work in
production:
- The EmailJS account must be active, with the service/template used in code
  (`service_athfx8e` / `template_rz0s4di`) present.
- In the EmailJS dashboard, add your **production domain** to the allowed origins
  (so submissions from the live site are accepted).
- Test one real submission after deploy (you'll receive the email).

## 6. Pre-deploy checklist
- [ ] `npm run build` succeeds locally with no errors.
- [ ] `npx tsc --noEmit` is clean.
- [ ] Run the [Test Plan](./TEST-PLAN.md) smoke tests.
- [ ] Placeholder content replaced (stats, testimonial, brand logos) — see BRD §8.
- [ ] Images optimized (WebP) so first load is fast.
- [ ] Favicon shows (hard-refresh to bust cache).

## 7. Rollback
Netlify keeps every deploy. To undo a bad release: **Deploys → pick a previous
deploy → Publish deploy.** Instant rollback, no rebuild.

## 8. Local preview of the production build
Before deploying you can preview exactly what ships:
```bash
npm run build
npm run preview
```
