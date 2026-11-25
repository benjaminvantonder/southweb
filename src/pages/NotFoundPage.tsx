import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section relative z-10 bg-cream">
      <div className="shell max-w-[760px] text-center">
        <p className="mono-label mb-5 text-orange-deep">(00) Lost</p>
        <h1 className="display text-ink text-[clamp(3rem,7vw,5.5rem)]">Page not found.</h1>
        <p className="mt-6 text-lg text-ink/75">
          That page isn’t live yet. Head back to the homepage and keep exploring Southweb.
        </p>
        <Link to="/" className="btn btn-dark mt-8">
          Back home <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
