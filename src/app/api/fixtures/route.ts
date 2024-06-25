import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const fixturesData = await fetch(`https://api.sportmonks.com/v3/football/fixtures?api_token=${process.env.SPORTMONKS_API_KEY}&includes=league;participants`);
        const fixtures = await fixturesData.json();
        return NextResponse.json({data: fixtures}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Failed to retrieve data" }, { status: 404 })
    }
}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}