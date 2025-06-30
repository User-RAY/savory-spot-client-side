import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {

    const location = useLocation();

    const check = location.pathname.includes('login') || location.pathname.includes('register')    

    return (
        <div className='bg-white'>
            {check || <Navbar></Navbar>} 
            <Outlet></Outlet>
            {check || <Footer></Footer>} 
        </div>
    );
};

export default Main;