import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const POST = async (req: Request, res: Response) => {
    const data = await req.json();
    console.log("THE DATA: ", data)
    return NextResponse.json({ message: "OK", matchDetails: data}, { status: 201 })
}
