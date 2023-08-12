import './globals.css'

export const metadata = {
  title: 'Adi',
  description: 'Porfolio: Aditya Pandey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        {children}
      </body>
    </html>
  )
}
