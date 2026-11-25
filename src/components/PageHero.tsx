import { cn } from '../lib/cn'
import { buildSrcSet } from '../lib/images'

type PageHeroProps = {
  eyebrow: string
  title: string
  lede: string
  image?: string
  imageAlt?: string
  imageCaption?: string
}

const IMAGE_SIZES: Record<string, { width: number; height: number }> = {
  '/images/workspace.jpg': { width: 1600, height: 1068 },
  '/images/studio.jpg': { width: 1600, height: 1068 },
  '/images/team.jpg': { width: 1600, height: 1067 },
  '/images/faq-support.jpg': { width: 1600, height: 900 },
  '/images/contact-handshake.jpg': { width: 1600, height: 900 },
}

export function PageHero({ eyebrow, title, lede, image, imageAlt, imageCaption }: PageHeroProps) {
  const imageSize = image ? IMAGE_SIZES[image] : undefined

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
            <img
              src={image}
              srcSet={imageSize ? buildSrcSet(image, imageSize.width) : undefined}
              sizes="(min-width: 1024px) 560px, 100vw"
              alt={imageAlt ?? title}
              width={imageSize?.width}
              height={imageSize?.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
            />
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
