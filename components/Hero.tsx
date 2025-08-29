import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Large minimalistic heading - left aligned */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 mb-12 leading-none tracking-tight">
          FINANCE &
          <br />
          COMMUNICATION
          <br />
          <span className="text-blue-600">AGENCY</span>
        </h1>
        
        {/* Left-aligned descriptive text */}
        <div className="max-w-lg mb-12">
          <p className="text-base text-gray-600 font-light leading-relaxed mb-4 uppercase tracking-wide">
            WE SPECIALIZE IN COMPREHENSIVE FINANCIAL ADVISORY SERVICES, 
            STRATEGIC MARKETING COMMUNICATIONS, AND PREMIUM REAL ESTATE 
            SOLUTIONS TAILORED FOR MODERN BUSINESSES.
          </p>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            From investment planning and insurance solutions to brand strategy and property consultancy, 
            we deliver integrated expertise that drives sustainable growth and builds lasting value for our clients.
          </p>
        </div>

        {/* Minimal CTA - left aligned */}
        <Link 
          href="/about" 
          className="inline-block px-8 py-3 bg-gray-900 text-white text-xs font-medium tracking-wider uppercase hover:bg-gray-800 transition-colors duration-300"
        >
          Discover More
        </Link>
      </div>
    </section>
  )
}
