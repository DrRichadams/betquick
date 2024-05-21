"use client";

import React from 'react';
import "./banner.css";
import Image from 'next/image';
import banner_img from "../../../public/pngs/betquick_banner.png";
import manu from "../../../public/pngs/manu.png";
import chele from "../../../public/pngs/chelsea.png";
import { LuTimer } from "react-icons/lu";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainBanner = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><SwiperElement /></SwiperSlide>
      <SwiperSlide><SwiperElement /></SwiperSlide>
      <SwiperSlide><SwiperElement /></SwiperSlide>
      <SwiperSlide><SwiperElement /></SwiperSlide>
    </Swiper>
  )
}

const SwiperElement = () => {
    return(
        <div className='main_banner_container'>
            <Image src={banner_img} alt='banner img' className='banner_image' />
            <div className="mb_titles">
                <div className="mb_teams_box">
                    <div className="mb_team_box"><Image src={manu} alt='team' style={{ width: "40px" }} /></div>
                    <div className="mb_team_versus">V</div>
                    <div className="mb_team_box"><Image src={chele} alt='team' style={{ width: "40px" }} /></div>
                </div>
                <div className="mb_time_box">
                    <LuTimer size={20} />
                    <p>Today at 6:30 AM</p>
                </div>
            </div>
            <div className="mb_details">
                <h3>Premier League</h3>
                <h1>Manchester United vs Chelsea FC</h1>
                <p>
                    Get in on the action! Bet on today's match for instant cashback and
                    unlock special bonuses just for our players."
                </p>
                <button className="mb_btn_cta">Bet Now</button>
            </div>
            <div className="mb_pagination"></div>
        </div>
    )
}

export default MainBanner