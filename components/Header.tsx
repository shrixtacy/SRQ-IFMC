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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 mx-4 mt-4 rounded-3xl' 
        : 'bg-white/95 backdrop-blur-md shadow-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src="/assets/assets/SRQ_LOGO.jpeg" 
            alt="SRQ IFMC Logo" 
            width={isScrolled ? 50 : 60}
            height={isScrolled ? 50 : 60}
            className="rounded-full transition-all duration-300"
          />
          <span className={`font-bold text-blue-800 transition-all duration-300 ${
            isScrolled ? 'text-lg' : 'text-xl'
          }`}>
            SRQ IFMC
          </span>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/finance" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Finance
              </Link>
            </li>
            <li>
              <Link 
                href="/marketing-communication" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Marketing and Communication
              </Link>
            </li>
            <li>
              <Link 
                href="/real-estate" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Real Estate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
