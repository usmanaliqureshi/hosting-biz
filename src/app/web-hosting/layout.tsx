import PrelineScript from "../../components/PrelineScript";
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Hosting - Reliable Web Hosting',
  description: 'Web Hosting which is reliable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  )
}
