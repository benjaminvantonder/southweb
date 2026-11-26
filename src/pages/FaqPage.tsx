import { CTASection } from '../components/CTASection'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { FAQS } from '../lib/site'

export function FaqPage() {
  return (
    <>
      <PageHero
        title="Questions and answers."
        lede="Plain answers about our services, payment, hosting and what happens after launch."
        image="/images/faq-support.jpg"
        imageAlt="Help desk supporting a website owner with hosting questions"
      />

      <FaqSection faqs={FAQS} />

      <CTASection
        title="Still have a question?"
        lede="Email, call or WhatsApp. A real person from Southweb will reply, usually within an hour during office hours."
        primaryTo="/contact"
        primaryLabel="Contact us"
        secondaryTo="/"
        secondaryLabel="Back home"
      />
    </>
  )
}
