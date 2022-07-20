import React, { useRef } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShopping,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import "./Cart.scss";

const Cart = () => {
  const { toggleCartItemQuantity, totalQty, cartItems, totalPrice, setShowCart, onRemove } =
    useStateContext();
  const cartRef = useRef();
  return (
    <div className="cart">
      <div className="cart-modal" ref={cartRef}>
        <div className="cart-top">
          <h3>
            CART <span>({totalQty})</span>
          </h3>
          {cartItems.length >= 1 && <button type="button" onClick={onRemove}>Remove all</button>}
        </div>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>YOUR SHOPPING CART IS EMPTY</h3>
            <Link to="/">
              <button type="button" onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item, index) => (
            <div key={index}>
              <div className="cart__items">
                <div className="cart__items-img app__flex">
                  <img src={urlFor(item?.image[0])} alt="img" />
                </div>
                <div className="cart__items-content">
                  <h6>{item.name}</h6>
                  <p>${item.price}</p>
                </div>
                <div className="cart-count">
                  <AiOutlineMinus onClick={()=>toggleCartItemQuantity(item._id, 'dec')} />
                  <p>{item.quantity}</p>
                  <AiOutlinePlus onClick={()=>toggleCartItemQuantity(item._id, 'inc')} />
                </div>
              </div>
            </div>
          ))}
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="cart-total">
              <p>TOTAL</p>
              <span>${totalPrice}</span>
            </div>
            <div className="cart-button">
              <Link to='/checkout'>
                <button type="button">CHECKOUT</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
