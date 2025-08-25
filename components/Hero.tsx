import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="line">Crafting <span className="highlight-blue">&nbsp; Influence.</span></span>
          <span className="line">Shaping <span className="highlight-purple">&nbsp; Brands.</span></span>
          <span className="line">Inspiring <span className="highlight-blue">&nbsp; Impact.</span></span>
        </h1>
        <p className="hero-subtext">
          Empowering Brands. Influencing Minds. Delivering Finance & Insurance Solutions.
        </p>
        <div className="cta-buttons">
          <Link href="#get-started" className="btn btn-primary">Get Started</Link>
          <Link href="#services" className="btn btn-secondary">View Services</Link>
        </div>
      </div>
    </section>
  )
}
