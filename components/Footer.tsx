export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 py-10 sm:px-12">
      <div className="flex flex-col items-center gap-3 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-lg font-bold tracking-tight text-ink">
          The Weekly<span className="text-leaf-600">.</span>Shop
        </span>
        <span>Prices are estimates · Always check in store</span>
        <span>© {new Date().getFullYear()} The Weekly Shop</span>
      </div>
    </footer>
  )
}
