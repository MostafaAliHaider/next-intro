"use client"

import React from "react"

import { ProductTypes } from "@/features/types"

const Products = ({ product }: ProductTypes[]) => {
  return (
    <>
      {product?.map((product: ProductTypes) => {
        return (
          <article
            key={product.id}
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <div>
                <h2>{product.category}</h2>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {product.price}
                </span>
              </div>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Products
