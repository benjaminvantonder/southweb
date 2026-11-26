import { Link } from 'react-router-dom'

type CTASectionProps = {
  title?: string
  lede?: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
}

export function CTASection({
  title = 'Ready to get your website sorted?',
  lede = 'New websites, rebuilds and hosting from a local team in Centurion.',
  primaryTo = '/contact',
  primaryLabel = 'Get started',
  secondaryTo = '/pricing',
  secondaryLabel = 'See prices',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-lime py-24 sm:py-28">
      <div className="shell relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="display text-ink text-[clamp(2.6rem,6vw,5.5rem)]">{title}</h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink/75">{lede}</p>
        </div>

        <div className="border-2 border-ink bg-cream p-8 shadow-hard">
          <p className="text-lg font-semibold text-ink sm:text-xl">What happens next?</p>
          <ol className="mt-5 grid gap-3 text-sm text-ink/80">
            <li>We chat about your business and what you need.</li>
            <li>We tell you which service fits.</li>
            <li>You get a clear price and timeline in writing.</li>
            <li>Your website goes live and we keep it online.</li>
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
    </section>
  )
}
