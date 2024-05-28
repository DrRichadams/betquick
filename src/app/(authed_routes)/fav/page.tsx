"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./fav_page.css";
import FavouritesLoading from "@/components/loading_comps/favourites_loading";


function FavPage() {
  const [ game_option, set_game_option ] = useState("football");
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
      <div className="favs_listing">
        <FavouritesLoading />
      </div>
    </div>
  )
}

export default FavPage