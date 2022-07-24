import React from "react";
import { Link } from "react-router-dom";

import AudioAd from "../../Components/AudioAd/AudioAd";
import EarphoneBanner from "../../Components/EarphoneBanner/EarphoneBanner";
import ShopBanner from "../../Components/ShopBanner/ShopBanner";
import SpeakerBanner from "../../Components/SpeakerBanner/SpeakerBanner";
import { useStateContext } from "../../context/StateContext";
import { Images } from "../../Constants";

import "./Home.scss";

const Home = () => {
  const { headphones } = useStateContext();

  return (
    <div className="home">
      <div className="pro">
        {headphones
          .filter((headphone) =>
            headphone.name.includes("XX99 Mark II Headphones")
          )
          .map((filtered) => (
            <div className="home__section" key={filtered._id}>
              <div className="home__section-content">
                <h6>NEW PRODUCT</h6>
                <h1>{filtered.name}</h1>
                <p>
                  Experience natural, life like audio and exceptional
                  <br />
                  build quality made for the passionate music
                  <br /> enthusiast.
                </p>
                <Link
                  to={`/product-details/${filtered.slug.current}`}
                  state={filtered}
                >
                  <button>SEE PRODUCT</button>
                </Link>
              </div>
              <div className="home__section-image">
                <img src={Images.headphone1} alt="headphone" />
              </div>
            </div>
          ))}
      </div>
      <div className="margin">
        <ShopBanner />
      </div>
      <div>
        <SpeakerBanner />
      </div>
      <div className="margin">
        <EarphoneBanner />
      </div>
      <div className="margin">
        <AudioAd />
        <isLoading />
      </div>
    </div>
  );
};

export default Home;
