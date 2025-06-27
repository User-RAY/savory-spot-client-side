import React from 'react';
import PageBanner from '../Shared/PageBanner';
import SectionTitle from '../Shared/SectionTitle';

const Contact = () => {
    return (
        <div className='min-h-[80vh]'>

            <PageBanner title='Contact us' des='Would you like to try our dish?' img='/banner.jpg'></PageBanner>

            <SectionTitle heading={'our location'} subheading={'Visit Us'}></SectionTitle>

            <div className='grid grid-cols-3 gap-4 text-black w-[60%] mx-auto mb-16'>

                <div className='border border-gray-300'>
                    <h1 className='bg-[#D1A054] text-center py-4'>Phone</h1>
                    <div className='bg-gray-200 w-[80%] mx-auto text-center px-12 pb-12 pt-8'>
                        <h1 className='uppercase mb-2'>phone</h1>
                        <h3>+38 (012) 34 56 789</h3>
                    </div>
                </div>

                <div className='border border-gray-300'>
                    <h1 className='bg-[#D1A054] text-center py-4'>Address</h1>
                    <div className='bg-gray-200 w-[80%] mx-auto text-center px-12 pb-12 pt-8'>
                        <h1 className='uppercase mb-2'>Address</h1>
                        <h3>+38 (012) 34 56 789</h3>
                    </div>
                </div>

                <div className='border border-gray-300'>
                    <h1 className='bg-[#D1A054] text-center py-4'>Working hours</h1>
                    <div className='bg-gray-200 w-[80%] mx-auto text-center px-12 pb-12 pt-8'>
                        <h1 className='uppercase mb-2'>Working hours</h1>
                        <h3>+38 (012) 34 56 789</h3>
                    </div>
                </div>

            </div>


            <SectionTitle heading={'contact form'} subheading={'Send Us a Messsage'}></SectionTitle>
            
        </div>
    );
};

export default Contact;