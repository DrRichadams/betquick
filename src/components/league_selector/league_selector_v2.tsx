"use client";

import React, { useState } from 'react';
import "./league_selector_v2.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LeagueSelectorV2 = () => {
    const [ selected_league, set_selected_league ] = useState(1);
    const [ leagues, set_leagues ] = useState([
       { id: 1, title: "All" }, { id: 2, title: "Premier League" },
       { id: 3, title: "Bundesliga" }, { id: 4, title: "English Premiership" },
       { id: 5, title: "Serie A" }, { id: 6, title: "Ligue 1" }, { id: 7, title: "La Liga" },
    ]);
    const changeLeague = (id: number) => {
        set_selected_league(id)
    }
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={8}
        slidesPerView={6}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='league_selector_v2_container'
        >
        {leagues.map((league) => (
            <SwiperSlide 
                key={league.id} 
                className='selector_slide'
                style={{ backgroundColor: league.id==selected_league? "#1F1F1F":"transparent" }} 
            >
                <SelectorBtn title={league.title} onClick={() => changeLeague(league.id)} />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

type SelectorProps = {
    title: string,
    onClick: () => void
}

const SelectorBtn = ({ title, onClick }: SelectorProps) => {
    return(
            <button className='selector_btn_inner' onClick={onClick}>
                { title }
            </button>
    )
}

export default LeagueSelectorV2