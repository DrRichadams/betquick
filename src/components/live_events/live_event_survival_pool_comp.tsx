"use client";

import React from 'react';
import "./live_events_sp.css";
import Image from 'next/image';
import footballIco from "../../../public/pngs/football.png";
import timerIco from "../../../public/pngs/timer.png";
import starIco from "../../../public/pngs/star.png";

const LiveEVentSurvivalPoolComp = () => {
  return (
    <div className='live_event_sp_comp_container'>
        <div className="live_event_sp_box_titles">
          <div className="live_event_sp_titles_left flex_center">
            <div className="live_event_sp_titles_left_title flex_center">
              <Image src={footballIco} alt='' style={{ width: "18px" }} />
              <p>Survival pools</p>
            </div>
            <div className="live_event_sp_titles_left_timer flex_center">
              <Image src={timerIco} alt='' style={{ width: "15px" }} />
              <p>2/3</p>
            </div>
          </div>
          <div className="live_event_sp_titles_right flex_center">
            <p>12 Survivors</p>
            <Image src={starIco} alt='' style={{ width: "20px" }} />
          </div>
        </div>
        <div className="live_event_sp_teams_box"></div>
        <div className="live_event_sp_details">
          <DetailsDisplay title='Markets' value='1X2, BOTH TEAMS TO SCORE' />
          <DetailsDisplay title='Entry fee' value='$100' />
          <DetailsDisplay title='Current pool prize' value='$30,000' />
        </div>
        <button className="live_event_join_btn">Join Pool</button>
    </div>
  )
}


type displayDetailsType = {
  title: string,
  value: string
}

const DetailsDisplay = ({ title, value }: displayDetailsType) => {
  return(
    <div className="live_event_sp_details_box">
      <p className='live_event_details_title'>{title}</p>
      <div className='live_event_details_value_box'>
        <div className="green_circle_dot"></div>
        <div className='live_event_details_value_box'>{value}</div>
      </div>
    </div>
  )
}

export default LiveEVentSurvivalPoolComp