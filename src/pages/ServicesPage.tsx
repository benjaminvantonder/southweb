import { Link } from 'react-router-dom'
import { Check, Globe2, HeartHandshake, RefreshCw, Server } from 'lucide-react'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SERVICES, SALE, formatRand, salePrice } from '../lib/site'

const serviceIcons = {
  build: Globe2,
  rebuild: RefreshCw,
  nonprofit: HeartHandshake,
  hosting: Server,
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="(03) Services"
        title="Websites built, rebuilt and hosted."
        lede="Four services, one local team. Builds are paid once-off, hosting is monthly, and every price is listed plainly."
        image="/images/workspace.jpg"
        imageAlt="Meeting room where website builds and hosting plans are mapped out"
        imageCaption="Design · Build · Hosting"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <p className="mono-label mb-5 text-orange-deep">What we do</p>
              <h2 className="display text-ink text-[clamp(2.4rem,4.8vw,4.2rem)]">
                Four ways to work with us.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Pick the service that matches where you are: starting fresh, modernising what you
                have, running a non-profit, or simply needing a better host.
              </p>
            </div>
            <Link
              to="/pricing"
              className="flex max-w-[300px] flex-col gap-1 border-2 border-ink bg-orange p-4 shadow-hard transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm"
            >
              <span className="mono-label text-ink/85">{SALE.eyebrow}</span>
              <span className="display text-xl text-ink">{SALE.headline}</span>
              <span className="font-mono text-xs text-ink/85">See the pricing page ↗</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.id]

              return (
                <article
                  key={service.id}
                  className="flex h-full flex-col border-2 border-ink bg-[#faf7ef] p-6 shadow-hard sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-lime">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mono-label border-2 border-ink bg-cream px-3 py-1.5 text-ink/70">
                      {service.billing === 'monthly' ? 'Monthly' : 'Once-off'}
                    </span>
                  </div>

                  <h3 className="display mt-5 text-2xl text-ink">{service.title}</h3>
                  <p className="mt-2 font-mono text-[0.65rem] tracking-[0.12em] text-orange-deep uppercase">
                    {service.bestFor}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{service.body}</p>

                  <ul className="mt-5 grid gap-2 border-t-2 border-ink/15 pt-4 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-ink/75">
                        <Check className="mt-0.5 size-4 shrink-0 text-orange-deep" strokeWidth={3} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t-2 border-ink/15 pt-5">
                    <span className="display text-3xl text-ink">
                      {formatRand(salePrice(service.price))}
                    </span>
                    {service.billing === 'monthly' ? (
                      <span className="font-display text-lg text-ink/70">/month</span>
                    ) : null}
                    <span className="font-mono text-xs text-ink/60 line-through">
                      {formatRand(service.price)}
                    </span>
                    <span className="mono-label text-ink/60">50% off · first 10</span>
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-dark mt-6 w-full"
                  >
                    Enquire <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              )
            })}
          </div>

          <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink/60">
            Build prices are once-off and exclude the domain. Hosting is R300 per month and can be
            added to any build or used for a site you already have.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="(04) Start here"
        title="Know which one fits?"
        lede="Send us the site address and what you need. We will recommend one of the four services and confirm your debut-sale slot."
        primaryTo="/contact"
        primaryLabel="Talk to us"
        secondaryTo="/pricing"
        secondaryLabel="See pricing"
      />
    </>
  )
}
