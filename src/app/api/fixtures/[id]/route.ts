import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const id = request.url.split("fixtures/")[1]
    return NextResponse.json({
        id: id,
        name: "Richard",
        IQ: 2000
    }, {status: 200})
}