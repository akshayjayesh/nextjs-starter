import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Starter kit with Next.js 14, Tailwind CSS, and TypeScript",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <Navbar />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
