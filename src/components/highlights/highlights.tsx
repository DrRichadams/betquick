"use client";

import React, {useState} from 'react';
import { HighlightComp } from './highlight_box';
import "./highlights.css";
import LeagueSelector from '../league_selector/league_selector';
import LeagueSelectorV2 from '../league_selector/league_selector_v2';

const Highlights = () => {
    
  return (
    <div className='highlights_container'>
        <h3 className="high_title">Highlights</h3>
        {/* <LeagueSelector show_all={true} /> */}
        <LeagueSelectorV2 />
        <div className="actual_highlights_container">
            {/* <HighlightComp isActive={false} />
            <HighlightComp isActive={false} /> */}
        </div>
    </div>
  )
}

export default Highlights