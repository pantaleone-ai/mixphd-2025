import "./globals.css"
import { ReactNode } from "react"
import localFont from "next/font/local"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import  ScrollToTopButton  from "@/components/ui/scroll-to-top-button"
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "./providers"

export const fontSans = localFont({
  src: "../fonts/haskoy.ttf",
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://www.mixphd.com`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MixPhD - Premium Drinkware & Barware for Cocktail Enthusiasts",
  description: "Discover premium drinkware and barware at MixPhD. Shop high-quality cocktail glasses, shakers, and bar tools designed for mixology lovers and home bartenders.",
  keywords: "drinkware, barware, cocktail glasses, mixology tools, bar tools, cocktail shakers, premium drinkware, home bartending, MixPhD",
  structuredData: {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "MixPhD",
    "url": "https://www.mixphd.com/",
    "description": "MixPhD offers premium drinkware and barware for cocktail enthusiasts and home bartenders, featuring high-quality cocktail glasses, shakers, and mixology tools."
  },
  socialMediaTags: {
    "og:title": "MixPhD - Premium Drinkware & Barware for Cocktail Enthusiasts",
    "og:description": "Shop premium cocktail glasses, shakers, and bar tools at MixPhD. Elevate your mixology game with high-quality drinkware designed for home bartenders.",
    "twitter:card": "summary_large_image",
    "og:site_name": "MixPhD - Premium Drinkware & Barware for Cocktail Enthusiasts",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} font-sans scroll-smooth  `} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="bg-[#FAFAFA] dark:bg-background  text-foreground flex flex-col justify-center items-center w-full pt-13">
              <div className=" w-full ">{children}</div>
            </main>
          </TooltipProvider>
          <ScrollToTopButton />
          <Toaster richColors />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-ZG7Z12ZQEE" />
    </html>
  )
}
