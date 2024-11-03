import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiLoveMystery } from "react-icons/gi";

const NavBar = () => {
    return (
        <div className='py-6 my-4'>
            <nav className='flex justify-around'>
                <div>
                    <button className='font-bold text-3xl'> <NavLink> Gadget Heaven </NavLink> </button>
                </div>
                <div className='space-x-4 text-xl'>
                    <button> <NavLink to='/'>Home</NavLink> </button>
                    <button> <NavLink to='/'>Statistics</NavLink> </button>
                    <button> <NavLink to='/'>Dashboard</NavLink> </button>
                </div>
                <div className='space-x-4 text-2xl'>
                    <button> <NavLink to='/'><AiOutlineShoppingCart /></NavLink> </button>
                    <button> <NavLink to='/'><GiLoveMystery /></NavLink> </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;