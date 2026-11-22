import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SERVICES } from '../lib/site'
import { Palette, Server, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react'

const icons = [Server, Palette, ShoppingBag, ShieldCheck, ArrowRight, ShieldCheck]

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="(03) Services"
        title="Services that make the web fast and owned."
        lede="Managed Cloudflare hosting, modern design and build, performance, security and support — one accountable partner for South African businesses."
        image="/images/workspace.jpg"
        imageAlt="Meeting room where web design and hosting plans are mapped out"
        imageCaption="Design · Build · Hosting context"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = icons[index] ?? Server

            return (
              <article
                key={service.title}
                className="flex h-full flex-col border-2 border-ink bg-[#faf7ef] p-7 shadow-hard"
              >
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-ink bg-lime">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="display mt-6 text-2xl text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.body}</p>
                <ul className="mt-5 grid gap-2 border-t-2 border-ink/20 pt-4">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/70">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <CTASection
        eyebrow="(04) Start here"
        title="Ready to simplify your web stack?"
        lede="We’ll audit your current setup and build a Cloudflare-powered plan with clear scope and timeline."
        primaryTo="/contact"
        primaryLabel="Talk to us"
        secondaryTo="/process"
        secondaryLabel="View process"
      />
    </>
  )
}
