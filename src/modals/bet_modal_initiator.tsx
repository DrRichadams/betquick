"use client";

import React from 'react';
import styles from "./modal_styles.module.css";
import Lottie from "lottie-react";
import football_animation from "./football_anim.json";
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const BetModalInitiator = () => {
  const searchParams = useSearchParams();
  const isBetting = searchParams.get("isBetting");
  const router = useRouter();
//   if(isBetting) return null;

const pathname = usePathname();

const setBetModalInitialValues = () => {
  const queryString = new URLSearchParams({
    isBetting: 'open',
    betMode: "betSlip",
    betSharing: "nosharing",
    betMarket: "single",
    betSystemsMode: "doubles"
  }).toString();

  router.push(`${pathname}?${queryString}`);

}

  return (
    // <Link href={"?isBetting=open"} className={styles.betting_initiator} style={{ bottom: isBetting ? "-500px":"5px" }}>
    //     <Lottie animationData={football_animation} loop={true} />
    // </Link>
    <button onClick={setBetModalInitialValues} className={styles.betting_initiator} style={{ bottom: isBetting ? "-500px":"5px" }}>
        <Lottie animationData={football_animation} loop={true} />
    </button>
  )
}

export default BetModalInitiator