import React from 'react';
import "./global_loading_comps.css";
import { FaStar } from "react-icons/fa";

const FavouritesLoading = () => {
  return (
    <div className='fav_loading_container'>
        <div className="fav_loading_circles">
            <div className="fav_one fav_circles">
                <div className="fav_two fav_circles">
                    <div className="fav_three fav_circles">
                        <FaStar size={20} color='orange' />
                    </div>
                </div>
            </div>
        </div>
        <div className="act_fav_loading_box">
            <div className="fav_load_box">
                <div className="fav_load_inner_rect"></div>
                <div className="fav_load_inner_rect"></div>
            </div>
            <div className="fav_load_box">
                <div className="user_typa_box">
                    <div className="user_typa_box_circle"></div>
                    <div className="user_typa_box_rect"></div>
                </div>
                <div className="user_typa_box">
                    <div className="user_typa_box_circle"></div>
                    <div className="user_typa_box_rect"></div>
                </div>
            </div>
            <div className="fav_load_box_tiny1"></div>
            <div className="fav_load_box fav_load_box_btns">
                <div className="fav_load_box_btn"></div>
                <div className="fav_load_box_btn"></div>
                <div className="fav_load_box_btn"></div>
                <div className="fav_load_box_btn_small"></div>
            </div>
        </div>
    </div>
  )
}

export default FavouritesLoading