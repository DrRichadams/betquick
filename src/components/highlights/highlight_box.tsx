"use client";

import "./highlights.css";
import Image from 'next/image';
import football_ico from "../../../public/pngs/football.png"
import timer from "../../../public/pngs/timer.png"
import manu from "../../../public/pngs/manu.png"
import chelsea from "../../../public/pngs/chelsea.png"
import star from "../../../public/pngs/star.png"
import graph from "../../../public/pngs/graph.png"
import arrow_down from "../../../public/pngs/arrow_down_green.png"
import { url } from "inspector";


type highlightProps = {
    isActive: boolean,
    fixture: any
}

type handleBetPromiseProps = {
    betType: string,
    fixtureID: string
}

const handleBetPromise = async ({ betType, fixtureID }: handleBetPromiseProps) => {
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

export const HighlightComp = ({ isActive, fixture }: highlightProps) => {
    console.log("The fixture: ", fixture)
    return(
        <div className="highlight_box">
            <div className="league_titles">
                <div className="league_title_name">
                    <Image src={football_ico} alt='football' style={{ width: "20px" }} />
                    {/* <p>Premier league</p> */}
                    <p>{fixture.league.name}</p>
                </div>
                <div className="league_top_icons">
                    <Image src={star} alt='ico' style={{ width: "20px" }} />
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
                        {/* <div className="league_team">
                            <Image src={manu} alt='manu' style={{ width: "35px" }} />
                            <p>Manchester United</p>
                        </div>
                        <div className="league_team">
                            <Image src={chelsea} alt='chelsea' style={{ width: "35px" }} />
                            <p>Chelsea FC</p>
                        </div> */}
                        {
                            fixture.participants.map((team: any) => {
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
                {/* <div className="league_main_btns">
                    <div><p>1</p><p>0.7</p></div>
                    <div><p>Draw</p><p>0.7</p></div>
                    <div><p>2</p><p>0.7</p></div>
                </div> */}
                <button className="league_btn_bet"><p>1</p><p>0.7</p></button>
                <button className="league_btn_bet"><p>Draw</p><p>0.7</p></button>
                <button className="league_btn_bet"><p>2</p><p>0.7</p></button>
                <button className="league_btn_arrow">
                    <Image src={arrow_down} alt='arrow' style={{ width: "22px" }} />
                </button>
            </div>
        </div>
    )
}