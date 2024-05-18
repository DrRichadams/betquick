"use client";

import React, {useState} from 'react';
import "./highlights.css";
import { TiArrowRight } from "react-icons/ti";
import Image from 'next/image';
import football_ico from "../../../public/pngs/football.png"
import timer from "../../../public/pngs/timer.png"
import manu from "../../../public/pngs/manu.png"
import chelsea from "../../../public/pngs/chelsea.png"
import star from "../../../public/pngs/star.png"
import graph from "../../../public/pngs/graph.png"
import arrow_down from "../../../public/pngs/arrow_down_green.png"

const Highlights = () => {
    const [ selected_highlight, set_selected_highlight ] = useState("football");
    const [ selected_league, set_selected_league ] = useState(1);
    const [ leages, set_leagues ] = useState([
       { id: 1, title: "All" }, { id: 2, title: "Premier League" },
       { id: 3, title: "Bundesliga" }, { id: 4, title: "English Premiership" },
       { id: 5, title: "Serie A" }, { id: 6, title: "Ligue 1" }, { id: 7, title: "La Liga" },
    ]);
    const changeHighlight = (high_light: string) => {
        set_selected_highlight(high_light)
    }
    const changeLeague = (id: number) => {
        set_selected_league(id)
    }
  return (
    <div className='highlights_container'>
        <h3 className="high_title">Highlights</h3>
        <div className="high_select_box">
            <div className="high_select_btns">
                <button style={{ backgroundColor: selected_highlight == "football"?"#B1BF24":"transparent"}} onClick={() => changeHighlight("football")}>Football</button>
                <button style={{ backgroundColor: selected_highlight == "survival"?"#B1BF24":"transparent"}} onClick={() => changeHighlight("survival")}>Survival pool</button>
            </div>
            <button className='high_see_all'>
                <p>see all</p>
                <TiArrowRight size={23} />
            </button>
        </div>
        <div className="high_filter_menu">
            { leages.map((item) => (<button style={{ backgroundColor: item.id==selected_league? "#1F1F1F":"transparent" }} onClick={() => changeLeague(item.id)}>{item.title}</button>)) }
        </div>
        <div className="actual_highlights_container">
            <div className="highlight_box">
                <div className="league_titles">
                    <div className="league_title_name">
                        <Image src={football_ico} alt='football' style={{ width: "20px" }} />
                        <p>Premier league</p>
                    </div>
                    <div className="league_top_icons">
                        <Image src={star} alt='ico' style={{ width: "20px" }} />
                        <Image src={graph} alt='ico' style={{ width: "20px" }} />
                    </div>
                </div>
                <div className="league_match_time">
                    <Image src={timer} alt='timer' style={{ width: "15px" }} />
                    <p>Today at 6:30AM</p>
                </div>
                <div className="league_teams">
                    <div className="league_team">
                        <Image src={manu} alt='manu' style={{ width: "35px" }} />
                        <p>Manchester United</p>
                    </div>
                    <div className="league_team">
                        <Image src={chelsea} alt='chelsea' style={{ width: "35px" }} />
                        <p>Chelsea FC</p>
                    </div>
                </div>
                <div className="numsa">1X2</div>
                <div className="league_btn_boxes">
                    <div className="league_main_btns">
                        <div><p>1</p><p>0.7</p></div>
                        <div><p>Draw</p><p>0.7</p></div>
                        <div><p>2</p><p>0.7</p></div>
                    </div>
                    <div className="league_btn_arrow">
                        <Image src={arrow_down} alt='arrow' style={{ width: "22px" }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Highlights