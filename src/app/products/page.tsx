"use client"

import React, { useEffect, useState } from "react"

import Products from "@/components/Products"
import { ProductTypes } from "@/features/types"

const pageProducts = () => {
  const [product, setProduct] = useState([])
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products")
        const data = await response.json()
        setProduct(data.data) // Update the products state
        console.log(data.data) // Log the data
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchData()
  }, [])
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submitData = { title, category, price: parseInt(price) }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(res)
      if (res.ok) {
        console.log("Its working!")
      } else {
        console.log("It didnt work, something went wrong!!!")
      }
    } catch (error) {
      console.log(error)
    }
    setTitle("")
    setCategory("")
    setPrice(0)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full grid-cols-3 bg-slate-200 p-20">
          <input
            type="text"
            name="name"
            value={title}
            placeholder="Enter title here"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
             type="text"
             name="name"
             value={category}
             placeholder="Enter category here"
             onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="price"
            value={price}
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">
            Submit product
          </button>
        </div>
      </form>

      <section className='flex gap-4'><Products product={product}/></section>
    </div>
  )
}

export default pageProducts
