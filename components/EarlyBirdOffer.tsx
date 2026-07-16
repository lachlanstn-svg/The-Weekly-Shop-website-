import {
  TOTAL_EARLY_BIRD_SPOTS,
  EARLY_BIRD_PRICE,
  REGULAR_PRICE,
  EARLY_BIRD_DISCOUNT_PERCENT,
} from '@/lib/constants'

export default function EarlyBirdOffer({ spotsLeft }: { spotsLeft: number }) {
  const spotsTaken = TOTAL_EARLY_BIRD_SPOTS - spotsLeft
  const percentFilled = Math.min(100, Math.max(0, (spotsTaken / TOTAL_EARLY_BIRD_SPOTS) * 100))
  const isFull = spotsLeft <= 0

  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-12 md:py-24">
      <div className="mx-auto max-w-[640px] text-center">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-600">
          Early bird offer
        </div>
        <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-ink md:text-[46px]">
          Get in early — and lock in the price.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-[900px] items-stretch gap-6 md:grid-cols-2">
        {/* Regular price card */}
        <div className="flex flex-col gap-4 rounded-[24px] border-[1.5px] border-line bg-white p-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Regular price
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[52px] font-semibold leading-none text-ink">
              ${REGULAR_PRICE}
            </span>
            <span className="text-base text-muted">/month</span>
          </div>
          <p className="text-[14.5px] text-muted">What everyone pays after we launch.</p>
          <hr className="border-line" />
          <div className="flex flex-col gap-3 text-[15px]">
            {[
              'Unlimited days, people & profiles',
              'Full 4-store price comparison',
              'Save, reload & swap any meal',
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5">
                <span className="font-bold text-leaf-500">✓</span> {line}
              </div>
            ))}
          </div>
        </div>

        {/* Early bird hot card */}
        <div className="flex flex-col gap-4 rounded-[24px] bg-ink p-8 text-cream shadow-lift">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-400">
              Early bird
            </span>
            <span className="rounded-full bg-terracotta-500 px-3 py-1 text-xs font-semibold text-white">
              First {TOTAL_EARLY_BIRD_SPOTS} spots
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2.5">
            <span className="font-display text-[52px] font-semibold leading-none">
              ${EARLY_BIRD_PRICE}
            </span>
            <span className="text-base text-[#b3b0a4]">/month, forever</span>
            <span className="rounded-full bg-leaf-500 px-2.5 py-1 text-xs font-bold text-white">
              {EARLY_BIRD_DISCOUNT_PERCENT}% off
            </span>
          </div>
          <p className="text-[14.5px] text-[#b3b0a4]">
            Locked in for life — instead of{' '}
            <span className="font-display text-lg text-cream line-through decoration-2">
              ${REGULAR_PRICE}
            </span>
            /month.
          </p>

          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-cream">
                {isFull
                  ? `All ${TOTAL_EARLY_BIRD_SPOTS} spots claimed`
                  : `${spotsLeft} of ${TOTAL_EARLY_BIRD_SPOTS} spots left`}
              </span>
              <span className="text-[#b3b0a4]">{spotsTaken} joined</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-leaf-500 transition-all"
                style={{ width: `${percentFilled}%` }}
              />
            </div>
          </div>

          <hr className="border-white/15" />
          <div className="flex flex-col gap-3 text-[15px]">
            {[
              'Everything in the regular plan',
              `Your $${EARLY_BIRD_PRICE}/month rate locked in for life`,
              'Cancel anytime — no lock-in',
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5">
                <span className="text-terracotta-400">✓</span> {line}
              </div>
            ))}
          </div>
          <a
            href="#signup"
            className="mt-auto flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-leaf-600"
          >
            {isFull ? 'Join the waitlist' : 'Claim your spot'}
          </a>
        </div>
      </div>
    </section>
  )
}
