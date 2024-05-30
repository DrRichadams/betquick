import React, { ReactNode } from 'react';
import "./earn_refer.css";
import { IoGift } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";


function ReferEarnPage() {
  return (
    <div className="earn_refer_page_container">
      <div className="earn_refer_page_title">
        <IoGift color='#B1BF24' />
        <p>Refer & Earn</p>
      </div>
      <div className="earn_refer_code_box">
        <p className="earn_refer_code_title">Referral Code:</p>
        <p className="earn_refer_code">JACKSON20BQ</p>
        <button>
          <IoCopyOutline color='#fff' />
        </button>
      </div>
      <div className="earn_refer_stats_boxes">
          <StatBox title='Referrals' value='0 Person(s)'>
            <BsFillPeopleFill />
          </StatBox>
          <StatBox title='Earnings' value='$0'>
            <IoWallet />
          </StatBox>
      </div>
      <div className="earn_refer_textual_box">
        <p className="earn_refer_texual_sub_line">
          Loving your BetQuick experience? Share it with friends and earn rewards! Join our 
          Refer and Earn program today!
        </p>
        <div className="earn_refer_texual_title">Here's How It Works</div>
        <p className="earn_refer_texual_line">
          <span>1.  Share Your Referral Code:</span> Find your unique referral code in your account settings 
          and share it with your friends.
        </p>
        <p className="earn_refer_texual_line">
          <span>2.  Your Friend Joins:</span> Invite them to sign up at BetQuick using your referral code.
        </p>
        <p className="earn_refer_texual_line">
          <span>3.  Earn Rewards:</span> Once your friend registers, deposits, and places their first bet, both you and your friend will receive a bonus! Your bonus will be credited to your account automatically.
        </p>
      </div>
    </div>
  )
}

type StatBoxProps = {
  children: ReactNode,
  title: string,
  value: string
}

const StatBox = ({ children, title, value }: StatBoxProps) => {
  return(
    <div className="earn_refer_stat_box">
      <div className="earn_refer_top_accent"></div>
        <div className="stat_box_icon_box">
          { children }
        </div>
        <div className="stat_box_stats">
          <p className='stat_box_stats_key'>{title}</p>
          <p className='stat_box_stats_value'>{value}</p>
        </div>
    </div>
  )
}

export default ReferEarnPage