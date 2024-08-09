"use client";

// import "./highlights.css";
import styles from "./bet_option_styles.module.css"
import Image from 'next/image';
import timer from "../../../public/pngs/timer.png"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import { FaShirt } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import graph from "../../../public/pngs/graph.png"
import arrow_down from "../../../public/pngs/arrow_down_green.png"
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";





export const BetOptionsModal = () => {
    const searchParams = useSearchParams();
    const isBettingOptions = searchParams.get("isBettingOptions")
    const router = useRouter()

    const isBetting = searchParams.get("isBetting")
    const betMode = searchParams.get("betMode")
    const betMarket = searchParams.get("betMarket")
    const betSharingVal = searchParams.get("betSharing")
    const betSystemsMode = searchParams.get("betSystemsMode")

    const pathname = usePathname();

    const handleModeChange = (bettingOption: string) => { 
        const queryString = new URLSearchParams({
          isBetting: `${isBetting}`,
          betMode: `${betMode}`,
          betSharing: `${betSharingVal}`,
          betMarket: `${betMarket}`,
          betSystemsMode: `${betSystemsMode}`,
          isBettingOptions: `${bettingOption}`
        }).toString();
      
        router.push(`${pathname}?${queryString}`); 
 }

    if(isBettingOptions && isBettingOptions == "expand") {
        return(
            <div className={styles.betOptionsModalContainer} onClick={() => handleModeChange("collapse")}>
                <div className={styles.bet_options_container} onClick = {(e) => e.stopPropagation()}>
                    <div className={styles.box_title}>
                        <div className={styles.box_left_title}>
                            <div className={styles.league_name}>
                                <IoIosFootball size={20} />
                                <p>Premier League</p>
                            </div>
                            <div className={styles.time_of_game}>
                                <GoClockFill size={12} />
                                <p>Today at 6:30AM</p>
                            </div>
                        </div>
                        <div className={styles.box_right_title}>
                            {/* <button><FaStar  color="#fff" size={22}/></button> */}
                            {/* <button><FaRegStar  color="#fff"/></button> */}
                            <button onClick={() => handleModeChange("collapse")}><IoIosCloseCircle color="orange" size={24} /></button>
                        </div>
                    </div>
                    <div className={styles.box_teams_activity}>
                        <div className={styles.team_listing}>
                            <div className={styles.team_box}>
                                <FaShirt />
                                <p>Manchester United</p>
                            </div>
                            <div className={styles.team_box}>
                                <FaShirt />
                                <p>Chelsea FC</p>
                            </div>
                        </div>
                        <div className={styles.activity_box}>
                            ACTIVITY
                        </div>
                    </div>
                    <div className={styles.secondary_betting_option}>
                        <p className={styles.market_title}>1X2</p>
                        <div className={styles.betting_btn_set}>
                            <button className={styles.bet_btn}><p>1</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>Draw</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>2</p><p>0.7</p></button>
                        </div>
                    </div>
                    <div className={styles.secondary_betting_option}>
                        <p className={styles.market_title}>1ST HALF</p>
                        <div className={styles.betting_btn_set}>
                            <button className={styles.bet_btn}><p>1</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>Draw</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>2</p><p>0.7</p></button>
                        </div>
                    </div>
                    <div className={styles.secondary_betting_option}>
                        <p className={styles.market_title}>DOUBLE CHANCE</p>
                        <div className={styles.betting_btn_set}>
                            <button className={styles.bet_btn}><p>1</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>Draw</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>2</p><p>0.7</p></button>
                        </div>
                    </div>
                    <div className={styles.secondary_betting_option}>
                        <p className={styles.market_title}>HALFTIME/FULLTIME</p>
                        <div className={styles.betting_btn_set}>
                            <button className={styles.bet_btn}><p>1</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>Draw</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>2</p><p>0.7</p></button>
                        </div>
                    </div>
                    <div className={styles.secondary_betting_option}>
                        <p className={styles.market_title}>TOTAL GOALS</p>
                        <div className={styles.betting_btn_set}>
                            <button className={styles.bet_btn}><p>0</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>3</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>4</p><p>0.7</p></button>
                            <button className={styles.bet_btn}><p>6+</p><p>0.7</p></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}