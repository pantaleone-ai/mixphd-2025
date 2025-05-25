import { notFound, redirect } from "next/navigation"

import { FadeIn } from "@/components/cult/fade-in"
import { getProductById } from "@/app/actions/product"

import { ProductDetails } from "./details"
import { DirectorySearch } from "@/components/directory-search"


const ProductIdPage = async ({ params }: { params: { slug: string } }) => {
  let data = await getProductById(params.slug)

  if (!data) {
    notFound()
    // redirect("/")
  }

  return (
    <>
      <div className="z-10">
        <div className=" py-4 w-full relative  mx-auto max-w-6xl">
          <FadeIn>
                  {/* <div className="grid justify-items-end">
                  <div className=" max-w-full pt-4 ml-auto">
                  <DirectorySearch />
                  </div>
                  </div> */}
            {data ? <ProductDetails product={data[0]} /> : null}</FadeIn>
        </div>
        
      </div>
      
    </>
  )
}

export default ProductIdPage
