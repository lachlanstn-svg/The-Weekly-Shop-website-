const rows = [
  { item: 'Chicken thigh 1kg', prices: ['$9.50', '$8.90', '$9.20', '$10.50'], cheap: 1 },
  { item: 'Pumpkin (½)', prices: ['$3.20', '$3.50', '$2.80', '$3.90'], cheap: 2 },
  { item: 'Rolled oats 1kg', prices: ['$2.40', '$2.40', '$1.95', '$2.80'], cheap: 2 },
  { item: 'Wholemeal wraps ×8', prices: ['$2.60', '$2.80', '$2.70', '$3.20'], cheap: 0 },
]

const stores = ['Woolies', 'Coles', 'ALDI', 'IGA']

export default function PriceCompare() {
  return (
    <section id="compare" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-20 sm:px-12 md:py-24 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-400">
            Live price comparison
          </div>
          <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[0.98] tracking-tight md:text-[46px]">
            Every item, priced at all four stores.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#b3b0a4]">
            We check each item at Woolworths, Coles, ALDI and IGA, then build your list around
            the cheapest option — so the savings are automatic.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-[15.5px]">
            {[
              'Per-item cheapest store, highlighted',
              'Whole-basket total for every store',
              'Swap any meal and re-price instantly',
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5">
                <span className="text-terracotta-400">✓</span> {line}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 text-ink sm:p-7">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="pb-3 text-left text-[10.5px] font-bold uppercase tracking-wide text-[#a49f92]">
                  Item
                </th>
                {stores.map((store) => (
                  <th
                    key={store}
                    className="pb-3 text-right text-[10.5px] font-bold uppercase tracking-wide text-[#a49f92]"
                  >
                    {store}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.item}>
                  <td className="border-t border-[#f0ece3] py-3 text-left font-semibold text-ink">
                    {row.item}
                  </td>
                  {row.prices.map((price, i) => (
                    <td
                      key={i}
                      className={`border-t border-[#f0ece3] py-3 text-right tabular-nums ${
                        i === row.cheap ? 'font-bold text-leaf-600' : 'text-[#5f5c53]'
                      }`}
                    >
                      {price}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
            <span className="text-sm text-muted">Example basket (cheapest per item)</span>
            <span className="font-display text-[26px] font-semibold text-leaf-600">
              $237.40
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
