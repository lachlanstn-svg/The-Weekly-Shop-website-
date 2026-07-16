'use server'

import { supabase } from '@/lib/supabase'

export type SignupState = {
  status: 'success' | 'already-joined' | 'error'
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LENGTH = 254 // RFC 5321 limit
const MAX_NAME_LENGTH = 200

export async function submitWaitlistSignup(input: {
  email: string
  name: string
  honeypot: string
}): Promise<SignupState> {
  // Bots tend to fill every field, including ones hidden from real users.
  // Pretend success without touching the database so they don't retry.
  if (input.honeypot) {
    return { status: 'success', message: "You're in! We'll email you the moment we launch." }
  }

  const email = input.email.trim().toLowerCase()
  const name = input.name.trim().slice(0, MAX_NAME_LENGTH)

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  if (!supabase) {
    return {
      status: 'error',
      message: 'Signups aren\'t connected yet — please check back shortly.',
    }
  }

  const { error } = await supabase.from('waitlist_signups').insert({
    email,
    name: name || null,
  })

  if (error) {
    if (error.code === '23505') {
      return {
        status: 'already-joined',
        message: "You're already on the list — we'll be in touch!",
      }
    }
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }

  return { status: 'success', message: "You're in! We'll email you the moment we launch." }
}
