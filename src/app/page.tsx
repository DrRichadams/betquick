import React from "react";
import FAQ from "@/components/FAQ/faq";
import { HighlightComp } from "@/components/highlights/highlight_box";
import Highlights from "@/components/highlights/highlights";
import ResultsWinnings from "@/components/results_winnings/results_winnings";
import { HiStatusOnline } from "react-icons/hi";
import { TiArrowRight } from "react-icons/ti";
import LiveEVentSurvivalPoolComp from "@/components/live_events/live_event_survival_pool_comp";

export default function Home() {
  return (
    <main className="main_container">
      <div className="live_section_box">
        <div className="live_section_titles">
            <div className="live_titles_left">
              <HiStatusOnline color="#B1BF24" size={25} />
              <h3>Live</h3>
            </div>
              <button className='high_see_all'>
                  <p>see all</p>
                  <TiArrowRight size={23} />
              </button>
        </div>
        <div className="live_section_events">
          <HighlightComp isActive={true} />
          <LiveEVentSurvivalPoolComp />
        </div>
      </div>
      <Highlights />
      <ResultsWinnings />
      <FAQ />
    </main>
  );
}
