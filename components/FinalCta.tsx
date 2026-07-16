export default function FinalCta() {
  return (
    <section className="bg-terracotta-500 px-6 py-24 text-center text-white md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-[56px]">
          Take the stress out of dinner.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg opacity-95 md:text-[19px]">
          A week of meals, a smart shopping list, real savings — in about twelve minutes.
        </p>
        <a
          href="#signup"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-9 py-4 text-base font-semibold text-cream transition hover:-translate-y-0.5"
        >
          Join the waitlist →
        </a>
      </div>
    </section>
  )
}
