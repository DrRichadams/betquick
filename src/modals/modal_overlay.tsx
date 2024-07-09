"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./modal_styles.module.css";

const ModalOverlay = ({ isOpen, children }: { isOpen: boolean, children: ReactNode }) => {
    const router = useRouter()
    const isBet = router.query.isBet;
    // if (!isOpen) return null;
    if (!isBet) return null;

    const handleContainerClick = (e: any) => {
        // Prevent closing if the click is on the child element
        e.stopPropagation();
    };

    const handleModalClose = () => {
        alert("Modal has closed")
        router.push("/football")
    }

    return (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
            <div className={styles.modalContainer} onClick={handleContainerClick}>
                {children}
            </div>
        </div>
    )
}

export default ModalOverlay