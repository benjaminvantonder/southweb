import { useLayoutEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { gsap } from '../lib/gsap'

const revealWords = ['One', 'local', 'team', 'that', 'owns', 'your', 'site.']

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const revealRef = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !revealRef.current) return

    const context = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('.reveal-word', revealRef.current)

      gsap.to(words, {
        opacity: 1,
        ease: 'none',
        stagger: 0.22,
        scrollTrigger: {
          trigger: revealRef.current,
          start: 'top 88%',
          end: 'top 62%',
          scrub: 0.6,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [reduced])

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative z-10 scroll-mt-24 overflow-hidden bg-lime pt-[clamp(9rem,13vw,12rem)] pb-[clamp(4rem,8vw,7rem)] text-forest"
    >
      <div className="shell mx-auto max-w-[1250px] text-center">
        <p className="mono-label inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-forest px-4 py-2.5 text-lime shadow-hard-sm">
          <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
          (02) Why we exist
        </p>

        <h2 className="why-headline display mt-8 sm:mt-10">
          Fifteen vendors. One edge. Zero{' '}
          <span className="why-highlight">owners.</span> We replace the lot with{' '}
          <span ref={revealRef} className="inline">
            {revealWords.map((word, index) => (
              <span
                key={word}
                className="reveal-word inline-block"
                style={{ marginRight: index === revealWords.length - 1 ? 0 : '0.2em' }}
              >
                {word}
              </span>
            ))}
          </span>
        </h2>

        <p className="mx-auto mt-9 max-w-[60ch] text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed text-forest/80 sm:mt-11">
          A business rarely runs only one stack, but it can certainly run one edge. Southweb pairs
          Cloudflare&apos;s global network with a local team that owns the outcome, so your website is
          fast everywhere and supported by humans in South Africa.
        </p>

        <div className="mt-12 grid gap-4 border-t-2 border-ink pt-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <strong className="display block text-5xl text-forest">99.9%</strong>
            <span className="mono-label mt-2 block text-forest/70">Uptime SLA</span>
          </div>
          <div className="text-center">
            <strong className="display block text-5xl text-forest">330+</strong>
            <span className="mono-label mt-2 block text-forest/70">Global edge cities</span>
          </div>
          <div className="text-center">
            <strong className="display block text-5xl text-forest">&lt;50ms</strong>
            <span className="mono-label mt-2 block text-forest/70">Global avg latency</span>
          </div>
          <div className="text-center">
            <strong className="display block text-5xl text-forest">24/7</strong>
            <span className="mono-label mt-2 block text-forest/70">Local humans</span>
          </div>
        </div>
      </div>
    </section>
  )
}
