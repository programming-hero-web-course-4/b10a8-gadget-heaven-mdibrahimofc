import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export const ShoppingCartContext = createContext(0);
export const AddCartContext = createContext([]);

const Root = () => {
  const [cartItem, setCartItem] = useState(['mobile']);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <ShoppingCartContext.Provider value={[cartCount, setCartCount]}>
        <AddCartContext.Provider value={[cartItem, setCartItem]}>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </AddCartContext.Provider>
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default Root;
