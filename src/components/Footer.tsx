import { Link } from 'react-router-dom'
import { SITE, NAV_LINKS } from '../lib/site'

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="shell grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-24">
        <div>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-cream bg-lime px-4 py-2"
            aria-label={`${SITE.name} home`}
          >
            <span className="font-display text-lg leading-none text-ink">SOUTHWEB</span>
            <span className="size-2 rounded-full bg-ink" aria-hidden="true" />
          </Link>
          <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-cream/70">
            Cloudflare-powered web hosting and build care for South African businesses that want fast
            global delivery without losing local support.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mono-label mb-4 text-cream/50">Explore</p>
          <ul className="grid gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-cream/80 transition-colors hover:text-lime">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-lime transition-colors hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="mono-label mb-4 text-cream/50">Contact</p>
          <ul className="grid gap-3 text-sm">
            <li>
              <a href={SITE.phoneHref} className="text-cream/80 transition-colors hover:text-lime">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-cream/80 transition-colors hover:text-lime">
                {SITE.email}
              </a>
            </li>
            <li className="max-w-[34ch] text-cream/70">{SITE.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Cloudflare-powered hosting · Based in Centurion, serving South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
