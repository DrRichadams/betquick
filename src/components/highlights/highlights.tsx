"use client";

import React, {useState} from 'react';
import { HighlightComp } from './highlight_box';
import "./highlights.css";
import { TiArrowRight } from "react-icons/ti";

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
            { 
                selected_highlight == "football" 
                ? leages.map((item) => (
                    <button 
                        key={item.id}
                        style={{ backgroundColor: item.id==selected_league? "#1F1F1F":"transparent" }} 
                        onClick={() => changeLeague(item.id)}>{item.title}
                    </button>))
                : null 
            }
        </div>
        <div className="actual_highlights_container">
            <HighlightComp isActive={false} />
            <HighlightComp isActive={false} />
        </div>
    </div>
  )
}

export default Highlights