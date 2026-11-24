export const SITE = {
  name: 'Southweb',
  tagline: 'Cloudflare-powered web hosting for South African business',
  email: 'info@southweb.co.za',
  phone: '+27 76 639 5871',
  phoneHref: 'tel:+27766395871',
  whatsappHref: 'https://wa.me/27766395871',
  address: '17 Van Riebeeck Avenue, Centurion',
  addressShort: '17 Van Riebeeck Ave, Centurion',
  url: 'https://southweb.co.za',
}

export const NAV_LINKS = [
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Process', path: '/process' },
  { label: 'FAQ', path: '/faq' },
] as const

export type Billing = 'once-off' | 'monthly'

export type Service = {
  id: 'build' | 'rebuild' | 'nonprofit' | 'hosting'
  title: string
  price: number
  billing: Billing
  bestFor: string
  body: string
  bullets: string[]
}

// The only four services Southweb offers. Keep copy, pricing and the contact
// form's service list tied to this array.
export const SERVICES: Service[] = [
  {
    id: 'build',
    title: 'Fully built website',
    price: 4000,
    billing: 'once-off',
    bestFor: 'A business that needs a brand-new website.',
    body: 'A complete website designed and built from scratch, from the first layout to a launch-ready site on Cloudflare.',
    bullets: ['Custom design', 'Multi-page structure', 'Mobile-first build', 'Launch-ready'],
  },
  {
    id: 'rebuild',
    title: 'Website rebuild (from existing)',
    price: 3500,
    billing: 'once-off',
    bestFor: 'An existing site that looks dated or is slow.',
    body: 'We take your current website and rebuild it with a modern look, faster pages and a cleaner structure, keeping the content that still works.',
    bullets: ['Modern redesign', 'Existing content reused', 'Faster pages', 'Same domain'],
  },
  {
    id: 'nonprofit',
    title: 'Non-profit websites',
    price: 2000,
    billing: 'once-off',
    bestFor: 'Registered non-profits and community organisations.',
    body: 'A complete website for non-profits and community organisations, at a price that respects a tight budget.',
    bullets: ['Full website build', 'Community-focused layout', 'Donation details', 'Easy to update'],
  },
  {
    id: 'hosting',
    title: 'Website hosting only',
    price: 300,
    billing: 'monthly',
    bestFor: 'A site you already have that needs a reliable host.',
    body: 'Hosting for a website you already own. We put it on Cloudflare, keep SSL and caching handled, and stay available when something needs attention.',
    bullets: ['Cloudflare global edge', 'SSL included', 'Caching and delivery', 'Local support'],
  },
]

export const SALE = {
  eyebrow: 'Debut sale',
  headline: 'First 10 clients get 50% off.',
  detail: 'First come, first served. The first 10 customers get half price on every service, builds and hosting included.',
  short: 'First 10 clients · 50% off',
}

export function formatRand(amount: number) {
  return `R${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`
}

export function salePrice(amount: number) {
  return amount / 2
}

export type WorkProject = {
  name: string
  category: string
  client: string
  summary: string
  image: string
  imageAlt: string
  previewImage: string
  previewImageAlt: string
  url: string
  result: string
}

// These are the only client sites Southweb has actually worked on.
export const WORK: WorkProject[] = [
  {
    name: 'FVT Architecture',
    category: 'Architecture',
    client: 'South African practice',
    summary:
      'Showcase site for a residential architecture practice, covering design work and developer services.',
    image: '/images/work-fvt.jpg',
    imageAlt: 'FVT Architecture website showing residential architecture work',
    previewImage: '/images/preview-architecture.jpg',
    previewImageAlt: 'Modern South African house exterior',
    url: 'https://fvt.co.za',
    result: 'Live at fvt.co.za',
  },
  {
    name: 'CERT-SA',
    category: 'Non-profit · Emergency services',
    client: 'Centurion, Gauteng',
    summary:
      'Community emergency response site covering medical response, safety, training, volunteers and donations.',
    image: '/images/work-certsa.jpg',
    imageAlt: 'CERT-SA website showing emergency response and community services',
    previewImage: '/images/preview-emergency.jpg',
    previewImageAlt: 'Paramedic providing emergency medical response',
    url: 'https://certsa.org',
    result: 'Live at certsa.org',
  },
  {
    name: 'Steller Industries',
    category: 'Sound · Light · Vision',
    client: 'South Africa',
    summary:
      'Production services site for sound, lighting, photography and video, in business since 2014.',
    image: '/images/work-steller.jpg',
    imageAlt: 'Steller Industries website showing sound, light and vision services',
    previewImage: '/images/preview-production.jpg',
    previewImageAlt: 'Concert stage lighting for a live production',
    url: 'https://stellerindustries.co.za',
    result: 'Live at stellerindustries.co.za',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

// Verbatim testimonials supplied by the clients named below.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Ben Van Tonder provided great service in updating and improving my website. He identified all areas that needed immediate attention, got them functioning properly, and implemented many enhancements throughout our collaboration. His technical skills, attention to detail, and dedication to providing high-quality workmanship make him an ideal candidate for any web development project.',
    name: 'Steller Industries',
    role: 'Sound, light and vision',
  },
  {
    quote:
      'It is with great pleasure that we recommend Ben van Tonder for his exceptional professionalism, technical expertise, and dedication. His ability to understand our operational requirements and translate them into practical, user-friendly systems has greatly improved our online presence and administrative efficiency. His reliable support and innovative approach have made him a trusted technology partner.',
    name: 'Ruan Heyns',
    role: 'CERT-SA',
  },
]

export type ProcessStep = {
  number: string
  title: string
  body: string
}

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    body: 'We talk through the business, the goal and the pages you need. You get a clear scope, price and timeline before anything starts.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'Layout, type and colour direction for the pages in scope. You approve the design early, before the build begins.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'We build the approved design as a fast, mobile-first website, then show it to you on a staging link for feedback.',
  },
  {
    number: '04',
    title: 'Launch and care',
    body: 'The site goes live on Cloudflare hosting. Builds are paid once-off; hosting continues monthly for as long as you need it.',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'What services does Southweb offer?',
    answer:
      'Four: a fully built website (R4 000), a website rebuild from your existing site (R3 500), non-profit websites (R2 000) and website hosting only (R300 per month).',
  },
  {
    question: 'How does payment work?',
    answer:
      'Website builds are once-off payments. Hosting is billed monthly and is separate from the build price, whether you take hosting with us or keep your current host.',
  },
  {
    question: 'What is the debut sale?',
    answer:
      'Our first 10 customers get 50% off every service. It is first come, first served, and the offer closes once those 10 slots are taken.',
  },
  {
    question: 'What is included in a fully built website?',
    answer:
      'A custom design, a mobile-first build across the pages in scope, and launch onto Cloudflare hosting. Scope and timeline are agreed upfront so there are no surprises.',
  },
  {
    question: 'I already have a website. Do I need a rebuild?',
    answer:
      'If the site works but looks dated, loads slowly or is hard to update, a rebuild is usually the better fit. We reuse the content that still works and give it a modern look, on the same domain.',
  },
  {
    question: 'Can you host a site you did not build?',
    answer:
      'Yes. Website hosting only is R300 per month. Send us the site address and we will confirm it is a good fit for Cloudflare hosting before you commit.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Use the contact form, email info@southweb.co.za or call +27 76 639 5871. Tell us which service you need and we will reply with the next step.',
  },
]
