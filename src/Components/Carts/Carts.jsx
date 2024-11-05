import React, { useEffect, useState } from "react";
import { getStoredReadList } from "../Utility/AddToDB";
import Cart from "../Cart/Cart";
import { useLoaderData, useNavigate } from "react-router-dom";

const Carts = () => {
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState(0);
  const navigate = useNavigate()
  const storecart = getStoredReadList();
  const AllData = useLoaderData();
  const handlePurchase = () => {
    localStorage.removeItem('cart');
        setCart([])
        navigate('/')
  }
  useEffect(() => {
    const CartProducts = AllData.filter((cart) =>
      storecart.includes(cart.product_id)
    );
    setCart(CartProducts);
  }, []);
  useEffect( () => {
    const TotalPrice = cart.reduce(
        (prev, curr) => prev + curr.price,
        0
      );
      setPrices(TotalPrice)
  } ,[prices, cart])
  const handleFilter = () => {
    const filterProducts = [...cart].sort((a, b) => b.price - a.price);
    setCart(filterProducts);
  };
  return (
    <div className="mx-[160px] my-12">
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">Cart</h2>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Total cost: {prices}</h2>
            <button
              className="btn outline outline-2 outline-[#9538E2]"
              onClick={handleFilter}
            >
              Sort by price
            </button>
            <button className="btn bg-[#9538E2]" onClick={() => document.getElementById("my_modal_1").showModal()} disabled={prices == 0}>
              Purchase
            </button>
          </div>
        </div>
        <div>
            {/* modal design is start here  */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div>
                <div className="flex justify-center my-6 items-center">
                    <img src="/assets/Group.png" alt="" />
                </div>
                <div className="text-center mb-4">
                    <h2 className="font-bold text-2xl mb-6">Payment Successfully</h2>
                    <p className="font-medium">Thanks for purchasing</p>
                    <p className="font-bold text-xl">Total: ${prices} </p>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={handlePurchase} >Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* modal design is end here  */}
        </div>
        <div>
          {cart.map((cart, id) => (
            <Cart key={id} cart={cart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carts;
