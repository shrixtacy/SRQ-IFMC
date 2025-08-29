'use client'

import { useEffect, useState } from 'react'

export default function ScrollingText() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const texts = [
    'Crafting Influence.',
    'Shaping Brands.',
    'Inspiring Impact.'
  ]

  const getTextOpacity = (index: number) => {
    const sectionHeight = window.innerHeight * 0.8
    const startOffset = window.innerHeight * 0.5
    const sectionStart = startOffset + (index * sectionHeight)
    const sectionEnd = sectionStart + sectionHeight
    
    if (scrollY < sectionStart - 200) return 0
    if (scrollY > sectionEnd + 200) return 0
    
    const fadeInStart = sectionStart - 200
    const fadeInEnd = sectionStart + 100
    const fadeOutStart = sectionEnd - 100
    const fadeOutEnd = sectionEnd + 200
    
    if (scrollY >= fadeInStart && scrollY <= fadeInEnd) {
      return (scrollY - fadeInStart) / (fadeInEnd - fadeInStart)
    }
    
    if (scrollY > fadeInEnd && scrollY < fadeOutStart) {
      return 1
    }
    
    if (scrollY >= fadeOutStart && scrollY <= fadeOutEnd) {
      return 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart)
    }
    
    return 0
  }

  const getTextBlur = (index: number) => {
    const opacity = getTextOpacity(index)
    return (1 - opacity) * 20
  }

  return (
    <div className="relative">
      {texts.map((text, index) => (
        <section
          key={index}
          className="h-[80vh] flex items-center justify-center relative"
          style={{ minHeight: '80vh' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-gray-900 text-center leading-none tracking-tight transition-all duration-300 ease-out"
              style={{
                opacity: getTextOpacity(index),
                filter: `blur(${getTextBlur(index)}px)`,
                transform: `translateY(${(1 - getTextOpacity(index)) * 50}px)`
              }}
            >
              {text}
            </h2>
          </div>
        </section>
      ))}
    </div>
  )
}
