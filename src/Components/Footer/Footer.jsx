import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center mt-24">
            <h2 className="text-4xl font-bold mb-2">Gadget Heaven</h2>
            <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
      <div className="w-4/5 mx-auto">
      <footer className="footer text-black p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="ml-10">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
