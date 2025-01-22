import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CodeBackground from './components/CodeBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuuki Endo - Game Developer Portfolio',
  description: 'Portfolio showcasing the game development work of Yuuki Endo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <CodeBackground />
        <Navbar />
        <main className="relative min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

