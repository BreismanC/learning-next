import { NextResponse } from "next/server"

export const GET = (_: Request) => {
    return NextResponse.json({
        count: 100,
    })
}