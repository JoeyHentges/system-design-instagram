import { Inter } from "next/font/google"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "font-inter bg-background antialiased selection:bg-slate-300 selection:text-slate-900",
          fontInter.variable
        )}
      >
        {children}
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  )
}