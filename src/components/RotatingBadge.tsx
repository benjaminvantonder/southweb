import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../lib/cn'
import { gsap } from '../lib/gsap'

type RotatingBadgeProps = {
  className?: string
}

/** Circular scroll cue: the type ring rotates, the lime centre stays put. */
export function RotatingBadge({ className }: RotatingBadgeProps) {
  const ringRef = useRef<SVGGElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced || !ringRef.current) return

    const tween = gsap.to(ringRef.current, {
      rotation: 360,
      svgOrigin: '70 70',
      duration: 24,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      tween.kill()
    }
  }, [reduced])

  return (
    <a
      href="#why"
      aria-label="Scroll to why Southweb"
      className={cn(
        'rotating-badge-wrap group relative block size-32 shrink-0 rounded-full border-2 border-ink bg-ink shadow-hard transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm lg:size-40',
        className,
      )}
    >
      <svg viewBox="0 0 140 140" className="size-full" aria-hidden="true">
        <defs>
          <path
            id="scroll-badge-path"
            d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
          />
        </defs>
        <g ref={ringRef}>
          <text className="fill-cream font-mono text-[7.5px] tracking-[0.18em] uppercase">
            <textPath href="#scroll-badge-path" startOffset="0%">
              ONE HOST · ONE TEAM · ONE INVOICE · SCROLL DOWN ·
            </textPath>
          </text>
        </g>
        <circle cx="70" cy="70" r="29" fill="#c8f34a" stroke="#111111" strokeWidth="2" />
        <path
          d="M70 58v22m0 0-8-8m8 8 8-8"
          fill="none"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
