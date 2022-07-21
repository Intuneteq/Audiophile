import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import "./Navbar.scss";
import { Images } from "../../Constants";
import { useStateContext } from '../../context/StateContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { showCart, setShowCart } = useStateContext();

  const handleCart = () => {
    if(!showCart){
      setShowCart(true)
    } else {
      setShowCart(false);
    } 
  }

  return (
    <nav>
      <div className="nav__item">
        <div className="nav__item-menu">
          <AiOutlineMenu onClick={() => setToggle(true)} />
          {toggle && (
            <div>
              <AiOutlineClose onClick={() => setToggle(false)} />
              <ul>
                <li>
                  <Link to ='/' onClick={() => setToggle(false)} >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/headphones" onClick={() => setToggle(false)} >
                     headphones
                  </Link>
                </li>
                <li>
                  <Link to='/speakers' onClick={() => setToggle(false)} >
                    speakers
                  </Link>
                </li>
                <li>
                  <Link to="earphones" onClick={() => setToggle(false)} >
                  earphones
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="nav__item-logo">
          <img src={Images.audiophile} alt="logo" />
        </div>
        <ul className="nav__item-links app__flex">
        <li>
                  <Link to ='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/headphones">
                     headphones
                  </Link>
                </li>
                <li>
                  <Link to='/speakers'>
                    speakers
                  </Link>
                </li>
                <li>
                  <Link to="/earphones">
                  earphones
                  </Link>
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
