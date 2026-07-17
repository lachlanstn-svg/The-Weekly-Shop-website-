import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Script from 'next/script'
import { headers } from 'next/headers'
import { EARLY_BIRD_PRICE, META_PIXEL_ID } from '@/lib/constants'
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // The nonce comes from middleware.ts (one per request) — Meta Pixel's
  // inline init script needs it to run under the site's strict CSP.
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <Script id="meta-pixel" strategy="afterInteractive" nonce={nonce}>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
