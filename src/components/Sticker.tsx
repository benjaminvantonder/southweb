import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../lib/cn'

type StickerProps = {
  children: ReactNode
  className?: string
  rotate?: number
  float?: number
  parallax?: number
}

/**
 * Decorative sticker. Three nested layers keep the CSS rotation, the GSAP
 * entry animation and the GSAP parallax from fighting over one transform.
 */
export function Sticker({
  children,
  className,
  rotate = 0,
  float = 5,
  parallax = 0.4,
}: StickerProps) {
  return (
    <div
      className={cn('sticker-parallax', className)}
      data-sticker
      data-float={float}
      data-parallax={parallax}
      aria-hidden="true"
    >
      <div
        className="sticker-rotate"
        style={{ '--rotate': `${rotate}deg` } as CSSProperties}
      >
        <div className="sticker-float" data-float>
          <div className="sticker-inner">{children}</div>
        </div>
      </div>
    </div>
  )
}
