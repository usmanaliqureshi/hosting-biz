import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domain Registration - Best Domain Name Prices',
  description: 'Our domain name registration prices are listed below. Remember that our add-ons such as WHOIS Privacy, Email Forwarding, Domain Defender Protection, Custom WHOIS Records and DNS Management are always 100% free!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
