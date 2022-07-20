import React from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';
import { useStateContext } from '../context/StateContext';

const Layout = ({children}) => {
  const { showCart } = useStateContext();
  return (
    <>
        <Navbar />
        {children}
        {showCart && <Cart />}
        <Footer />
    </>
  )
}

export default Layout;