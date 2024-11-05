import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import FilteredProducts from '../FilteredProducts/FilteredProducts';

const AllProducts = ({handleFilter, products}) => {
    console.log(products);
    return (
        <div className='mt-96 flex w-4/5 mx-auto'>
            <div className='flex-grow mr-6 shadow-md h-fit'>
                <FilteredProducts handleFilter={handleFilter} ></FilteredProducts>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product => <Product product={product} key={product.product_id}></Product>)
            }
            </div>
        </div>
    );
};

export default AllProducts;