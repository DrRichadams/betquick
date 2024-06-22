import { NextResponse } from "next/server"

export const POST = async () => {
    return NextResponse.json(
        { 
            message: "OK", matchDetails: { 
                leagueID: 1, fixtureID: 2
             }
         }, { status: 201 }
    )
}