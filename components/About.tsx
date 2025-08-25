export default function About() {
  return (
    <section className="section bg-gray" id="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight-blue">SRQ IFMC</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-description">
            We are a premier financial services and strategic communications company dedicated to empowering businesses and individuals through integrated solutions.
          </p>
        </div>
        
        <div className="cards-grid three-columns">
          <div className="card">
            <div className="card-icon" style={{background: 'linear-gradient(135deg, #3b82f6, #60a5fa)'}}>
              💡
            </div>
            <h3>Our Mission</h3>
            <p>To provide comprehensive financial and communication solutions that create lasting value and meaningful impact for our clients.</p>
          </div>
          
          <div className="card">
            <div className="card-icon" style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'}}>
              👁️
            </div>
            <h3>Our Vision</h3>
            <p>To be the trusted partner of choice for organizations seeking to optimize their financial performance and enhance their market presence.</p>
          </div>
          
          <div className="card">
            <div className="card-icon" style={{background: 'linear-gradient(135deg, #10b981, #34d399)'}}>
              🎯
            </div>
            <h3>Core Values</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              <li style={{padding: '0.5rem 0', position: 'relative', paddingLeft: '1.5rem'}}>
                <span style={{position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', display: 'block'}}></span>
                Integrity & Transparency
              </li>
              <li style={{padding: '0.5rem 0', position: 'relative', paddingLeft: '1.5rem'}}>
                <span style={{position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', display: 'block'}}></span>
                Innovation & Excellence
              </li>
              <li style={{padding: '0.5rem 0', position: 'relative', paddingLeft: '1.5rem'}}>
                <span style={{position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', display: 'block'}}></span>
                Client-Centric Approach
              </li>
              <li style={{padding: '0.5rem 0', position: 'relative', paddingLeft: '1.5rem'}}>
                <span style={{position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', display: 'block'}}></span>
                Collaborative Partnership
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
