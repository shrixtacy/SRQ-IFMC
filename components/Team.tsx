import Image from 'next/image'

export default function Team() {
  return (
    <section className="section bg-gray bg-pattern" id="team">
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Meet Our <span className="highlight-blue">Expert Team</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Our dedicated professionals bring years of expertise in finance, insurance, and strategic communications 
            to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="team-grid">
          <div className="team-card">
            <Image 
              src="/assets/assets/punyabrata-mohanty.jpeg" 
              alt="Punyabrata Mohanty" 
              width={120}
              height={120}
              className="team-avatar"
            />
            <h3 className="team-name">Punyabrata Mohanty</h3>
            <p className="team-role">Chief Executive Officer</p>
            <p className="team-description">
              Visionary leader with over 15 years of experience in financial services and strategic business development. 
              Punyabrata drives our mission to deliver innovative solutions that create lasting value for our clients.
            </p>
          </div>
          
          <div className="team-card">
            <Image 
              src="/assets/assets/manasi-jena.jpeg" 
              alt="Manasi Jena" 
              width={120}
              height={120}
              className="team-avatar"
            />
            <h3 className="team-name">Manasi Jena</h3>
            <p className="team-role">Head of Strategic Communications</p>
            <p className="team-description">
              Expert communicator specializing in brand strategy and market positioning. Manasi crafts compelling narratives 
              that resonate with audiences and drive meaningful engagement across all channels.
            </p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#64748b', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Ready to work with our expert team? Let's discuss how we can help you achieve your financial and business goals.
          </p>
          <a href="#contact-us" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
