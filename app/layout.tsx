import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { EARLY_BIRD_PRICE } from '@/lib/constants'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const title = 'The Weekly Shop — Eat well. Spend less.'
const description = `Join the waitlist for The Weekly Shop — personalised weekly meal plans priced against real Australian supermarket prices. Early bird members lock in $${EARLY_BIRD_PRICE}/month for life.`

// TODO: replace with the real domain once one is chosen — this affects the
// absolute URLs Next.js generates for the Open Graph/Twitter share image.
export const metadata: Metadata = {
  metadataBase: new URL('https://theweeklyshop.com.au'),
  title,
  description,
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥗</text></svg>',
  },
  openGraph: {
    title,
    description,
    siteName: 'The Weekly Shop',
    images: [
      {
        url: '/meals/honey-soy-chicken-tray-bake.webp',
        width: 1024,
        height: 559,
        alt: 'The Weekly Shop',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/meals/honey-soy-chicken-tray-bake.webp'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f4ee',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
