import Hero from '@/app/components/Hero'
import StdLayout from '@/components/StdLayout'
import Achievements from './components/Achievements'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Partnership from './components/Partnership'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <StdLayout showNavbar={false} activeKey="home">
      <Hero />
      <Features />
      <Integrations />
      <Achievements />
      <Testimonial />
      <FAQ />
      <Partnership />
    </StdLayout>
  )
}
