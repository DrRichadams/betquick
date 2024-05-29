import React from 'react';
import { FaGamepad } from "react-icons/fa";
import "./survival_pool_page.css";
import LeagueSelectorV2 from '@/components/league_selector/league_selector_v2';
import GameSection from '@/components/game_section_comp/game_sections';
import { HighlightComp } from '@/components/highlights/highlight_box';
import LiveEVentSurvivalPoolComp from '@/components/live_events/live_event_survival_pool_comp';

function SurvivalPoolPage() {
  return (
    <div className="survival_pool_page_container">
      <div className="survival_pool_page_header">
        <div className="survival_pool_pTitles">
          <FaGamepad />
          <p>Survival Pool</p>
        </div>
      </div>

      <GameSection section_name='live'>
        <LiveEVentSurvivalPoolComp />
        <LiveEVentSurvivalPoolComp />
      </GameSection>
      <GameSection section_name='upcoming'>
        <LiveEVentSurvivalPoolComp />
        <LiveEVentSurvivalPoolComp />
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

export default SurvivalPoolPage;