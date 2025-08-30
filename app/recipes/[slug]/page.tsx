import { notFound, redirect } from "next/navigation"
import { getProductById } from "@/app/actions/product"


const RecipeSlugPage = async ({ params }: { params: { slug: string } }) => {
  let data = await getProductById(params.slug)

  if (data && data[0]) {
    redirect(`/recipes/${data[0].codename}`)
  } else {
    notFound()
  }
}

export default RecipeSlugPage
