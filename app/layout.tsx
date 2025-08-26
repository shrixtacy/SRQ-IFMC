import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SRQ IFMC',
  description: 'Empowering Brands. Influencing Minds. Delivering Finance & Insurance Solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
