import "./globals.css"
import { ReactNode } from "react"
import localFont from "next/font/local"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import  ScrollToTopButton  from "@/components/ui/scroll-to-top-button"
import { GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "./providers"
import { link } from "fs"
import { relative } from "path"


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
  link: "/favicon.ico",
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
                                 <div className="sticky shadow-sm top-0 border-b border-gray-800 bg-black px-4 py-1 text-gray-200 z-20">
                  <p className="text-center font-medium text-sm/6">
                   mixPHD recommended
                    <a href="https://amzn.to/3SmSAHM" className="inline-block underline p-1" target="blank"> barwear deals @ Amazon</a>
                  </p>
                </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="bg-[#FAFAFA] dark:bg-background  text-foreground flex flex-col justify-center items-center w-full pt-13">
              <div className=" w-full ">
                {children}</div>
            </main>
          </TooltipProvider>
                          <footer className="fixed bottom-0 left-0 z-20 w-full p-2 border-t border-gray-800 shadow-sm bg-black">
      <span className="text-xs text-gray-500 sm:text-center">
        © <a href="https://mixphd.com/" className="hover:underline"><b>🍸 MixPHD™</b></a> All Rights Reserved
      </span>
      <ul className="flex flex-wrap items-center mt-1 mb-1 text-xs font-medium text-gray-500">
        {/* <li>
          <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li> */}
        <li>
          <a href="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms" className="hover:underline me-4 md:me-6">Terms of use</a>
        </li>
        {/* <li>
          <a href="#" className="hover:underline">Contact</a>
        </li> */}
        <span className="text-xs text-gray-800 m-0 p-0">
          mixPHD.com is for those of legal drinking age. By accessing, you confirm you are of drinking age. Drink responsibly.
        </span>
      </ul>
    </footer>
          <ScrollToTopButton />
          <Toaster richColors />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-ZG7Z12ZQEE" />
    </html>
  )
}
