import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Adi',
  description: 'Porfolio: Aditya Pandey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
