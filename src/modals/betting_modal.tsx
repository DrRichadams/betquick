"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import styles from "./modal_styles.module.css";
import { TbTicket } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri"
import { IoCopy } from "react-icons/io5";
import { VscJersey } from "react-icons/vsc";
import { IoFootball } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


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
                        <div className={styles.bet_slip_section_container}>
                            {selected == "single"?
                                <Single />:
                            selected == "multiple"?
                                <Multiple />:
                            selected == "system"?
                                <System />: null}
                        </div>
                        <button className={styles.bet_slip_place_bet_btn}>Place Bet</button>
                    </div>
                </div>
            )
        }
    }

export default BettingModal



const FixtureComp = () => {
    return(
        <div className={styles.fixture_container}>
            <div className={styles.fixture_accent}></div>
            <div className={styles.fixture_title_bar}>
                <div className={styles.fixture_title_home_team_box}>
                    <IoFootball size={23} />
                    <p className={styles.fixture_title_home_name}>Home (Manchester United)</p>
                </div>
                <button className={styles.close_icon}><IoClose /></button>
            </div>
            <div className={styles.fixture_team_listing}>
                <div className={styles.fixture_team_box}>
                    <VscJersey />
                    <p className={styles.fixture_team_name}>Manchester United</p>
                </div>
                <div className={styles.fixture_team_V}>V</div>
                <div className={styles.fixture_team_box}>
                    <VscJersey />
                    <p className={styles.fixture_team_name}>Chelsea FC</p>
                </div>
            </div>
            <div className={styles.fixture_details}>
                <div className={styles.fixture_market}>
                    1X2
                </div>
                <div className={styles.fixture_stats}>
                    <div className={styles.fixture_odds}>3.19</div>
                    <div className={styles.fixture_bet_amount_box}>
                        <div className={styles.currency_sign}>$</div>
                        <input type="text" className={styles.fixture_bet_amount_input} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Single = () => {
    return(
        <div>
            <div className={styles.bet_slip_fixtures}>
                <FixtureComp />
            </div>
            <div className={styles.bet_slip_amount_placing}></div>
            <div className={styles.bet_slip_bet_details}></div>
        </div>
    )
}

const Multiple = () => {
    return(
        <div>
            <div className={styles.bet_slip_fixtures}>
                <FixtureComp />
            </div>
            <div className={styles.bet_slip_amount_placing}></div>
            <div className={styles.bet_slip_bet_details}></div>
        </div>
    )
}

const System = () => {
    return(
        <div>
            <div className={styles.bet_slip_fixtures}>
                <FixtureComp />
            </div>
            <div className={styles.bet_slip_amount_placing}></div>
            <div className={styles.bet_slip_bet_details}></div>
        </div>
    )
}