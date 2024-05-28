import React from "react";
import FAQ from "@/components/FAQ/faq";
import { HighlightComp } from "@/components/highlights/highlight_box";
import Highlights from "@/components/highlights/highlights";
import ResultsWinnings from "@/components/results_winnings/results_winnings";
import LiveEVentSurvivalPoolComp from "@/components/live_events/live_event_survival_pool_comp";
import MainBanner from "@/components/banner/main_banner";
import Link from "next/link";
import LiveTitle from "@/components/titles/live_title";

export default function Home() {
  return (
    <main className="main_container">
      <MainBanner />
      <div className="live_section_box">
        <LiveTitle show_all={true} />
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
