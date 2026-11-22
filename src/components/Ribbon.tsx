import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { cn } from '../lib/cn'
import { Starburst } from './Starburst'

type RibbonProps = {
  items: string[]
  variant: 'lime' | 'orange' | 'orange-back'
  direction?: 'left' | 'right'
  speed?: number
}

const variantClasses = {
  lime: 'ribbon--lime',
  orange: 'ribbon--orange',
  'orange-back': 'ribbon--orange-back',
}

export function Ribbon({ items, variant, direction = 'left', speed = 30 }: RibbonProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const track = trackRef.current
    if (!track || reduced) return

    let settle: gsap.core.Tween | null = null

    const context = gsap.context(() => {
      const from = direction === 'left' ? 0 : -50
      const to = direction === 'left' ? -50 : 0

      gsap.set(track, { xPercent: from })

      const loop = gsap.to(track, {
        xPercent: to,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })

      // Nudge the loop faster while the visitor is scrolling, then settle back.
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const boost = gsap.utils.clamp(1, 4, 1 + Math.abs(self.getVelocity()) / 1800)
          loop.timeScale(boost)
          settle?.kill()
          settle = gsap.to(loop, {
            timeScale: 1,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.08,
          })
        },
      })
    }, trackRef)

    return () => {
      context.revert()
      settle?.kill()
    }
  }, [direction, reduced, speed])

  // Two identical groups make the -50% / 0 loop seamless.
  const group = [...items, ...items]

  return (
    <div className={cn('ribbon', variantClasses[variant])} aria-hidden="true">
      <div className="ribbon-track" ref={trackRef}>
        {[0, 1].map((groupIndex) => (
          <div className="ribbon-group" key={groupIndex}>
            {group.map((item, itemIndex) => (
              <span className="ribbon-item" key={`${groupIndex}-${itemIndex}`}>
                {item}
                <Starburst className="ribbon-star" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
