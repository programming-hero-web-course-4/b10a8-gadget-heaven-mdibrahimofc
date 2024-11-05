import React, { useState } from "react";
import Carts from "../Carts/Carts";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
  const [toogle, setToggle] = useState('cart')
  return (
    <div>
      <div className="my-8 text-center bg-[#9538E2] py-8  ">
        <h2 className="font-bold text-3xl ">Dashboard</h2>
        <p className="mt-4 mb-8">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to 
        <br /> the coolest accessories, we have it all!
        </p>
        <div>
            <button onClick={() => setToggle('cart')} className="btn px-16 rounded-full text-[#9538E2] text-xl font-bold bg-white">Cart</button>
            <button onClick={() => setToggle('wishlist')} className="btn px-16 rounded-full text-white text-xl font-bold bg-transparent ml-6">Wishlist</button>
        </div>
      </div>
      <div>
        {
          toogle === 'cart' ? <Carts></Carts> : <Wishlist></Wishlist>
        }
      </div>
    </div>
  );
};

export default Dashboard;
