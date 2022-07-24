import React from "react";

import { useStateContext } from "../context/StateContext";
import Product from "../Components/Product/Product";
import { IsLoading } from "../Constants";

const Earphones = () => {
  const { earphones, Loading } = useStateContext();

  return (
    <>
      {Loading ? (
        <IsLoading />
      ) : (
        <div>
          <div className="pro">
            <div className="Product-header">
              <h1>EARPHONE</h1>
            </div>
          </div>
          <div>
            <Product data={earphones} />
          </div>
        </div>
      )}
    </>
  );
};

export default Earphones;
