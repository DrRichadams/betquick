
import { NextResponse } from "next/server"

export const GET = async() => {
    return new NextResponse(JSON.stringify({
        title: "Richard",
        age: 26
    }), { status: 201, headers: { "Content-Type": "application/json" } })
}