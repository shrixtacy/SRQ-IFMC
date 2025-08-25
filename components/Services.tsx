export default function Services() {
  return (
    <section className="section bg-white" id="services">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Core <span className="highlight-blue">Finance & Insurance Services</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive financial and insurance solutions tailored to your unique needs and objectives.
          </p>
        </div>
        
        <div style={{display: 'flex', gap: '1.5rem', marginTop: '3rem', overflowX: 'auto', paddingBottom: '1rem'}}>
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              📈
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>Finance Services</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Business Loans', 'Personal Loans', 'Home Loans', 'Loan Against Property', 'Working Capital Finance', 'Project Finance', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#3b82f6',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              🛡️
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>General Insurance</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Motor Insurance', 'Health Insurance', 'Travel Insurance', 'Home Insurance', 'Fire Insurance', 'Marine Insurance', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#8b5cf6',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1e40af, #1e3a8a)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              ❤️
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>Life Insurance</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Term Life Insurance', 'Endowment Plans', 'ULIPs', 'Child Plans', 'Retirement Plans', 'Group Life Insurance', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#1e40af',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
