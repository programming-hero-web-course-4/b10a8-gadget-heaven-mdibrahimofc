import React from "react";
import Carts from "../Carts/Carts";

const Dashboard = () => {
  return (
    <div>
      <div className="my-8 text-center bg-[#9538E2] py-8  ">
        <h2 className="font-bold text-3xl ">Dashboard</h2>
        <p className="mt-4 mb-8">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to 
        <br /> the coolest accessories, we have it all!
        </p>
        <div>
            <button className="btn px-16 rounded-full text-[#9538E2] text-xl font-bold bg-white">Cart</button>
            <button className="btn px-16 rounded-full text-white text-xl font-bold bg-transparent ml-6">Wishlist</button>
        </div>
      </div>
      <div>
        <Carts></Carts>
      </div>
    </div>
  );
};

export default Dashboard;
