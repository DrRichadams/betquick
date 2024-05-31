import React from 'react';
import "./global_loading_comps.css";
import { IoMdClose } from "react-icons/io";

const TicketEmptyLoading = () => {
  return (
    <div className='empty_ticket_loading_container'>
        <EmptyTicketBox />
        <EmptyTicketBox />
        <EmptyTicketBox />
    </div>
  )
}

const EmptyTicketBox = () => {
    return(
        <div className="empty_ticket_box">
            <div className="empty_ticket_accent"></div>
            <div className="empty_ticket_left_box">
                <div className="empty_ticket_one empty_ticket_common"></div>
                <div className="empty_ticket_two empty_ticket_common"></div>
                <div className="empty_ticket_three empty_ticket_common"></div>
            </div>
            <div className="empty_ticket_right_box">
                <IoMdClose color='#fff' size={15} />
                <div></div>
            </div>
        </div>
    )
}

export default TicketEmptyLoading