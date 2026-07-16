'use client'

import { useState, useTransition, type FormEvent } from 'react'
import { submitWaitlistSignup, type SignupState } from '@/app/actions'
import { EARLY_BIRD_PRICE } from '@/lib/constants'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [result, setResult] = useState<SignupState | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    startTransition(async () => {
      const outcome = await submitWaitlistSignup({ email, name, honeypot })
      setResult(outcome)
    })
  }

  const succeeded = result?.status === 'success' || result?.status === 'already-joined'

  return (
    <section id="signup" className="bg-leaf-50 px-6 py-20 sm:px-12 md:py-24">
      <div className="mx-auto max-w-[520px] text-center">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-600">
          Reserve your spot
        </div>
        <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-ink md:text-[46px]">
          Join the waitlist.
        </h2>
        <p className="mt-4 text-[15px] text-muted">
          {`Enter your email and we'll let you know the moment we launch. Your $${EARLY_BIRD_PRICE}/month early-bird rate will be waiting for you.`}
        </p>

        {succeeded ? (
          <div className="mt-8 rounded-card border border-line bg-white p-8 text-center shadow-soft">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-leaf-50 text-2xl">
              ✓
            </div>
            <p className="mt-4 text-[15px] font-medium text-ink">{result?.message}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative mt-8 rounded-card border border-line bg-white p-6 text-left shadow-soft sm:p-8"
          >
            {/* Honeypot: hidden from real users, bots often fill every field they find */}
            <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <label className="block text-sm font-semibold text-ink" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-[#a49f92] focus:border-leaf-500"
            />

            <label className="mt-5 block text-sm font-semibold text-ink" htmlFor="name">
              Name <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength={200}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-[#a49f92] focus:border-leaf-500"
            />

            {result?.status === 'error' && (
              <p className="mt-4 text-sm font-medium text-terracotta-600">{result.message}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-leaf-500 px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-leaf-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? 'Joining…' : 'Join the waitlist'}
            </button>

            <p className="mt-4 text-center text-xs text-muted">
              No spam. No card required. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
