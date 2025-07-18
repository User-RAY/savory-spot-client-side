// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiperStyle.css';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../Shared/SectionTitle';



const SwiperOnline = () => {
    return (
        <div className='w-3/4 md:w-3/5 mx-auto my-16'>

            <SectionTitle heading={'ORDER ONLINE'} subheading={'From 11:00am to 10:00pm'}></SectionTitle>

            <Swiper

                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    },
                    640: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                    1440: {
                    slidesPerView: 4,
                    },
                }}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <img src={slide1} style={{'min-height': '-webkit-fill-available'}} alt="" />  
                    <h3 className='uppercase absolute bottom-2 text-xl'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={slide2} style={{'min-height': '-webkit-fill-available'}} alt="" /> 
                    <h3 className='uppercase absolute bottom-2 text-xl'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} style={{'min-height': '-webkit-fill-available'}} alt="" />
                    <h3 className='uppercase absolute bottom-2 text-xl'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} style={{'min-height': '-webkit-fill-available'}} alt="" />
                    <h3 className='uppercase absolute bottom-2 text-xl'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} style={{'min-height': '-webkit-fill-available'}} alt="" />
                    <h3 className='uppercase absolute bottom-2 text-xl'>vegetables</h3>
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default SwiperOnline;