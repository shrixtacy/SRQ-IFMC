'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RealEstate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image 
                src="/assets/assets/SRQ_LOGO.jpeg" 
                alt="SRQ IFMC Logo" 
                width={140}
                height={140}
                className="rounded-full shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20 p-2"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-800 bg-clip-text text-transparent">
              Real Estate
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full mx-4"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Premium real estate solutions for residential, commercial, and investment properties
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-gray-800 font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View Properties
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Real Estate Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your property needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Sales */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Residential Sales</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance in buying and selling residential properties including apartments, villas, and independent houses.
              </p>
            </div>

            {/* Commercial Properties */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Commercial Properties</h3>
              <p className="text-gray-600 leading-relaxed">
                Commercial real estate solutions including office spaces, retail outlets, warehouses, and industrial properties.
              </p>
            </div>

            {/* Property Investment */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Investment</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic property investment advisory services to maximize returns and build long-term wealth through real estate.
              </p>
            </div>

            {/* Property Management */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete property management services including tenant management, maintenance, and rental optimization.
              </p>
            </div>

            {/* Legal Services */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-green-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legal Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Real estate legal services including documentation, title verification, and property registration assistance.
              </p>
            </div>

            {/* Valuation Services */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Valuation Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional property valuation services for accurate market pricing and investment decision support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Property <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse range of properties to meet every requirement and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Villas</h3>
              <p className="text-gray-600">Premium independent houses with modern amenities</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Apartments</h3>
              <p className="text-gray-600">Modern residential complexes with world-class facilities</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Commercial Spaces</h3>
              <p className="text-gray-600">Prime office and retail spaces in business districts</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Plots</h3>
              <p className="text-gray-600">Strategic land investments for future development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">SRQ IFMC</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years Experience</h3>
              <p className="text-gray-600">Extensive experience in real estate market</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1000+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Properties Sold</h3>
              <p className="text-gray-600">Successful property transactions completed</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">High satisfaction rate among our clients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Locations</h3>
              <p className="text-gray-600">Properties across prime locations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
