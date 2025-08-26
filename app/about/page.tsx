import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="hero bg-pattern" style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden'
      }}>
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        
        <div style={{
          textAlign: 'center',
          maxWidth: '1200px',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Logo Section */}
          <div style={{
            marginBottom: '3rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '4px solid rgba(255, 255, 255, 0.4)',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image 
                src="/assets/assets/SRQ_LOGO.jpeg" 
                alt="SRQ IFMC Logo" 
                width={100}
                height={100}
                style={{ 
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: '200',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              color: 'white',
              margin: '0',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              About{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '300'
              }}>
                SRQ IFMC
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: '300',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0',
              lineHeight: '1.5',
              letterSpacing: '0.01em',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Empowering businesses through innovative financial solutions and strategic communications since our inception.
            </p>
          </div>

          {/* Decorative Elements */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
              borderRadius: '1px'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
              marginTop: '-3px'
            }}></div>
            <div style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
              borderRadius: '1px'
            }}></div>
          </div>

          {/* Call to Action */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px'
            }}>
              Our Story
            </button>
            <button style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              border: 'none',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '500',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
            }}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <div className="title-underline"></div>
            <p className="section-description">
              SRQ IFMC stands as a beacon of excellence in the financial services and strategic communications industry, 
              dedicated to crafting influence and shaping brands that matter.
            </p>
          </div>
          
          <div className="cards-grid two-columns">
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #3b82f6, #60a5fa)'}}>
                🎯
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive financial and communication solutions that create lasting value and meaningful impact for our clients. 
                We strive to be the bridge between financial expertise and strategic communication excellence.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'}}>
                👁️
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the trusted partner of choice for organizations seeking to optimize their financial performance and enhance their market presence. 
                We envision a future where every business has access to world-class financial and communication strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-gray bg-pattern">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <div className="title-underline"></div>
            <p className="section-description">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="cards-grid three-columns">
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #10b981, #34d399)'}}>
                🤝
              </div>
              <h3>Integrity & Transparency</h3>
              <p>We believe in honest, open communication and ethical business practices that build trust and long-lasting relationships.</p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #f59e0b, #fbbf24)'}}>
                💡
              </div>
              <h3>Innovation & Excellence</h3>
              <p>We continuously evolve our strategies and solutions to stay ahead of market trends and deliver exceptional results.</p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #ef4444, #f87171)'}}>
                ❤️
              </div>
              <h3>Client-Centric Approach</h3>
              <p>Every solution we create is tailored to meet the unique needs and goals of our clients, ensuring maximum value delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <div className="title-underline"></div>
            <p className="section-description">
              Comprehensive solutions spanning financial services, strategic communications, and business development.
            </p>
          </div>
          
          <div className="cards-grid two-columns">
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'}}>
                📊
              </div>
              <h3>Financial Services</h3>
              <p>
                From investment planning to insurance solutions, we provide comprehensive financial services that secure your future. 
                Our expert team ensures optimal portfolio management and risk assessment for sustainable growth.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                📢
              </div>
              <h3>Strategic Communications</h3>
              <p>
                We craft compelling narratives that resonate with your target audience, building brand awareness and driving engagement. 
                Our communication strategies are designed to influence minds and shape perceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title" style={{color: 'white'}}>Why Choose SRQ IFMC?</h2>
            <div className="title-underline" style={{background: 'white'}}></div>
            <p className="section-description" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Discover the advantages that set us apart in the competitive landscape of financial services and communications.
            </p>
          </div>
          
          <div className="cards-grid three-columns">
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)'}}>
                🏆
              </div>
              <h3>Proven Expertise</h3>
              <p>Years of industry experience and a track record of successful client partnerships across diverse sectors.</p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                🔧
              </div>
              <h3>Tailored Solutions</h3>
              <p>Every strategy is customized to align with your specific business objectives and market dynamics.</p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                📈
              </div>
              <h3>Measurable Results</h3>
              <p>We focus on delivering quantifiable outcomes that drive real business growth and market impact.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
