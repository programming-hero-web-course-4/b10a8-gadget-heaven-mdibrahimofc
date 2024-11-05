import React from 'react';
import { getStoredReadList } from '../Utility/AddToDB';

const Carts = () => {
    const storecart = getStoredReadList()
    console.log(storecart);
    return (
        <div className='mx-[160px] my-12'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold'>Cart</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                    <h2 className='text-2xl font-bold'>Total cost: 999.99</h2>
                    <button className='btn outline outline-2 outline-[#9538E2]'>Sort by price</button>
                    <button className='btn  bg-[#9538E2]'>Purchase</button>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Carts;