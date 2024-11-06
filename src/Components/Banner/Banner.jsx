import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-[#9538E2] relative">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-7xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6 text-xl text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to 
          <br /> the coolest accessories, we have it all!
          </p>
          <Link to='/dashboard'><button className="btn rounded-full mb-56 ">Shop Now</button></Link>
        </div>
      </div>

      <div className="relative -bottom-[370px]">
      <HeroImage></HeroImage>
      </div>
    </div>
  );
};

export default Banner;
