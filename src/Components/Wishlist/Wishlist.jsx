import React, { useEffect, useState } from 'react';
import { getStoredWishList } from '../Utility/AddToDB';
import { useLoaderData } from 'react-router-dom';
import WishProduct from '../WishProduct/WishProduct';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])
    const AllWishList = getStoredWishList()
    const AllProducts = useLoaderData()
    useEffect( () => {
        const WishlistProducts = AllProducts.filter((cart) =>
            AllWishList.includes(cart.product_id)
          );
          setWishlist(WishlistProducts);
          console.log(wishlist);
    } ,[])
    return (
        <div className="mx-[160px] my-12">
            <div>
                <h2 className='font-bold text-2xl'>WishList</h2>
            </div>
            <div>
                {
                    wishlist.map((wishlist, id) => <WishProduct wishlist={wishlist} key={id} ></WishProduct>)
                }
            </div>
        </div>
    );
};

export default Wishlist;