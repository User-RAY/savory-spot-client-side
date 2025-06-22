import React from 'react';
import Bannner from './Bannner';
import SwiperOnline from './SwiperOnline';
import About from './About';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>

            <SwiperOnline></SwiperOnline>

            <About></About>
        </div>
    );
};

export default Home;