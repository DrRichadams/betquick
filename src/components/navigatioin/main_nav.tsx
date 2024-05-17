"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../../public/pngs/betquick_logo.png"
import uk_flag from "../../../public/pngs/uk_flag.png"
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { HiStatusOnline } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { TbTicket } from "react-icons/tb";
import { IoIosFootball } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { RiWallet3Fill } from "react-icons/ri";
import gift_icon from "../../../public/pngs/btn_gift.png";
import logo_no_letter from "../../../public/pngs/logo_no_letter.png";
import gold_coin from "../../../public/pngs/gold_coin.png";

const MainNav = () => {
    const pathname = usePathname();
    const [ signedIn, set_signedIn ] = useState(false)
    
  return (
    <div className='main_nav_container'>
        <div className='nav_top_menu'>
            <div className="left_side_content">
                <Image src={logo} alt='logo' width={150} height={33.07} />
                {
                    signedIn?
                    <div className='nav_left_contents_box'>
                        <button className='nav_btn_bonuses'>
                            <Image src={gift_icon} alt='bonuses' style={{ width: "25px" }} />
                            <p>Boneses</p>
                        </button>
                    </div>
                    :""
                }
            </div>
            <div className="right_side_content">
                {
                    signedIn?
                    <div className='nav_authed_wallet'>
                        <div className="nav_balance_box">
                            <Image src={gold_coin} alt='coin' style={{ width: '20px' }} />
                            <p>$0</p>
                        </div>
                        <button className='nav_wallet_btn'>
                            <RiWallet3Fill color='#fff' size={25} />
                            <p>Wallet</p>
                        </button>
                    </div>
                    :""
                }

                {
                    !signedIn?<div className="auth_btns_box">
                                <button className='nav_btn_signup'>Sign up</button>
                                <button className='nav_btn_login'>Log in</button>
                            </div>:
                            <div className='authenticated_menu_options'>
                                <Link href="/" className="logo_drop">
                                    <div className="logo_circle">
                                        <Image src={logo_no_letter} alt='logo' style={{ width: "25px" } } />
                                    </div>
                                    <IoIosArrowDown color='#fff' size={20} />
                                </Link>
                            </div>
                }
            
                <div className="country_language_option_box">
                    <div className="flag_circle">
                        <Image src={uk_flag} alt='flag' width={80} height={50} style={{ width: "60px", height: "100%" }} />
                    </div>
                    <HiMiniCog6Tooth size={25} color='#d5d5d5' />
                </div>
                {
                    signedIn?
                    <div className='nav_notification'>
                        <IoNotifications color='#d5d5d5' size={20} />
                    </div>:
                    ""
                }
                <div className="chat_btn">
                    <IoChatbubbleEllipses size={22} color='#d5d5d5' />
                </div>
            </div>
        </div>

        <div className="nav_bottom_menu">
            <div className="nav_bottom_menu_1 common_nav_bottom_box">
                <Link href="/" className='link_menu' style={{color: pathname=="/"?"#B1BF24":"#fff" }}><ImHome /></Link>
                <Link href="/live" className='link_menu' style={{color: pathname.startsWith("/live")?"#B1BF24":"#fff" }}><HiStatusOnline /></Link>
                <Link href="/fav" className='link_menu' style={{color: pathname.startsWith("/fav")?"#B1BF24":"#fff" }}><FaRegStar /></Link>
                <Link href="/ticket" className='link_menu' style={{color: pathname.startsWith("/ticket")?"#B1BF24":"#fff" }}><TbTicket /></Link>
            </div>
            <div className="nav_bottom_menu_2 common_nav_bottom_box">
                <Link href="/football" className='link_menu' style={{color: pathname.startsWith("/football")?"#B1BF24":"#fff" }}><IoIosFootball /><p>Football</p></Link>
                <Link href="/survival_pool" className='link_menu' style={{color: pathname.startsWith("/survival_pool")?"#B1BF24":"#fff" }}><FaGamepad /><p>Survival Pool</p></Link>
                <Link href="/award_finance" className='link_menu' style={{color: pathname.startsWith("/award_finance")?"#B1BF24":"#fff" }}><GoTrophy /><p>Award & Finance</p></Link>
            </div>
            <div className="nav_bottom_menu_3 common_nav_bottom_box">
                <Link href="/refer_earn" className='link_menu' style={{color: pathname.startsWith("/refer_earn")?"#B1BF24":"#fff" }}><p>Refer & Earn</p></Link>
                <Link href="/copy_betting" className='link_menu' style={{color: pathname.startsWith("/copy_betting")?"#B1BF24":"#fff" }}><p>Copy Betting</p></Link>
            </div>
        </div>
    </div>
  )
}

export default MainNav