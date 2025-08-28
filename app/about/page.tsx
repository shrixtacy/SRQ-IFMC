import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden',
        paddingTop: '100px' // Fix navbar overlap
      }}>
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        
        <div style={{
          textAlign: 'center',
          maxWidth: '1000px',
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
              width: '160px',
              height: '160px',
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
                width={120}
                height={120}
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
              fontSize: 'clamp(4rem, 10vw, 8rem)',
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
          <div style={{ marginBottom: '4rem' }}>
            <p style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '300',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0',
              lineHeight: '1.5',
              letterSpacing: '0.01em',
              maxWidth: '900px',
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
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
              borderRadius: '1px'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
              marginTop: '-5px'
            }}></div>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
              borderRadius: '1px'
            }}></div>
          </div>
        </div>
      </section>

      {/* Streamlined Content Section */}
      <section style={{
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Mission & Vision in elegant layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            marginBottom: '6rem'
          }}>
            <div style={{
              textAlign: 'left',
              padding: '3rem 0'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
              }}>
                🎯
              </div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                color: '#1e293b',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                lineHeight: '1.7',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
              }}>
                To provide comprehensive financial and communication solutions that create lasting value and meaningful impact for our clients. We strive to be the bridge between financial expertise and strategic communication excellence.
              </p>
            </div>
            
            <div style={{
              textAlign: 'left',
              padding: '3rem 0'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
              }}>
                👁️
              </div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                color: '#1e293b',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}>
                Our Vision
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                lineHeight: '1.7',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
              }}>
                To be the trusted partner of choice for organizations seeking to optimize their financial performance and enhance their market presence. We envision a future where every business has access to world-class financial and communication strategies.
              </p>
            </div>
          </div>

          {/* Core Values - Simplified */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '300',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              color: '#1e293b',
              marginBottom: '2rem',
              letterSpacing: '-0.01em'
            }}>
              Our Core Values
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              margin: '0 auto 3rem',
              borderRadius: '2px'
            }}></div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                'Integrity & Transparency',
                'Innovation & Excellence', 
                'Client-Centric Approach',
                'Collaborative Partnership'
              ].map((value, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  color: '#1e293b',
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #7c3aed 100%)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '300',
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
            color: 'white',
            marginBottom: '2rem',
            letterSpacing: '-0.01em'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            lineHeight: '1.6',
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
          }}>
            Let's discuss how our expertise can help you achieve your financial and strategic goals.
          </p>
          <button style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            padding: '1.2rem 3rem',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '500',
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
          }}>
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
