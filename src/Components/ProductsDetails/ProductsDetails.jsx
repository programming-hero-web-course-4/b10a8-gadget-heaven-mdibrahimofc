import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiLoveMystery } from "react-icons/gi";
import { addToCartList, addToStoredWishList } from "../Utility/AddToDB";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
const ProductsDetails = () => {
  const AllData = useLoaderData();
  const productId = useParams().productsId;
  const product = AllData.find((product) => product.product_id === productId);
  const [isDisabled, setIsdisabled] = useState(false)
  const {
    product_id,
    product_image,
    product_title,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;
  // const ratings = {
  //   size: 30,
  //   value: {rating},
  //   edit: false
  // };
  return (
    <div className="relative">
      <Helmet>
        <title>Gadget Heaven - Product Details</title>
        <meta name="description" content="This is the details page of my React app." />
      </Helmet>
      <div className="my-8 text-center bg-[#9538E2] pb-[235px] ">
        <h2 className="font-bold text-3xl ">Product Details</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>
      {/* products details start */}

      <div className="shadow-md flex p-8 justify-around max-w-[1280px] mx-auto relative  bg-white rounded-3xl bottom-60">
        <div>
          <img src={product_image} className="w-[450px] bg-slate-50 p-4 rounded-2xl" alt={product_title} />
        </div>
        <div>
          <h2 className="card-title">{product_title}</h2>
          <p className="font-semibold my-3 text-xl"> Price: ${price} </p>
          <button className="btn rounded-full">{availability ? 'In Stock' : 'Out of stock'}</button>
          <p className="my-4">{description}</p>
          <h2 className="font-bold text-xl">Specification</h2>
          <ol className="my-3">
            {specification.map((sp, id) => (
              <li key={id} > {sp} </li>
            ))}
          </ol>
          <h2 className="font-semibold flex items-center">
            {" "}
            Ratings <FaRegStar />{" "}
          </h2>
          <div className="flex items-center gap-6">
          <ReactStars size={30} value={ rating } edit={false} />
          <p className="p-2 bg-gray-300 rounded-xl"> {rating} </p>
          </div>
          <div className="flex gap-8">
            <button className="btn bg-[#9538E2]" onClick={()=> addToCartList(product_id)} > Add To Card <AiOutlineShoppingCart className="text-xl" />  </button>
            <ToastContainer />
            <button className="btn" disabled = {isDisabled} onClick={()=> {
              addToStoredWishList(product_id)
              setIsdisabled(true)
              } } > <GiLoveMystery className="text-xl" />  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
