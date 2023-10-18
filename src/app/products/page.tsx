"use client"

import Products from '@/components/Products';
import { ProductTypes } from '@/features/types';
import React, { useEffect, useState } from 'react'

const pageProducts =   () => {
    
    const [product, setProduct] = useState('')
    const [title, setTitle] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()
    const [state, setState] = useState([]);

    


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/products');
            const data = await response.json();
            setProduct(data.data); // Update the products state
            console.log(data.data); // Log the data
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
      }, []);
    //const allProducts: ProductTypes[]= await getProducts.json()
 //setProduct(products.data)
  
    //console.log(product);

    async function postData(url = "http://localhost:3000/api/products",){
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
    
       <div>
            <div className='grid grid-cols-3 w-full bg-slate-200 p-20'> 
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                    />
                    {/* <button onClick={() => postData}>Submit product</button> */}
                </div>

           {/* <section className='flex gap-4'><Products product={product}/></section> */}

       </div>
  )
}

export default pageProducts