'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Finance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 bg-gradient-to-br from-slate-800 via-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight tracking-tight">
            Financial Excellence
          </h1>
          <p className="text-xl md:text-2xl font-body text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial planning, investment advisory, and insurance solutions tailored for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-body-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              Our Services
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-body-bold rounded-xl hover:from-blue-600 hover:to-slate-700 transition-all duration-300 shadow-lg">
              Get Financial Advice
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Finance Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Investment Advisory */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Investment Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on investment strategies, portfolio management, and wealth creation tailored to your financial goals.
              </p>
            </div>

            {/* Financial Planning */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive financial planning services including retirement planning, tax optimization, and risk management.
              </p>
            </div>

            {/* Insurance Solutions */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Insurance Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive insurance products including life, health, property, and business insurance solutions.
              </p>
            </div>

            {/* Corporate Finance */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Corporate Finance</h3>
              <p className="text-gray-600 leading-relaxed">
                Business financing solutions, capital structuring, and corporate financial advisory services.
              </p>
            </div>

            {/* Mutual Funds */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mutual Funds</h3>
              <p className="text-gray-600 leading-relaxed">
                Diversified mutual fund investments with professional fund management and regular portfolio reviews.
              </p>
            </div>

            {/* Tax Advisory */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tax Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic tax planning and advisory services to optimize your tax efficiency and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SRQ IFMC</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years Experience</h3>
              <p className="text-gray-600">Decade of expertise in financial services</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Happy Clients</h3>
              <p className="text-gray-600">Satisfied customers across various sectors</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600">Complete transparency in all dealings</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
