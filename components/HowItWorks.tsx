const steps = [
  {
    label: 'STEP 01',
    title: 'Set your budget',
    description:
      'Pick a dollar amount, how many days, how many people, and any diets or cuisines you love.',
  },
  {
    label: 'STEP 02',
    title: 'We plan the week',
    description:
      'Meals that share ingredients so nothing\'s wasted — sized to your household, down to the gram.',
  },
  {
    label: 'STEP 03',
    title: 'Shop the cheapest way',
    description:
      'A costed shopping list that tells you the cheapest store for every single item.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-12 md:py-24">
      <div className="max-w-[640px]">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-600">
          How it works
        </div>
        <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-ink md:text-[46px]">
          Three steps to a sorted week.
        </h2>
      </div>
      <div className="mt-12 grid gap-7 md:mt-14 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.label} className="border-t-[3px] border-ink pt-5">
            <div className="font-display text-[15px] font-black text-leaf-600">
              {step.label}
            </div>
            <h3 className="mt-3.5 font-display text-2xl font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
