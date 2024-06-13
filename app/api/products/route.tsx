// import { NextRequest, NextResponse } from "next/server";
// import schema from "./schema";
// import prisma from "@/prisma/client";

import { NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//     const products = await prisma.product.findMany();
//     return NextResponse.json(products)
// }

// export async function POST(request: NextRequest) {
//     const body = await request.json()

//     const validation = schema.safeParse(body);

//     if(!validation.success)
//         return NextResponse.json(validation.error.errors, {status: 400});

//     let product = await prisma.product.create({
//         data: {
//            name: body.name,
//            price: body.price 
//         }
//     })
//     return NextResponse.json(product, {status: 201})
// }

export function GET() {
    return NextResponse.json({message: "Product available"})
}