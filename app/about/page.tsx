import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-28 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-xl shadow-2xl ring-4 ring-white/20 flex items-center justify-center p-4 overflow-hidden">
              <Image 
                src="/assets/assets/SRIQ IFMC LLP BRAND KIT.svg" 
                alt="SRIQ IFMC LLP Logo" 
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight tracking-tight">
            SRQ IFMC
          </h1>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-white/30 w-20"></div>
            <div className="w-2 h-2 bg-white rounded-full mx-4"></div>
            <div className="h-px bg-white/30 w-20"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-body text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering Brands. Influencing Minds. Delivering Finance & Insurance Solutions with Excellence and Innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-body-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              Discover Our Story
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-body-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Streamlined Content Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100 relative">
        <div className="max-w-5xl mx-auto px-4">
          {/* Mission & Vision in elegant layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="text-left p-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
                🎯
              </div>
              <h2 className="text-4xl font-light text-gray-700 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                To provide comprehensive financial and communication solutions that create lasting value and meaningful impact for our clients. We strive to be the bridge between financial expertise and strategic communication excellence.
              </p>
            </div>
            
            <div className="text-left p-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-8 shadow-lg">
                👁️
              </div>
              <h2 className="text-4xl font-light text-gray-700 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                To be the trusted partner of choice for organizations seeking to optimize their financial performance and enhance their market presence. We envision a future where every business has access to world-class financial and communication strategies.
              </p>
            </div>
          </div>

          {/* Core Values - Simplified */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-700 mb-8">
              Our Core Values
            </h2>
            <div className="w-20 h-2 bg-gradient-to-br from-blue-500 to-purple-600 mb-12"></div>
            
            <div className="flex justify-center flex-wrap gap-8 max-w-3xl mx-auto">
              {[
                'Integrity & Transparency',
                'Innovation & Excellence', 
                'Client-Centric Approach',
                'Collaborative Partnership'
              ].map((value, index) => (
                <div key={index} className="bg-white bg-opacity-80 backdrop-filter blur-10px p-4 rounded-3xl border border-blue-500 border-opacity-20 text-lg font-medium text-gray-700 shadow-lg cursor-default transition duration-300">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-center relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-light text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
            Let's discuss how our expertise can help you achieve your financial and strategic goals.
          </p>
          <button className="bg-white bg-opacity-15 backdrop-filter blur-20px border-2 border-white border-opacity-30 text-lg font-medium text-white rounded-3xl px-6 py-3 shadow-lg cursor-pointer transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
