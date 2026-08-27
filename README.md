# Handeva Landing Page

One-page digital product hub for [Handeva](https://handeva.com) — built with Next.js, Tailwind CSS, and Framer Motion. Design based on Stitch project **Handeva Minimal Studio Showcase**.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Cloudflare Pages deployment

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/` for Cloudflare Pages.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect Git
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20+
4. Add custom domain `handeva.com` (CNAME to your `*.pages.dev` URL)

### Local preview (optional)

```bash
npm run build
npx wrangler pages dev out
```

## Product URLs

Edit [`src/config/products.ts`](src/config/products.ts) to set live product links. Replace placeholder `#` values with real URLs.

## Design Reference

Stitch assets and design tokens are in [`design-reference/`](design-reference/).

## Project Structure

```
src/
├── app/           # layout, page, globals
├── components/    # Header, Hero, ProductCard, ProductGrid, Footer
├── config/        # products data
└── lib/           # Framer Motion variants
```
