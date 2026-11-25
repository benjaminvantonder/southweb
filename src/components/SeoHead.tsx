import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, buildStructuredData, getRouteSeo } from '../lib/seo'

const INDEX_ROBOTS = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    if (hreflang) element.setAttribute('hreflang', hreflang)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function removeAlternates() {
  document.head.querySelectorAll('link[rel="alternate"]').forEach((element) => element.remove())
}

/**
 * Keeps the document head in sync with the active route. The build-time
 * prerenderer writes the same tags into each static HTML file, so this only
 * has visible work when a visitor navigates inside the SPA.
 */
export function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getRouteSeo(pathname)
    const url = absoluteUrl(seo.path)
    const image = absoluteUrl(seo.image)

    document.title = seo.title
    document.documentElement.lang = 'en-ZA'

    setMeta('name', 'description', seo.description)
    setMeta('name', 'robots', seo.noindex ? 'noindex,nofollow' : INDEX_ROBOTS)
    setMeta('name', 'author', 'Southweb')
    setMeta('name', 'geo.region', 'ZA-GT')
    setMeta('name', 'geo.placename', 'Centurion, Gauteng')

    if (seo.noindex) {
      document.head.querySelector('link[rel="canonical"]')?.remove()
      removeAlternates()
    } else {
      setLink('canonical', url)
      setLink('alternate', url, 'en-ZA')
      setLink('alternate', url, 'x-default')
    }

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Southweb')
    setMeta('property', 'og:locale', 'en_ZA')
    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:image:width', String(seo.imageWidth))
    setMeta('property', 'og:image:height', String(seo.imageHeight))
    setMeta('property', 'og:image:alt', seo.imageAlt)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', seo.title)
    setMeta('name', 'twitter:description', seo.description)
    setMeta('name', 'twitter:image', image)
    setMeta('name', 'twitter:image:alt', seo.imageAlt)

    let jsonLd = document.getElementById('seo-jsonld') as HTMLScriptElement | null
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.id = 'seo-jsonld'
      jsonLd.type = 'application/ld+json'
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify(buildStructuredData(seo))
  }, [pathname])

  return null
}
