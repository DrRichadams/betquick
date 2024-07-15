"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from "./modal_styles.module.css";

const BettingModal = () => {
    const [ selected, setSelected ] = useState("football");
    const searchParams = useSearchParams()
    const isBetting = searchParams.get("isBetting")
    const router = useRouter()

    const handleModalClose = () => {
        // alert("Modal has closed")
        router.push("/football")
    }

        if(isBetting && isBetting=="open") {
            return (
                <div className={styles.modalOverlay} onClick={handleModalClose}>
                    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.bet_type_selector_box}>
                            <button onClick={() => setSelected("football")} className={styles.bet_selector_btn} style={{ backgroundColor: selected=="football"? "#B1BF24":"transparent", color: selected=="football"? "#fff":"#B1BF24"  }}>Football</button>
                            <button onClick={() => setSelected("survival")} className={styles.bet_selector_btn} style={{ backgroundColor: selected=="survival"? "#B1BF24":"transparent", color: selected=="survival"? "#fff":"#B1BF24" }}>Survival Pool</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default BettingModal