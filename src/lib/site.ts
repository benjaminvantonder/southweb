export const SITE = {
  name: 'Southweb',
  tagline: 'Websites and hosting for South African businesses',
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
    title: 'New website',
    price: 4000,
    billing: 'once-off',
    bestFor: 'A business that needs a new website.',
    body: 'A complete website made for your business, from the first design to the day it goes live.',
    bullets: [
      'Designed for your business',
      'The pages we agree on',
      'Works on phones and computers',
      'Ready to go live',
    ],
  },
  {
    id: 'rebuild',
    title: 'Website rebuild',
    price: 3500,
    billing: 'once-off',
    bestFor: 'A website that looks old or loads slowly.',
    body: 'We take your current website, give it a fresh look and make it faster, keeping the content that still works.',
    bullets: ['Fresh new look', 'Keep your content', 'Loads faster', 'Keep your web address'],
  },
  {
    id: 'nonprofit',
    title: 'Non-profit website',
    price: 2000,
    billing: 'once-off',
    bestFor: 'Registered non-profits and community groups.',
    body: 'A complete website for non-profits and community groups, at a price that suits a tight budget.',
    bullets: [
      'Complete website',
      'Made for your community',
      'Donation details',
      'Easy to update',
    ],
  },
  {
    id: 'hosting',
    title: 'Website hosting',
    price: 300,
    billing: 'monthly',
    bestFor: 'A website you already have that needs a reliable home.',
    body: 'Hosting keeps your website online. We look after it, keep it secure, keep it fast and are here when something goes wrong.',
    bullets: [
      'Keeps your site online',
      'Secure padlock included',
      'Loads fast for visitors',
      'Local help when needed',
    ],
  },
]

export const SALE = {
  headline: 'First 10 clients get 50% off.',
  detail:
    'First come, first served. The first 10 customers get half price on every service, websites and hosting included.',
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
    title: 'Talk',
    body: 'We talk about your business, what you need and the pages you want. You get a clear price and timeline before anything starts.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'We show you how the website will look. You approve the design before we start making it.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'We make the website and show it to you on a private link so you can ask for changes.',
  },
  {
    number: '04',
    title: 'Launch and care',
    body: 'Your website goes live. We keep it online and are here if you need us.',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'What does Southweb do?',
    answer:
      'We make new websites, rebuild old ones, make websites for non-profits and host websites. We work with businesses and organisations across South Africa.',
  },
  {
    question: 'How does payment work?',
    answer:
      'The pricing page explains what you pay once and what is monthly. If anything is unclear, ask us and we will walk you through it.',
  },
  {
    question: 'Do you have any special offers?',
    answer: 'Yes. See the pricing page for current prices and offers.',
  },
  {
    question: 'What is included in a new website?',
    answer:
      'A design made for your business, the pages we agree on, and a website that works on phones and computers. We agree the price and timeline before we start.',
  },
  {
    question: 'I already have a website. Do I need a rebuild?',
    answer:
      'If your site looks old, loads slowly or is hard to update, a rebuild is usually the best choice. We keep the content that still works and give it a fresh look. You keep your web address.',
  },
  {
    question: 'Can you host a website you did not make?',
    answer:
      'Yes. We can host a website you already have. Send us the address and we will check that we can look after it.',
  },
  {
    question: 'How fast will my website be?',
    answer:
      'Most Southweb pages load in under a second for visitors in South Africa. We also aim to keep your website online 99.9% of the time.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Use the contact form, email info@southweb.co.za or call +27 76 639 5871. Tell us what you need and we will reply with the next step.',
  },
]
