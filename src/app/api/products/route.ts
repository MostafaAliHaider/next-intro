import { createProducts, faker } from "@/features/createProduct";
import { NextResponse, NextRequest } from "next/server"


export function GET() {
    const products = createProducts({faker, count: 50 })

    return NextResponse .json(
        { data: Array.from(products.values())},
        { status: 200},    
    )

}

export async function POST(request: NextRequest){
    const data = await request.json()
    console.log(data);
    return NextResponse.json(data, {status: 200})
    
}