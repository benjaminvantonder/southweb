import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PricingPage } from './pages/PricingPage'
import { ProcessPage } from './pages/ProcessPage'
import { ServicesPage } from './pages/ServicesPage'
import { WorkPage } from './pages/WorkPage'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SaleBadge } from './components/SaleBadge'
import { useLenis } from './hooks/useLenis'
import { ScrollTrigger } from './lib/gsap'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Southweb — Websites built, rebuilt and hosted in South Africa',
  '/work': 'Work — Southweb',
  '/services': 'Services — Southweb',
  '/pricing': 'Pricing — Southweb',
  '/process': 'Process — Southweb',
  '/faq': 'FAQ — Southweb',
  '/contact': 'Contact — Southweb',
}

function App() {
  const { pathname, key } = useLocation()
  const lenisRef = useLenis()

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES['/']
  }, [pathname])

  // Stop the browser from restoring the previous page's scroll offset.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Every navigation starts the new page at the top, even when Lenis is
  // mid-animation on the page we are leaving.
  useEffect(() => {
    const lenis = lenisRef.current

    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true })
    } else {
      window.scrollTo(0, 0)
    }

    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    ScrollTrigger.refresh()
    ScrollTrigger.update()
  }, [key, pathname, lenisRef])

  return (
    <div className="relative min-h-[100svh] overflow-x-clip bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:rounded-full focus:border-2 focus:border-ink focus:bg-lime focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:tracking-[0.12em] focus:uppercase"
      >
        Skip to content
      </a>

      <Cursor />
      <Header />

      <main id="main" key={pathname} className="page-animate">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <SaleBadge />
    </div>
  )
}

export default App
