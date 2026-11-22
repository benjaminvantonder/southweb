import { Link } from 'react-router-dom'
import { Palette, ShoppingBag, ShieldCheck } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Ribbon } from '../components/Ribbon'
import { WhySection } from '../components/WhySection'
import { CTASection } from '../components/CTASection'
import { SERVICES, WORK, PROCESS, TESTIMONIALS } from '../lib/site'

const tickerItems = [
  'Cloudflare hosting',
  'Local support',
  'Free SSL',
  'Global edge',
  'Daily backups',
  'No latency tax',
  'One team',
]

export function HomePage() {
  const featuredServices = SERVICES.slice(0, 3)

  return (
    <>
      <Hero />

      <div className="ribbons" aria-hidden="true">
        <Ribbon items={tickerItems} variant="orange-back" direction="right" speed={38} />
        <Ribbon items={tickerItems} variant="lime" direction="left" speed={30} />
        <Ribbon items={tickerItems} variant="orange" direction="right" speed={34} />
      </div>

      <WhySection />

      <section className="section relative z-10 bg-cream">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-[620px]">
              <p className="mono-label mb-5 text-orange-deep">(03) Services</p>
              <h2 className="display text-ink text-[clamp(2.5rem,5vw,4.4rem)]">
                Hosting, design, care. One partner.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Southweb is the single accountable partner for your web presence — hosting, design, build
                and ongoing support — powered by Cloudflare globally and supported locally in Centurion.
              </p>
              <Link to="/services" className="btn btn-dark mt-8">
                See services <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => {
                const Icon = service.title.includes('design')
                  ? Palette
                  : service.title.includes('E-commerce')
                    ? ShoppingBag
                    : ShieldCheck

                return (
                  <article
                    key={service.title}
                    className="flex h-full flex-col border-2 border-ink bg-[#faf7ef] p-6 shadow-hard"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full border-2 border-ink bg-lime">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="display mt-5 text-2xl text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section relative z-10 bg-cream">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="mono-label mb-5 text-orange-deep">(04) Work</p>
              <h2 className="display text-ink text-[clamp(2.5rem,5.2vw,4.6rem)]">
                Recent South African builds.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Bold, fast websites for architects, emergency responders and production crews — all
                hosted on modern infrastructure.
              </p>
            </div>
            <Link to="/work" className="btn btn-outline bg-cream">
              All work <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {WORK.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group border-2 border-ink bg-[#faf7ef] shadow-hard transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm"
              >
                <div className="overflow-hidden border-b-2 border-ink">
                  <img
                    src={project.previewImage}
                    alt={project.previewImageAlt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="mono-label text-orange-deep">{project.category}</p>
                  <h3 className="display mt-3 text-3xl text-ink">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{project.summary}</p>
                  <p className="mt-4 font-mono text-xs text-ink/60">
                    {project.result} <span aria-hidden="true">↗</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mono-label mb-5 text-orange-deep">(05) Process</p>
            <h2 className="display text-ink text-[clamp(2.4rem,4.8vw,4.2rem)]">
              From idea to live site.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              A calm, four-stage process that keeps clients close without slowing delivery.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2">
            {PROCESS.slice(0, 3).map((step) => (
              <li key={step.number} className="border-2 border-ink bg-[#faf7ef] p-6 shadow-hard">
                <span className="font-display text-5xl text-orange">{step.number}</span>
                <h3 className="display mt-3 text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="shell max-w-[1000px] text-center">
          <p className="mono-label mb-5 text-orange">What clients say.</p>
          <div className="mx-auto max-w-[880px] space-y-10 text-left">
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.name} className="border-b-2 border-cream/20 pb-8 last:border-0 last:pb-0">
                <p className="font-display text-2xl leading-snug text-cream sm:text-3xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-lime">
                  {item.name} · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
