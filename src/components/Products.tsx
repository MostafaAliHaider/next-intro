"use client"

import { ProductTypes } from '@/features/types'
import React from 'react'

const Products = ({product}: ProductTypes[]) => {
  return (
    <>
        {
        
            product?.map((product: ProductTypes) => {
                return <article key={product.id} className='bg-red-200'>
                    <div>
                    <h2>{product.category}</h2>
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </article>
            })
        }
    </>
        
    
  )
}

export default Products