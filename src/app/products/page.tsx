"use client"

import Products from '@/components/Products';
import { ProductTypes } from '@/features/types';
import React, { useState } from 'react'

const pageProducts =  async () => {
    
    const [newProduct, setNewProduct] = useState('')
    // const [product, setProduct] = useState()
    // useEffect(()=>{

    //     const bringProducts = async () =>{

          
    //     }
    //     bringProducts();
        
    // },[])
    const getProducts = await fetch(
        `http://localhost:3000/api/products`,
        {
            method: "get",
        },
    )
 //const allProducts: ProductTypes[]= await getProducts.json()
        const products= await getProducts.json()
        console.log(products.data);
 //setProduct(products.data)
  
    //console.log(product);

    async function postData(url = "http://localhost:3000/api/products", data = {}){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
        console.log(data);
        
    }

    // const sumbitProduct = async () => {
    //     const response = await fetch()
    // }
    
    return (
    <div className='grid grid-cols-3 w-full bg-slate-200 p-20'> 
        <input type="text" value={newProduct} onChange={e => setNewProduct(e.target.value)}
        />
        <button onClick={() => postData}>Submit product</button>
        <Products product={products.data}/>
    </div>
  )
}

export default pageProducts