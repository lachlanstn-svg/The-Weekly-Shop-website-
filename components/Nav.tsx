export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-6 py-6 sm:px-12">
      <a
        href="#"
        className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink sm:text-[23px]"
      >
        The Weekly<span className="text-leaf-600">.</span>Shop
      </a>
      <div className="flex items-center gap-7">
        <div className="hidden items-center gap-7 text-[15px] font-medium text-muted md:flex">
          <a href="#how" className="transition hover:text-ink">
            How it works
          </a>
          <a href="#compare" className="transition hover:text-ink">
            Price comparison
          </a>
          <a href="#pricing" className="transition hover:text-ink">
            Pricing
          </a>
        </div>
        <a
          href="#signup"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-leaf-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-leaf-600 sm:px-5 sm:py-3"
        >
          Join the waitlist
        </a>
      </div>
    </nav>
  )
}
