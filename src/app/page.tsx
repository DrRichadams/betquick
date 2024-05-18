import FAQ from "@/components/FAQ/faq";
import Highlights from "@/components/highlights/highlights";
import ResultsWinnings from "@/components/results_winnings/results_winnings";
import React from "react";

export default function Home() {
  return (
    <main className="main_container">
      <Highlights />
      <ResultsWinnings />
      <FAQ />
    </main>
  );
}
