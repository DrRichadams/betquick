import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const POST = async ( req: Request) => {
    const id = req.url.split("feedback/")[1];
    const feedback = await req.json();
    const newFeedback = {
        user_id: id,
        dateCreated: serverTimestamp(),
        feedback: feedback.feedback_script
    }

    try{
        const docRef = await addDoc(collection(db, "feedback"), newFeedback);

    }catch(err) {
        console.error(err)
    }

    console.log("User url id: ", feedback)
    return new NextResponse(JSON.stringify({message: "Hello"}), {headers: { "Content-Type": "application/json" }, status: 201})
}