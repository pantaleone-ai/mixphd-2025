import { ReactElement } from "react"
import { BoxIcon, Hash, Search, TagIcon } from "lucide-react"

// import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { ResourceCardGrid } from "@/components/directory-card-grid"

import { NavSidebar } from "../../components/nav"
import { getCachedFilters } from "../actions/cached_actions"
import { getProducts } from "../actions/product"
import { DirectorySearch } from "@/components/directory-search"



export const dynamic = "force-dynamic"

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: {
    search?: string
    category?: string
    label?: string
    tag?: string
  }
}): Promise<ReactElement> {
  const { search, category, label, tag } = searchParams
  const data = await getProducts(search, category, label, tag)
  let filters = await getCachedFilters()

  return (
    <>
      <NavSidebar
        categories={filters.categories}
        labels={filters.labels}
        tags={filters.tags}
      />
                          {/* <div className="sticky shadow-sm top-0 border-b border-gray-800 bg-black px-4 py-1 text-gray-200 z-20">
                  <p className="text-center font-medium text-sm/6">
                   mixPHD recommended
                    <a href="https://amzn.to/3SmSAHM" className="inline-block underline p-1" target="blank"> barwear deals @ Amazon</a>
                  </p>
                </div> */}
      <div className="grid justify-items-end">
      <div className=" max-w-full pt-4 ml-auto">
      {/* <DirectorySearch /> */}
      </div>
        <FadeIn>

          <ResourceCardGrid sortedData={data} filteredFeaturedData={null}>
            {search ?? category ?? label ?? tag ? (
              <div className="md:mr-auto mx-auto flex flex-col items-center md:items-start">
                <div className="flex mb-1 justify-center md:justify-start">
                
                  {search ? (
                    <Search className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {category ? (
                    <BoxIcon className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {label ? (
                    <Hash className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {tag ? (
                    <TagIcon className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {search ? "search" : ""}
                  {category ? "category" : ""}
                  {label ? "label" : ""}
                  {tag ? "tag" : ""}
                </div>
                <GradientHeading size="xxl">
                  {search ?? category ?? label ?? tag}
                </GradientHeading>
              </div>
            ) : null}

            <Separator className="mb-12 ml-auto w-[85%] bg-black/5 h-[2px] animate-pulse rounded-l-full" />
          </ResourceCardGrid>
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
        </FadeIn>
      </div>
    </>
  )
}
