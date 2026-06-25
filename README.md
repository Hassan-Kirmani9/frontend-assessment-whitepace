# whitepace — Frontend Developer Technical Assessment

A pixel-matched recreation of the supplied "whitepace" landing page design, built with
Next.js (App Router), TypeScript, and Tailwind CSS.

**Live demo:** _add your Vercel URL here after deploying_
**Repository:** _add your GitHub URL here_

---

## 1. Project Overview

This is a marketing/landing page for a fictional project-management product called
**whitepace**. It includes all 11 sections required by the assessment brief:

1. Navbar (sticky, blurred, dropdowns, mobile menu)
2. Hero
3. Trusted Logos / Sponsors
4. Feature Cards
5. Integrations (data security + favorite apps)
6. Statistics (animated counters)
7. How It Works (4-step process)
8. Testimonials (carousel)
9. Resources / Articles
10. CTA banner
11. Footer

Plus a Pricing section ("Choose Your Plan") and an FAQ accordion, both shown in the
supplied design screenshots, and not separately listed but included for completeness.

## 2. Tech Stack

- **Next.js 16** (App Router, `src/` directory)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first theme via `@theme`, no `tailwind.config.js` needed)
- **next/font** for self-hosted Google Fonts (Sora for display, Inter for body)
- **next/image** for all raster/vector assets
- No UI component library — every primitive (Button, Card, Accordion, etc.) is
  hand-built, per the "avoid large UI libraries" requirement.

## 3. Setup & Installation

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# App runs at http://localhost:3000
```

Requires Node.js 18.18+ (Node 20/22 recommended).

## 4. Development Commands

| Command         | Description                          |
|-----------------|---------------------------------------|
| `npm run dev`   | Start local dev server (Turbopack)    |
| `npm run build` | Production build                      |
| `npm run start` | Run the production build locally      |
| `npm run lint`  | Run ESLint (Next.js + a11y rules)     |

## 5. Build & Deployment (Vercel)

1. Push this repository to GitHub (public, per the assessment requirement).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no custom build settings are required.
   - Build command: `next build` (default)
   - Output: handled automatically by the Next.js Vercel adapter
4. Deploy. Every push to `main` will trigger a new production deployment.

No environment variables are required — this project has no backend/API calls.

## 6. Component Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, dark-mode init script
│   ├── page.tsx          # Composes all sections in order
│   ├── globals.css       # Theme tokens, dark mode, animations, reduced-motion rules
│   ├── robots.ts         # SEO: robots.txt
│   └── sitemap.ts        # SEO: sitemap.xml
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky+blur, dropdowns, active-section highlight, mobile menu
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── ThemeToggle.tsx   # Dark mode switch (bonus)
│   │   └── ScrollProgress.tsx # Top progress bar (bonus)
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustedLogos.tsx
│   │   ├── Features.tsx          # 6-card feature grid
│   │   ├── FeatureHighlights.tsx # Composes 3x SplitFeature blocks
│   │   ├── SplitFeature.tsx      # Reusable text+visual alternating layout
│   │   ├── OrbitGraphic.tsx      # Custom SVG illustration ("Work together")
│   │   ├── Integrations.tsx
│   │   ├── Statistics.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Resources.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/
│       ├── Button.tsx        # variant/size system, works as <a> or <button>
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       ├── Highlight.tsx     # the hand-drawn yellow underline
│       ├── Accordion.tsx     # accessible FAQ accordion
│       ├── Container.tsx
│       ├── Reveal.tsx        # scroll fade-in wrapper
│       ├── WavyBackground.tsx
│       ├── icons.tsx         # hand-rolled SVG icon set
│       ├── brand-icons.tsx   # Apple/Microsoft/Slack/Google marks
│       └── service-icons.tsx # Gmail/Dropbox/Drive/Calendar/Outlook marks
│
├── data/content.ts      # All copy, links, and structured content (single source of truth)
├── types/content.ts     # Shared TypeScript interfaces for the data above
└── lib/
    ├── cn.ts             # className merge helper (clsx + tailwind-merge)
    └── useReveal.ts      # IntersectionObserver hook powering Reveal
```

**Why this structure:** content (`data/`) is fully separated from presentation
(`components/`), so copy changes never require touching JSX, and every section
component stays a thin, readable layout — it imports data and maps it onto small,
reusable UI primitives. `ui/` only contains generic, content-agnostic building blocks;
`sections/` contains the one-off page sections; `layout/` contains the chrome that wraps
every page (navbar/footer/theme/scroll-progress).

## 7. Animation Implementation Approach

- **Scroll fade-ins:** a single `Reveal` component wraps section content. It uses the
  `useReveal` hook (`IntersectionObserver`) to flip a `data-visible` attribute, and the
  actual transition lives in plain CSS (`[data-reveal]` rules in `globals.css`) rather
  than a JS animation library — keeps the bundle small and the motion GPU-cheap
  (opacity + transform only).
- **Hero entrance:** a small scoped `<style>` block with `@keyframes fadeUp` /
  `heroIn`, gated behind `motion-safe:` so it's automatically skipped under
  `prefers-reduced-motion`.
- **Feature card hover lift:** plain Tailwind `hover:-translate-y-1.5` + `transition-all`
  on the `Card` primitive — no JS needed.
- **Button hover/focus:** Tailwind `transition-all duration-200` plus
  `focus-visible:ring-2` for visible keyboard focus.
- **Floating icons** (sponsors, integration icons): a CSS `@keyframes float-y` applied
  via `.animate-float`, with staggered `animation-delay` per icon so they don't move in
  lockstep.
- **Animated counters** (Statistics section): a small `requestAnimationFrame` tween
  triggered once by `IntersectionObserver`, with an eased (cubic-out) curve. Skips
  straight to the final value if `prefers-reduced-motion` is set or
  `IntersectionObserver` is unavailable.
- **Reduced motion:** handled in two layers — a global CSS rule in `globals.css`
  collapses all transition/animation durations to ~0 under
  `@media (prefers-reduced-motion: reduce)`, and the JS-driven animations
  (`AnimatedCounter`, hero entrance) independently check the same media query so they
  never even start a tween loop.

## 8. Accessibility Considerations

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, one `<h1>` in the Hero,
  logical heading order through the rest of the page.
- Skip-to-content link, visible on keyboard focus.
- All interactive elements (`Button`, nav links, accordion triggers, carousel controls,
  theme toggle) have visible `focus-visible` rings and correct `aria-*` attributes
  (`aria-expanded`, `aria-controls`, `aria-pressed`, `aria-selected`, `aria-label`).
- Mobile menu and dropdowns are operable by keyboard (focus opens dropdowns, not just
  hover) and the mobile menu traps body scroll while open.
- FAQ accordion uses the disclosure pattern (`button` + `aria-expanded` +
  `aria-controls`, a `role="region"` panel) instead of non-semantic divs.
- Decorative SVGs (`WavyBackground`, floating dot illustrations) are `aria-hidden`;
  illustrations that *do* carry meaning get a real `aria-label` via `role="img"`.
- Color contrast was kept at or above WCAG AA for body text against its background in
  both light and dark themes.
- `prefers-reduced-motion` is respected globally (see Animation section above).

## 9. Performance Optimizations

- All images go through `next/image` (responsive `sizes`, lazy loading by default,
  `priority` only on the above-the-fold hero image).
- Fonts are loaded via `next/font/google`, which self-hosts and inlines font files at
  build time — no runtime request to Google Fonts, no layout shift from late-loading
  web fonts (`display: swap` plus matched fallback stack).
- No icon library dependency — icons are inline SVG components, so there's no extra
  JS bundle or sprite sheet to fetch.
- Animations are CSS-driven wherever possible (transform/opacity only) rather than
  animating layout-triggering properties.
- Static generation: the whole page has no server data dependency, so
  `next build` prerenders it fully as static HTML (confirmed via the build output,
  every route shows as `○ (Static)`).
- `reactStrictMode` enabled; no unnecessary client components — most of the page is
  server components, and `"use client"` is only added where real interactivity is
  needed (Navbar, ThemeToggle, ScrollProgress, Testimonials carousel, Accordion,
  Reveal, AnimatedCounter).

## 10. Assumptions & Trade-offs

- The provided screenshots show placeholder light-blue rectangles in place of real
  product screenshots/mockups. Those have been recreated as simple on-brand SVG
  placeholders (`public/images/hero-mockup.svg`, `placeholder-panel.svg`) rather than
  stock photography, so the layout, spacing and aspect ratios match the brief exactly
  without using a real product's imagery.
- Avatar images and article thumbnails are likewise generated SVG placeholders, not
  real photography — swap in real assets at the same paths in `public/images/` to
  finish polishing in a real handoff.
- Exact brand colors were sampled by eye from the screenshots (a primary blue around
  `#3b7af0`, a navy `#0c2247`, and a soft yellow highlighter `#ffd66b`) since no design
  tokens/Figma file with exact hex values was provided.
- Copy for some sections (feature card descriptions, FAQ answers, article excerpts) was
  written to match the tone of the visible screenshot copy, since some sections in the
  brief showed partial or placeholder text.
- The FAQ/Accordion section was implemented even though it was marked optional in the
  brief, since it appears as a natural extension of the "100% your data" /
  trust-building content and demonstrates the accessible accordion pattern requested.
- "Solutions" and "Products" navbar dropdowns link to in-page anchors rather than
  separate routes, since the brief describes a single landing page, not a
  multi-page site.

## 11. Bonus Features Implemented

- ✅ Dark mode support (toggle in navbar, persisted to `localStorage`, respects system
  preference on first visit, no flash-of-wrong-theme via a blocking inline script)
- ✅ Animated mobile navigation (slide/fade transition, focus-safe)
- ✅ Sticky navbar with backdrop blur
- ✅ Scroll progress indicator (top of viewport)
- ✅ Active navigation highlighting (`IntersectionObserver`-driven)
- ✅ Additional accessibility improvements (see section 8)
- ✅ Well-written documentation (this README + inline code comments on non-obvious
  logic)

"Clean loading states and skeletons" was not applicable in the strict sense, since the
page has no async data fetching — there's nothing to show a loading state for. If a CMS
or API were added, `loading.tsx` and skeleton components would slot in at the route or
section level.

## 12. Lighthouse

Run against the production build (`npm run build && npm run start`) rather than the
dev server, since dev mode includes unminified code and HMR overhead that skews scores.
