import { CTASection } from '../components/CTASection'
import { FaqSection } from '../components/FaqSection'
import { PageHero } from '../components/PageHero'
import { FAQS } from '../lib/site'

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="(06) FAQ"
        title="Hosting questions, answered plainly."
        lede="Cloudflare, edge networks, migrations, security and support — the questions every South African business should ask before signing off on a host."
        image="/images/faq-support.jpg"
        imageAlt="Help desk supporting a website owner with hosting questions"
        imageCaption="Support and hosting questions"
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
