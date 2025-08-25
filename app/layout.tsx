import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SRQ IFMC - Crafting Influence, Shaping Brands',
  description: 'Empowering Brands. Influencing Minds. Delivering Finance & Insurance Solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
