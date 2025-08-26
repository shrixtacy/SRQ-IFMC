import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero bg-pattern" id="home" style={{
      paddingTop: '120px' // Add padding to avoid navbar overlap
    }}>
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      <div className="gradient-orb gradient-orb-3"></div>
      
      <div className="hero-content" style={{
        maxWidth: '900px',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: '200',
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          lineHeight: '1.1',
          marginBottom: '2rem',
          color: '#1e293b',
          letterSpacing: '-0.02em'
        }}>
          Welcome to{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '300'
          }}>
            SRQ - IFMC
          </span>
        </h1>
        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          fontWeight: '300',
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          color: '#64748b',
          marginBottom: '3rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
          letterSpacing: '0.01em'
        }}>
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
