import { Suspense } from "react"

import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/cult/fade-in"
import { DirectorySearch } from "@/components/directory-search"
import { Hero } from "@/components/hero"

import {
  EmptyFeaturedGrid,
  FeaturedGrid,
  ResourceCardGrid,
} from "../components/directory-card-grid"
import { NavSidebar } from "../components/nav"
import { getCachedFilters } from "./actions/cached_actions"
import { getProducts } from "./actions/product"

// Select the resources you want to feature.. AD SPACE?
const FEATURED_IDS = [
  "48aa40e7-8523-49b5-9e56-665e081652ab",
  "629c3c97-29ac-490b-ae45-cb17b280f123",
  "4e544cd3-4530-4de7-9c6e-32c44d1b0c03",
  "e4a4e1ff-4e63-449c-b409-3bb49128e79f",
] // Replace 'id1', 'id2', 'id3' with actual IDs you want to feature

async function Page({ searchParams }: { searchParams: { search?: string } }) {
  let data = await getProducts(searchParams.search)
  let filters = await getCachedFilters()
  const filteredFeaturedData = data.filter((d: any) =>
    FEATURED_IDS.includes(d.id)
  )

  return (
    <>
                    <div className="sticky shadow-sm top-0 border-b border-gray-800 bg-black px-4 py-1 text-gray-200 z-20">
                  <p className="text-center font-medium text-sm/6">
                   mixPHD recommended
                    <a href="https://amzn.to/3SmSAHM" className="inline-block underline p-1" target="blank"> barwear deals @ Amazon</a>
                  </p>
                </div>
      <FadeIn>
      <NavSidebar
        categories={filters.categories}
        labels={filters.labels}
        tags={filters.tags}
      />
      </FadeIn>

      <div className="max-w-full px-2 md:pl-4 md:pr-0 pt-2">
        <FadeIn>
          <ResourceCardGrid
            sortedData={data}
            filteredFeaturedData={filteredFeaturedData}
          >
            <div className="grid grid-cols-1  xl:grid-cols-6 lg:gap-16 pb-8 pt-8 relative">
              <div className="col-span-1 md:col-span-2 z-10">
                <Hero>
                  <DirectorySearch />
                </Hero>
              </div>

              <div className="col-span-1 md:col-span-4 mt-8 md:mt-8">
                {filteredFeaturedData.length >= 1 ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <div className=" relative">
                      
                      <FeaturedGrid featuredData={filteredFeaturedData} />
                    
                    </div>
                    
                  </Suspense>
                  
                ) : (
                  <div className="relative">
                    <EmptyFeaturedGrid />
                  </div>
                  
                )}
              </div>
            </div>
            
          </ResourceCardGrid>
          


<footer className="fixed bottom-0 left-0 z-20 w-full p-2 border-t border-gray-800 shadow-sm bg-black">
    <span className="text-xs text-gray-500 sm:text-center">© <a href="https://mixphd.com/" className="hover:underline"> <b>MixPHD™</b></a> All Rights Reserved
    </span>
    <ul className="flex flex-wrap items-center mt-2 mb-2 text-xs font-medium text-gray-500">
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
    </ul>
        <span className="text-xs text-gray-800 m-0 p-0"> mixPHD.com is intended for individuals of legal drinking age. By accessing, you confirm you are of drinking age. Drink responsibly.
    </span>
</footer>


        </FadeIn>
      </div>
    </>
  )
}

export default Page
