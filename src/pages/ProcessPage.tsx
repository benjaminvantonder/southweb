import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { PROCESS } from '../lib/site'

export function ProcessPage() {
  return (
    <>
      <PageHero
        title="How it works."
        lede="Four simple steps from the first chat to a live website. You always know the price and what happens next."
        image="/images/team.jpg"
        imageAlt="Team working together on a website"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell max-w-[1000px]">
          <ol className="relative grid gap-10 before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-px before:bg-ink/20 before:content-['']">
            {PROCESS.map((step) => (
              <li key={step.number} id={`step-${step.number}`} className="relative scroll-mt-28 pl-16">
                <span className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-full border-2 border-ink bg-lime font-display text-xl text-ink shadow-hard-sm">
                  {step.number}
                </span>
                <h2 className="display text-3xl text-ink sm:text-4xl">{step.title}</h2>
                <p className="mt-3 max-w-[60ch] text-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Ready to move forward?"
        lede="Book a call or send us a message. We will explain the next step in plain language."
        primaryTo="/contact"
        primaryLabel="Book a call"
        secondaryTo="/faq"
        secondaryLabel="Read the FAQ"
      />
    </>
  )
}
