import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {product_title, product_image, price, product_id} = product
    return (
        <div className='shadow-md p-6 text-center'>
            <img src={product_image} alt={product_title} className='w-[282px] object-contain h-[181px] mb-6' />
            <h2 className='font-bold text-xl'> {product_title} </h2>
            <p className='mb-2'> Price: {price}k </p>
            <Link to={`details/${product_id}`} ><button className='btn hover:bg-[#9538E2] outline-4 border-3 border-cyan-500 outline-cyan-500 text-cyan-500'>View Details</button>            </Link>
        </div>
    );
};

export default Product;