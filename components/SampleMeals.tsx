import Image from 'next/image'

const meals = [
  {
    image: '/meals/honey-soy-chicken-tray-bake.webp',
    cuisine: 'Asian',
    cuisineClass: 'bg-leaf-50 text-leaf-600',
    price: '$3.20',
    name: 'Honey-soy chicken tray bake',
    desc: 'One tray, minimal washing up, big on flavour.',
  },
  {
    image: '/meals/one-pot-pumpkin-dhal.jpg',
    cuisine: 'Indian',
    cuisineClass: 'bg-[#f6e6da] text-terracotta-600',
    price: '$1.90',
    name: 'One-pot pumpkin dhal',
    desc: 'Cheap, filling and freezes beautifully for later.',
  },
  {
    image: '/meals/spag-bol-hidden-veg.jpg',
    cuisine: 'Italian',
    cuisineClass: 'bg-[#eef0e0] text-[#5c6b28]',
    price: '$2.75',
    name: 'Spag bol with hidden veg',
    desc: 'A weeknight classic, quietly packed with vegies.',
  },
]

export default function SampleMeals() {
  return (
    <section id="meals" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-12 md:py-24">
      <div className="mx-auto max-w-[640px] text-center">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-600">
          A sample week
        </div>
        <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-ink md:text-[46px]">
          Real meals your family will actually eat.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-3 md:mt-14">
        {meals.map((meal) => (
          <div key={meal.name} className="overflow-hidden rounded-[20px] border border-line bg-white">
            <div className="relative h-44 w-full">
              <Image
                src={meal.image}
                alt={meal.name}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${meal.cuisineClass}`}
                >
                  {meal.cuisine}
                </span>
                <span className="font-display text-base font-semibold text-leaf-600">
                  {meal.price}
                  <span className="text-xs font-normal text-muted">/serve</span>
                </span>
              </div>
              <h3 className="mt-3 font-display text-[22px] font-semibold leading-tight text-ink">
                {meal.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{meal.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
