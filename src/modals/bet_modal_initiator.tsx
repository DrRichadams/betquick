"use client";

import React from 'react';
import styles from "./modal_styles.module.css";
import Lottie from "lottie-react";
import football_animation from "./football_anim.json";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const BetModalInitiator = () => {
  const searchParams = useSearchParams();
  const isBetting = searchParams.get("isBetting");
//   if(isBetting) return null;
  return (
    <Link href={"?isBetting=open"} className={styles.betting_initiator} style={{ bottom: isBetting ? "-500px":"5px" }}>
        <Lottie animationData={football_animation} loop={true} />
    </Link>
  )
}

export default BetModalInitiator