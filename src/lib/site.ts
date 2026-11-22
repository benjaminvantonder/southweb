export const SITE = {
  name: 'Southweb',
  tagline: 'Cloudflare-powered web hosting for South African business',
  email: 'southweb.hosting@gmail.com',
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
  { label: 'Process', path: '/process' },
  { label: 'FAQ', path: '/faq' },
] as const

export type Service = {
  title: string
  body: string
  bullets: string[]
}

export const SERVICES: Service[] = [
  {
    title: 'Managed Cloudflare hosting',
    body: 'Your website hosted on Cloudflare’s global edge network, with managed DNS, SSL, caching and delivery for South African and global audiences.',
    bullets: ['Global CDN', 'Managed SSL', 'Caching rules', 'Analytics'],
  },
  {
    title: 'Website design and build',
    body: 'Modern, fast marketing sites and web apps designed around clean typography, bold structure and a clear conversion path.',
    bullets: ['Design system', 'React / static build', 'CMS', 'Image optimisation'],
  },
  {
    title: 'E-commerce hosting',
    body: 'Online stores hosted on fast infrastructure with caching, image delivery and payment integration support.',
    bullets: ['Product performance', 'Cart reliability', 'Checkout optimisation'],
  },
  {
    title: 'Migration and decommissioning',
    body: 'Move existing sites away from legacy hosting with minimal downtime and clean up old vendor tooling.',
    bullets: ['Free first migration', 'DNS move', 'Email move'],
  },
  {
    title: 'Performance and Core Web Vitals',
    body: 'Technical fixes to keep LCP, CLS and INP healthy after launch, with regression checks as content grows.',
    bullets: ['LCP < 2.5s', 'CLS < 0.1', 'Performance audits'],
  },
  {
    title: 'Security and managed updates',
    body: 'Managed patching, security headers, DDoS protection through Cloudflare and proactive monitoring for client sites.',
    bullets: ['Managed updates', 'WAF', 'DDoS', 'Backups'],
  },
]

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
    body: 'Strategy, audit, analytics and competitive context. We map what the site must do before we design it.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'Information architecture, visual direction, prototypes and content design. You approve the direction early.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'Design, development and content build on modern stack, with staging deployment before production cutover.',
  },
  {
    number: '04',
    title: 'Launch and care',
    body: 'Migration, DNS cutover, monitoring and ongoing support through Southweb’s local team.',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'Do you host websites on Cloudflare?',
    answer: 'Yes. Southweb hosts client websites on Cloudflare’s global edge network, with managed DNS, SSL, caching and delivery through Cloudflare.',
  },
  {
    question: 'Do the servers matter for South Africa?',
    answer: 'Southweb uses Cloudflare’s global infrastructure and local South African support, so South African visitors reach fast edge networks while our team handles care from Centurion.',
  },
  {
    question: 'Can you migrate a client away from their old host?',
    answer: 'Yes. We handle migrations to Cloudflare-hosted infrastructure with staged testing and minimal downtime.',
  },
  {
    question: 'What happens if a site goes down?',
    answer: 'We monitor managed sites and have a direct support channel. Critical incidents trigger immediate response and rollback if needed.',
  },
  {
    question: 'Do you manage security?',
    answer: 'We apply managed updates, security headers, DDoS protection and SSL management where relevant through Cloudflare.',
  },
  {
    question: 'How is support handled?',
    answer: 'Southweb is a local team in Centurion. Client sites get direct access to a human who knows the site’s context.',
  },
]
