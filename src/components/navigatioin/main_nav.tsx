import React from 'react';
import Image from 'next/image';
import logo from "../../../public/pngs/betquick_logo.png"

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
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>
                <div className="country_language_option_box"></div>
                <div className="chat_btn"></div>
            </div>
        </div>

        <div className="nav_bottom_menu">

        </div>
    </div>
  )
}

export default MainNav