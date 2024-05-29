"use client"

import LeagueSelector from '@/components/league_selector/league_selector'
import LiveTitle from '@/components/titles/live_title'
import React, { useState } from 'react'
import "./live_page.css";
import { HighlightComp } from '@/components/highlights/highlight_box'
import LeagueSelectorV2 from '@/components/league_selector/league_selector_v2';

function LivePage() {
  const [ game_option, set_game_option ] = useState("football");
  const [ isEmpty ] = useState(false)
  const changeOption = (option: string) => {
    set_game_option(option)
  }
  return (
    <div className="live_page_container">
      <LiveTitle show_all={false} />
      {/* <LeagueSelector show_all={false} /> */}
      <div className="live_options">
        <button className={game_option=="football"?"green_select_btn":"transparent_select_btn"} onClick={() => changeOption("football")}>Football</button>
        <button className={game_option=="survival"?"green_select_btn":"transparent_select_btn"} onClick={() => changeOption("survival")}>Survival Pool</button>
      </div>
      <LeagueSelectorV2 />
      <div className="lives_highlights">
        {
          new Array(11).fill(1).map(() => (
            <HighlightComp isActive={true} />
          ))
        }
      </div>
      <p className='live_bottom_story'>
        While we strive to ensure the accuracy of the data on our site, please note that it is provided 
        for informational purposes only and should be used as a guide. We are not liable for any 
        inaccuracies in the information provided.
      </p>
    </div>
  )
}

export default LivePage