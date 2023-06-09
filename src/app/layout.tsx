import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
