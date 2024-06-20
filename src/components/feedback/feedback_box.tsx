"use client";

import React, { useState, CSSProperties } from 'react';
import "./feedback.css";
import { useUser } from '@clerk/nextjs';
import ClipLoader from "react-spinners/ClipLoader";

function FeedbackComp() {

    // const { isLoaded, isSignedIn, user } = useUser();

    const { user, isLoaded, isSignedIn } = {
        user: { id: 1 },
        isLoaded: true,
        isSignedIn: true
    };

    const [ feedback, setFeedBack ] = useState("")
    const [ feedbackMessage, setFeedBackMessage ] = useState({
        type: "",
        message: ""
    })
    const [ isSubmiting, setIsSubmitting ] = useState(false)

    function handleFeedBackChange(e: any){
        setFeedBack(e.target.value)
        setFeedBackMessage({ type: "", message: "" })
    }

    const validateInput = () => {
        if (!isSignedIn) {
            setFeedBackMessage({ type: "error", message: "Only logged in users can leave feedback." });
            return false
        }
        if (feedback.length < 1) {
            setFeedBackMessage({ type: "error", message: "Please, provide your feedback before submitting!" });
            return false
        } else if(feedback.length < 5) {
            setFeedBackMessage({ type: "error", message: "Your feedback should at least be 6 characters long" });
            return false
        }
        return true;
    }

    async function handleFeedbackSubmit(e: any) {
        e.preventDefault();
        const isProceed = validateInput();
        if (!isProceed) return;
        // PROCEED SUBMITTING
        setIsSubmitting(true)
        const res = await fetch(`http://localhost:3000/api/feedback/${user.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({feedback_script: feedback})
        }).then(() => {
            setFeedBack("");
            setIsSubmitting(false)
            setFeedBackMessage({ type: "success", message: "Thank you for your feedback!" })
        }).catch(() => {
            setFeedBack("");
            setIsSubmitting(false)
            setFeedBackMessage({ type: "error", message: "Something went wrong..." })
        })
    }

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "#fff",
      };


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
        <form className="right_sect" onSubmit={(e) => handleFeedbackSubmit(e)}>
            <h3 className='feedback_titles'>Got anything to tell us ?</h3>
            <div className="feedback_return_message_box" style={{ 
                display: !feedbackMessage.type ? "none": "block",
                backgroundColor: feedbackMessage.type == "error" ? "#f78c8cc7": feedbackMessage.type == "success" ? "#B1BF24": "#fff",
                color: feedbackMessage.type == "error" ? "#fff": feedbackMessage.type == "success" ? "#fff": "black",
             }}>
                <p>{feedbackMessage.message}</p>
            </div>
            <div className="feedback_text_area">
                <div className="textbox_container">
                    <h3 className="watermark">Betquick</h3>
                    {/* <textarea className='feedback_text_box' maxLength={1500} name="" rows={6} cols={50} placeholder='Go ahead and tell us .......' /> */}
                    <textarea 
                        className='feedback_text_box' 
                        maxLength={1500} 
                        placeholder='Go ahead and tell us .......' 
                        value={feedback}
                        onChange={(e) => handleFeedBackChange(e)}
                    />
                </div>
                <p className="feedback_warning">0-1500 characters</p>
            </div>
            <button disabled={isSubmiting} className='feedback_submit_btn'>
                    {isSubmiting ? 
                        <ClipLoader
                            color={"#fff"}
                            loading={isSubmiting}
                            cssOverride={override}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                      />
                    :"Leave Feedback"}
            </button>
        </form>
    </div>
  )
}

export default FeedbackComp