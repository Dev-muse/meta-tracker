import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from './NavBar';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en"  className={inter.variable}>
      <body >
        
        <Theme appearance="light" accentColor="ruby" radius="small">
          <NavBar />
          <main className="p-4">{children}</main>
         
        </Theme>
        
      </body>
    </html>
  )
}
