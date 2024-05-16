import React from 'react';
import "./footer_styles.css";
import Link from 'next/link';
import Image from 'next/image';
import { SiTelegram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";
import rating1 from "../../../public/pngs/rating1.png"
import rating2 from "../../../public/pngs/rating2.png"

function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer_details">
        <div className="footer_logos">
          <Image src={rating1} alt='rating' className='footer_logos_img' />
          <Image src={rating2} alt='rating' className='footer_logos_img' />
        </div>
        <p className="footer_story">
          This website offers a betting experience with risk. 
          To use our site, you must be at least 18 years old. 
          We are not responsible for any violations of your local betting laws.
          Play responsibly and enjoy yourself on BetQuick.
        </p>
        <div className="footer_socials">
          <Link href="/"><SiTelegram /></Link>
          <Link href="/"><FaYoutube /></Link>
          <Link href="/"><FaSquareXTwitter /></Link>
          <Link href="/"><RiInstagramFill /></Link>
          <Link href="/"><FaRedditAlien /></Link>
        </div>
      </div>
      <div className="footer_links_container">
        <div className="footer_help">
          <p className='footer_links_title'>Help</p>
          <Link className='footer_link' href="/">Privacy Policy</Link>
          <Link className='footer_link' href="/">Terms of Service</Link>
          <Link className='footer_link' href="/">Betquick T&C</Link>
          <Link className='footer_link' href="/">Business Inquiries</Link>
          <Link className='footer_link' href="/">Live Support</Link>
          <Link className='footer_link' href="/">Responsible Gambling</Link>
        </div>
        <div className="footer_about">
            <p className='footer_links_title'>About Us</p>
            <Link className='footer_link' href="/">News</Link>
            <Link className='footer_link' href="/">About Betquick</Link>
            <Link className='footer_link' href="/">About Team</Link>
            <Link className='footer_link' href="/">Betquick Docs</Link>
        </div>
        <div className="footer_games">
            <p className='footer_links_title'>Games</p>
            <Link className='footer_link' href="/">Soccer</Link>
            <Link className='footer_link' href="/">Survival Pools</Link>
            <Link className='footer_link' href="/">Awards & Finance</Link>
        </div>
        <div className="footer_contact">
            <p className='footer_links_title'>Contact Us</p>
            <Link className='footer_link' href="/">support@Betquick.com</Link>
            <Link className='footer_link' href="/">Whatsapp</Link>
            <Link className='footer_link' href="/">Twitter</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer