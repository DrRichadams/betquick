import FAQ from "@/components/FAQ/faq";
import ResultsWinnings from "@/components/results_winnings/results_winnings";
import React from "react";

export default function Home() {
  return (
    <main className="main_container">
      <ResultsWinnings />
      <FAQ />
    </main>
  );
}
