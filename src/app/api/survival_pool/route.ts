import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        const res = await fetch("https://www.sportsmonk.com/api/fixtures");

        return NextResponse.json({
            message: "Currently active pools",
            pools: []
        }, { 
            status: 201
         })
    } catch (err) {
        return NextResponse.json({ message: "Error" }, { status: 404 })
    }
}