import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { Images } from "../../Constants";
import "./ShopBanner.scss";

const ShopBanner = () => {
  return (
    <div className="banner app__flex">
      <div className="Position">
        <div>
          <img src={Images.headphone} alt="headphone" />
        </div>
        <h4>HEADPHONES</h4>
        <Link to="/headphones">
          <p>
            <span>SHOP</span> <IoIosArrowForward />
          </p>
        </Link>
      </div>
      <div className="Position">
        <div>
          <img src={Images.speaker} alt="speaker" />
        </div>
        <h4>SPEAKERS</h4>
        <Link to="/speakers">
          <p>
            <span>SHOP</span> <IoIosArrowForward />
          </p>
        </Link>
      </div>
      <div className="Position">
        <div>
          <img src={Images.earphone} alt="earphone" />
        </div>
        <h4>EARPHONES</h4>
        <Link to="/earphones">
          <p>
            <span>SHOP</span> <IoIosArrowForward />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ShopBanner;
