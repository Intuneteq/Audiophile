import React from "react";

import Product from "../Components/Product/Product";
import { IsLoading } from "../Constants";
import { useStateContext } from "../context/StateContext";

const Headphones = () => {
  const { headphones, Loading } = useStateContext();

  return (
    <>
      {Loading ? (
        <IsLoading />
      ) : (
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
      )}
    </>
  );
};

export default Headphones;
