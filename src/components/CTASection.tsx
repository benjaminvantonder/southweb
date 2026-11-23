import { Link } from 'react-router-dom'
import { SALE } from '../lib/site'

type CTASectionProps = {
  eyebrow?: string
  title?: string
  lede?: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
}

export function CTASection({
  eyebrow = '(06) Ready when you are',
  title = 'Give your website a serious upgrade.',
  lede = 'Once-off builds, monthly hosting and local support — from first sketch to launch.',
  primaryTo = '/contact',
  primaryLabel = 'Get started',
  secondaryTo = '/pricing',
  secondaryLabel = 'See pricing',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-lime py-24 sm:py-28">
      <div className="shell relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mono-label mb-5 text-ink">{eyebrow}</p>
          <h2 className="display text-ink text-[clamp(2.6rem,6vw,5.5rem)]">{title}</h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink/75">{lede}</p>
        </div>

        <div className="border-2 border-ink bg-cream p-8 shadow-hard">
          <p className="text-lg font-semibold text-ink sm:text-xl">What happens next?</p>
          <ol className="mt-5 grid gap-3 text-sm text-ink/80">
            <li>Discovery call or intake form.</li>
            <li>A recommendation across the four services.</li>
            <li>Scope, price and timeline in writing.</li>
            <li>Launch and hosting handover.</li>
          </ol>
        </div>
      </div>

      <div className="shell mt-14 flex flex-col gap-5 sm:flex-row sm:items-center">
        <Link to={primaryTo} className="btn btn-dark w-full sm:w-auto">
          {primaryLabel} <span aria-hidden="true">↗</span>
        </Link>
        <Link to={secondaryTo} className="btn btn-outline w-full bg-cream sm:w-auto">
          {secondaryLabel}
        </Link>
      </div>

      <div className="shell mt-8">
        <Link
          to="/pricing"
          className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border-2 border-ink bg-cream px-4 py-2.5 shadow-hard-sm transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <span className="mono-label text-orange-deep">{SALE.eyebrow}</span>
          <span className="font-mono text-xs text-ink/80">{SALE.short}</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
