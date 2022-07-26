import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";
import { Images } from "../../Constants";

import "./CheckOutModal.scss";

const CheckOutModal = () => {
  const { setShowCheckOutModal } = useStateContext();
  const navigate = useNavigate();

  const handleBackHome = () => {
    setShowCheckOutModal(false);
    navigate("/");
  };

  return (
    <div className="hide">
      <div className="modal-container">
        <div className="modal">
          <div>
            <BsCheckCircleFill />
          </div>
          <h1>THANK YOU FOR YOUR ORDER</h1>
          <p>You will recieve an email confirmation shortly</p>
          <div className="modal__cart app__flex">
            <div className="modal__cart-item">
              <div className="app__flex2 item-content">
                <div className="item-image app__flex">
                  <img src={Images.headphone1} alt="img" />
                </div>
                <div id="figure">
                  <h3>XX99 MK II</h3>
                  <p>$2,999</p>
                </div>
                <p>x1</p>
              </div>
              <p id="items">and 2 other item(s)</p>
            </div>
            <div className="modal__cart-total app__flex">
              <h3>GRAND TOTAL</h3>
              <p>$5,446</p>
            </div>
          </div>
          <div>
            <button id="btn" onClick={handleBackHome} type="button">
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
