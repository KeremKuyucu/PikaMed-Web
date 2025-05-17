import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "PikaMed - Tip 1 Diyabet Yönetim Uygulaması",
  description: "Tip 1 diyabet hastalarına yönelik yapay zeka destekli kolaylaştırıcı uygulama",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
        <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cdn.glitch.global/e74d89f5-045d-4ad2-94c7-e2c99ed95318/logo.png?v=1747478110513"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

