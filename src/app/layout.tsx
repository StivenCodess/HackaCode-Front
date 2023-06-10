import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import RollerCoaster from '@/components/icons/RollerCoaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HackaCode - Theme Park',
  description: "A website developed for the HackaCode tournament.\
  It consists in managing a park of dirversions, sales, employees, clients, etc.\ ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='flex p-3'>
           <Link href={"/"} className='font-bold flex gap-1 items-center'>
              CodeCrafters
              <RollerCoaster className="w-8 h-8 fill-white"/>
            </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
