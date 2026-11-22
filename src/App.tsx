import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProcessPage } from './pages/ProcessPage'
import { ServicesPage } from './pages/ServicesPage'
import { WorkPage } from './pages/WorkPage'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useLenis } from './hooks/useLenis'
import { ScrollTrigger } from './lib/gsap'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Southweb — Cloudflare-powered web hosting for South African business',
  '/work': 'Work — Southweb',
  '/services': 'Services — Southweb',
  '/process': 'Process — Southweb',
  '/faq': 'FAQ — Southweb',
  '/contact': 'Contact — Southweb',
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES['/']
  }, [pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    ScrollTrigger.refresh()
    ScrollTrigger.update()
  }, [pathname])

  useLenis()

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

        <main key={pathname} className="page-animate">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
  )
}

export default App
