"use client";

import React, { ReactNode, useState } from 'react';
import "./ticket_page.css";
import Link from 'next/link';
import { TbTicket } from "react-icons/tb";
import TicketEmptyLoading from '@/components/loading_comps/ticket_empty_loading';

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
      <div className="ticket_bet_container">
        <BetBox bet_type='Multiple'>
          <div className="ticket_bet_inner_box">
            <BettingTeams />
          </div>
        </BetBox>
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

const BettingTeams = () => {
  return(
    <div className="betting_teams_container">

    </div>
  )
}

export default TicketPage