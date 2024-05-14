import React from 'react';
import Image from 'next/image';
import logo from "../../../public/pngs/betquick_logo.png"
import uk_flag from "../../../public/pngs/uk_flag.png"
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { IoChatbubbleEllipses } from "react-icons/io5";

const MainNav = () => {
  return (
    <div className='main_nav_container'>
        <div className='nav_top_menu'>
            <div className="left_side_content">
                <Image src={logo} alt='logo' width={186.99} height={33.07} />
                <div className='nav_left_contents_box'></div>
            </div>
            <div className="right_side_content">
                <div className="auth_btns_box">
                    <button className='nav_btn_signup'>Sign up</button>
                    <button className='nav_btn_login'>Log in</button>
                </div>
                <div className="country_language_option_box">
                    <div className="flag_circle">
                        <Image src={uk_flag} alt='flag' width={80} height={50} style={{ width: "60px", height: "100%" }} />
                    </div>
                    <HiMiniCog6Tooth size={25} color='#d5d5d5' />
                </div>
                <div className="chat_btn">
                    <IoChatbubbleEllipses size={22} color='#d5d5d5' />
                </div>
            </div>
        </div>

        <div className="nav_bottom_menu">

        </div>
    </div>
  )
}

export default MainNav