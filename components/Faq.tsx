import { EARLY_BIRD_PRICE, REGULAR_PRICE } from '@/lib/constants'

const faqs = [
  {
    q: 'When does the app launch?',
    a: "We're aiming to launch The Weekly Shop in the coming months. Everyone on the waitlist will be the first to know — and the first to get access.",
  },
  {
    q: `Is my $${EARLY_BIRD_PRICE}/month price really locked in?`,
    a: `Yes. If you join the waitlist now, your $${EARLY_BIRD_PRICE}/month rate is yours for as long as you stay subscribed — even after new members start paying $${REGULAR_PRICE}/month.`,
  },
  {
    q: "What if I don't love it?",
    a: "Cancel anytime, no questions asked. There's no lock-in contract.",
  },
  {
    q: 'Do I need to enter my card details now?',
    a: "No. Joining the waitlist just reserves your spot and your price — we'll only ask for payment details when the app is ready and you choose to subscribe.",
  },
]

export default function Faq() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-20 sm:px-12 md:py-24">
      <div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-600">
            FAQ
          </span>
          <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-ink md:text-[46px]">
            Good questions.
          </h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-card border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{faq.q}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
