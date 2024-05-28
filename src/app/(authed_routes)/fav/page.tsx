"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./fav_page.css";
import FavouritesLoading from "@/components/loading_comps/favourites_loading";
import Link from "next/link";


function FavPage() {
  const [ game_option, set_game_option ] = useState("football");
  const [ isEmpty ] = useState(true)
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
        </div>: null
      }
    </div>
  )
}

export default FavPage