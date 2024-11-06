import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiLoveMystery } from "react-icons/gi";
import { getAddCartLIst } from '../Utility/AddToDB';

const NavBar = () => {
    let count = getAddCartLIst().length;
    const location = useLocation().pathname
    return (
        <div className={`py-6 mx-8 mt-3 ${ location === '/' ? 'bg-[#9538E2]' : 'bg-white' }`} >
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
                    <button className='relative'><AiOutlineShoppingCart className='text-4xl' /> <p className='absolute font-semibold -top-6 -right-1'> {count} </p> </button>
                    <button><NavLink to='/wishlist'><GiLoveMystery /></NavLink></button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
