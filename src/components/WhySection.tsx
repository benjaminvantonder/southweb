import { useLayoutEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { gsap } from '../lib/gsap'

const revealWords = ['looks', 'after', 'your', 'website.']

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
        <h2 className="why-headline display">
          One local team that{' '}
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
          You do not need to juggle five different companies. Southweb designs your website, keeps
          it online and helps you when something goes wrong. One team, one point of contact, based
          in Centurion.
        </p>

        <div className="mt-12 grid gap-4 border-t-2 border-ink pt-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <strong className="display block text-5xl text-forest">99.9%</strong>
            <span className="mono-label mt-2 block text-forest/75">Time online</span>
          </div>
          <div className="text-center">
            <strong className="display block text-5xl text-forest">&lt;1s</strong>
            <span className="mono-label mt-2 block text-forest/75">Typical page load</span>
          </div>
          <div className="text-center">
            <strong className="display block text-5xl text-forest">24/7</strong>
            <span className="mono-label mt-2 block text-forest/75">Help when needed</span>
          </div>
          <div className="text-center">
            <strong className="display block text-5xl text-forest">1</strong>
            <span className="mono-label mt-2 block text-forest/75">Team to call</span>
          </div>
        </div>
      </div>
    </section>
  )
}
