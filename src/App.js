import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Layout from "./Components/Layout";
import Earphones from "./Pages/Earphones";
import Headphones from "./Pages/Headphones";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Speakers from "./Pages/Speakers";
import { Toaster } from "react-hot-toast";
import Error from "./Constants/Error/Error";
import CheckOutModal from "./Components/CheckOutModal/CheckOutModal";

function App() {
  return (
    <Layout className="App">
      <Toaster />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/checkout/success-redirect"
            element={<CheckOutModal />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
