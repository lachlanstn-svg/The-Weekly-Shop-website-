export default function LogoStrip() {
  const stores = ['Woolworths', 'Coles', 'ALDI', 'IGA']

  return (
    <div className="border-y border-line bg-[#efe8da] py-6">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 font-display text-lg font-semibold text-[#8a8578] sm:gap-x-11">
        {stores.map((store, i) => (
          <span key={store} className="flex items-center gap-6 sm:gap-11">
            {store}
            {i < stores.length - 1 && <span aria-hidden>·</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
