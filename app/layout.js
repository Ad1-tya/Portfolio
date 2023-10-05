import { Loading } from '@/components';
import './globals.css'

export const metadata = {
  title: 'Adi',
  description: 'UI/UX Designer / Frontend Developer',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='scrollbar-hide'>
        {children}
      </body>
    </html>
  )
}
