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
            <li><Link href="/finance">Finance</Link></li>
            <li><Link href="/marketing-communication">Marketing and Communication</Link></li>
            <li><Link href="/real-estate">Real Estate</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
