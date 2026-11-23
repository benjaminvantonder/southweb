import { cn } from '../lib/cn'

type PageHeroProps = {
  eyebrow: string
  title: string
  lede: string
  image?: string
  imageAlt?: string
  imageCaption?: string
}

export function PageHero({ eyebrow, title, lede, image, imageAlt, imageCaption }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream pt-36 pb-16 sm:pt-40">
      <div className={cn('shell grid items-center gap-10', image && 'lg:grid-cols-[1.1fr_0.9fr]')}>
        <div className="max-w-[760px]">
          <p className="mono-label mb-5 text-orange-deep">{eyebrow}</p>
          <h1 className="hero-title display text-ink">{title}</h1>
          <p className="mt-7 max-w-[52ch] text-[clamp(1rem,1.05vw,1.125rem)] leading-relaxed text-ink/80">
            {lede}
          </p>
        </div>

        {image ? (
          <figure className="relative border-2 border-ink bg-[#faf7ef] shadow-hard">
            <img src={image} alt={imageAlt ?? title} className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]" />
            {imageCaption ? (
              <figcaption className="border-t-2 border-ink bg-cream px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/70">
                {imageCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </section>
  )
}
