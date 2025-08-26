'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Image 
            src="/assets/assets/SRQ_LOGO.jpeg" 
            alt="SRQ IFMC Logo" 
            width={75}
            height={75}
            className="logo-image"
          />
          <span className="logo-text">SRQ IFMC</span>
        </div>
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#investment">Investment</Link></li>
            <li><Link href="#contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
