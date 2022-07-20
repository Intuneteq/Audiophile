import React from "react";
import { Link } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";
import { Images } from "../../Constants";
import "./SpeakerBanner.scss";

const SpeakerBanner = () => {
  const { speakers } = useStateContext();

  return (
    <div className="speaker">
      <div className="speaker__sec1">
        <div className="speaker__sec1-img">
          <img src={Images.speakerbanner} alt="speaker" />
        </div>
        <div className="speaker__sec1-content">
          <h1>
            ZX9
            <br />
            SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are
            <br />
            phenomenally built to deliver truly
            <br />
            remarkable sound.
          </p>
          {speakers.filter((speaker)=>speaker.name.includes('ZX9 SPEAKER')).map((filtered)=>(
          <Link to={`/product-details/${filtered.slug.current}`} state={filtered} key={filtered._id}>
            <button>SEE PRODUCT</button>
          </Link>
          ))}
        </div>
      </div>
      <div className="speaker__sec2">
        <div className="speaker__sec2-img">
          <picture>
          <source media="(max-width: 550px)" srcSet={Images.speakermobile} />
          <source media="(max-width: 900px )" srcSet={Images.speakertab} />
          <img src={Images.bitspeaker} alt="bitspeaker" />
          </picture>
        </div>
        <div className="speaker__sec2-content">
          <h3>ZX7 SPEAKER</h3>
          {speakers.filter((speaker)=>speaker.name.includes('ZX7 SPEAKER')).map((filtered)=>(
          <Link to={`/product-details/${filtered.slug.current}`} state={filtered} key={filtered._id}>
            <button>SEE PRODUCT</button>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerBanner;
