"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Blocks,
  Edit2Icon,
  ExternalLink,
  Hash,
  HeartIcon,
  MessageSquareTextIcon,
  Sparkles,
  Tag,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"

// STEP 1: UPDATED TYPESCRIPT INTERFACES
// ======================================

// Define the new interface for your structured JSONB data
interface LongDescription {
  introduction: string
  ingredients: { amount: string; name: string }[]
  preparation: string[]
  notesAndTips: string
  history: string
  visualDescription: string
  conclusion: string
}

// Update your main Product interface to use the new type
interface Product {
  id: string
  created_at: string
  full_name: string
  email: string
  twitter_handle: string
  product_website: string
  codename: string
  punchline: string
  description: string
  logo_src: string
  user_id: string
  tags: string[]
  view_count: number
  approved: boolean
  labels: string[]
  categories: string
  // This is the important change
  long_description: LongDescription // Changed from 'string'
}

// STEP 2: NEW HELPER COMPONENT TO RENDER THE STRUCTURED DATA
// ==========================================================

const StructuredDescription = ({ data }: { data: LongDescription }) => {
  // Return null if data isn't available to prevent errors
  if (!data) {
    return null
  }

  return (
    <div className="pt-8 space-y-8 text-xl tracking-tight leading-relaxed text-neutral-800 dark:text-neutral-400">
      {/* Introduction */}
      {data.introduction && (
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            Introduction
          </h3>
          <p style={{ whiteSpace: "pre-line" }}>{data.introduction}</p>
        </div>
      )}

      {/* Ingredients */}
      {data.ingredients && data.ingredients.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            Ingredients
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            {data.ingredients.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.amount}</span> of{" "}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Preparation */}
      {data.preparation && data.preparation.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            Preparation
          </h3>
          <ol className="space-y-2 list-decimal list-inside">
            {data.preparation.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Notes and Tips */}
      {data.notesAndTips && (
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            Notes & Tips
          </h3>
          <p style={{ whiteSpace: "pre-line" }}>{data.notesAndTips}</p>
        </div>
      )}

      {/* History */}
      {data.history && (
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            History
          </h3>
          <p style={{ whiteSpace: "pre-line" }}>{data.history}</p>
        </div>
      )}
      
      {/* Visual Description */}
      {data.visualDescription && (
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            Visual Description
          </h3>
          <p style={{ whiteSpace: "pre-line" }}>{data.visualDescription}</p>
        </div>
      )}

      {/* Conclusion */}
      {data.conclusion && (
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-200">
            Conclusion
          </h3>
          <p style={{ whiteSpace: "pre-line" }}>{data.conclusion}</p>
        </div>
      )}
    </div>
  )
}

// STEP 3: MAIN COMPONENT WITH THE FINAL UPDATE
// ==================================================

export const ProductDetails = ({ product }: { product: Product }) => (
  <div className={cn("py-2 relative flex flex-col h-full")}>
    <div className="w-full gap-8 py-2 relative items-center">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-8 w-full">
        <div className="space-y-6 col-span-6 md:col-span-5 md:mt-12 z-10">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Recipes</BreadcrumbLink>/
              <BreadcrumbLink href={`/products/${product.id}`}>
                {product.codename.substring(0, 20)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <CardTitle className="text-6xl tracking-tighter font-extrabold text-neutral-900 dark:text-neutral-200">
            {product.punchline}
          </CardTitle>
          <CardDescription className="md:text-xl text-lg tracking-tight text-neutral-800 text-balance dark:text-neutral-400 flex gap-2 items-center ">
            <Blocks className="stroke-1 size-8" />{" "}
            <span className="flex-wrap">{product.categories}</span>
          </CardDescription>
          {product.tags &&
            Array.isArray(product.tags) &&
            product.tags.length > 0 && (
              <CardDescription className="md:text-xl text-lg tracking-tight text-neutral-800 text-balance dark:text-neutral-400 flex gap-2 items-center">
                <Tag className="stroke-1 size-8" />{" "}
                <span className="flex-wrap">{product.tags.join(", ")}</span>
              </CardDescription>
            )}

          <Link
            href={`/products`}
            className="py-4 md:flex items-center text-2xl font-semibold  z-10 hidden"
          >
            <ArrowLeft className="mr-2" /> Back to all recipes
          </Link>
        </div>

        <div
          className={cn(
            "w-full col-span-7 p-3 md:p-7 rounded-[36px] md:rounded-[58px] border border-black/10 space-y-10",
            "bg-white dark:bg-[#1E1E1E]  shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_-0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.06)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.4)]"
          )}
        >
          <div className="w-full p-1 md:p-3 rounded-[28px] md:rounded-[36px] bg-[#3d3d3d]">
            <img
              className="w-full h-full rounded-3xl object-cover"
              src={product.logo_src}
              alt={`${product.full_name} image`}
            />
          </div>
          <CardDescription className="text-2xl leading-tight text-neutral-800 text-balance dark:text-neutral-400">
            {product.description}
          </CardDescription>
          
          {/* This is the updated section that renders the structured JSONB data */}
          <StructuredDescription data={product.long_description} />

          <div className="md:text-xl sm:text-lg tracking-tight text-neutral-800 text-balance dark:text-neutral-400 flex gap-2 items-center flex-wrap text-sm">
            {product.labels &&
              Array.isArray(product.labels) &&
              product.labels[0] !== "unlabeled" &&
              product.labels.map((label, index) => (
                <Link key={index} href={`/products?label=${label}`}>
                  {label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
    <Link
      href={`/`}
      className="py-4 md:hidden items-center text-2xl font-semibold z-10 w-full flex"
    >
      <ArrowLeft className="mr-2" /> Back to all recipes
    </Link>
    <div className="absolute top-36 md:top-0 left-[-10%] right-0 h-[400px] w-[300px]  md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,.15),rgba(255,255,255,0))]"></div>
    <footer className="fixed bottom-0 left-0 z-20 w-full p-2 border-t border-gray-800 shadow-sm bg-black">
      <span className="text-xs text-gray-500 sm:text-center">
        ©{" "}
        <a href="https://mixphd.com/" className="hover:underline">
          <b>🍸 MixPHD™</b>
        </a>{" "}
        All Rights Reserved
      </span>
      <ul className="flex flex-wrap items-center mt-1 mb-1 text-xs font-medium text-gray-500">
        <li>
          <a href="/privacy" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:underline me-4 md:me-6">
            Terms of use
          </a>
        </li>
        <span className="text-xs text-gray-800 m-0 p-0">
          mixPHD.com is for those of legal drinking age. By accessing, you
          confirm you are of drinking age. Drink responsibly.
        </span>
      </ul>
    </footer>
  </div>
)