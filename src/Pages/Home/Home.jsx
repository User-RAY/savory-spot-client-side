import React from 'react';
import Bannner from './Bannner';
import SwiperOnline from './SwiperOnline';
import About from './About';
import Menu from './Menu';
import Recommend from './Recommend';
import Feature from './Feature';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>

            <SwiperOnline></SwiperOnline>

            <About></About>

            <Menu></Menu>

            <Recommend></Recommend>

            <Feature></Feature>

            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;