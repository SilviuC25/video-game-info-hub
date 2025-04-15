import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Game Info Hub',
  description: 'A simple site for video game details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
