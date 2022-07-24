import React from "react";

import Product from "../Components/Product/Product";
import { useStateContext } from "../context/StateContext";

const Headphones = () => {
  const { headphones } = useStateContext();

  return (
    <div>
      <div className="pro">
        <div className="Product-header">
          <h1>HEADPHONE</h1>
        </div>
      </div>
      <div>
        <Product data={headphones} />
      </div>
    </div>
  );
};

export default Headphones;
