import React from 'react';
import "./feedback.css";

function FeedbackComp() {
  return (
    <div className='feedback_container'>
        <div className="left_sect">
            <h3 className='feedback_titles'>Guidance & Compliance</h3>
            <p>
                BetQuick is committed to Responsible Gaming, ensuring a safe and enjoyable betting environment. 
                To help players maintain control, we offer <span>Activity Alerts</span> that remind them of their gambling 
                time and spending.
            </p>
        </div>
        <div className="right_sect">
            <h3 className='feedback_titles'>Got anything to tell us ?</h3>
            <div className="feedback_text_area">
                <div className="textbox_container">
                    <h3 className="watermark">Betquick</h3>
                    <textarea className='feedback_text_box' maxLength={1500} name="" rows={6} cols={50} placeholder='Go ahead and tell us .......' />
                </div>
                <p className="feedback_warning">0-1500 characters</p>
            </div>
            <button>Leave Feedback</button>
        </div>
    </div>
  )
}

export default FeedbackComp