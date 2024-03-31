import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Webelong',
  description: 'Viser plus loin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/vlu0ysv.css"></link>
      </head>
      <body>
        <Navbar />
        <main className="service-container relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}