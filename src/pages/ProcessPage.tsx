import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { PROCESS } from '../lib/site'

export function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="(05) Process"
        title="From first idea to live launch."
        lede="A four-stage process that keeps scope, price and timeline clear from the first call to launch day."
        image="/images/team.jpg"
        imageAlt="Team collaborating on a website build"
        imageCaption="Staging and build phase"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell max-w-[1000px]">
          <ol className="relative grid gap-10 before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-px before:bg-ink/20 before:content-['']">
            {PROCESS.map((step) => (
              <li key={step.number} className="relative pl-16">
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
        eyebrow="(06) Next step"
        title="Ready to move forward?"
        lede="Book a working call or send your current setup and goal. We’ll map the next stage."
        primaryTo="/contact"
        primaryLabel="Book a call"
        secondaryTo="/faq"
        secondaryLabel="Read FAQ"
      />
    </>
  )
}
