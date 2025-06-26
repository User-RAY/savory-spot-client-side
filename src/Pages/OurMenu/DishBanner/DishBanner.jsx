import React from 'react';

const DishBanner = ({dish='dish', info='Discover bold flavors and unforgettable dishes at Savory Spot — where every bite tells a story. From sizzling starters to signature mains, we bring comfort food with a gourmet twist. Dine in, take out, or enjoy delivery fresh to your door.'}) => {
    return (
        <div className='bg-[url("/chef-service.jpg")]  bg-no-repeat p-28 '>

            <div className='text-white px-16 py-20 text-center bg-black/[.5]   md:w-[65%] mx-auto'>
                <h1 className='text-4xl mb-4'>{dish}</h1>
                <p>{info}</p>
            </div>

        </div>
    );
};

export default DishBanner;