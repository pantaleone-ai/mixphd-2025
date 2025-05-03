import React from "react"
import Link from "next/link"
import { PlusIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center md:items-start md:px-2 justify-center gap-2 md:ml-12">
      <div className="flex items-center space-x-2">
        <h1 className="text-5xl font-black text-left">mixPHD</h1>
        <Badge
          variant="outline"
          className="border border-primary/10 hidden md:block"
        >
          <span className="h-2 w-2 bg-grey-400 text-xs rounded-full animate-pulse mr-1"></span>
          the drink dr.
        </Badge>
      </div>
      <div className="flex flex-col items-center md:items-start md:mt-4">
        <Badge className="hidden md:block" variant="default">
          Quench here ⤵️
        </Badge>
        <div className="flex w-full items-center mt-2 justify-center md:justify-start">
          <span className="mx-2 text-xl font-bold text-left">
            The best drink recipes in the world recommended by MixPHD
          </span>
        </div>
        <p className="mt-2 text-center md:text-left text-muted-foreground text-sm md:text-base px-2">
            Explore the World's Best Cocktail & Drink Recipes for Every Occasion
        </p>
      </div>
      <div className="flex mt-4 mb-4 space-x-4">
        {/* <Button variant="secondary" asChild>
          <Link href="/submit" className="flex items-center text-black">
            <PlusIcon className="size-4 mr-1" /> Submit your drink recipe
          </Link>
        </Button> */}
        {/* <a
          href="https://x.com/nolansym"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <Twitter className="size-4 mr-1" />
          updates
        </a> */}
      </div>
      {children}
    </div>
  )
}
