import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

const inter = EB_Garamond({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blue Logistics',
  description: 'Blue Logistics: Pioneering Land-Based Logistics Solutions for Efficient Goods Transportation in South Africa' 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
