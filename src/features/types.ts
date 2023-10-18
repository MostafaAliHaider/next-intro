export type ProductTypes = {
    id: string
    title: string
    category: string
    price: number
}




export type Faker = {
    id: () => string
    title: () => string
    category: () => string
    price: () => number
}


export type CreateProductParams = {
    existingProducts?: Map<string, ProductTypes>
    count: number
    faker: Faker
}

export type CreateProductTypes = (
    params: CreateProductParams,
)   => Map<string, ProductTypes>