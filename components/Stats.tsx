const stats = [
  { n: '4', suffix: '', label: 'supermarkets compared' },
  { n: '12', suffix: 'min', label: 'to a full costed plan' },
  { n: '0', suffix: '', label: 'wasted ingredients' },
]

export default function Stats() {
  return (
    <section className="bg-leaf-500 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 text-center sm:px-12 sm:grid-cols-3 md:py-20">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-5xl font-semibold leading-none tracking-tight md:text-6xl">
              {stat.n}
              {stat.suffix && <span className="text-[28px]">{stat.suffix}</span>}
            </div>
            <div className="mt-2.5 text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
