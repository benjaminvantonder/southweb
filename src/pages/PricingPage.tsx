import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SALE, SERVICES, formatRand, salePrice } from '../lib/site'

const buildServices = SERVICES.filter((service) => service.billing === 'once-off')
const hosting = SERVICES.find((service) => service.billing === 'monthly')

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="(04) Pricing"
        title="Straight prices. No surprises."
        lede="Four services, priced in rand. Builds are once-off, hosting is monthly, and our first 10 clients get 50% off either way."
      />

      <section className="relative z-10 bg-cream pb-4">
        <div className="shell">
          <div className="grid items-center gap-6 border-2 border-ink bg-orange p-6 shadow-hard sm:p-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mono-label text-ink/70">{SALE.eyebrow}</p>
              <h2 className="display mt-3 text-3xl text-ink sm:text-4xl lg:text-5xl">
                {SALE.headline}
              </h2>
              <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink/80 sm:text-base">
                {SALE.detail}
              </p>
            </div>
            <div className="flex items-center gap-4 border-2 border-ink bg-cream px-5 py-4">
              <span className="display text-5xl leading-none text-ink">10</span>
              <span className="mono-label max-w-[10ch] leading-relaxed text-ink/70">
                client slots
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section relative z-10 bg-cream">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <p className="mono-label mb-5 text-orange-deep">(05) Website builds</p>
              <h2 className="display text-ink text-[clamp(2.4rem,5vw,4.4rem)]">Once-off builds.</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                You pay once for the design and build. Hosting is separate and billed monthly, whether
                you take it with us or keep your current host.
              </p>
            </div>
            <p className="max-w-[30ch] border-l-2 border-ink pl-4 font-mono text-xs leading-relaxed tracking-[0.08em] text-ink/60 uppercase">
              Prices below show the 50% debut discount.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {buildServices.map((service) => (
              <article
                key={service.id}
                className="flex h-full flex-col border-2 border-ink bg-[#faf7ef] p-6 shadow-hard sm:p-7"
              >
                <p className="mono-label text-orange-deep">Once-off</p>
                <h3 className="display mt-3 text-2xl text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{service.bestFor}</p>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="display text-4xl text-ink">{formatRand(salePrice(service.price))}</span>
                  <span className="font-mono text-sm text-ink/45 line-through">
                    {formatRand(service.price)}
                  </span>
                </div>
                <p className="mono-label mt-2 text-ink/60">50% off · first 10 clients</p>

                <ul className="mt-6 grid gap-2.5 border-t-2 border-ink/15 pt-5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink/75">
                      <Check className="mt-0.5 size-4 shrink-0 text-orange-deep" strokeWidth={3} aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn btn-dark mt-7 w-full"
                >
                  Start this build <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink/60">
            Build prices are once-off. A domain and hosting are not included in the build price; hosting
            is available below at R300 per month, or you can keep your existing host.
          </p>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="shell">
          <div className="grid items-center gap-8 border-2 border-cream bg-[#faf7ef] p-6 shadow-hard sm:p-9 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mono-label text-orange-deep">(06) Hosting</p>
              <h2 className="display mt-4 text-ink text-[clamp(2.2rem,4.5vw,3.8rem)]">
                Hosting, month to month.
              </h2>
              <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-ink/75">
                {hosting?.body}
              </p>
              <p className="mt-4 max-w-[50ch] text-sm leading-relaxed text-ink/60">
                Works for sites we built and sites we did not. Billed monthly, separate from any
                once-off build price.
              </p>
            </div>

            <div className="border-2 border-ink bg-cream p-6">
              {hosting ? (
                <>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="display text-5xl text-ink">
                      {formatRand(salePrice(hosting.price))}
                    </span>
                    <span className="font-display text-xl text-ink/70">/month</span>
                    <span className="font-mono text-sm text-ink/45 line-through">
                      {formatRand(hosting.price)}
                    </span>
                  </div>
                  <p className="mono-label mt-3 text-ink/60">50% off · first 10 clients</p>

                  <ul className="mt-6 grid gap-2.5 border-t-2 border-ink/15 pt-5 sm:grid-cols-2">
                    {hosting.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-ink/75">
                        <Check className="mt-0.5 size-4 shrink-0 text-orange-deep" strokeWidth={3} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/contact?service=${encodeURIComponent(hosting.title)}`}
                    className="btn btn-dark mt-7 w-full"
                  >
                    Ask about hosting <span aria-hidden="true">↗</span>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mono-label mb-5 text-orange-deep">(07) Good to know</p>
            <h2 className="display text-ink text-[clamp(2.2rem,4.5vw,3.8rem)]">
              What the price covers.
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink/75">
              Every build is scoped before work starts, so you know the pages, the price and the
              timeline upfront.
            </p>
          </div>

          <ul className="grid gap-4">
            {[
              'A custom design and a mobile-first build across the agreed pages.',
              'Launch onto Cloudflare hosting, or handover to your existing host.',
              'Builds are once-off payments. Hosting is R300 per month, separate.',
              'The debut discount applies to the first 10 paying customers, first come, first served.',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-2 border-ink bg-[#faf7ef] p-5 text-sm leading-relaxed text-ink/80 shadow-hard-sm"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-orange-deep" strokeWidth={3} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="(08) Pick a service"
        title="Lock in debut pricing."
        lede="Tell us which service fits and we will confirm your slot in the first 10, then send the scope and timeline."
        primaryTo="/contact"
        primaryLabel="Claim a slot"
        secondaryTo="/services"
        secondaryLabel="Compare services"
      />
    </>
  )
}
