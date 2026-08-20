import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import emailjs from '@emailjs/browser';
import { fadeUp } from '../lib/animations';

// ═══════════════════════════════════════════════════════════════════════════
//  PRODUCT DATA — this is the part you edit to add/change/remove products.
//  Each { ... } block is ONE product card. Copy a whole block to add another.
//  Keep the field names (name, image, dimensions, ...) exactly as they are.
//
//  COLOR OPTIONS (optional): add a `colors` list to a product to show clickable
//  color dots that swap the photo. Products WITHOUT `colors` just show one image.
//    swatch = the dot's color (hex).    image = the photo shown for that color.
// ═══════════════════════════════════════════════════════════════════════════

type ColorVariant = { name: string; swatch: string; image: string };

type Product = {
  name: string;
  image: string;           // default photo (used when there are no color options)
  // Marketing copy instead of specs. Use either/both per product:
  //   tagline    → one short editorial hook line (serif italic on the card)
  //   narration  → a supporting sentence or two (muted paragraph under it)
  // one-line style = tagline only · paragraph style = narration only · both = tagline + sentence
  tagline?: string;
  narration?: string;
  colors?: ColorVariant[]; // optional — color versions (dot picker on the card)
  gallery?: string[];      // optional — extra angle photos shown as thumbnails in
                           // the modal. Use gallery OR colors (gallery wins in the modal).
  wide?: boolean;          // optional — SETS/sofas: renders as a wide landscape card
                           // in its own 2-up "Sets" row (instead of a square 3-up card).
};

const naturalProducts: Product[] = [
  {
    name: 'Terrace',
    image: './images/products/terrace/Terrace-Indoor-Chair-Square.webp',
    // STYLE A — one-line tagline only.
    tagline: 'The quiet centre of a sunlit room.',
    gallery: [
      './images/products/terrace/Terrace-Indoor-Chair-Square.webp',
      './images/products/terrace/Terrace-Indoor-Chair-Front-Square.webp',
      './images/products/terrace/Terrace-Indoor-Chair-Side-Square.webp'
    ],
    // ⬇️ DEMO color options (stand-in photos so you can see it work).
    //    Replace each `image` with your REAL color-variant photo, and set the
    //    `swatch` hex + `name` to match. Delete this whole `colors` block for
    //    products that only come in one color.
    // colors: [
    //   { name: 'Warm Brown',  swatch: '#3A332A', image: './images/products/canari/Canari-Chair-DarkBrown.webp' },
    //   { name: 'Natural', swatch: '#C9A77E', image: './images/products/canari/Canari-Chair-Natural.webp' },
    //   { name: 'Sand',     swatch: '#e6ddd1', image: './images/products/canari/Canari-Chair-Sand.webp' },
    // ],
  },
  {
    name: 'H Low',
    image: './images/products/h-low/H-Low-Chair-Jati-Front-Further.webp',
    // STYLE B — short paragraph only (no tagline).
    narration: 'Low to the ground and impossibly easy — hand-woven rattan peel draped over a solid frame, a chair that asks nothing of you but a long, unhurried afternoon.',
    // DEMO angle photos (stand-ins). Replace with your real angle shots, ideally
    // in public/images/products/ (e.g. '/images/products/java-front.jpg').
    gallery: [
      './images/products/h-low/H-Low-Chair-Jati-Front.webp',
      './images/products/h-low/H-Low-Chair-Jati.webp',
      './images/products/h-low/H-Low-Chair-Mahoni-Front.webp',
      './images/products/h-low/H-Low-Chair-Mahoni.webp',
    ],
  },
  {
    name: 'Elena',
    image: './images/products/elena/Elena-Chair-ZoomOut.webp', // portrait crop now that this is a normal (tall) card
    // STYLE C — tagline + one supporting sentence.
    tagline: 'Sculpture you can sit in.',
    narration: 'Curved rattan and teak resolved into a single fluid line — poised, and quietly sociable.',
    gallery: [
      './images/products/elena/Elena-Chair-Square.webp',
      './images/products/elena/Elena-Front-Square.webp',
    ]
  },
  {
    name: 'Mild',
    image: './images/products/mild/Mild-Chair-Square.webp',
    // STYLE A — one-line tagline only.
    tagline: 'Softness, given a spine.',
    gallery: [
      './images/products/mild/Mild-Chair-Square.webp',
      './images/products/mild/Mild-Chair-Front-Square.webp',
    ]
  },
  {
    // DEMO wide SET: renders as a landscape card in the 2-up "Sets" row below.
    name: 'Man O',
    image: './images/products/man-o/Man-O-Set.webp', // ← LANDSCAPE shot for the wide card
    // STYLE C — tagline + one supporting sentence (wide set).
    tagline: 'The room, gathered.',
    narration: 'A three-seater, two armchairs and a low table in solid teak and rattan — a whole conversation, arranged.',
    wide: true, // ← wide landscape card in its own row
    gallery: [
      './images/products/man-o/Man-O-Set.webp', // ← WIDE full-set shot (shows complete in the modal)
      './images/products/man-o/Man-O-Sofa.webp',  // sofa close-up
      './images/products/man-o/Man-O-Chair-Square.webp',      // armchair close-up
      './images/products/man-o/Man-O-Table-Square.webp', // coffee table close-up
    ],
  },
];

const syntheticProducts: Product[] = [
  {
    name: 'Kolot',
    image: './images/products/kolot/Kolot-Set.webp', // landscape crop for the wide card
    // STYLE B — short paragraph only (wide set).
    narration: 'Built for salt air and long seasons — UV-stable weave over a weatherproof frame, arranged as a full lounge set that brings the ease of the indoors out onto the terrace and never asks to come back in.',
    wide: true, // ← now wide, so Synthetic has 2 wides (Kolot + Gading Set) in its own row
    gallery: [
      './images/products/kolot/Kolot-Set.webp', // ← WIDE full-set shot (shows complete in the modal)
      './images/products/kolot/Kolot-Out-Sofa.webp',  // sofa close-up
      './images/products/kolot/Kolot-Out-Single-Chair-Square.webp',      // armchair close-up
      './images/products/kolot/Kolot-Out-Table-Square.webp', // coffee table close-up
      './images/products/kolot/Kolot-Out-Lounge-Chair-Square.webp', // coffee table close-up
    ]
  },
  {
    name: 'H Low',
    image: './images/products/Coastal-Bar-Stool.webp',
    // STYLE C — tagline + one supporting sentence.
    tagline: 'Perched, and perfectly at ease.',
    narration: 'All-weather synthetic weave that shrugs off sun and spills — tall enough for the counter, and the good conversation.',
  },
  {
    name: 'Terrace',
    image: './images/products/terrace/Terrace-Out-Square.webp',
    // STYLE A — one-line tagline only.
    tagline: 'Made for the open air, unbothered.',
    gallery: [
      './images/products/terrace/Terrace-Out-Square.webp',
      './images/products/terrace/Terrace-Out-Front-Square.webp',
      './images/products/terrace/Terrace-Out-Side-Square.webp',
    ]
  },
  {
    name: 'Canari',
    image: './images/products/canari/Canari-Chair-Out-Square.webp',
    // STYLE B — short paragraph only.
    narration: 'The warmth of hand-woven rattan with none of its worries — marine-grade fibre that holds its colour and its shape through every season on the deck.',
    gallery: [
      './images/products/canari/Canari-Chair-Out-Square.webp',
      './images/products/canari/Canari-Chair-Out-Front-Square.webp',
    ]
  },
  {
    // DEMO wide SET: renders as a landscape card in the 2-up "Sets" row below.
    name: 'Gading Set',
    image: './images/products/gading/Gading-Set.webp', // ← LANDSCAPE shot for the wide card
    // STYLE C — tagline + one supporting sentence (wide set).
    tagline: 'Outdoor living, fully composed.',
    narration: 'Sofa, armchairs and a low table in all-weather rattan — a set that turns any courtyard into a room.',
    wide: true, // ← wide landscape card in its own row
    gallery: [
      './images/products/gading/Gading-Set.webp', // ← WIDE full-set shot (shows complete in the modal)
      './images/products/gading/Gading-Sofa.webp',  // sofa close-up
      './images/products/gading/Gading-Chair-Square.webp',      // armchair close-up
      './images/products/gading/Gading-Table-Square.webp', // coffee table close-up
    ],
  },
];

// Reused Tailwind label strings (no-prefix = phone, md: = desktop >= 768px).
const eyebrow = 'font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm';

// One product card. Its color dots still swap the thumbnail; clicking the PHOTO
// opens the full quick-view modal (good for wide sets that don't fit a card).
function ProductCard({
  product,
  index,
  mdSpan,
  onOpen,
}: {
  product: Product;
  index: number;
  mdSpan: string; // desktop column-span class (computed so every row fills fully)
  onOpen: (colorIndex: number) => void;
}) {
  const [selected, setSelected] = useState(0);
  const hasColors = !!product.colors && product.colors.length > 0;
  const wide = !!product.wide; // wide sets take a wider slot (landscape) in the grid
  const activeImage = hasColors ? product.colors![selected].image : product.image;

  // Phone: normal cards are 1 of 2 cols (2-up); wide cards fill the row.
  // Desktop: mdSpan (from the grid) sizes each card so its row is exactly full.
  const span = `${wide ? 'col-span-2' : ''} ${mdSpan}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      className={`group bg-sand overflow-hidden transition-transform duration-300 ease-smooth hover:-translate-y-1 ${span}`}
    >
      {/* Clicking the photo opens the quick-view. Square (1:1) for normal items;
          landscape (~16:9) for wide sets so a sofa row shows without cropping. */}
      <button
        type="button"
        onClick={() => onOpen(selected)}
        aria-label={`View ${product.name}`}
        // Fixed image height (same for every card) → all names line up and rows
        // are uniform, whatever each card's width is. object-cover fills the box.
        className="relative block w-full h-[220px] md:h-[340px] overflow-hidden cursor-pointer"
      >
        <img
          src={activeImage}
          alt={product.name}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-smooth group-hover:scale-105"
        />
        {/* hover hint that the card is clickable */}
        <span className="absolute top-3 right-3 w-8 h-8 bg-[rgba(254,253,251,0.95)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-smooth">
          <Maximize2 size={14} className="text-darker" />
        </span>
      </button>

      <div className="p-4 md:p-6">
        <h3 className="font-serif text-[16px] md:text-[24px] font-semibold text-darker mb-2.5 md:mb-4">
          {product.name}
        </h3>

        {/* Color dots — only rendered when the product has a `colors` list */}
        {hasColors && (
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            {product.colors!.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(i)}
                aria-label={c.name}
                title={c.name}
                className={`h-5 w-5 rounded-full border border-dune transition-all ${
                  i === selected ? 'ring-2 ring-warm ring-offset-1 ring-offset-sand' : ''
                }`}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
          </div>
        )}

        {/* Design narration replaces the old spec rows. tagline = serif italic
            hook line; narration = muted supporting sentence. A product may have
            one or both. Wide cards get a slightly larger tagline for the extra width. */}
        {product.tagline && (
          <p className={`font-serif italic text-dark leading-snug ${product.narration ? 'mb-2' : ''} ${wide ? 'text-[18px] md:text-[22px]' : 'text-[15px] md:text-[18px]'}`}>
            {product.tagline}
          </p>
        )}
        {product.narration && (
          <p className="font-sans text-[12px] md:text-[14px] text-muted leading-relaxed">
            {product.narration}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Quick-view modal: shows the WHOLE product photo (object-contain = no cropping,
// so wide sets fit) plus specs and colors. Closes on X, backdrop click, or Esc.
function ProductModal({
  product,
  initialColor,
  onClose,
}: {
  product: Product;
  initialColor: number;
  onClose: () => void;
}) {
  const [color, setColor] = useState(initialColor);
  const [imgIndex, setImgIndex] = useState(0);
  const hasColors = !!product.colors && product.colors.length > 0;
  // gallery (angle photos) wins over colors for the modal image if present
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : null;
  const image = gallery ? gallery[imgIndex] : hasColors ? product.colors![color].image : product.image;

  // Esc to close + lock the background from scrolling while the modal is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      className="fixed inset-0 z-[1200] bg-black/60 flex items-center justify-center p-4 md:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()} // clicks inside shouldn't close it
        className="relative bg-cream w-full max-w-[1080px] max-h-[90vh] overflow-y-auto md:flex"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-[rgba(254,253,251,0.9)] rounded-full text-darker transition-colors hover:bg-sand"
        >
          <X size={20} />
        </button>

        {/* Image with ‹ › arrows; small thumbnails below that enlarge on hover */}
        <div className="md:w-3/5 bg-sand flex flex-col gap-3 p-4 md:p-6">
          <div className="relative flex-1 min-h-0 flex items-center justify-center">
            <img
              src={image}
              alt={product.name}
              className="w-full max-h-[38vh] md:max-h-[72vh] object-contain"
            />
            {gallery && gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => setImgIndex((imgIndex - 1 + gallery.length) % gallery.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(254,253,251,0.9)] text-darker shadow-sm transition-colors hover:bg-cream"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => setImgIndex((imgIndex + 1) % gallery.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(254,253,251,0.9)] text-darker shadow-sm transition-colors hover:bg-cream"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {gallery && gallery.length > 1 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setImgIndex(i)}
                  aria-label={`View angle ${i + 1}`}
                  // small by default; pops bigger on hover (z-10 so it sits on top)
                  className={`relative w-9 h-9 md:w-10 md:h-10 overflow-hidden border transition-transform duration-200 hover:scale-150 hover:z-10 ${
                    i === imgIndex ? 'border-warm ring-1 ring-warm' : 'border-dune opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col">
          <h3 className="font-serif text-[26px] md:text-[32px] font-semibold text-darker mb-3">
            {product.name}
          </h3>
          {product.tagline && (
            <p className="font-serif italic text-[18px] md:text-[20px] text-dark leading-snug mb-3">
              {product.tagline}
            </p>
          )}
          {product.narration && (
            <p className="font-sans text-[14px] text-muted leading-relaxed mb-5">
              {product.narration}
            </p>
          )}

          {hasColors && !gallery && (
            <div className="mb-5">
              <div className="font-sans text-[11px] font-semibold text-warm uppercase tracking-[0.05em] mb-2">
                Color: {product.colors![color].name}
              </div>
              <div className="flex items-center gap-2">
                {product.colors!.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setColor(i)}
                    aria-label={c.name}
                    title={c.name}
                    className={`h-6 w-6 rounded-full border border-dune transition-all ${
                      i === color ? 'ring-2 ring-warm ring-offset-1 ring-offset-cream' : ''
                    }`}
                    style={{ backgroundColor: c.swatch }}
                  />
                ))}
              </div>
            </div>
          )}

          <Link
            to="/contact"
            onClick={onClose}
            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-darker text-cream font-sans text-[13px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark"
          >
            Request a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Product card grid. Owns the one open modal (which product + which color).
// Normal products fill a 3-up square grid; wide sets get their own 2-up
// landscape row below — so a sofa set never has to squeeze into a small card.
function ProductGrid({ products, autoOpen }: { products: Product[]; autoOpen?: string }) {
  const [active, setActive] = useState<{ product: Product; colorIndex: number } | null>(null);

  const open = (product: Product) => (colorIndex: number) => setActive({ product, colorIndex });

  // Deep-link: when the Home page links here with ?product=NAME for THIS grid's
  // collection, auto-open that product's quick-view gallery. Matches by `name`.
  useEffect(() => {
    if (!autoOpen) return;
    const match = products.find((p) => p.name === autoOpen);
    if (match) setActive({ product: match, colorIndex: 0 });
  }, [autoOpen, products]);

  // Show all normal items first, then the wide sets (stable — keeps each group's
  // order). This groups portraits into their rows and sets into theirs.
  const ordered = [...products].sort((a, b) => Number(!!a.wide) - Number(!!b.wide));

  // Desktop is a 6-column grid: normal cards take 2 cols (3-up), wide sets take 3
  // (2-up). We then grow the LAST wide in each row to fill any leftover columns,
  // so every row is exactly full width — 3 portraits, OR 2 wides side by side, OR
  // 1 portrait + 1 wide, all reach the edge. Phone falls back to 2-up via classes.
  const COLS = 6;
  const spans = ordered.map((p) => (p.wide ? 3 : 2));
  {
    let col = 0;
    let row: number[] = [];
    const closeRow = () => {
      const last = row[row.length - 1];
      const leftover = COLS - col;
      if (leftover > 0 && last !== undefined && ordered[last].wide) spans[last] += leftover;
      col = 0;
      row = [];
    };
    ordered.forEach((_, i) => {
      if (col + spans[i] > COLS) closeRow();
      row.push(i);
      col += spans[i];
      if (col >= COLS) closeRow();
    });
    closeRow();
  }
  const spanClass: Record<number, string> = {
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
        {ordered.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            index={i}
            mdSpan={spanClass[spans[i]] || 'md:col-span-2'}
            onOpen={open(product)}
          />
        ))}
      </div>

      {/* Plain conditional render — closes deterministically (no AnimatePresence
          quirks with a custom-component child). Open animation still plays. */}
      {active && (
        <ProductModal
          product={active.product}
          initialColor={active.colorIndex}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

// Small helper for the "01" / "02" section headers so we don't repeat the markup.
function CollectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      className="mb-8 md:mb-16"
    >
      <div className="flex items-start md:items-center gap-4 md:gap-6 mb-4">
        <div className="font-serif text-[48px] md:text-[72px] font-light text-warm opacity-40 leading-none shrink-0">
          {number}
        </div>
        <div>
          <h2 className="font-serif text-[24px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2]">
            {title}
          </h2>
          <p className="font-sans text-[13px] md:text-[16px] text-muted mt-2">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Soft gate: a short form that emails us the request (reuses the same EmailJS
// setup as the Contact page). Catalog stays visible; this just captures leads.
function CatalogRequest() {
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const submissionTime = new Date().toLocaleString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
    });
    try {
      // Same EmailJS service/template as the Contact form — lands in the same inbox.
      emailjs.init('pW1vDoZIFag3A6sY3');
      await emailjs.send('service_athfx8e', 'template_rz0s4di', {
        company_name: form.company,
        from_name: form.name,
        reply_to: form.email,
        phone: 'Not provided',
        project_type: 'Full Catalog Request',
        quantity: 'Not specified',
        budget: 'Not specified',
        message: form.interest || 'Requested the full product catalog.',
        submission_time: submissionTime,
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again, or email us at info@satorirattan.com.');
    } finally {
      setLoading(false);
    }
  };

  // ── Thank-you state (shown after a successful send) ──
  if (submitted) {
    return (
      <div className="max-w-[560px] mx-auto text-center">
        <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 text-warm mx-auto mb-5" />
        <h3 className="font-serif text-[24px] md:text-[32px] font-semibold text-darker mb-3">Thank You!</h3>
        <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.7]">
          We've received your request. Our team will email you the full catalog and a tailored quotation — expect to hear from us within <strong>3 working days</strong>.
        </p>
      </div>
    );
  }

  const inputCls =
    'w-full px-3.5 py-2.5 md:px-4 md:py-3 font-sans text-[14px] border border-dune bg-cream text-darker focus:border-warm';

  return (
    <div className="max-w-[560px] mx-auto text-center">
      <h3 className="font-serif text-[24px] md:text-[clamp(28px,3vw,40px)] font-semibold text-darker mb-4">
        Request the Full Catalog
      </h3>
      <p className="font-sans text-[14px] md:text-[16px] text-muted mb-8 leading-[1.6]">
        See our designs. Share your details and we'll email you the catalog and a tailored quotation.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-[#fee] border border-[#fcc] rounded font-sans text-[13px] text-[#c00]">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label htmlFor="cat_name" className="sr-only">Your Name</label>
            <input id="cat_name" type="text" required autoComplete="name" placeholder="Your Name *"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
          </div>
          <div>
            <label htmlFor="cat_company" className="sr-only">Company</label>
            <input id="cat_company" type="text" required autoComplete="organization" placeholder="Company *"
              value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} />
          </div>
        </div>
        <div>
          <label htmlFor="cat_email" className="sr-only">Work Email</label>
          <input id="cat_email" type="email" required autoComplete="email" placeholder="Work Email *"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </div>
        <div>
          <label htmlFor="cat_interest" className="sr-only">What are you looking for?</label>
          <textarea id="cat_interest" rows={3} placeholder="What are you looking for? (optional)"
            value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={`${inputCls} resize-y`} />
        </div>
        <button type="submit" disabled={loading}
          className="mt-1 w-full md:w-auto md:self-center px-8 py-3.5 md:px-12 md:py-4 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark disabled:bg-muted disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? 'Sending...' : 'Request Catalog'}
        </button>
      </form>
    </div>
  );
}

export default function Collections() {
  // ?product=NAME&collection=natural|synthetic — set when arriving from a Home
  // featured card, so we open that product's gallery in the matching collection.
  const [params] = useSearchParams();
  const wantProduct = params.get('product') || undefined;
  const wantCollection = params.get('collection');

  return (
    <div className="pt-16 md:pt-20">

      {/* ── Hero ── */}
      <section className="bg-sand px-6 pt-20 pb-16 md:px-12 md:pt-30 md:pb-24">
        <motion.div {...fadeUp} className="max-w-[1200px] mx-auto text-center">
          <div className={`${eyebrow} mb-4`}>Product Catalog</div>
          <h1 className="font-serif text-[38px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] text-darker mb-6">
            Our Collections
          </h1>
          <p className="font-sans text-[15px] md:text-[20px] text-muted max-w-[800px] mx-auto leading-[1.6]">
            Explore our curated range of premium rattan furniture, designed for clients seeking quality, durability, and timeless style
          </p>
        </motion.div>
      </section>

      {/* ── Natural Rattan ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <CollectionHeader
            number="01"
            title="Natural Rattan Collection"
            subtitle="Sustainably sourced and traditionally crafted for indoor and covered applications"
          />
          <ProductGrid products={naturalProducts} autoOpen={wantCollection === 'natural' ? wantProduct : undefined} />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px bg-dune mx-6 md:mx-12" />

      {/* ── Synthetic Rattan ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <CollectionHeader
            number="02"
            title="Synthetic Rattan Collection"
            subtitle="High-performance, all-weather solutions for outdoor commercial applications"
          />
          <ProductGrid products={syntheticProducts} autoOpen={wantCollection === 'synthetic' ? wantProduct : undefined} />
        </div>
      </section>

      {/* ── Request Full Catalog (soft gate → emails us via EmailJS) ── */}
      <section className="bg-dune px-6 py-14 md:px-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <CatalogRequest />
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-darker text-cream text-center px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto"
        >
          <h2 className="font-serif text-[28px] md:text-[clamp(32px,4vw,48px)] font-semibold leading-[1.2] mb-4">
            Need Volume Pricing or MOQ Information?
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-bark leading-[1.8] mb-8">
            Contact our sales team for detailed specifications, bulk pricing, and lead times
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-8 py-3.5 md:px-10 md:py-4 bg-cream text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-sand hover:-translate-y-0.5"
          >
            Contact Sales Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
