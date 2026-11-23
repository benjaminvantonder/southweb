import { CTASection } from '../components/CTASection'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { FAQS } from '../lib/site'

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="(06) FAQ"
        title="Questions, answered plainly."
        lede="What we build, what it costs, how the debut sale works and what hosting includes — straight answers before you commit."
        image="/images/faq-support.jpg"
        imageAlt="Help desk supporting a website owner with hosting questions"
        imageCaption="Pricing and hosting questions"
      />

      <FaqSection faqs={FAQS} />

      <CTASection
        eyebrow="(07) Still deciding"
        title="Ask us anything directly."
        lede="Email, call or WhatsApp — a real human from the Southweb team will reply, usually within the hour during office hours."
        primaryTo="/contact"
        primaryLabel="Contact us"
        secondaryTo="/"
        secondaryLabel="Back home"
      />
    </>
  )
}
