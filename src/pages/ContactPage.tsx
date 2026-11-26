import { useState, useSyncExternalStore, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SERVICES, SITE } from '../lib/site'

const subscribeToNothing = () => () => {}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [serviceChoice, setServiceChoice] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  // Stay on the default option during the hydration pass, then apply a service
  // chosen elsewhere on the site once the browser takes over.
  const hydrated = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  )
  const requestedService = SERVICES.find((item) => item.title === searchParams.get('service'))?.title
  const service =
    serviceChoice ?? (hydrated && requestedService ? requestedService : SERVICES[0].title)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ].join('\n')

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Website project enquiry from ${name || 'South African business'}`,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <>
      <PageHero
        title="Let’s talk about your website."
        lede="Tell us what you need and we will reply with a clear price and timeline. No jargon, no pressure."
        image="/images/contact-handshake.jpg"
        imageAlt="Client and web developer agreeing on a new website project"
      />

      <section className="section relative z-10 bg-cream">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid min-w-0 gap-6">
            <div className="border-2 border-ink bg-[#faf7ef] p-6 shadow-hard sm:p-7">
              <h2 className="display text-3xl text-ink">Start the conversation.</h2>
              <ul className="mt-6 grid gap-4 text-sm">
                <li>
                  <a href={SITE.phoneHref} className="font-display text-2xl text-ink transition-colors hover:text-orange">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="font-display text-xl break-all text-ink transition-colors hover:text-orange sm:text-2xl">
                    {SITE.email}
                  </a>
                </li>
                <li className="text-ink/70">{SITE.address}</li>
                <li className="text-ink/70">
                  Serving Centurion, Pretoria and businesses across South Africa.
                </li>
                <li>
                  <a href={SITE.whatsappHref} className="font-mono text-xs uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-orange">
                    Chat on WhatsApp ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-2 border-ink bg-ink p-6 text-cream shadow-hard sm:p-7">
              <h2 className="font-display text-2xl text-cream">Support hours</h2>
              <p className="mt-3 text-lg">Mon–Fri, 08:00–17:00 (South African time)</p>
              <p className="mt-3 text-sm text-cream/70">
                If your website goes down, we respond any time.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=17+Van+Riebeeck+Avenue+Centurion"
                target="_blank"
                rel="noreferrer"
                className="btn btn-pink mt-6 w-full"
              >
                Get directions ↗
              </a>
            </div>
          </div>

          <div className="min-w-0 border-2 border-ink bg-[#faf7ef] p-6 shadow-hard sm:p-8">
            <h2 className="display text-3xl text-ink">Send an enquiry.</h2>
            {sent ? (
              <div className="mt-8 border-2 border-ink bg-cream p-6">
                <p className="font-display text-2xl break-words text-ink">Thanks, {name || 'friend'}.</p>
                <p className="mt-3 text-sm text-ink/70">
                  Your email app should have opened with the message. If it didn’t, email us directly at{' '}
                  <a href={`mailto:${SITE.email}`} className="font-semibold break-all text-ink underline">
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form className="mt-6 grid min-w-0 gap-5" onSubmit={handleSubmit}>
                <div className="grid min-w-0 gap-2 sm:grid-cols-2">
                  <label className="grid min-w-0 gap-2">
                    <span className="mono-label text-ink/70">Name</span>
                    <input
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="min-h-12 w-full min-w-0 border-2 border-ink bg-cream px-4 font-mono text-sm outline-none focus-visible:ring-4 focus-visible:ring-blue"
                    />
                  </label>
                  <label className="grid min-w-0 gap-2">
                    <span className="mono-label text-ink/70">Email</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="min-h-12 w-full min-w-0 border-2 border-ink bg-cream px-4 font-mono text-sm outline-none focus-visible:ring-4 focus-visible:ring-blue"
                    />
                  </label>
                </div>

                <label className="grid min-w-0 gap-2">
                  <span className="mono-label text-ink/70">Service</span>
                  <select
                    value={service}
                    onChange={(event) => setServiceChoice(event.target.value)}
                    className="min-h-12 w-full min-w-0 border-2 border-ink bg-cream px-4 font-mono text-sm outline-none focus-visible:ring-4 focus-visible:ring-blue"
                  >
                    {SERVICES.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid min-w-0 gap-2">
                  <span className="mono-label text-ink/70">Project details</span>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full min-w-0 border-2 border-ink bg-cream px-4 py-3 font-mono text-sm outline-none focus-visible:ring-4 focus-visible:ring-blue"
                  />
                </label>

                <button type="submit" className="btn btn-dark w-full sm:w-auto">
                  Send via email <span aria-hidden="true">↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to talk it through?"
        lede="Call or WhatsApp us directly. It is often faster than a form for a small business."
        primaryTo="/contact"
        primaryLabel="Call or WhatsApp"
        secondaryTo="/"
        secondaryLabel="Back home"
      />
    </>
  )
}
