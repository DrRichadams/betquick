"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import styles from "./modal_styles.module.css";


const BettingModal = () => {
    const [ selected, setSelected ] = useState("football");
    const searchParams = useSearchParams()
    const isBetting = searchParams.get("isBetting")
    const router = useRouter()

    const pathname = usePathname();

    const handleModalClose = () => {
        // alert(`${pathname}`)
        router.push(`${pathname}`)
    }

        if(isBetting && isBetting=="open") {
            return (
                <div className={styles.modalOverlay} onClick={handleModalClose}>
                    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.bet_slip_title_bar}>
                            BET SLIP
                        </div>
                        <div className={styles.bet_slip_selector_bar}>
                            SELECT BET TYPE
                        </div>
                        <div className={styles.bet_slip_fixtures}></div>
                        <div className={styles.bet_slip_amount_placing}></div>
                        <div className={styles.bet_slip_bet_details}></div>
                        <button className={styles.bet_slip_place_bet_btn}>PLACE BET</button>
                    </div>
                </div>
            )
        }
    }

export default BettingModal