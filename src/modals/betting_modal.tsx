"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import styles from "./modal_styles.module.css";
import { TbTicket } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri"
import { IoCopy } from "react-icons/io5";


const BettingModal = () => {
    const [ selected, setSelected ] = useState("single");
    const [ betSharing, setBetSharing ] = useState(false);
    const searchParams = useSearchParams()
    const isBetting = searchParams.get("isBetting")
    const router = useRouter()

    const pathname = usePathname();

    const handleModalClose = () => {
        // alert(`${pathname}`)
        router.push(`${pathname}`)
    }

    const toggleBetSharing = () => setBetSharing(!betSharing);

    const handleModeChange = (mode: string) => { setSelected(mode) }

    const betSharingTitleBarStyles = () => {
        if(betSharing) return {
            background: "linear-gradient(to right, #B1BF24, #FFC000)"
        }
        return {
            backgroundColor: "#B1BF24"
        }
    }

    const selectorBtnStyles = (state: boolean) => {
        if(state) {return { color: "#FFFFFF", borderColor: "#B1BF24" }};
        return { color: "#808080", borderColor: "transparent"}
    };

    const betSharingToggleElipse = () => {
        if(betSharing) return { backgroundColor: "#D9D9D9", justifyContent: "flex-end" };
        return { backgroundColor: "transparent", justifyContent: "flex-start" }
    }

    const betSharingToggleCircle = () => {
        if(betSharing) return { backgroundColor: "#B1BF24", color: "#fff"};
        return { backgroundColor: "#fff", color: "#CCCCCC"};
    }

        if(isBetting && isBetting=="open") {
            return (
                <div className={styles.modalOverlay} onClick={handleModalClose}>
                    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.bet_slip_title_bar} style={betSharingTitleBarStyles()}>
                            <div className={styles.bet_slip_title_bar_left}><TbTicket size={20} /><p>BET SLIP</p><IoMdArrowDropdown size={20} /></div>
                            <div className={styles.bet_slip_title_bar_right}>
                                <div className={styles.bet_slip_title_bar_right_title}>
                                    <RiErrorWarningLine />
                                    <p>Bet Sharing</p>
                                </div>
                                <div className={styles.bet_slip_title_share_toggle} onClick={toggleBetSharing} style={betSharingToggleElipse()}>
                                    <div className={styles.share_toggle_white} style={betSharingToggleCircle()}>
                                        <IoCopy />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className={styles.bet_slip_selector_bar}>
                            <button className={styles.bet_slip_selector_btn} onClick={() => handleModeChange("single")} style={selectorBtnStyles(selected=="single")}>Single</button>
                            <button className={styles.bet_slip_selector_btn} onClick={() => handleModeChange("multiple")} style={selectorBtnStyles(selected=="multiple")}>Multiple</button>
                            <button className={styles.bet_slip_selector_btn} onClick={() => handleModeChange("system")} style={selectorBtnStyles(selected=="system")}>System</button>
                        </div>
                        {
                            selected == "single"?
                            <Single />:
                            selected == "multiple"?
                            <Multiple />:
                            selected == "system"?
                            <System />: null
                        }
                        <button className={styles.bet_slip_place_bet_btn}>Place Bet</button>
                    </div>
                </div>
            )
        }
    }

export default BettingModal

const Single = () => {
    return(
        <div>
            Single
            <div className={styles.bet_slip_fixtures}></div>
            <div className={styles.bet_slip_amount_placing}></div>
            <div className={styles.bet_slip_bet_details}></div>
        </div>
    )
}

const Multiple = () => {
    return(
        <div>
            Multiple
            <div className={styles.bet_slip_fixtures}></div>
            <div className={styles.bet_slip_amount_placing}></div>
            <div className={styles.bet_slip_bet_details}></div>
        </div>
    )
}

const System = () => {
    return(
        <div>
            SYSTEM
            <div className={styles.bet_slip_fixtures}></div>
            <div className={styles.bet_slip_amount_placing}></div>
            <div className={styles.bet_slip_bet_details}></div>
        </div>
    )
}