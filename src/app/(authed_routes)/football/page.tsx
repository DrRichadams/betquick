import React from 'react';
import { IoIosFootball } from "react-icons/io";
import "./football_page.css";
import LeagueSelectorV2 from '@/components/league_selector/league_selector_v2';
import GameSection from '@/components/game_section_comp/game_sections';
import { HighlightComp } from '@/components/highlights/highlight_box';

function FootballPage() {
  return (
    <div className="football_page_container">
      <div className="football_page_header">
        <div className="football_pTitles">
          <IoIosFootball />
          <p>Football</p>
        </div>
        <LeagueSelectorV2 />
      </div>

      <GameSection section_name='live'>
        <HighlightComp isActive={true} />
        <HighlightComp isActive={true} />
      </GameSection>
      <GameSection section_name='popular'>
        <HighlightComp isActive={true} />
        <HighlightComp isActive={false} />
      </GameSection>
      <GameSection section_name='upcoming'>
        <HighlightComp isActive={false} />
        <HighlightComp isActive={false} />
      </GameSection>

      <div className="football_page_footer">
        While we strive to ensure the accuracy of the data on our site, 
        please note that it is provided for informational purposes only 
        and should be used as a guide. We are not liable for any 
        inaccuracies in the information provided.
      </div>
    </div>
  )
}

export default FootballPage