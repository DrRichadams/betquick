import React from 'react';
import "./award_finance.css";
import Image from 'next/image';
import trophy from "../../../../public/pngs/trophy.png";

function AwardFinancePage() {
  return (
    <div className="award_finance_page_container">
      <div className="coming_soon_box">
        <Image src={trophy} alt='img' width={500} height={500} />
      </div>
      <p className="award_finance_script">
        While we strive to ensure the accuracy of the data on our site, please note that it is 
        provided for informational purposes only and should be used as a guide. We are not liable 
        for any inaccuracies in the information provided.
      </p>
    </div>
  )
}

export default AwardFinancePage