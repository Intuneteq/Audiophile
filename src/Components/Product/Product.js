import React from "react";
import { Link } from "react-router-dom";

import "./Product.scss";
import { urlFor } from "../../lib/client";
import AudioAd from "../AudioAd/AudioAd";
import ShopBanner from "../ShopBanner/ShopBanner";

const Product = ({ data }) => {
  return (
    <div className="Product">
      <div>
        {data.map((item) => (
          <div key={item._id} className="feature">
            <div className="feature-img">
              <img src={urlFor(item.image && item.image[0])} alt="headphone" />
            </div>
            <div className="feature-content">
              <h6>NEW PRODUCT</h6>
              <h1>{item.name}</h1>
              <p>{item.detail}</p>
              <Link to={`/product-details/${item.slug.current}`} state={item}>
                <button>SEE PRODUCT</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ShopBanner />
      </div>
      <div className="margin">
        <AudioAd />
      </div>
    </div>
  );
};

export default Product;
