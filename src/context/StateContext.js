import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);
  const [earphones, setEarphones] = useState([]);
  const [headphones, setHeadphones] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [grandTotal, setGrandTotal] = useState(50);

  let foundProduct;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => product._id === item._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);
    setGrandTotal((prevGrandTotal) => prevGrandTotal + product.price * quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
          return cartProduct
        });
        setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart`);
  };


  const onRemove = () => {
    setCartItems([]);
    setTotalQty(0);
    setTotalPrice(0);
  }

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    const index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      newCartItems.splice(index, 0, { ...foundProduct, quantity: foundProduct.quantity + 1 });
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQty((prevTotalQty) => prevTotalQty + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        newCartItems.splice(index, 0, { ...foundProduct, quantity: foundProduct.quantity - 1 });
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQty((prevTotalQty) => prevTotalQty - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      else return prevQty - 1;
    });
  };

  


  useEffect(() => {
    const earphoneQuery = '*[_type == "earphone"]';
    const headphoneQuery = '*[_type == "headphone"]';
    const speakerQuery = '*[_type == "speaker"]';

    client.fetch(earphoneQuery).then((earphoneData) => {
      setEarphones(earphoneData);
    });

    client.fetch(headphoneQuery).then((headphoneData) => {
      setHeadphones(headphoneData);
    });

    client.fetch(speakerQuery).then((speakerData) => {
      setSpeakers(speakerData);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        earphones,
        headphones,
        speakers,
        qty,
        showCart,
        setShowCart,
        totalQty,
        totalPrice,
        cartItems,
        incQty,
        decQty,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
        grandTotal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
