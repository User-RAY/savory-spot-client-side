import React from 'react';
import Bannner from './Bannner';
import SwiperOnline from './SwiperOnline';
import About from './About';
import Menu from './Menu';
import Recommend from './Recommend';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>

            <SwiperOnline></SwiperOnline>

            <About></About>

            <Menu></Menu>

            <Recommend></Recommend>
        </div>
    );
};

export default Home;