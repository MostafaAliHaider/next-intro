

import React from 'react'
import { CreateProductTypes, Faker } from './types'


const produktTitle: string[] = [
    "PS5",
    "XBOX ONE",
    "Iphone 15",
    "Samsung",
    "yahye",
    "PC",
    "Fried Chicken"
]
    
const produktCategories: string [] = ["Console", "Phone", "Food", "People", "Carpet for Isha"]

const produktPrice: number[] = [320, 221, 12, 345, 222, 1234]


const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

const getRandomItem = <T>(items: T[]) =>{
  
  const randomIndex = Math.floor(Math.random() * items.length)
  
  return items[randomIndex]
}


export const faker: Faker = {
  id: () => getRandomId(),

  title: () => getRandomItem(produktTitle),

  price: () => getRandomItem(produktPrice),

  category: () => getRandomItem(produktCategories),

}


const createProducts: CreateProductTypes = ({
  existingProducts,
  count, 
  faker
}) => {
  const products = new Map(existingProducts)

  if(products.size === 0 && count === 0) {
    throw new Error("No product added")
  }

  for(let i = 0; i < count; i++){

    const product = {
      id: faker.id(),
      produktTitle: faker.title(),
      price: faker.price(),
      category: faker.category(),
    }

    products.set(`products-${i}`, product)
  }
  return products

}


export {createProducts, getRandomId, getRandomItem}