import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiLoveMystery } from "react-icons/gi";
import { getStoredReadList } from '../Utility/AddToDB';

const NavBar = () => {
    let count = getStoredReadList().length;
    return (
        <div className='py-6 my-4'>
            <nav className='flex justify-around'>
                <div>
                    <button className='font-bold text-3xl'>
                        <NavLink to='/'>Gadget Heaven</NavLink>
                    </button>
                </div>
                <div className='space-x-4 text-xl'>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white p-2 rounded' : 'p-2'}>
                        Home
                    </NavLink>
                    <NavLink 
                        to='/statistics' 
                        className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white p-2 rounded' : 'p-2'}>
                        Statistics
                    </NavLink>
                    <NavLink 
                        to='/dashboard' 
                        className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white p-2 rounded' : 'p-2'}>
                        Dashboard
                    </NavLink>
                </div>
                <div className='space-x-4 text-2xl'>
                    <button><AiOutlineShoppingCart /></button>
                    <button><NavLink to='/wishlist'><GiLoveMystery /></NavLink></button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
