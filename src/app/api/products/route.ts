import { createProducts, faker } from "@/features/createProduct";
import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server"


export async function GET() {
  //  const products = createProducts({faker, count: 50 })
    const products = await prisma.product.findMany()

    return NextResponse .json(
        { data: products},
        { status: 200},    
    )

}

export async function POST(request: NextRequest){
    const body = await request.json()
    const newProducts = await prisma.product.create({
        data:{
            title: body.title,
            category: body.category,
            price: body.price
        },
    })
   // console.log(data);
    return NextResponse.json(newProducts, {status: 200})
    
}