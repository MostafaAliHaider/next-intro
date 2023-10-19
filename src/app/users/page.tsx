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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
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
    <div className="flex w-full  flex-col ">
      <div className="flex  justify-center  bg-green-300  ">
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Title
              <input
                type="text"
                name="name"
                value={title}
                placeholder="Enter title here"
                onChange={(e) => setTitle(e.target.value)}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </label>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Category
              <input
                type="text"
                name="name"
                value={category}
                placeholder="Enter category here"
                onChange={(e) => setCategory(e.target.value)}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                
              />
            </label>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Price
              <input
                type="number"
                name="price"
                value={price}
                placeholder="Enter price here"
                onChange={(e) => setPrice(e.target.value)}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Submit product
            </button>
          </div>
        </form>
      </div>

      <div>
        <section className="grid grid-cols-3 gap-4 mt-4">
          <Products product={product} />
        </section>
      </div>
    </div>
  )
}

export default pageProducts
