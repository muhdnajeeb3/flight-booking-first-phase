import React from "react";
import style_f from "./Footer.module.css";

import { FaInstagram, FaTwitter } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <>

      <div className={style_f.container}>
        <div className={style_f.f_icon}>

          <a href="https://twitter.com/shaab_travels?t=QJPMij9F5gyf3_COdzPF1g&s=09">  <FaTwitter className={style_f.twitter} /></a>

          <a href="https://www.facebook.com/shaabtravels"> <FaFacebookF className={style_f.facebook} /> </a>
          <a href="https://instagram.com/shaabtrip?igshid=YmMyMTA2M2Y="> <FaInstagram className={style_f.facebook} /> </a>

        </div>

        <div className={style_f.f_cright}>

          <span className={style_f.copyright}> © 2022 SHAAB TRIP PVT. LTD.</span>
          <span className={style_f.counteryName} >  Country
          <span className={style_f.country}>INDIA</span>|
          <span className={style_f.country}>USA</span>|
          <span className={style_f.country}>UAE</span>

            {/* <a href="https://www.makemytrip.com/" className={style_f.country}>India</a>
            <a href="https://www.makemytrip.com/" className={style_f.country} >USA</a>
            <a href="https://www.makemytrip.com/" className={style_f.country}>UAE</a> */}

          </span>

        </div>
      </div>
    </>
  );
};

export default Footer;
