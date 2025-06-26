import React from 'react';

const DishBanner = ({dish='', info=''}) => {
    return (
        <div className='bg-[url("/chef-service.jpg")]  bg-no-repeat p-28 '>

            <div className='text-white px-16 py-20 text-center bg-black/[.5]   md:w-[65%] mx-auto'>
                <h1 className='text-4xl mb-4 uppercase'>{dish}</h1>
                <p>{info}</p>
            </div>

        </div>
    );
};

export default DishBanner;