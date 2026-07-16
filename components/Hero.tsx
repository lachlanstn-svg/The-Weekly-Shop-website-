export default function Hero() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-4 sm:px-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-bold text-cream">
            🇦🇺 One list. <b className="text-terracotta-400">Four supermarkets.</b> Always
            the cheapest.
          </div>
          <h1 className="mt-7 font-display text-[44px] font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[78px]">
            A week of dinners for{' '}
            <em className="relative inline-block not-italic font-black text-leaf-600">
              <span className="relative z-10">exactly</span>
              <span className="absolute inset-x-0 bottom-1.5 z-0 h-3.5 rounded-sm bg-leaf-50" />
            </em>{' '}
            what you want to spend.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted sm:text-[19px]">
            Tell us your budget and who you&apos;re feeding. The Weekly Shop plans every meal,
            writes the shopping list, and finds the cheapest store for each item.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-full bg-leaf-500 px-9 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-leaf-600"
            >
              Join the waitlist →
            </a>
            <a
              href="#meals"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink/20 px-9 py-4 text-base font-semibold text-ink transition hover:border-ink"
            >
              See a sample plan
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-muted">
            <span className="flex items-center gap-2">
              <span className="font-bold text-leaf-500">✓</span> Free to join
            </span>
            <span className="flex items-center gap-2">
              <span className="font-bold text-leaf-500">✓</span> No card needed
            </span>
            <span className="flex items-center gap-2">
              <span className="font-bold text-leaf-500">✓</span> Woolies · Coles · ALDI · IGA
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 right-2 z-10 rotate-[-5deg] rounded-2xl bg-terracotta-500 px-4 py-3 font-display text-[15px] font-bold text-white shadow-lift">
            Example plan
          </div>
          <div className="rotate-[1.4deg] rounded-[22px] border border-line bg-white p-5 shadow-lift">
            <div className="mb-3.5 flex items-start justify-between">
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#a49f92]">
                  Smart-shopper total
                </div>
                <div className="font-display text-[32px] font-semibold text-ink">
                  $237.40{' '}
                  <span className="font-display text-base font-normal text-muted">
                    of $300
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-semibold text-leaf-600">
                Coles cheapest
              </span>
            </div>
            <div className="mb-4 h-3 overflow-hidden rounded-full bg-[#efeae0]">
              <div className="h-full w-[79%] rounded-full bg-leaf-500" />
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { slot: '🍽️ Dinner · Day 1', name: 'Honey-soy chicken tray bake', price: '$3.20' },
                { slot: '🥪 Lunch · Day 1', name: 'Roast pumpkin wraps', price: '$2.40' },
                { slot: '🍳 Breakfast · Day 1', name: 'Berry oat bowls', price: '$1.10' },
              ].map((meal) => (
                <div
                  key={meal.name}
                  className="flex items-center justify-between rounded-[14px] border border-line bg-[#fdfcf9] p-3.5"
                >
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#a49f92]">
                      {meal.slot}
                    </div>
                    <div className="mt-0.5 font-display text-base font-semibold text-ink">
                      {meal.name}
                    </div>
                  </div>
                  <span className="font-display text-[17px] font-semibold text-leaf-600">
                    {meal.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
