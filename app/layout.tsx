import { Footer, Navbar } from '@/components'
import './globals.css'
import SignUp from '@/components/SignUp'

export const metadata = {
  title: 'Car Hub',
  description: 'Find your dream car !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/> 
        {children}
        <Footer/>
        {/* <SignUp/> */}
      </body>
    </html>
  )
}
