import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Investment from '@/components/Investment'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Investment />
      <Contact />
      <Footer />
    </main>
  )
}
