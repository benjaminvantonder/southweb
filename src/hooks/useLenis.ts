import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

/**
 * Smooth scrolling, driven by the GSAP ticker so ScrollTrigger and Lenis stay
 * in lockstep. Disabled entirely when the visitor prefers reduced motion.
 */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      anchors: true,
      autoToggle: true,
    })

    const onScroll = () => ScrollTrigger.update()
    const raf = (time: number) => lenis.raf(time * 1000)

    lenis.on('scroll', onScroll)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Local fonts can shift the layout slightly after first paint.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    return () => {
      lenis.off('scroll', onScroll)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
