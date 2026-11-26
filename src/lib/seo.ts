import { FAQS, PROCESS, SERVICES, SITE, WORK, salePrice } from './site'

/**
 * One source of truth for every route's SEO metadata. The same data drives the
 * prerendered HTML at build time and the client-side head updates on navigation,
 * so crawlers and browsers always see the same title, description and schema.
 */
export type RouteSeo = {
  path: string
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  priority: number
  changeFrequency: 'weekly' | 'monthly'
  webPageType?: 'WebPage' | 'CollectionPage' | 'ContactPage'
  noindex?: boolean
}

const DEFAULT_IMAGE = '/images/og-southweb.jpg'
const DEFAULT_IMAGE_ALT =
  'Southweb — websites built and hosted for South African businesses'

export const SEO_ROUTES: Record<string, RouteSeo> = {
  '/': {
    path: '/',
    label: 'Home',
    title: 'Web Design & Website Hosting in South Africa | Southweb',
    description:
      'Southweb makes new websites, rebuilds old ones and hosts websites for South African businesses. Based in Centurion, with clear pricing and local support.',
    image: DEFAULT_IMAGE,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: DEFAULT_IMAGE_ALT,
    priority: 1,
    changeFrequency: 'weekly',
  },
  '/services': {
    path: '/services',
    label: 'Services',
    title: 'Website Design, Rebuilds & Hosting | Southweb',
    description:
      'New websites, website rebuilds, non-profit websites and website hosting for South African businesses. Simple services, clear prices and local support.',
    image: DEFAULT_IMAGE,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Southweb website design, rebuild and hosting services',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  '/pricing': {
    path: '/pricing',
    label: 'Pricing',
    title: 'Website Pricing in South Africa | Southweb',
    description:
      'Southweb website prices in rand: new website R4 000, rebuild R3 500, non-profit R2 000 and hosting R300/month. First 10 clients get 50% off.',
    image: DEFAULT_IMAGE,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Southweb website pricing for new websites, rebuilds and hosting',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/work': {
    path: '/work',
    label: 'Work',
    title: 'Website Portfolio: South African Client Work | Southweb',
    description:
      'Real South African websites made by Southweb for architecture, emergency services and production clients. See the work and visit the live sites.',
    image: '/images/work-certsa.jpg',
    imageWidth: 1280,
    imageHeight: 800,
    imageAlt: 'CERT-SA website made by Southweb for a Centurion emergency response organisation',
    priority: 0.8,
    changeFrequency: 'monthly',
    webPageType: 'CollectionPage',
  },
  '/process': {
    path: '/process',
    label: 'Process',
    title: 'Our Website Design & Launch Process | Southweb',
    description:
      'How Southweb works: talk, design, build, then launch and care. You get a clear price and timeline before work starts, and hosting is handled monthly.',
    image: DEFAULT_IMAGE,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Southweb’s four-step website design and launch process',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  '/faq': {
    path: '/faq',
    label: 'FAQ',
    title: 'Website Design, Pricing & Hosting FAQ | Southweb',
    description:
      'Plain answers about Southweb’s website services, payment, hosting and what happens after launch. No jargon and no surprises.',
    image: DEFAULT_IMAGE,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Southweb frequently asked questions about website design, pricing and hosting',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  '/contact': {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Southweb | Web Design in Centurion, Gauteng',
    description:
      'Contact Southweb in Centurion for a new website, a rebuild or hosting. Call, WhatsApp or email info@southweb.co.za for a clear price and timeline.',
    image: DEFAULT_IMAGE,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Contact Southweb for website design and hosting in Centurion',
    priority: 0.8,
    changeFrequency: 'monthly',
    webPageType: 'ContactPage',
  },
}

export const NOT_FOUND_SEO: RouteSeo = {
  path: '/404',
  label: 'Page not found',
  title: 'Page not found | Southweb',
  description:
    'The page you are looking for is not available. Browse Southweb’s website services, pricing and contact details.',
  image: DEFAULT_IMAGE,
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: DEFAULT_IMAGE_ALT,
  priority: 0,
  changeFrequency: 'monthly',
  noindex: true,
}

export function getRouteSeo(pathname: string): RouteSeo {
  if (!pathname || pathname === '/') return SEO_ROUTES['/']
  const clean = pathname.replace(/\/+$/, '')
  return SEO_ROUTES[clean] ?? NOT_FOUND_SEO
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

const ORGANIZATION_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`
const SERVICES_ID = `${SITE.url}/#services`

type JsonLd = Record<string, unknown>

function organizationSchema(): JsonLd {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    alternateName: 'Southweb Web Design & Hosting',
    url: `${SITE.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/southweb-logo.png'),
      width: 1601,
      height: 585,
    },
    image: absoluteUrl(DEFAULT_IMAGE),
    description:
      'Southweb is a web design and website hosting studio based in Centurion, South Africa. We make new websites, rebuild old ones and host websites for South African businesses.',
    email: SITE.email,
    telephone: SITE.phone,
    currenciesAccepted: 'ZAR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Van Riebeeck Avenue',
      addressLocality: 'Centurion',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    areaServed: [
      { '@type': 'City', name: 'Centurion' },
      { '@type': 'City', name: 'Pretoria' },
      { '@type': 'AdministrativeArea', name: 'Gauteng' },
      { '@type': 'Country', name: 'South Africa' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        email: SITE.email,
        contactType: 'customer service',
        areaServed: 'ZA',
        availableLanguage: ['English'],
      },
    ],
  }
}

function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    alternateName: 'Southweb Web Design & Hosting',
    description:
      'Websites built and hosted for South African businesses, with local support from Centurion.',
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-ZA',
  }
}

function serviceOffers(): JsonLd[] {
  return SERVICES.map((service) => ({
    '@type': 'Offer',
    name: service.title,
    description: `${service.body} ${
      service.billing === 'monthly' ? 'Billed monthly.' : 'Once-off payment.'
    }`,
    price: salePrice(service.price),
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    url: absoluteUrl('/pricing'),
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.body,
      serviceType: service.title,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'Country', name: 'South Africa' },
    },
  }))
}

function offerCatalogSchema(): JsonLd {
  return {
    '@type': 'OfferCatalog',
    '@id': SERVICES_ID,
    name: 'Southweb website services',
    url: absoluteUrl('/pricing'),
    itemListElement: serviceOffers(),
  }
}

function webPageSchema(seo: RouteSeo): JsonLd {
  const url = absoluteUrl(seo.path)
  const isHome = seo.path === '/'
  const isPricing = seo.path === '/pricing'

  return {
    '@type': seo.webPageType ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-ZA',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(seo.image),
    },
    ...(isHome ? {} : { breadcrumb: { '@id': `${url}#breadcrumb` } }),
    ...(isPricing ? { mainEntity: { '@id': SERVICES_ID } } : {}),
    ...(seo.path === '/work' ? { mainEntity: { '@id': `${url}#portfolio` } } : {}),
    ...(seo.path === '/faq' ? { mainEntity: { '@id': `${url}#faq` } } : {}),
    ...(seo.path === '/process' ? { mainEntity: { '@id': `${url}#howto` } } : {}),
  }
}

function breadcrumbSchema(seo: RouteSeo): JsonLd {
  const url = absoluteUrl(seo.path)
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE.url}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: seo.label,
        item: url,
      },
    ],
  }
}

function faqSchema(): JsonLd {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl('/faq')}#faq`,
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function howToSchema(): JsonLd {
  return {
    '@type': 'HowTo',
    '@id': `${absoluteUrl('/process')}#howto`,
    name: 'How Southweb designs and launches a website',
    description:
      'Southweb’s four-step website process: talk, design, build, then launch and care.',
    step: PROCESS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
      url: `${absoluteUrl('/process')}#step-${step.number}`,
    })),
  }
}

function workCollectionSchema(): JsonLd {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/work')}#portfolio`,
    name: 'Southweb website portfolio',
    itemListElement: WORK.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.name,
        description: project.summary,
        url: project.url,
        image: absoluteUrl(project.image),
        creator: { '@id': ORGANIZATION_ID },
      },
    })),
  }
}

export function buildStructuredData(seo: RouteSeo): JsonLd {
  const graph: JsonLd[] = [organizationSchema(), websiteSchema(), webPageSchema(seo)]

  if (seo.path === '/pricing') graph.push(offerCatalogSchema())
  if (seo.path !== '/' && !seo.noindex) graph.push(breadcrumbSchema(seo))
  if (seo.path === '/faq') graph.push(faqSchema())
  if (seo.path === '/process') graph.push(howToSchema())
  if (seo.path === '/work') graph.push(workCollectionSchema())

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Static head block used by the build-time prerenderer. */
export function buildHeadHtml(seo: RouteSeo): string {
  const url = absoluteUrl(seo.path)
  const image = absoluteUrl(seo.image)
  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)
  const imageAlt = escapeHtml(seo.imageAlt)
  const robots = seo.noindex
    ? 'noindex,nofollow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  const jsonLd = JSON.stringify(buildStructuredData(seo)).replace(/</g, '\\u003c')

  return `<title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    ${
      seo.noindex
        ? ''
        : `<link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="en-ZA" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${url}" />`
    }
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Southweb" />
    <meta property="og:locale" content="en_ZA" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${seo.imageWidth}" />
    <meta property="og:image:height" content="${seo.imageHeight}" />
    <meta property="og:image:alt" content="${imageAlt}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${imageAlt}" />
    <meta name="author" content="Southweb" />
    <meta name="geo.region" content="ZA-GT" />
    <meta name="geo.placename" content="Centurion, Gauteng" />
    <script type="application/ld+json" id="seo-jsonld">${jsonLd}</script>`
}

/** XML sitemap generated from the same route metadata as the pages. */
export function buildSitemapXml(lastmod = new Date().toISOString().slice(0, 10)): string {
  const urls = Object.values(SEO_ROUTES)
    .filter((route) => !route.noindex)
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}
