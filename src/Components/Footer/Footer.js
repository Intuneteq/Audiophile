import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { Images } from "../../Constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-img">
          <img src={Images.audiophilefooter} alt="footer" />
        </div>
        <div className="footer__content-links">
          <Link to="/">Home</Link>
          <Link to="/headphones">HEADPHONES</Link>
          <Link to="/speakers">SPEAKERS</Link>
          <Link to="/earphones">EARPHONES</Link>
        </div>
      </div>
      <div className="footer_page">
        <div className="footer__page-content">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="app__flex direct">
            <h6>Copyright. All Rights Reserved</h6>
            <div className="footer__pages-socials">
              <AiFillFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
