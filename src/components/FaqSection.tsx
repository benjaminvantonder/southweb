import type { Faq } from '../lib/site'

type FaqSectionProps = {
  faqs: Faq[]
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="section">
      <div className="shell max-w-[900px]">
        <div className="text-center">
          <h2 className="display text-ink text-[clamp(2.4rem,5.5vw,4.8rem)]">
            Straight answers, no jargon.
          </h2>
        </div>

        <div className="mt-12 divide-y-2 divide-ink border-b-2 border-ink">
          {faqs.map((faq) => (
            <details className="group" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                <span className="text-lg font-semibold text-ink sm:text-xl">{faq.question}</span>
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-xl transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[70ch] pb-6 text-ink/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
