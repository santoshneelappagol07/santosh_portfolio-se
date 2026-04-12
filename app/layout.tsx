import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Santosh Neelappagol | Python Developer',
  description: 'Python Developer specializing in Flask, AI applications, and backend development. MCA student with a focus on building real-world solutions.',
  keywords: ['Python Developer', 'Flask', 'AI', 'Backend Developer', 'SQL', 'MCA'],
  authors: [{ name: 'Santosh Neelappagol' }],
  openGraph: {
    title: 'Santosh Neelappagol | Python Developer & AI Builder',
    description: 'Python Developer specializing in Flask, AI applications, and backend development.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
