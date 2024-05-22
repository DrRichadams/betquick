"use client";

import React, { useState } from 'react'
import "./auth_modal.css";
import { TbPhoneFilled } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { GiPresent } from "react-icons/gi";

const AuthModal = () => {
    const [authMode, set_authMode] = useState("login");
  return (
        <div className="auth_inner_container">
          <div className="auth_main_box">
              <div className="auth_selector">
                <button className="select_login_btn" onClick={() => set_authMode("login")} style={{backgroundColor: authMode == "login"?"#B1BF24":"transparent"}}>Log in</button>
                <button className="select_signup_btn" onClick={() => set_authMode("signup")} style={{backgroundColor: authMode == "signup"?"#B1BF24":"transparent"}}>Sign up</button>
              </div>
              <>
                {
                    authMode == "login"?
                    <LoginForm />:
                    <SigninForm />
                }
              </>
          </div>
        </div>
  )
}


const LoginForm = () => {
    return(
      <form className="auth_form_login">
        <div className="auth_form_inputs">
          <div className="auth_input_container">
            <TbPhoneFilled color="gray" size={20} />
            <input type="text" placeholder="Enter Your Phone Number" />
          </div>
          <div className="auth_input_container">
            <MdLock color="gray" size={20} />
            <input type="text" placeholder="Enter Your Password" />
          </div>
          <button className='auth_forgotP_btn'>Forgot Password ?</button>
        </div>
        <button className='auth_login_btn'>Log In</button>
        <p className='auth_login_message'>
          By accessing you confirm that you are at least 18 years old and agree to <span>Terms Of Service</span>
        </p>
      </form>
    )
  }

  const SigninForm = () => {
    const [signup_terms, set_signup_terms] = useState(false);
    return(
        <div className="auth_form_signin">
             <div className="auth_form_inputs">
                <div className="auth_input_container">
                    <TbPhoneFilled color="gray" size={20} />
                    <input type="text" placeholder="Enter Your Phone Number" />
                </div>
                <div className="auth_input_container">
                    <MdLock color="gray" size={20} />
                    <input type="text" placeholder="Enter Your Password" />
                </div>
                <div className="auth_input_container">
                    <MdLock color="gray" size={20} />
                    <input type="text" placeholder="Repeat Your Password" />
                </div>
                <div className="auth_input_container">
                    <select className='auth_select_input'>
                        <option value="Namibia">Select country of residence</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Angola">Angola</option>
                        <option value="Somalia">Somalia</option>
                    </select>
                </div>
                <div className="auth_input_container">
                    <GiPresent color="gray" size={20} />
                    <input type="text" placeholder="Enter Referral Code" />
                </div>
                <div className="auth_terms_of_service">
                    <button className="auth_tc_checkbox" onClick={() => set_signup_terms(!signup_terms)}><div style={{ backgroundColor: signup_terms ? "#B1BF24":"transparent" }}></div></button>
                    <p>By accessing  you confirm that you are at least 18 years old and agree to <span>Terms Of Service</span></p>
                </div>
            </div>
            <button className="auth_signup_btn">Create account</button>
        </div>
    )
  }

export default AuthModal