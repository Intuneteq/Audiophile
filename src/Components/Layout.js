import React from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import { useStateContext } from "../context/StateContext";
import { IsLoading } from "../Constants";

const Layout = ({ children }) => {
  const { showCart, loading } = useStateContext();
  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <>
          <Navbar />
          {children}
          {showCart && <Cart />}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
