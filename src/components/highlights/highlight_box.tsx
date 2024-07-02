"use client";

import "./highlights.css";
import Image from 'next/image';
import football_ico from "../../../public/pngs/football.png"
import timer from "../../../public/pngs/timer.png"
import manu from "../../../public/pngs/manu.png"
import chelsea from "../../../public/pngs/chelsea.png"
import star from "../../../public/pngs/star.png"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import graph from "../../../public/pngs/graph.png"
import arrow_down from "../../../public/pngs/arrow_down_green.png"
import { url } from "inspector";
import React, { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useUser } from "@clerk/nextjs";



const handleBetPromise = async ({ betType, fixtureID }: { betType: string, fixtureID: string }) => {
    // AFTER CHECKING AUTH STATE
    let uid = 123;
    const res = await fetch(`http://localhost:3000/api/betting/promise_bet/${uid}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            uid,
            betType,
            fixtureID
        })
    });
}


async function AddToFavs(fixID: any, userID: any, isFav: boolean){
    // GET CURRENT FAV FIXTURES FROM FIRESTORE FIRST BEFORE ADDING NEW DATA
    const docRef = doc(db, "favourite_fixtures", `${fixID}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // let favFxtObject = docSnap.data()
        let curFavs: any = docSnap.data().users_for_fixture;

        let uniqFavsData : any = curFavs.filter((item: any) => item.user_id != userID)
        await setDoc(doc(db, "favourite_fixtures", `${fixID}`), {
            fixtureId: fixID,
            users_for_fixture: [
                ...uniqFavsData, {
                    user_id: userID,
                    is_fav: isFav
                }
            ]
    });
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    await setDoc(doc(db, "favourite_fixtures", `${fixID}`), {
            fixtureId: fixID,
            users_for_fixture: [{
                user_id: userID,
                is_fav: isFav
            }]
    });
    }
        console.log("fixID: ", fixID);
//         console.log("userID: ", userID);
//         console.log("isFav: ", isFav);
}

const GetFavsData = async (fixID: any) => {
    const docRef = doc(db, "favourite_fixtures", `${fixID}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

const favLogic = (favs: [], userId: any) => {
    let favObject = favs.find((item: any) => item.user_id == userId);
    if (favObject) {
        console.log("fav processed: ", favObject)
        return favObject
    }
    console.log("Failed to process fav: ", favs, userId)
}



// MAIN HIGHLLIGHT COMPONENT FUNCTION

export const HighlightComp = ({ isActive, fixture, favFixtures }: { isActive: boolean, fixture: any, favFixtures: [] }) => {
    const [ fixtureData, setFixtureData ] = useState(null);
    const [ curFavouriteFixtures, setCurFavouriteFixtures ] = useState([])
    const [ isFav, setIsfave ] = useState(false)
    const {user} = useUser()
    // const { users_for_fixture } = favFixtures | null

    const toggleFav = async(fixID: any) => {
        setIsfave(!isFav);
        console.log("Is working backend")
        AddToFavs(fixture.id, user?.id, isFav);
        console.log("Done working backend")
    }

    useEffect(() => {
        setFixtureData(fixture)
        // favLogic(favFixtures?.users_for_fixture, user?.id)
        // favFixtures && favFixtures.users_for_fixture.find((item: any) => item.user_id == user?.id)
        if(favFixtures) {
            let curFavFxtObject = favFixtures.users_for_fixture.find((item: any) => item.user_id == user?.id)
            console.log("Current fav fixture object: ", curFavFxtObject)
        }
    }, [])
    
    // console.log("The fixture: ", fixtureData)
    // console.log("The userID: ", user)
    // favFixtures && console.log("The current fav fixture data: ", favFixtures.users_for_fixture)

    if(fixtureData){
        return(
            <div className="highlight_box">
                <div className="league_titles">
                    <div className="league_title_name">
                        <Image src={football_ico} alt='football' style={{ width: "20px" }} />
                        {/* <p>Premier league</p> */}
                        <p>{fixture?.league.name}</p>
                    </div>
                    <div className="league_top_icons">
                        <button onClick={() => toggleFav(fixture.id)} style={{ display: user?"flex":"none" }}>{ isFav == true ?
                              <FaStar size={25} color="#FFC000" />:
                              <FaRegStar size={25} color="#808080" />
                      }</button>
                        <Image src={graph} alt='ico' style={{ width: "20px" }} />
                    </div>
                </div>
                <div className="highlight_middle">
                    <div className="highlight_middle_left">
                        <div className="league_match_time">
                            <Image src={timer} alt='timer' style={{ width: "15px" }} />
                            <p>Today at 6:30AM</p>
                        </div>
                        <div className="league_teams">
                            {
                                fixture?.participants.map((team: any) => {
                                    return(
                                        <div className="league_team" key={team.id}>
                                            {/* <Image src={chelsea} alt='chelsea' style={{ width: "35px" }} /> */}
                                            <img src={team.image_path} alt='' style={{ width: "35px" }} width={35} height={35} />
                                            <p>{team.name }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="numsa">1X2</div>
                    </div>
                    {
                        isActive?
                        <div className="highlight_middle_right">
                            <div className="highlight_team highlight_teamA">4</div>
                            <div className="highlight_team highlight_teamB">0</div>
                        </div>:""
                    }
                </div>
                <div className="league_btn_boxes">
                    <button className="league_btn_bet"><p>1</p><p>0.7</p></button>
                    <button className="league_btn_bet"><p>Draw</p><p>0.7</p></button>
                    <button className="league_btn_bet"><p>2</p><p>0.7</p></button>
                    <button className="league_btn_arrow">
                        <Image src={arrow_down} alt='arrow' style={{ width: "22px" }} />
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}