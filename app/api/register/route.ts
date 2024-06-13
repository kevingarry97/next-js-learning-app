import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';
import bcrypt from 'bcryptjs'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    let user = await prisma.user.findUnique({where: {email: body.email}})

    if(user) return NextResponse.json({error: 'User already exists'})

    const hashedPassword = await bcrypt.hash(body.password, 10);

    user = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    })

    return NextResponse.json({email: user.email})
}