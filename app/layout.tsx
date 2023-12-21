import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Margati',
  description: 'Margati enhance your Skill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Banner />
        <Banner2 />
        {children}
        <Footer />
        </body>
    </html>
  )
}

