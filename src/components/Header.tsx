import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../lib/cn'
import { NAV_LINKS, SITE } from '../lib/site'

const MOBILE_LINKS = [...NAV_LINKS, { label: 'Contact', path: '/contact' }]

export function Header() {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const hasOpenedRef = useRef(false)
  useEffect(() => {
    if (!open) return

    const html = document.documentElement
    const body = document.body
    const previousHtmlOverflow = html.style.overflow
    const previousBodyOverflow = body.style.overflow

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      html.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      overlayRef.current?.focus({ preventScroll: true })
      hasOpenedRef.current = true
    } else if (hasOpenedRef.current) {
      toggleRef.current?.focus({ preventScroll: true })
      hasOpenedRef.current = false
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-[70]">
      <div className="relative z-[80] mx-auto flex max-w-[1700px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            aria-label="Southweb home"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink bg-lime px-3.5 py-2 shadow-hard-sm transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            <span className="font-display text-[1.12rem] leading-none tracking-[0.02em]">SOUTHWEB</span>
            <span className="size-2 rounded-full bg-ink" aria-hidden="true" />
          </Link>

          <span className="mono-label hidden text-ink/70 lg:inline">Local web hosting</span>
        </div>

        <nav
          aria-label="Primary navigation"
          className="absolute top-4 left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border-2 border-ink bg-[#f5f2e9] p-1.5 shadow-hard md:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3.5 py-2 font-mono text-[0.62rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200',
                  isActive ? 'bg-ink text-cream' : 'hover:bg-ink hover:text-cream',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="mono-label hidden text-ink/70 xl:inline">
            Local <span className="text-orange">/</span> Fast <span className="text-orange">/</span>{' '}
            Human
          </span>

          <Link
            to="/contact"
            aria-label="Contact Southweb"
            className="btn btn-pink min-h-11 px-3 text-[0.6rem] sm:px-4 sm:text-[0.65rem]"
          >
            <span className="sm:hidden max-[359px]:hidden">Let&rsquo;s talk</span>
            <span className="hidden sm:inline">Let&rsquo;s talk hosting</span>
            <ArrowUpRight className="size-4" strokeWidth={2.4} aria-hidden="true" />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-11 items-center justify-center rounded-full border-2 border-ink bg-cream shadow-hard-sm transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={2.4} aria-hidden="true" />
            ) : (
              <Menu className="size-5" strokeWidth={2.4} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={overlayRef}
        tabIndex={-1}
        aria-hidden={!open}
        inert={!open}
        style={{ clipPath: open ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)' }}
        className={cn(
          'fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-lime outline-none transition-[clip-path] duration-500 ease-[cubic-bezier(.76,0,.24,1)] md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col justify-center px-5 pt-24 pb-8"
        >
          <ul>
            {MOBILE_LINKS.map((link, index) => (
              <li key={link.path} className="border-b-2 border-forest/20">
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-4 py-3"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={cn(
                          'display text-[clamp(2rem,10vw,4rem)] text-forest transition-transform duration-200 group-hover:translate-x-2',
                          isActive && 'text-ink underline decoration-4 underline-offset-4',
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={cn(
                          'font-mono text-xs tracking-[0.16em]',
                          isActive ? 'text-ink' : 'text-forest/60',
                        )}
                      >
                        {isActive ? '●' : `0${index + 1}`}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-2">
            <span className="mono-label text-forest/60">Say hello</span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-display text-xl break-all text-forest underline decoration-2 underline-offset-4"
            >
              {SITE.email}
            </a>
            <p className="mono-label mt-3 text-forest/60">
              Centurion · South Africa · 24/7 support
            </p>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-fit items-center gap-3 border-2 border-ink bg-orange px-4 py-3 shadow-hard-sm"
            >
              <span className="mono-label text-ink/70">Debut sale</span>
              <span className="font-display text-lg leading-none text-ink">50% off</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
