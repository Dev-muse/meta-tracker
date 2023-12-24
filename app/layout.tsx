
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next';
import NavBar from './NavBar';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: 'Meta-Tracker',
  description: 'create,track and resolve bugs efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  >
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="green" radius="small">
        
          <NavBar />
          <main className="p-4">{children}</main>
           
        </Theme>
        
      </body>
    </html>
  )
}
