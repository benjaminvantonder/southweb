import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { buildSrcSet } from '../lib/images'
import { WORK } from '../lib/site'

export function WorkPage() {
  return (
    <>
      <PageHero
        title="Websites we have made."
        lede="A few real websites for South African businesses, from architecture to emergency services and live production."
        image="/images/studio.jpg"
        imageAlt="Workspace used for website design work"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {WORK.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group overflow-hidden border-2 border-ink bg-[#faf7ef] shadow-hard transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm"
            >
              <div className="overflow-hidden border-b-2 border-ink">
                <img
                  src={project.image}
                  srcSet={buildSrcSet(project.image, 1280)}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  alt={project.imageAlt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mono-label text-orange-deep">{project.category}</p>
                <h2 className="display mt-3 text-3xl text-ink">{project.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{project.summary}</p>
                <p className="mt-4 font-mono text-xs text-ink/60">
                  {project.result} <span aria-hidden="true">↗</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTASection
        title="Have a project like these?"
        lede="Tell us about your business and what you need. We will tell you how we can help."
        primaryTo="/contact"
        primaryLabel="Start the project"
        secondaryTo="/services"
        secondaryLabel="Review services"
      />
    </>
  )
}
