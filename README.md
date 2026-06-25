# whitepace — Frontend Developer Technical Assessment

Next.js (App Router) + TypeScript + Tailwind CSS recreation of the supplied whitepace landing page.

**Live demo:** https://frontend-assessment-whitepace.vercel.app/
**Repository:** https://github.com/Hassan-Kirmani9/frontend-assessment-whitepace

## Tech Stack
Next.js 16, TypeScript, Tailwind CSS v4, next/font, next/image, react-icons for brand logos. No general UI library — components hand-built.

## Run Locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:3000`. Node 18.18+.

## Structure
src/
├── app/         # layout, page, loading skeleton, globals.css
├── components/
│   ├── layout/  # Navbar, Footer, ThemeToggle, ScrollProgress
│   ├── sections/# Hero, Features, Pricing, Testimonials, etc.
│   └── ui/      # Button, Card, Accordion, Highlight, Reveal
├── data/        # All copy/content
└── lib/         # cn() helper, useReveal hook

## Animations
Scroll fade-ins (IntersectionObserver), hero entrance keyframes, card hover-lift, animated counters, mobile scroll-snap carousels. `prefers-reduced-motion` respected throughout.

## Accessibility
Semantic landmarks, skip link, visible focus states, ARIA on all interactive elements, keyboard-operable nav/menu, accessible accordion, AA contrast in both themes.

## Performance
`next/image` + `next/font` everywhere, CSS-driven animations, server components by default, `"use client"` only where needed.

## Assumptions
- Placeholder SVGs used for product mockups (none provided)
- Testimonial avatars from a placeholder face service, not licensed photos
- Brand colors sampled by eye from screenshots
- Dark mode defaults to light regardless of system theme

## Bonus Features
✅ Dark mode · ✅ Animated mobile nav · ✅ Sticky blurred navbar · ✅ Scroll progress bar · ✅ Active nav highlighting · ✅ Loading skeleton · ✅ Extra accessibility · ✅ This README