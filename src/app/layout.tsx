import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { UserContextProvider } from '@/context/UserContext';
import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'SkyZero',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/png" href='./favicon.png' />
      </head>
      <body className={rubik.className}>
        <UserContextProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  )
}
