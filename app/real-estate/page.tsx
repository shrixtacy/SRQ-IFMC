'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RealEstate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 font-['Inter']">
      <Header />
      
      {/* Hero Section - About the Service */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 bg-gradient-to-br from-green-600 via-teal-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight tracking-tight">
            Real Estate Excellence
          </h1>
          <p className="text-xl md:text-2xl font-body text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in property investment, sales, and management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-body-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Properties
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-body-bold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 shadow-lg">
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Services <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">We Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate consulting services for strategic decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Market Research & Analysis */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Market Research & Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Analyze market trends, property values, and investment opportunities to provide clients with data-driven insights.
                </p>
              </div>
            </div>

            {/* Client Advisory */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Advisory</h3>
                <p className="text-gray-600 leading-relaxed">
                  Offer expert guidance on buying, selling, or developing properties aligned with long-term goals.
                </p>
              </div>
            </div>

            {/* Investment Strategy */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-700/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Investment Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop and recommend strategies to increase investment returns and identify profitable property investments.
                </p>
              </div>
            </div>

            {/* Property Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assist clients in planning and managing property development projects from concept to completion.
                </p>
              </div>
            </div>

            {/* Negotiation & Compliance */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Negotiation & Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Negotiate on behalf of clients and ensure all transactions/projects comply with real estate laws and regulations.
                </p>
              </div>
            </div>

            {/* Client Relationships */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-700/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Relationships</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build and maintain strong relationships, acting as a trusted advisor beyond single transactions.
                </p>
              </div>
            </div>

            {/* Property Valuation */}
            <div className="group relative md:col-start-2 lg:col-start-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-800/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Valuation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Evaluate property values and present profitable proposals to clients with accurate market assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-white/10 rounded-3xl blur-2xl"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Us</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Icons/illustrations */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Analytics</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Communication</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-700/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Compliance</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-800/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Market Trends</h4>
                  </div>
                </div>

                {/* Right: Text */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Strong Analytical, Negotiation & Communication Skills</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our team combines data-driven analysis with exceptional negotiation abilities and clear communication to deliver optimal results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise in Local Real Estate Laws & Regulations</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Deep understanding of legal frameworks ensures all transactions are compliant and risk-free for our clients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Deep Understanding of Market Trends</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Continuous market research and trend analysis enable us to provide insights that maximize investment potential.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Advisors for Long-term Property Success</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We build lasting relationships focused on your long-term success, not just individual transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glowing accent background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl"></div>
            
            {/* Frosted glass panel */}
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Ready to make <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">smarter real estate moves?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Book a consultation and let us guide you towards smarter investments, profitable properties, and long-term growth.
              </p>
              
              <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
