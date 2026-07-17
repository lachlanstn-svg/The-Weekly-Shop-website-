import { NextRequest, NextResponse } from 'next/server'

// Next.js's App Router streams page data via inline <script> tags with no
// src attribute. A static `script-src 'self'` CSP blocks those and breaks
// hydration entirely, so the nonce has to be generated per-request here and
// threaded through — Next.js then auto-applies it to its own inline scripts.
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const csp = [
    "default-src 'self'",
    // https://connect.facebook.net is also listed explicitly as a fallback
    // for browsers that don't support 'strict-dynamic' (which would
    // otherwise let the nonce'd Meta Pixel script load it regardless).
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://connect.facebook.net`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://www.facebook.com",
    "font-src 'self' data:",
    "connect-src 'self' https://www.facebook.com https://connect.facebook.net",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export const config = {
  matcher: [
    // Skip Next.js internals and static assets so the nonce/CSP work is
    // only spent on actual page requests.
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
