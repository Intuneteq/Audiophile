import React from "react";
import { Link } from "react-router-dom";

import "./MayLike.scss";
import { urlFor } from "../../lib/client";

const MayLike = ({ data }) => {

  return (
    <div className="like">
      <div className="like-img">
        <img src={urlFor(data.image[0])} alt="speaker" />
      </div>
      <h3>{data.name}</h3>
      <Link to={`/product-details/${data.slug.current}`} state={data}>
        <button>SEE PRODUCT</button>
      </Link>
    </div>
  );
};

export default MayLike;
