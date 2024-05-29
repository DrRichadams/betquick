import React, { ReactNode } from 'react';
import "./game_sections.css";

import { HiStatusOnline } from "react-icons/hi";
import { IoArrowUp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoHourglass } from "react-icons/io5";
import { HighlightComp } from '../highlights/highlight_box';

type Props = {
    section_name: string,
    children: ReactNode,
}

const GameSection = ({ section_name, children }: Props) => {
  return (
    <div className='game_section_container'>
        { section_name == "live" ? 
        <LiveTitles />: section_name == "popular" ? 
        <PopularTitles />: section_name == "upcoming" ? 
        <UpcomingTitles />: null }
        <div className="game_section_game_listing">
            { children }
        </div>
    </div>
  )
}


const LiveTitles = () => {
    return(
        <div className="game_section_title_box">
            <HiStatusOnline color='#B1BF24' />
            <p>Live</p>
            <IoArrowUp color='#B3B3B3' />
        </div>
    )
}

const PopularTitles = () => {
    return(
        <div className="game_section_title_box">
            <IoStar color='orange' />
            <p>Popular</p>
            <IoArrowUp color='#B3B3B3' />
        </div>
    )
}

const UpcomingTitles = () => {
    return(
        <div className="game_section_title_box">
            <IoHourglass color='#B1BF24' />
            <p>Upcoming</p>
            <IoArrowUp color='#B3B3B3' />
        </div>
    )
}

export default GameSection