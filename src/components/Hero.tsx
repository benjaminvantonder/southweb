import { ArrowRight, ArrowUpRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { gsap } from '../lib/gsap'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return

    const context = gsap.context(() => {
      gsap.set('.hero-line', { yPercent: 115 })
      // Keep the intro copy fully opaque: it is the LCP element, so hiding it
      // until JavaScript runs would delay the largest paint.
      gsap.set('.hero-copy-block', { y: 28 })

      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      })

      intro
        .to('.hero-line', { yPercent: 0, duration: 1.05, stagger: 0.09, ease: 'power4.out' })
        .to('.hero-copy-block', { y: 0, duration: 0.8 }, '-=0.6')
    }, sectionRef)

    return () => context.revert()
  }, [reduced])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] bg-cream pt-28 pb-[clamp(8rem,16vw,14rem)] sm:pt-32"
    >
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-10">
        <h1 className="hero-title display relative z-10 text-ink">
          <span className="line-mask">
            <span className="hero-line block">Websites built</span>
          </span>
          <span className="line-mask line-mask--overlap">
            <span className="hero-line hero-line-orange block text-orange">&amp; hosted</span>
          </span>
          <span className="line-mask">
            <span className="hero-line hero-line-serif block font-serif text-blue italic">
              for South African business.
            </span>
          </span>
        </h1>

        <div className="hero-copy-block mt-9 w-full max-w-[34rem] md:mt-12">
          <p className="max-w-[42ch] text-[clamp(1rem,1.05vw,1.125rem)] leading-relaxed text-ink/80">
            Southweb makes new websites, rebuilds old ones and keeps them online. We are based in
            Centurion and help businesses across South Africa get a website that looks good, loads
            fast and is easy to use.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/services" className="btn btn-dark w-full sm:w-auto">
              <span className="btn-circle bg-pink" aria-hidden="true">
                <ArrowRight className="size-4" strokeWidth={2.4} />
              </span>
              See our services
            </Link>
            <Link to="/contact" className="btn btn-outline w-full bg-cream sm:w-auto">
              <span className="btn-circle bg-ink text-cream" aria-hidden="true">
                <ArrowUpRight className="size-4" strokeWidth={2.4} />
              </span>
              Talk to us
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-3 py-2.5 text-cream shadow-hard-sm">
            <Heart className="size-4 fill-pink text-pink" strokeWidth={2} aria-hidden="true" />
            <span className="mono-label text-[0.58rem] text-cream">Local support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
