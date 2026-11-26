# Southweb

Website design, rebuilds and hosting for South African businesses.

## Stack

- React 19 + TypeScript + Vite
- React Router for multi-page client routing
- Tailwind CSS v4 (CSS-first theme)
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Fontsource fonts (Anton, Instrument Serif, JetBrains Mono, Inter)
- Lucide icons
- Static images in `public/images/`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Routes

- `/` — Home: hero, ribbons, why, services preview, work preview, process preview, testimonials, CTA
- `/work` — Work
- `/services` — Services
- `/pricing` — Pricing
- `/process` — Process
- `/faq` — FAQ
- `/contact` — Contact

## Structure

```text
src/
  components/
    CTASection.tsx
    Cursor.tsx
    FaqSection.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    PageHero.tsx
    Ribbon.tsx
    Starburst.tsx
    WhySection.tsx
  hooks/
    useLenis.ts
    usePrefersReducedMotion.ts
  lib/
    cn.ts
    gsap.ts
    images.ts
    seo.ts
    site.ts
  pages/
    ContactPage.tsx
    FaqPage.tsx
    HomePage.tsx
    NotFoundPage.tsx
    PricingPage.tsx
    ProcessPage.tsx
    ServicesPage.tsx
    WorkPage.tsx
  App.tsx
  main.tsx
  index.css
```

## Production note

Every route is prerendered to static HTML at build time. The host serves each
route from its own `index.html` and uses `dist/404.html` for unknown paths.

## Design notes

- Neo-brutalist tokens: ink borders, hard shadows, rounded pills.
- Cream, lime, orange, forest, pink, blue, yellow palette.
- Fluid display type with Anton + Instrument Serif italic.
- GSAP masked headline, scroll word reveal, marquee.
- Lenis smooth scroll and ScrollTrigger sync.
- Reduced-motion fallbacks and custom cursor.
