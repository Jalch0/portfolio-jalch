import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Javier Labrador | Portfolio Website',
  description: 'Javier Labrador is a Full-Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-950 text-gray-950 relative pt-28 sm:pt-36 bg-my-image`}>
        
        <ActiveSectionContextProvider>
        <Header/>
        {children}
        <Footer/>
        <Toaster position='top-right'/>
        </ActiveSectionContextProvider>

        </body>
    </html>
  )
}
