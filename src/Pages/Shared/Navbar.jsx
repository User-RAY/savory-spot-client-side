import React from 'react';

const Navbar = () => {



    const navItems = <>
                        <li><a>HOME</a></li>
                        <li><a>CONTACT US</a></li>
                        <li><a>DASHBOARD</a></li>
                        <li><a>OUR MENU</a></li>  
                        <li><a>OUR SHOP</a></li>  
                        <li><a>CART</a></li>                                                                        
                     </>






    return (
        <>

            <div className="navbar bg-black/[.3] fixed z-50 text-white  shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl flex flex-col items-start leading-none h-full tracking-wider">
                        <span className=''>Savory Spot</span> 
                        <span className='tracking-[0.12em]'>Restaurant</span> 
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="m-4">
                    <a className="btn">Button</a>
                </div>
            </div>
            
        </>
    );
};

export default Navbar;