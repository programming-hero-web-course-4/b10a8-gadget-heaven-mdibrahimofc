import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export const ShoppingCartContext = createContext(0);
export const AddCartContext = createContext([]);

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <ShoppingCartContext.Provider value={'b'}>
        <AddCartContext.Provider value={'a'}>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </AddCartContext.Provider>
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default Root;
