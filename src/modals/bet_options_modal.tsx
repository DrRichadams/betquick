"use client";

// import "./highlights.css";
import styles from "./bet_option_styles.module.css"
import Image from 'next/image';
import football_ico from "../../../public/pngs/football.png"
import timer from "../../../public/pngs/timer.png"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import graph from "../../../public/pngs/graph.png"
import arrow_down from "../../../public/pngs/arrow_down_green.png"
import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";





export const BetOptionsModal = () => {
    return(
        <div className={styles.betOptionsModalContainer}>
            <div className={styles.bet_options_container}>
                <div className={styles.box_title}>
                    <div className={styles.box_left_title}>
                        <div className={styles.league_name}>
                            <Image src={""} alt="" />
                            <p>Premier League</p>
                        </div>
                        <div className={styles.time_of_game}>
                            <Image src={""} alt="" />
                            <p>Today at 6:30AM</p>
                        </div>
                    </div>
                    <div className={styles.box_right_title}>
                        <button><FaStar  color="#fff"/></button>
                        {/* <button><FaRegStar  color="#fff"/></button> */}
                    </div>
                </div>
                <div className={styles.box_teams_activity}>
                    <div className={styles.team_listing}>
                        <div className={styles.team_box}>
                            <Image src={""} alt="" />
                            <p>Manchester United</p>
                        </div>
                        <div className={styles.team_box}>
                            <Image src={""} alt="" />
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