"use client";

import React, { useState } from 'react';
import "./faq.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function FAQ() {

    const [ faqs ] = useState([
        { id: 1, open: false, question: "What Is Survival Pool Betting All About ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas explicabo itaque quibusdam dolorem nostrum vel harum mollitia esse at voluptates!" },
        { id: 2, open: false, question: "What Is Copy Betting ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas explicabo itaque quibusdam dolorem nostrum vel harum mollitia esse at voluptates!" },
        { id: 3, open: false, question: "How Can I Earn On Bet Quick ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas explicabo itaque quibusdam dolorem nostrum vel harum mollitia esse at voluptates!" },
    ])

  return (
    <div className='faq_container'>
        <h3 className='faqs_title'>FAQ's</h3>
        <div className="faqs_box">
            {
                faqs.map((item) => (
                    <div key={item.id} className='single_faq_box'>
                        <div className="question_box">
                            <p>{item.question}</p>
                            {
                                !item.open?
                                <IoIosArrowDown color='#B1BF24' size={20} />
                                :<MdOutlineKeyboardArrowRight color='#B1BF24' size={20} />
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQ