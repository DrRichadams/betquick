import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const fixturesData = await fetch(`https://api.sportmonks.com/v3/football/fixtures?api_token=${process.env.SPORTMONKS_API_KEY}`);
    const fixtures = await fixturesData.json();
    return NextResponse.json(fixtures, {status: 200})
}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}