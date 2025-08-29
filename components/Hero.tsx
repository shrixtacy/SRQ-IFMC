'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const gifRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gifRef.current) {
        const rect = gifRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const deltaX = (e.clientX - centerX) * 0.02
        const deltaY = (e.clientY - centerY) * 0.02
        
        // Apply both cursor following and preserve the floating animation
        gifRef.current.style.setProperty('--mouse-x', `${deltaX}px`)
        gifRef.current.style.setProperty('--mouse-y', `${deltaY}px`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <section className="relative h-screen flex items-center pt-28 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Grid - Content */}
          <div className="pl-8 md:pl-12 lg:pl-16">
            {/* Animated heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-8 leading-none tracking-tight animate-blur-in">
              FINANCE &
              <br />
              COMMUNICATION
              <br />
              <span className="text-blue-600">AGENCY</span>
            </h1>
            
            {/* Animated descriptive text */}
            <div className="max-w-2xl mb-8 animate-blur-in-delayed">
              <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed mb-4 uppercase tracking-wide">
                WE SPECIALIZE IN COMPREHENSIVE FINANCIAL ADVISORY SERVICES, 
                STRATEGIC MARKETING COMMUNICATIONS, AND PREMIUM REAL ESTATE 
                SOLUTIONS TAILORED FOR MODERN BUSINESSES.
              </p>
              <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                From investment planning and insurance solutions to brand strategy and property consultancy, 
                we deliver integrated expertise that drives sustainable growth and builds lasting value for our clients.
              </p>
            </div>

            {/* Animated CTA Button */}
            <Link 
              href="/about" 
              className="inline-block px-8 py-3 bg-gray-900 text-white text-xs font-medium tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 animate-blur-in-more-delayed hover:scale-105"
            >
              Discover More
            </Link>
          </div>

          {/* Right Grid - Floating GIF */}
          <div className="relative flex justify-center items-center overflow-visible">
            <div 
              ref={gifRef}
              className="floating-gif cursor-follow animate-craft-in relative z-10"
              style={{
                animation: 'craft-in 2s ease-out forwards, float 6s ease-in-out infinite 2s',
                transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
                transition: 'transform 0.15s ease-out',
                '--mouse-x': '0px',
                '--mouse-y': '0px',
              } as React.CSSProperties}
            >
              <img 
                src="/assets/assets/lol.gif" 
                alt="Floating animation" 
                className="w-[40rem] h-[40rem] md:w-[45rem] md:h-[45rem] lg:w-[50rem] lg:h-[50rem] xl:w-[55rem] xl:h-[55rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(0px); 
          }
          50% { 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(-20px); 
          }
        }

        @keyframes blur-in {
          0% { 
            opacity: 0; 
            filter: blur(20px); 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0px); 
          }
        }

        @keyframes craft-in {
          0% { 
            opacity: 0; 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) scale(0.3); 
            filter: blur(10px);
          }
          50% { 
            opacity: 0.7; 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) scale(1.1); 
            filter: blur(5px);
          }
          100% { 
            opacity: 1; 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) scale(1); 
            filter: blur(0px);
          }
        }

        .animate-blur-in {
          animation: blur-in 1.2s ease-out forwards;
        }

        .animate-blur-in-delayed {
          animation: blur-in 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-blur-in-more-delayed {
          animation: blur-in 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-craft-in {
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
