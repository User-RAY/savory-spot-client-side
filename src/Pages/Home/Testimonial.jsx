import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import './testi.css'


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonial = () => {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviewData(data))
    },[])

    


    return (
        <div className='py-32 text-black bg-white'>
            <SectionTitle heading={'testimonials'} subheading={'Check it out'}></SectionTitle>

            <div className='w-[70%] mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ backgroundColor: 'white'}} >
                    {
                        reviewData.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center w-[70%] bg-white'>
                            <div className='w-1/4 mb-20'>
                                <Rating value={review.rating} readOnly={true} />
                            </div>
                            <h1 className='text-9xl leading-[0.5rem]'>‘‘</h1>
                            <p>{review.details}</p>
                            <h1 className='my-4 text-4xl'>{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                    }
                </Swiper>
            </div>
            
        </div>
    );
};

export default Testimonial;