# Content & Maintenance Guide — Satori Rattan Website

**For:** whoever updates the site's text, products, photos, and logos.
**You do NOT need to be a developer** to follow this. Last updated: 2026-07.

> Golden rule: **only change what's inside the quotes `'...'` or between the
> `>tags<`.** Never rename the labels on the left (like `name:` or `image:`) or
> touch `className=`. Those are the machinery; the quotes hold the words.

---

## 0. The safety routine (do this every time)
1. See your change live:
   ```bash
   cd "C:\Users\Gading\Desktop\dev\satori-rattan"
   npm run dev
   ```
   Open the link it prints (e.g. `http://localhost:5173`). It updates as you save.
2. When happy, save it to history (does **not** publish):
   ```bash
   git add -A && git commit -m "describe your change"
   ```
3. If a **new image** doesn't show: stop the dev server, run `npm run dev` again,
   and hard-refresh the browser (`Ctrl+Shift+R`). Vite doesn't always notice new
   files in `public/` while running.

---

## 1. Which file is which page?
| Menu item | File |
|-----------|------|
| Home | `src/app/pages/Home.tsx` |
| Collections | `src/app/pages/Collections.tsx` |
| Bespoke | `src/app/pages/Bespoke.tsx` |
| Craftsmanship | `src/app/pages/Craftsmanship.tsx` |
| About | `src/app/pages/About.tsx` |
| Contact | `src/app/pages/Contact.tsx` |
| Top menu & logo | `src/app/components/Header.tsx` |
| Footer | `src/app/components/Footer.tsx` |

**Two places text hides in a file:**
- **One-off text** (headlines, paragraphs, buttons): between the tags → `<h1 …>Change me</h1>`.
- **Repeated text** (product lists, cards): in an array at the **top** of the file, inside quotes.

Tip: to find any text fast, in your editor press `Ctrl+Shift+F`, type the sentence you see on the site.

---

## 2. Images — where they go
```
public/images/products/   → product photos      → /images/products/your-file.jpg
public/images/pages/      → hero/section images  → /images/pages/your-file.jpg
public/images/brands/     → client logos         → /images/brands/your-logo.svg
public/images/Logo.png    → the brand logo (also the tab icon)
```
**Formats:** photos → **JPG** or **WebP** (keep under ~400 KB each). Logos → **SVG**
(best) or WebP/PNG. Avoid JPG for logos (no transparency).

---

## 3. Products (Collections page)
At the top of `Collections.tsx` are two lists: `naturalProducts` and
`syntheticProducts`. Each `{ … }` block is one product.

### Add a product
Copy a whole `{ … },` block, paste it in the same list, change the values:
```jsx
{
  name: 'Flores Coffee Table',
  image: '/images/products/flores.jpg',
  dimensions: 'W 120cm × D 60cm × H 40cm',
  material: 'Natural Rattan & Glass',
  customizable: 'Yes',
  leadTime: '9-11 weeks',
},
```

### Give a product colour options (dots that swap the photo)
Add a `colors` list to that product:
```jsx
colors: [
  { name: 'Natural',  swatch: '#d4c5b9', image: '/images/products/flores-natural.jpg' },
  { name: 'Charcoal', swatch: '#2c2926', image: '/images/products/flores-charcoal.jpg' },
],
```
`swatch` = the dot's colour (a hex code). `image` = the photo for that colour.
Leave `colors` off for single-colour products.

### Give a product extra angle photos (gallery in the pop-up)
Add a `gallery` list — these become clickable thumbnails in the quick-view:
```jsx
gallery: [
  '/images/products/flores-front.jpg',
  '/images/products/flores-side.jpg',
  '/images/products/flores-detail.jpg',
],
```
Note: if a product has BOTH `gallery` and `colors`, the **gallery wins** in the
pop-up (colour dots are hidden there). Use one or the other per product.

### Remove a product
Delete its whole `{ … },` block.

---

## 4. Client / brand logos (Home "Who We Serve")
In `Home.tsx`, the `clients` list. Put the logo file in `public/images/brands/`, then:
```jsx
{ name: 'Marriott', logo: '/images/brands/marriott.svg' },
```
`name` is also the alt text (accessibility). To show a placeholder box instead of a
real logo, use `logo: placeholderLogo('Brand Name')`.
⚠️ Only show brands you actually served **and have permission** to display.

---

## 5. The two lead forms (where emails go)
Both the **Contact** form and the **Collections "Request Full Catalog"** form email
the same inbox via EmailJS. To change the destination or wording you edit the EmailJS
account (template `template_rz0s4di`) — the website just sends the fields.
The thank-you message promises a reply within **3 working days**.

---

## 6. Tab title & icon (`index.html`)
- **Tab name:** change the text between `<title>` and `</title>`.
- **Tab icon:** the `<link rel="icon" href="/images/Logo.png">` line — point it at any
  square image. After changing it, hard-refresh (favicons cache hard).

---

## 7. Things to double-check before launch
- Replace placeholder **stats** (years, countries, %) with real numbers.
- Replace or remove the placeholder **testimonial** (Home) and **founder name** (About).
- Make sure every product/brand image is real and you have rights to use it.
