import { ArrowRight, ArrowUpRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { gsap } from '../lib/gsap'
import { RotatingBadge } from './RotatingBadge'
import { Starburst } from './Starburst'
import { Sticker } from './Sticker'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return

    const context = gsap.context(() => {
      gsap.set('.hero-line', { yPercent: 115 })
      gsap.set('.hero-eyebrow', { opacity: 0, y: 14 })
      // Keep the intro copy fully opaque: it is the LCP element, so hiding it
      // until JavaScript runs would delay the largest paint.
      gsap.set('.hero-copy-block', { y: 28 })
      gsap.set('.sticker-inner', { opacity: 0, scale: 0.55 })
      gsap.set('.rotating-badge-wrap', { opacity: 0, scale: 0.7 })

      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      })

      intro
        .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.55 })
        .to(
          '.hero-line',
          { yPercent: 0, duration: 1.05, stagger: 0.09, ease: 'power4.out' },
          '-=0.3',
        )
        .to('.hero-copy-block', { y: 0, duration: 0.8 }, '-=0.6')
        .to(
          '.sticker-inner',
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: 'back.out(1.7)',
            stagger: 0.07,
          },
          '-=0.75',
        )
        .to(
          '.rotating-badge-wrap',
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.4)' },
          '-=0.55',
        )

      gsap.utils.toArray<HTMLElement>('[data-sticker]').forEach((sticker) => {
        const floatLayer = sticker.querySelector<HTMLElement>('[data-float]')
        const distance = Number(sticker.dataset.float ?? 5)
        if (!floatLayer) return

        gsap.to(floatLayer, {
          y: distance,
          duration: 3.2 + Math.random() * 1.6,
          delay: Math.random() * 0.9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Parallax is a desktop enhancement; on mobile the stickers sit in flow.
      if (window.matchMedia('(min-width: 1024px)').matches) {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((sticker) => {
          const amount = Number(sticker.dataset.parallax ?? 0.4)

          gsap.to(sticker, {
            y: -140 * amount,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
        })
      }
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
        <p className="hero-eyebrow mono-label mb-5 text-orange-deep">
          hello &#123;&#123; local business &#125;&#125;
        </p>

        <div className="relative">
          <h1 className="hero-title display relative z-10 text-ink">
            <span className="line-mask">
              <span className="hero-line block">Websites built,</span>
            </span>
            <span className="line-mask line-mask--overlap">
              <span className="hero-line hero-line-orange block text-orange-deep">rebuilt &amp; hosted</span>
            </span>
            <span className="line-mask">
              <span className="hero-line hero-line-serif block font-serif text-blue italic">
                for South African business.
              </span>
            </span>
          </h1>

          <div className="sticker-layer relative z-20 mt-8 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-0 lg:block">
            <Sticker className="sticker-uptime" rotate={8} float={6} parallax={0.7}>
              <div className="w-20 sm:w-24 lg:w-36">
                <svg viewBox="0 0 180 180" className="size-full drop-shadow-[3px_3px_0_#111111]">
                  <circle
                    cx="90"
                    cy="90"
                    r="88"
                    fill="#c8f34a"
                    stroke="#111111"
                    strokeWidth="2"
                  />
                  <defs>
                    <path
                      id="uptime-badge-path"
                      d="M90,90 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0"
                    />
                  </defs>
                  <text className="fill-ink font-mono text-[10px] tracking-[0.16em] uppercase">
                    <textPath href="#uptime-badge-path" startOffset="4%">
                      GLOBAL EDGE NETWORK · 330+ CITIES ·
                    </textPath>
                  </text>
                  <text
                    x="90"
                    y="99"
                    textAnchor="middle"
                    className="fill-ink font-display text-[46px]"
                  >
                    330+
                  </text>
                  <text
                    x="90"
                    y="119"
                    textAnchor="middle"
                    className="fill-ink font-mono text-[8px] tracking-[0.2em]"
                  >
                    EDGE COVERAGE
                  </text>
                </svg>
              </div>
            </Sticker>

            <Sticker
              className="sticker-latency"
              rotate={-8}
              float={7}
              parallax={0.85}
            >
              <div className="relative flex size-16 flex-col items-center justify-center text-center sm:size-20 lg:size-28">
                <Starburst className="absolute inset-0 size-full text-blue" />
                <span className="display relative text-xl leading-none text-cream lg:text-3xl">
                  &minus;99%
                </span>
                <span className="mono-label relative mt-1 text-[0.42rem] text-cream lg:text-[0.55rem]">
                  Latency
                </span>
              </div>
            </Sticker>

            <Sticker
              className="sticker-support"
              rotate={-4}
              float={5}
              parallax={0.55}
            >
              <div className="flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-3 py-2.5 text-cream shadow-hard-sm sm:px-4">
                <Heart
                  className="size-4 fill-pink text-pink"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="mono-label text-[0.52rem] text-cream sm:text-[0.58rem]">
                  Local support
                </span>
              </div>
            </Sticker>

            <Sticker
              className="sticker-localhosting hidden lg:block"
              rotate={-2}
              float={5}
              parallax={0.25}
            >
              <div className="flex items-center gap-2 rounded-full border-2 border-ink bg-[#faf7ef] px-4 py-2.5 shadow-hard-sm">
                <span className="flex items-center gap-1" aria-hidden="true">
                  <span className="size-2 rounded-full border border-ink bg-lime" />
                  <span className="size-2 rounded-full border border-ink bg-pink" />
                  <span className="size-2 rounded-full border border-ink bg-blue" />
                </span>
                <span className="mono-label text-[0.58rem]">Cloudflare</span>
              </div>
            </Sticker>

            <Sticker
              className="sticker-7to1 hidden xl:block"
              rotate={6}
              float={4}
              parallax={0.35}
            >
              <div className="border-2 border-ink bg-orange px-4 py-2.5 shadow-hard">
                <span className="display block text-2xl leading-none">30 &rarr; 1</span>
                <span className="mono-label mt-1 block text-[0.48rem]">Hosting tools</span>
              </div>
            </Sticker>

            <Sticker
              className="sticker-servers hidden lg:block"
              rotate={5}
              float={4}
              parallax={0.45}
            >
              <div className="border-2 border-ink bg-yellow px-3 py-2 shadow-hard">
                <p className="mono-label text-[0.46rem]">Cloudflare</p>
                <p className="display mt-1 text-xl leading-[0.95]">
                  Global
                  <br />
                  &rarr; Local
                </p>
              </div>
            </Sticker>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-start justify-between gap-10 md:mt-12 md:flex-row md:items-end">
          <div className="hero-copy-block w-full max-w-[30rem]">
            <p className="max-w-[38ch] text-[clamp(1rem,1.05vw,1.125rem)] leading-relaxed text-ink/80">
              Southweb is a <strong>web design and hosting studio in Centurion</strong>, pairing
              Cloudflare’s global edge network with a real local team. Fast delivery for South
              African visitors, real humans on support, and no overseas latency tax.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/process" className="btn btn-dark w-full sm:w-auto">
                <span className="btn-circle bg-pink" aria-hidden="true">
                  <ArrowRight className="size-4" strokeWidth={2.4} />
                </span>
                See how it works
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline w-full bg-cream sm:w-auto"
              >
                <span className="btn-circle bg-ink text-cream" aria-hidden="true">
                  <ArrowUpRight className="size-4" strokeWidth={2.4} />
                </span>
                Book a call
              </Link>
            </div>
          </div>

          <RotatingBadge className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
