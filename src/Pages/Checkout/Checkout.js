import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from 'react-paystack';

import { Images } from "../../Constants";
import "./Checkout.scss";
import { urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, grandTotal } = useStateContext();
  const [onDelivery, setOnDelivery] = useState(false);
  const [eMoney, setEMoney] = useState(false);
  const [payStack, setPayStack] = useState(false);

  const publicKey = "pk_test_bbba1a1911f3c31b9aa724a268504cd10e139815";
  // const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  let amount = grandTotal * 1000

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "PAY WITH PAYSTACK",
    onSuccess: () => {
      setName("")
      setEmail("")
      setPhone("")
      alert("Thanks for doing business with us! Come back soon!!")
      navigate('/')
    },
    onClose: () => alert("Wait! Don't leave :("),
  }

  console.log(grandTotal, 'grand');
  console.log('amount', amount);

  const handleEMoney = () => {
    setEMoney(true);
    setOnDelivery(false);
    setPayStack(false);
  };

  const handleDelivery = () => {
    setOnDelivery(true);
    setEMoney(false);
    setPayStack(false);
  };

  const handlePayStack = (e) => {
    setPayStack(true);
    setOnDelivery(false);
    setEMoney(false);
  };
  return (
    <div className="checkout">
      <div className="detail__back">
        <button type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className="items">
        <form action="submit">
          <h1>CHECKOUT</h1>
          <div className="checkout__form">
            <div className="checkout__form-sec">
              <h6>Billing Details</h6>
              <div className="form-dist">
                <div className="control">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="control">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="alexei@mail.com"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="control">
                <label>Phone Number</label>
                <input
                  type="phone Number"
                  placeholder="+1 202-555-0136"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="checkout__form-sec">
              <h6>SHIPPING INFO</h6>
              <div className="control" id="address">
                <label>Address</label>
                <input type="address" placeholder="1137 Williams Avenue" />
              </div>
              <div className="form-dist">
                <div className="control">
                  <label>Zip Code</label>
                  <input type="number" placeholder="1001" />
                </div>
                <div className="control">
                  <label>City</label>
                  <input type="text" placeholder="New York" />
                </div>
              </div>
              <div className="control">
                <label>Country</label>
                <input type="text" placeholder="United States" />
              </div>
            </div>
            <div className="checkout__form-sec" id="form-sec">
              <h6>PAYMENT DETAILS</h6>
              <div className="form-radio">
                <p id="payment-detail">Payment Method</p>
                <div className="control">
                  <div className="radio">
                    <input
                      type="radio"
                      name="payment"
                      onChange={handleEMoney}
                    />
                    <label>e-Money</label>
                  </div>
                  <div className="radio">
                    <input
                      type="radio"
                      name="payment"
                      onChange={handlePayStack}
                    />
                    <label>Pay with Paystack</label>
                  </div>
                  <div className="radio">
                    <input
                      type="radio"
                      name="payment"
                      onChange={handleDelivery}
                    />
                    <label>Cash on Delivery</label>
                  </div>
                  
                </div>
              </div>
              {eMoney && (
                <div className="form-dist">
                  <div className="control">
                    <label>e-Money Number</label>
                    <input type="number" placeholder="238521993" />
                  </div>
                  <div className="control">
                    <label>e-Money PIN</label>
                    <input type="number" placeholder="6891" />
                  </div>
                </div>
              )}
              {onDelivery && (
                <div className="delivery">
                  <div>
                    <img src={Images.shape} alt="shape" />
                  </div>
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
        <div className="checkout__summary">
          <h3>SUMMARY</h3>
          <div>
            <div className="checkout__summary-content">
              {cartItems.map((item, index) => (
                <div key={index}>
                  <div className="content-container">
                    <div className="container-item">
                      <div className="content-img">
                        <img src={urlFor(item?.image[0])} alt="img" />
                      </div>
                      <div className="content-info">
                        <h6>{item.name.slice(0, 5)}</h6>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <p>x{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout__summary-pay">
              <div>
                <p>TOTAL</p>
                <span>${totalPrice}</span>
              </div>
              <div>
                <p>SHIPPING</p>
                <span>$50</span>
              </div>
              <div>
                <p>VAT (INCLUDED)</p>
                <span>0</span>
              </div>
            </div>
            <div className="summary-total">
              <p>GRAND TOTAL</p>
              <span>${grandTotal}</span>
            </div>
            <div className="summary-button">
                {payStack ? (
                  <PaystackButton {...componentProps} />
                ) : (
                  <button type="button">CONTINUE & PAY</button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
