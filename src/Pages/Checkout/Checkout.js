import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Checkout.scss";
import { Images } from "../../Constants";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="checkout">
      <div className="back" id="back">
        <Link to={() => navigate(-1)}>
          Go Back
        </Link>
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
                  <input type="text" placeholder="Alexei Ward" />
                </div>
                <div className="control">
                  <label>Email Address</label>
                  <input type="email" placeholder="alexei@mail.com" />
                </div>
              </div>
              <div className="control">
                <label>Phone Number</label>
                <input type="phone Number" placeholder="+1 202-555-0136" />
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
            <div className="checkout__form-sec">
              <h6>PAYMENT DETAILS</h6>
              <div className="form-radio">
                <p>Payment Method</p>
                <div className="control">
                  <div className="radio">
                    <input type="radio" name="payment" />
                    <label>e-Money</label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="payment" />
                    <label>Cash on Delivery</label>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </form>
        <div className="checkout__summary">
          <h3>SUMMARY</h3>
          <div>
            <div className="checkout__summary-content">
              <div className="ok">
                <div className="content-img">
                  <img src={Images.headphone1} alt="img" />
                </div>
                <div className="content-info">
                  <h6>XX99 MK II</h6>
                  <p>$2,999</p>
                </div>
              </div>
              <p>x1</p>
            </div>
            <div className="checkout__summary-pay">
              <div>
                <p>TOTAL</p>
                <span>$5,396</span>
              </div>
              <div>
                <p>SHIPPING</p>
                <span>$50</span>
              </div>
              <div>
                <p>VAT (INCLUDED)</p>
                <span>$1,079</span>
              </div>
            </div>
            <div className="summary-total">
              <p>GRAND TOTAL</p>
              <span>$5,446</span>
            </div>
            <div className="summary-button">
              <button>CONTINUE & PAY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
