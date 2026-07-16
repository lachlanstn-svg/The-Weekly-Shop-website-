import { supabase } from '@/lib/supabase'
import { TOTAL_EARLY_BIRD_SPOTS } from '@/lib/constants'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import HowItWorks from '@/components/HowItWorks'
import PriceCompare from '@/components/PriceCompare'
import Stats from '@/components/Stats'
import SampleMeals from '@/components/SampleMeals'
import EarlyBirdOffer from '@/components/EarlyBirdOffer'
import SignupForm from '@/components/SignupForm'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

// Rendered fresh on every request rather than cached/ISR'd: the CSP nonce
// generated per-request in middleware.ts has to match the nonce baked into
// this page's own script tags, which only happens with dynamic rendering.
// As a side benefit the spots-left counter is now genuinely live, not just
// "near-live" on a 30s window.
export const dynamic = 'force-dynamic'

async function getSpotsLeft() {
  if (!supabase) return TOTAL_EARLY_BIRD_SPOTS

  const { data, error } = await supabase.rpc('get_waitlist_count')
  if (error || typeof data !== 'number') return TOTAL_EARLY_BIRD_SPOTS

  return Math.max(0, TOTAL_EARLY_BIRD_SPOTS - data)
}

export default async function Home() {
  const spotsLeft = await getSpotsLeft()

  return (
    <main>
      <Nav />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <PriceCompare />
      <Stats />
      <SampleMeals />
      <EarlyBirdOffer spotsLeft={spotsLeft} />
      <SignupForm />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
