import React from "react";

import Product from "../Components/Product/Product";
import { useStateContext } from "../context/StateContext";

const Speakers = () => {
  const { speakers } = useStateContext();

  return (
    <div>
      <div className="pro">
        <div className="Product-header">
          <h1>SPEAKERS</h1>
        </div>
      </div>
      <div>
        <Product data={speakers} />
      </div>
    </div>
  );
};

export default Speakers;
