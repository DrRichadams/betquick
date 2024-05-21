"use client";

import React, { useState } from 'react';
import "./res_win.css";
import Image from 'next/image';
import football_icon from "../../../public/pngs/football.png";
import survival_icon from "../../../public/pngs/survival.png";
import gold_coin from "../../../public/pngs/gold_coin.png";
import crypto_coin from "../../../public/pngs/crypto.png";

const ResultsWinnings = () => {
    const [ res_win ] = useState([
        { id: 1, event: "Football", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "T" },
        { id: 2, event: "Survival Pool", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "C" },
        { id: 3, event: "Football", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "T" },
        { id: 4, event: "Survival Pool", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "C" },
        { id: 5, event: "Football", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "T" },
        { id: 6, event: "Survival Pool", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "T" },
        { id: 7, event: "Football", stake: "4000", rank: "Rank 1", time: "Just now", cashout: "26800", cashout_type: "C" },
    ])
  return (
    <div className='res_win_container'>
        <h3 className='res_win_title'>Results & Winnings</h3>
        <div className="results_box">
            <div className="res_win_headers">
                <p>Event</p>
                <p>Stake</p>
                <p className='to_be_removed'>Rank</p>
                <p className='to_be_removed'>Time</p>
                <p className='res_win_headers_cashout_title'>Cashout</p>
            </div>
            {
                res_win.map((item) => {
                    return(
                        <div className='res_win_box'>
                            <div className="res_win_event">
                                <Image 
                                    src={item.event=="Football"
                                    ?football_icon
                                    :survival_icon} alt='event'
                                    style={{ width: "18px" }}
                                />
                                <p>{item.event}</p>
                            </div>
                            <p>${item.stake}</p>
                            <p className='to_be_removed'>{item.rank}</p>
                            <p className='to_be_removed'>{item.time}</p>
                            <div className="cash_out_box">
                                <Image 
                                    src={item.cashout_type=="T"
                                    ?crypto_coin
                                    :gold_coin} alt='coin'
                                    style={{ width: "18px" }}
                                />
                                <p style={{ color: "#2CBE6F" }}>${item.cashout}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ResultsWinnings