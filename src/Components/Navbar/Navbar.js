import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import "./Navbar.scss";
import { Images } from "../../Constants";
import { useStateContext } from "../../context/StateContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { showCart, setShowCart } = useStateContext();

  const handleCart = () => {
    if (!showCart) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  const handleMenu = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <nav>
      <div className="nav__item">
        <div className="nav__item-menu">
          <AiOutlineMenu onClick={handleMenu} />
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: -10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="toggle-modal"
            >
              <div className="menu-container">
                <div className="Position spa">
                  <div>
                    <img src={Images.headphone} alt="headphone" />
                  </div>
                  <h4>HEADPHONES</h4>
                  <Link
                    onClick={handleCart}
                    to="/headphones"
                  >
                    <p>
                      <span>SHOP</span> <IoIosArrowForward />
                    </p>
                  </Link>
                </div>
                <div className="Position spa">
                  <div>
                    <img src={Images.speaker} alt="speaker" />
                  </div>
                  <h4>SPEAKERS</h4>
                  <Link
                    onClick={handleCart}
                    to="/speakers"
                  >
                    <p>
                      <span>SHOP</span> <IoIosArrowForward />
                    </p>
                  </Link>
                </div>
                <div className="Position spa">
                  <div>
                    <img src={Images.earphone} alt="earphone" />
                  </div>
                  <h4>EARPHONES</h4>
                  <Link
                    onClick={handleCart}
                    to="/earphones"
                  >
                    <p>
                      <span>SHOP</span> <IoIosArrowForward />
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div className="nav__item-logo">
          <img src={Images.audiophile} alt="logo" />
        </div>
        <ul className="nav__item-links app__flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/headphones">headphones</Link>
          </li>
          <li>
            <Link to="/speakers">speakers</Link>
          </li>
          <li>
            <Link to="/earphones">earphones</Link>
          </li>
        </ul>
        <div className="nav__cart">
          <AiOutlineShoppingCart onClick={handleCart} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
