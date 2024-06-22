"use client"

import React, { useState, useEffect } from 'react';
import "./navigation.css";
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
import mob_menu_icon from "../../../public/pngs/menu_ico.png";

import login_bonus from "../../../public/pngs/login_bonus.png";
import crypto_bonus from "../../../public/pngs/crypto_bonus.png";
import big_bonus from "../../../public/pngs/big_bonus.png";
import monthly_bonus from "../../../public/pngs/monthly_bonus.png";

import { HiDotsHorizontal } from "react-icons/hi";
import AuthModal from '@/modals/auth_modal';
import { useGlobalContext } from '@/context/store';
import { UserButton, useUser } from '@clerk/nextjs';

const MainNav = () => {
    const pathname = usePathname();
    const [ bonusOpen, setBonusOpen ] = useState(false)
    // const [ signedIn, set_signedIn ] = useState(false)
    const { isAuthModal, setIsAuthModal } = useGlobalContext();
    const { user, isLoaded, isSignedIn } = useUser();
    // const { user, isLoaded, isSignedIn } = {
    //     user: {},
    //     isLoaded: true,
    //     isSignedIn: true
    // };

    // console.log("authed user: ", user)
    // console.log("is loaded: ", isLoaded)
    // console.log("is signed in: ", isSignedIn)

    const toggleBonusBtn = () => {
        setBonusOpen(!bonusOpen)
    }

    
  return (
    <div className='main_nav_container'>
        {
            isAuthModal ?
            <div className="auth_modal">
                <button className="auth_modal_close_btn" onClick={() => setIsAuthModal(false)}></button>
                <AuthModal />
            </div>:null
        }
        <div className='nav_top_menu'>
            <div className="left_side_content">
                <Link href="/"><Image src={logo} alt='logo' className='main_nav_logo' /></Link>
                {
                    isLoaded&&isSignedIn?
                    <div className='nav_left_contents_box none_menu_sections'>
                        <button className='nav_btn_bonuses' onClick={toggleBonusBtn}>
                            <Image src={gift_icon} alt='bonuses' style={{ width: "22px" }} />
                            <p>Boneses</p>
                        </button>
                        <div className="main_nav_bonuses_box" style={{ display: bonusOpen? "flex":"none" }}>
                            <div className="main_nav_bonuses_title">
                                <h3>Available Bonuses</h3>
                                <p>3/4</p>
                            </div>
                            <div className="main_nav_bonuses_actual">
                                <div className="main_nav_single_bonus_box">
                                    <div className="icon_n_title">
                                            <Image src={login_bonus} alt='logo' width={25} height={25} />
                                            <p>Log In Bonus</p>
                                    </div>
                                    <button className="bonus_claim_btn">Claim</button>
                                </div>
                                <div className="main_nav_single_bonus_box">
                                    <div className="icon_n_title">
                                            <Image src={crypto_bonus} alt='logo' width={25} height={25} />
                                            <p>Crypto fund Bonus</p>
                                    </div>
                                    <button className="bonus_claim_btn">Claim</button>
                                </div>
                                <div className="main_nav_single_bonus_box">
                                    <div className="icon_n_title">
                                            <Image src={big_bonus} alt='logo' width={25} height={25} />
                                            <div>
                                                <p>Big Bet Bonus</p>
                                                <p className='bonus_above_label'>Bonus above $1000</p>
                                            </div>
                                    </div>
                                    <button className="bonus_claim_btn">Claim</button>
                                </div>
                                <div className="main_nav_single_bonus_box">
                                    <div className="icon_n_title">
                                            <Image src={monthly_bonus} alt='logo' width={25} height={25} />
                                            <p>Monthly Bonus</p>
                                    </div>
                                    <button className="bonus_claim_monthly_btn">30 DAYS LEFT</button>
                                </div>
                            </div>
                            <div className="main_nav_bonuses_controls">
                                <button className="main_nav_bonuses_claim_all_btn">Claim All Bonuses</button>
                            </div>
                        </div>
                    </div>
                    :""
                }
            </div>
            <div className="right_side_content">
                {
                    isLoaded&&isSignedIn?
                    <div className='nav_authed_wallet none_menu_sections'>
                        <div className="nav_balance_box">
                            <Image src={gold_coin} alt='coin' style={{ width: '20px' }} />
                            <p>$0</p>
                        </div>
                        <button className='nav_wallet_btn none_menu_sections'>
                            <RiWallet3Fill color='#fff' size={25} />
                            <p>Wallet</p>
                        </button>
                    </div>
                    :""
                }

                {
                    isLoaded && !isSignedIn?<div className="auth_btns_box none_menu_sections">
                                <Link href="/sign-up" className='nav_btn_signup auth_btns_box_buttons'>Sign up</Link>
                                <Link href="/sign-in" className='nav_btn_login auth_btns_box_buttons'>Log in</Link>
                                {/* <button className='nav_btn_login' onClick={() => setIsAuthModal(true)}>Log in</button> */}
                            </div>:
                            <div className='authenticated_menu_options none_menu_sections'>
                                <Link href="/" className="logo_drop">
                                    <div className="logo_circle">
                                        <Image src={logo_no_letter} alt='logo' style={{ width: "25px" } } />
                                    </div>
                                    <IoIosArrowDown color='#fff' size={20} />
                                </Link>
                            </div>
                }
            
                <div className="country_language_option_box none_menu_sections">
                    <div className="flag_circle">
                        <Image src={uk_flag} alt='flag' width={80} height={50} style={{ width: "60px", height: "100%" }} />
                    </div>
                    <HiMiniCog6Tooth size={25} color='#d5d5d5' />
                </div>
                {
                    isLoaded&&isSignedIn?
                    <div className='nav_notification'>
                        <IoNotifications color='#d5d5d5' size={20} />
                    </div>:
                    ""
                }
                <div className="chat_btn none_menu_sections">
                    <IoChatbubbleEllipses size={22} color='#d5d5d5' />
                </div>
                <UserButton />
                <button className="main_nav_mobile_menu_btn">
                    <Image src={mob_menu_icon} alt='menu' style={{ width: "24px" }} />
                </button>
            </div>
        </div>

        <div className="nav_bottom_menu none_menu_sections">
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
            <div className='main_nav_sub_menu'>
                <HiDotsHorizontal size={20} />
            </div>
        </div>
    </div>
  )
}

export default MainNav