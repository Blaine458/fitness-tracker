import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitTracker Pro - Your Personal Fitness Companion",
  description:
    "Track workouts, monitor nutrition, and achieve your fitness goals with our comprehensive fitness tracking application.",
  keywords: "fitness, workout, nutrition, health, tracking, exercise, wellness, goals",
  authors: [{ name: "FitTracker Team" }],
  openGraph: {
    title: "FitTracker Pro",
    description: "Your Personal Fitness Companion",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitTracker Pro",
    description: "Your Personal Fitness Companion",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <DashboardHeader />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
