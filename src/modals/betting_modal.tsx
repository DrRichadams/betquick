"use client"

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from "./modal_styles.module.css";

const BettingModal = () => {
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
        
                    </div>
                </div>
            )
        }
    }

export default BettingModal