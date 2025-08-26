export default function About() {
  return (
    <section className="section bg-gray bg-pattern" id="about">
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
        
        <div className="scroll-stack-container">
          <div className="scroll-stack-item">
            <div className="stack-card">
              <div className="stack-card-icon" style={{background: 'linear-gradient(135deg, #3b82f6, #60a5fa)'}}>
                💡
              </div>
              <h3>Our Mission</h3>
              <p>To provide comprehensive financial and communication solutions that create lasting value and meaningful impact for our clients.</p>
            </div>
          </div>
          
          <div className="scroll-stack-item">
            <div className="stack-card">
              <div className="stack-card-icon" style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'}}>
                👁️
              </div>
              <h3>Our Vision</h3>
              <p>To be the trusted partner of choice for organizations seeking to optimize their financial performance and enhance their market presence.</p>
            </div>
          </div>
          
          <div className="scroll-stack-item">
            <div className="stack-card">
              <div className="stack-card-icon" style={{background: 'linear-gradient(135deg, #10b981, #34d399)'}}>
                🎯
              </div>
              <h3>Core Values</h3>
              <ul>
                <li>Integrity & Transparency</li>
                <li>Innovation & Excellence</li>
                <li>Client-Centric Approach</li>
                <li>Collaborative Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
