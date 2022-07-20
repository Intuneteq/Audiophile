import React from "react";
import { Link } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";
import { Images } from "../../Constants";
import "./EarphoneBanner.scss";

const EarphoneBanner = () => {
  const { earphones } = useStateContext();

  return (
    <div className="banne">
      <div className="banner-img">
        <img src={Images.ear} alt="ear" />
      </div>
      <div className="banner-content">
        <h1>YX1 EARPHONES</h1>
        {earphones.filter((earphone)=>earphone.name.includes('YX1 WIRELESS EARPHONES')).map((filtered)=>(
          <Link to={`/product-details/${filtered.slug.current}`} state={filtered} key={filtered._id}>
            <button>SEE PRODUCT</button>
          </Link>
          ))}
      </div>
    </div>
  );
};

export default EarphoneBanner;
