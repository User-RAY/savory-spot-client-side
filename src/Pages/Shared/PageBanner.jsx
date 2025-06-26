import React from 'react';

const PageBanner = ({title='', des=''}) => {
    return (
        <div className='mb-24'>
            <div className='bg-[url("/banner3.jpg")] bg-cover bg-no-repeat bg-center p-32'>
                <div className='bg-black/[.5] text-center w-[85%] mx-auto py-28 mt-12'>
                    <h1 className='text-7xl uppercase my-6'>{title}</h1>
                    <h3 className='text-xl uppercase'>{des}</h3>
                </div>
            
            </div>
        </div>
    );
};

export default PageBanner;