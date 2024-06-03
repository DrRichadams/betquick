"use client";

import React, { ReactNode, useState } from 'react';
import "./ticket_page.css";
import Link from 'next/link';
import { TbTicket } from "react-icons/tb";
import TicketEmptyLoading from '@/components/loading_comps/ticket_empty_loading';
import { IoIosFootball } from "react-icons/io";
import { LuTimer } from "react-icons/lu";
import { VscJersey } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";

function TicketPage() {
  const [ game_option, set_game_option ] = useState("football");
  const [ bet_options ] = useState([ { id: 1, name: "all" }, { id: 2, name: "open bets" }, { id: 3, name: "won" }, { id: 4, name: "lost" }, { id: 5, name: "cashed out" }, { id: 6, name: "refund" } ])
  const [ selected_bet, set_selected_bet ] = useState(1);
  const [ isEmpty ] = useState(false)
  const [ no_tickets, set_no_tickets ] = useState(false)

  const changeOption = (option: string) => {
    set_game_option(option)
  }
  const changeBetOption = (id: number) => {
    set_selected_bet(id)
  }
  return (
    <div className="ticket_page_container">
      <div className="ticket_page_title_box">
        <TbTicket />
        <p>My Bets</p>
      </div>
      <div className="ticket_page_options">
        <button className={game_option=="football"?"green_select_btn":"transparent_select_btn"} onClick={() => changeOption("football")}>Football</button>
        <button className={game_option=="survival"?"green_select_btn":"transparent_select_btn"} onClick={() => changeOption("survival")}>Survival Pool</button>
      </div>
      <div className="ticket_page_bet_options_box">{
        bet_options.map((option) => (
          <button 
              key={option.id}
              style={{
                backgroundColor: selected_bet == option.id?
                "#B1BF24":"#1F1F1F"
              }}
              onClick={() => changeBetOption(option.id)}
            >
                {option.name}
          </button>
        ))
      }</div>
      {
        no_tickets ?
          <div className="empty_ticket_render">
          <TicketEmptyLoading />
          <p>
            Betting options are not available.
            Consider choosing other dates.
          </p>
          <Link href="/" className='empty_ticket_btn'>Go To Homepage</Link>
        </div>: null
      }
      <div className="ticket_betting_receipts_container">
        {/* RENDER RECEIPTS HERE */}
        <BettingReceipt bet_type='System' />
        <BettingReceipt bet_type='Multiple' />
        <BettingReceipt bet_type='Multiple' />
        <BettingReceipt bet_type='System' />
      </div>
    </div>
  )
}

type BetBoxProps = {
  bet_type: string,
  children: ReactNode
}

const BetBox = ({ bet_type, children }: BetBoxProps) => {
  return(
    <div className="bet_box_container">
      <div className="bet_box_title_box">
        <TbTicket size={25} />
        <p>Betslip ({ bet_type })</p>
      </div>
      { children }
    </div>
  )
}




type BettingReceiptProps = { bet_type: string }

const BettingReceipt = ({ bet_type }:BettingReceiptProps) => {
  return(
    <div className="ticket_bet_container">
        <BetBox bet_type={bet_type}>
          <div className="ticket_bet_inner_box">
            <BettingTeams />
            <BettingTeams />
            <div className="ticket_bet_inner_bet_details">
              <div className="ticket_bet_inner_odds">
                <div>TOTAL ODDS</div>
                <p>6.38</p>
              </div>
              <div className="ticket_bet_inner_bet_amount">
                <div>BET AMOUNT</div>
                <p>$1,000,000</p>
              </div>
              <div className="ticket_bet_inner_results">
                <div>Won</div>
                <p>$7,000,000</p>
              </div>
            </div>
            <button className="ticket_bet_cashout_btn">Cashout :$1,000,000</button>
          </div>
        </BetBox>
      </div>
  )
}





const BettingTeams = () => {
  return(
    <div className="betting_teams_container">
      <div className="betting_teams_accent"></div>
      <div className="betting_teams_icon_message">
        <AiFillCheckCircle color='#B1BF24' size={25} />
      </div>
      <div className="betting_teams_restof_contents">
        <div className="betting_teams_upper_box">
          <div className="betting_teams_upper_title_box">
            <div className="betting_teams_home_team_title">
              <IoIosFootball size={20} />
              <p>Home ( Manchester United )</p>
            </div>
            <div className="betting_teams_home_match_details">
              <div className="betting_teams_home_timer">
                <LuTimer size={18} />
                <p>FT</p>
              </div>
              <div className="betting_teams_home_scoring">
                <p>0</p>
                <div></div>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="betting_teams_upper_playing_teams_box">
            <div className="betting_teams_upper_team_box">
              <VscJersey />
              <p>Machester United</p>
            </div>
            <div className="betting_teams_upper_versus">V</div>
            <div className="betting_teams_upper_team_box">
              <VscJersey />
              <p>Chelsea FC</p>
            </div>
          </div>
          <div className="betting_teams_upper_stats_box">
            <div className="betting_teams_upper_market_box">1X2</div>
            <div className="betting_teams_upper_odds_box">3.19</div>
          </div>
        </div>
        <div className="betting_teams_lower_box">
          <div className="betting_teams_lower_box_items">Pick: <span>Home @2.19</span></div>
          <div className="betting_teams_lower_box_items">Market: <span>1X2</span></div>
          <div className="betting_teams_lower_box_items">Outcome: <span>Home</span></div>
        </div>
      </div>
    </div>
  )
}

export default TicketPage