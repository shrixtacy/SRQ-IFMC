'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <header className={`transition-all duration-700 ease-in-out bg-white/95 backdrop-blur-md shadow-lg transform-gpu ${
        isScrolled 
          ? 'mt-4 py-2 px-8 rounded-3xl w-[85vw] max-w-6xl' 
          : 'mt-0 py-3 px-0 w-full rounded-none'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-700 ${
          isScrolled ? 'px-0' : 'max-w-7xl mx-auto px-6'
        }`}>
          <div className={`flex items-center transition-all duration-700 ${isScrolled ? 'gap-2' : 'gap-3'}`}>
            <div className={`${isScrolled ? 'w-10 h-10' : 'w-14 h-14'} rounded-full bg-white shadow-lg flex items-center justify-center p-2 transition-all duration-700 overflow-hidden`}>
              <Image 
                src="/assets/assets/SRIQ IFMC LLP BRAND KIT.svg" 
                alt="SRIQ IFMC LLP Logo" 
                width={isScrolled ? 24 : 32}
                height={isScrolled ? 24 : 32}
                className="transition-all duration-700 object-contain"
              />
            </div>
            <span className={`font-bold text-blue-800 transition-all duration-700 ${
              isScrolled ? 'text-base' : 'text-xl'
            }`}>
              SRQ IFMC
            </span>
          </div>
          <nav>
            <ul className={`flex items-center transition-all duration-700 ${isScrolled ? 'gap-4' : 'gap-8'}`}>
              <li>
                <Link 
                  href="/" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 ${isScrolled ? 'text-sm' : 'text-base'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 ${isScrolled ? 'text-sm' : 'text-base'}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/finance" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 ${isScrolled ? 'text-sm' : 'text-base'}`}
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing-communication" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 ${isScrolled ? 'text-sm' : 'text-base'}`}
                >
                  Marketing & Communication
                </Link>
              </li>
              <li>
                <Link 
                  href="/real-estate" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 ${isScrolled ? 'text-sm' : 'text-base'}`}
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
