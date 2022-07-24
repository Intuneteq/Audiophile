import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../../context/StateContext";
import AudioAd from "../../Components/AudioAd/AudioAd";
import ShopBanner from "../../Components/ShopBanner/ShopBanner";
import { urlFor } from "../../lib/client";
import "./ProductDetails.scss";
import MayLike from "../../Components/MayLike/MayLike";
import { IsLoading } from "../../Constants";

const ProductDetails = () => {
  const {
    incQty,
    decQty,
    qty,
    onAdd,
    earphones,
    speakers,
    headphones,
    Loading,
  } = useStateContext();
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();

  return (
    <>
      {Loading ? (
        <IsLoading />
      ) : (
        <div>
          <div className="detail">
            <div className="detail__back">
              <button type="button" onClick={() => navigate(-1)}>
                Go back
              </button>
            </div>
            <div className="detail__content">
              <div className="detail__content-img">
                <img src={urlFor(item?.image[0])} alt="img1" />
              </div>
              <div className="detail__content-deets">
                <h6>NEW PRODUCT</h6>
                <h1>{item.name}</h1>
                <p>{item.detail}</p>
                <span>${item.price}</span>
                <div className="deets-buttons">
                  <div className="cart-btn">
                    <AiOutlineMinus onClick={decQty} />
                    <span>{qty}</span>
                    <AiOutlinePlus onClick={incQty} />
                  </div>
                  <button onClick={() => onAdd(item, qty)}>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className="detail__feets">
              <div className="detail__feets-features">
                <h2>FEATURES</h2>
                <p>{item.feature1}</p>
                <p>{item.feature2}</p>
              </div>
              <div className="detail__feets-box">
                <h2>IN THE BOX</h2>
                <ul>
                  {item.box.map((boxItem, index) => (
                    <li key={index}>{boxItem}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detail__img">
              <div className="detail__img-image1">
                <div>
                  <img src={urlFor(item?.image[1])} alt="img2" />
                </div>
                <div>
                  <img src={urlFor(item?.image[2])} alt="img3" />
                </div>
              </div>
              <div className="detail__img-image2">
                <img src={urlFor(item?.image[3])} alt="img 4" />
              </div>
            </div>
            <div className="detail__like">
              <h1>You may also like</h1>
              <div className="detail__like-content">
                <div>
                  {speakers
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 1)
                    .map((data) => (
                      <MayLike data={data} key={data._id} />
                    ))}
                </div>
                <div>
                  {earphones
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 1)
                    .map((data) => (
                      <MayLike data={data} key={data._id} />
                    ))}
                </div>
                <div>
                  {headphones
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 1)
                    .map((data) => (
                      <MayLike data={data} key={data._id} />
                    ))}
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <ShopBanner />
          </div>
          <div className="margin">
            <AudioAd />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
