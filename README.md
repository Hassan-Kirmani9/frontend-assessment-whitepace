# whitepace — Frontend Developer Technical Assessment

A recreation of the supplied "whitepace" landing page design, built with Next.js
(App Router), TypeScript, and Tailwind CSS.

**Live demo:** https://frontend-assessment-whitepace.vercel.app/
**Repository:** https://github.com/Hassan-Kirmani9/frontend-assessment-whitepace

---

## 1. Project Overview

A marketing/landing page for a fictional project-management product called
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
supplied design screenshots and included for completeness.

## 2. Tech Stack

- **Next.js 16** (App Router, `src/` directory)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first theme via `@theme`)
- **next/font** for self-hosted Google Fonts (Sora for display, Inter for body)
- **next/image** for all images
- **react-icons** for accurate brand marks (Apple, Microsoft, Slack, Google), plus
  downloaded SVGs in `public/logos/` for integration icons (Gmail, Dropbox, Google
  Drive, Google Calendar, Outlook)
- No general UI component library — Button, Card, Accordion, etc. are hand-built

## 3. Running Locally

```bash
npm install
npm run dev
```
Opens at `http://localhost:3000`. Requires Node.js 18.18+.

## 4. Other Commands

| Command         | Description                        |
|-----------------|-------------------------------------|
| `npm run build` | Production build                    |
| `npm run start` | Run the production build locally    |
| `npm run lint`  | Run ESLint                          |

## 5. Deployment

Live on Vercel, connected to the `main` branch — every push auto-deploys.

**Live URL:** https://frontend-assessment-whitepace.vercel.app/

## 6. Component Structure