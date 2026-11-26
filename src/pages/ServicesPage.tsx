import { Link } from 'react-router-dom'
import { Check, Globe2, HeartHandshake, RefreshCw, Server } from 'lucide-react'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SERVICES } from '../lib/site'

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
        title="Websites and hosting."
        lede="Four simple services for South African businesses. Pick the one that fits, or ask us and we will help you choose."
        image="/images/workspace.jpg"
        imageAlt="Meeting room where website and hosting plans are discussed"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell">
          <div className="max-w-[720px]">
            <h2 className="display text-ink text-[clamp(2.4rem,4.8vw,4.2rem)]">
              Four ways we can help.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Starting fresh, modernising what you have, running a non-profit, or simply needing a
              better home for your website. There is a service for each one.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.id]

              return (
                <article
                  key={service.id}
                  className="flex h-full flex-col border-2 border-ink bg-[#faf7ef] p-6 shadow-hard sm:p-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-lime">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

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
            Not sure which one you need?{' '}
            <Link to="/contact" className="font-semibold text-ink underline">
              Tell us about your business
            </Link>{' '}
            and we will point you in the right direction. Prices are on the{' '}
            <Link to="/pricing" className="font-semibold text-ink underline">
              pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Not sure which one fits?"
        lede="Send us the address of your current site, if you have one, and what you need. We will tell you which service makes sense."
        primaryTo="/contact"
        primaryLabel="Talk to us"
        secondaryTo="/pricing"
        secondaryLabel="See prices"
      />
    </>
  )
}
