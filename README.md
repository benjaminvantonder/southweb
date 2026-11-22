# Southweb

Cloudflare-powered web hosting, design and care for South African business.

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
    RotatingBadge.tsx
    Starburst.tsx
    Sticker.tsx
    WhySection.tsx
  hooks/
    useLenis.ts
    usePrefersReducedMotion.ts
  lib/
    cn.ts
    gsap.ts
    site.ts
  pages/
    ContactPage.tsx
    FaqPage.tsx
    HomePage.tsx
    NotFoundPage.tsx
    ProcessPage.tsx
    ServicesPage.tsx
    WorkPage.tsx
  App.tsx
  main.tsx
  index.css
```

## Production note

Cloudflare Pages should use the SPA fallback defined in `public/_redirects`:

```text
/* /index.html 200
```

## Design notes

- Neo-brutalist tokens: ink borders, hard shadows, rounded pills, rotated stickers.
- Cream, lime, orange, forest, pink, blue, yellow palette.
- Fluid display type with Anton + Instrument Serif italic.
- GSAP masked headline, sticker floats/parallax, scroll word reveal, marquee.
- Lenis smooth scroll and ScrollTrigger sync.
- Reduced-motion fallbacks and custom cursor.
