import { NextResponse } from "next/server"


export async function GET(request: Request) {
    // const id = request.url.split("favourites/")[1]
    return NextResponse.json({
        // id: id,
        id: 123,
        name: "Richard",
        IQ: 2000
    }, {status: 200})
}
