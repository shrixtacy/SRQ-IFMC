'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section bg-gray" id="contact-us">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Ready to start your journey? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start'}}>
          <div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '2rem'}}>
              Contact Information
            </h3>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📍
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Our Office</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>123 Financial District, Business Tower</p>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>New York, NY 10001</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📞
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Phone</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>+1 (555) 123-4567</p>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📧
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Email</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>solutions@srq.in</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  🕒
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Business Hours</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '1.5rem'}}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a Service</option>
                  <option value="finance">Finance Services</option>
                  <option value="insurance">Insurance Services</option>
                  <option value="investment">Investment Solutions</option>
                  <option value="communication">Communication Services</option>
                </select>
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary"
                style={{width: '100%', padding: '1rem'}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
