"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./fav_page.css";
import FavouritesLoading from "@/components/loading_comps/favourites_loading";
import Link from "next/link";
import { HighlightComp } from "@/components/highlights/highlight_box";
import LiveEVentSurvivalPoolComp from "@/components/live_events/live_event_survival_pool_comp";


function FavPage() {
  const [ game_option, set_game_option ] = useState("football");
  const [ isEmpty ] = useState(false)
  const changeOption = (option: string) => {
    set_game_option(option)
  }
  return (
    <div className="fav_page_container">
      <div className="fav_title_box">
        <FaStar color="orange" size={25} />
        <p>My Favourites</p>
      </div>
      <div className="fav_options">
        <button className={game_option=="football"?"green_select_btn":"transparent_select_btn"} onClick={() => changeOption("football")}>Football</button>
        <button className={game_option=="survival"?"green_select_btn":"transparent_select_btn"} onClick={() => changeOption("survival")}>Survival Pool</button>
      </div>
      {
        isEmpty?
        <div className="favs_listing_empty">
          <FavouritesLoading />
          <p>
            Your <span>Favourites</span> list is currently empty.
            You can add events by clicking 
          </p>
          <Link href="/" className="fav_go_to_homepage_btn">Go To Homepage</Link>
        </div>:
        <div className="favs_box">
          {
            game_option == "football"?
            <FootballListing />:
            game_option == "survival"?
            <SurvivalPoolListing />: null
          }
          <p>
            While we strive to ensure the accuracy of the data on our site, please note
            that it is provided for informational purposes only and should be used as a
            guide. We are not liable for any inaccuracies in the information provided.
          </p>
        </div>
      }
    </div>
  )
}

const FootballListing = () => {
  return(
    <div className="fav_listing_box">
      <HighlightComp isActive={false} />
      <HighlightComp isActive={false} />
      <HighlightComp isActive={false} />
      <HighlightComp isActive={false} />
    </div>
  )
}

const SurvivalPoolListing = () => {
  return(
    <div className="fav_listing_box">
      <LiveEVentSurvivalPoolComp />
      <LiveEVentSurvivalPoolComp />
      <LiveEVentSurvivalPoolComp />
    </div>
  )
}

export default FavPage