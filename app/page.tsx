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
      <NavSidebar
        categories={filters.categories}
        labels={filters.labels}
        tags={filters.tags}
      />

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
        </FadeIn>
      </div>
    </>
  )
}

export default Page
