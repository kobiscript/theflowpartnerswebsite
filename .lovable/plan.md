# The Flow Partners Corporate Website

Build a multi-page marketing site modeled on accenture.com: bold editorial typography, generous whitespace, purple accent (Accenture's signature "greater than" energy), large hero imagery, and dense content grids for insights/services.

## Visual direction

- **Palette**: Near-white background (#f4f2ee style off-white), deep near-black text, signature purple accent (#a100ff family), subtle grays. Occasional full-bleed dark sections.
- **Typography**: Large editorial sans-serif headlines (Graphik-like — use Inter or Space Grotesk as free stand-in), tight tracking, oversized H1s (clamp up to ~7rem).
- **Motif**: The ">" (greater-than) symbol used decoratively as Accenture does.
- **Layout**: Full-width stacked sections, asymmetric grids, large image tiles with overlay text, horizontal card rows for insights.
- **Motion**: Restrained — subtle fade/slide on scroll, hover underlines and image zooms.

## Routes (TanStack Start, each with own head() metadata)

```
src/routes/
  __root.tsx          // Header + Footer wrapper, base meta
  index.tsx           // Home: hero, featured insight, services grid, case studies, careers CTA
  about.tsx           // Who we are, leadership, values, stats
  services.tsx        // Service capabilities grid (Strategy, Technology, Operations, Industry X, Song, Cloud, Data & AI, Security)
  industries.tsx      // Industry sectors grid
  insights.tsx        // Research & thought-leadership article grid
  careers.tsx         // Life at company, open roles CTA, culture imagery
  contact.tsx         // Locations, contact form (visual only), inquiry types
```

Shared nav in `__root.tsx` links all routes. Each leaf sets unique title/description/og.

## Home page composition

1. **Header** — logo (wordmark + blue ">"), horizontal nav, "Contact us" pill button.
2. **Hero** — huge editorial headline ("Let there be change"-style), short subhead, full-bleed image right side (generated), primary CTA.
3. **Featured insight band** — single large card with generated image, category tag, title, "Read more".
4. **What we do** — 4-column grid of service capabilities, each with icon/short blurb, hover reveals arrow.
5. **Case studies** — 3-up asymmetric grid with client-style imagery and outcomes.
6. **Latest thinking** — horizontal row of 4 article cards.
7. **Careers teaser** — split section, image + headline + CTA.
8. **Footer** — multi-column links, social icons, legal row.

## Content routes

Each secondary route follows the same editorial template: oversized H1, intro paragraph, then route-specific grid (service tiles / industry tiles / article cards / role listings). Reuse a shared `<PageHero>`, `<TileGrid>`, and `<ArticleCard>` component set.

## Design system (src/styles.css)

Update tokens to:

- `--background`: warm off-white
- `--foreground`: near-black
- `--primary`: Accenture purple (oklch equivalent of #a100ff)
- `--accent`: same purple, `--muted`: warm gray
- Add `--font-display` (Inter/Space Grotesk via `<link>` in __root head).

Keep shadcn structure; only retheme tokens. No hardcoded hex in components.

## Technical notes

- Load Google Fonts via `<link>` in `__root.tsx` head (never @import in CSS).
- Generate ~6–8 hero/service/case-study images via imagegen (corporate/editorial photography style, human-centric, business abstract).
- All content is placeholder/illustrative — clearly a template, not claiming to be Accenture.
- SEO: unique head() per route with title, description, og:title, og:description, og:type. og:image only on leaves with a hero image.
- No backend needed; contact form is presentational only (no submission wiring) unless requested later.

## Out of scope (ask before adding)

- Real form submission / Lovable Cloud backend
- Multi-language support
- CMS / dynamic articles
- Search