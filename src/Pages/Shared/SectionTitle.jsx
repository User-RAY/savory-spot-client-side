import React from 'react';

const SectionTitle = ({heading, subheading, color='black', border='E8E8E8'}) => {
    return (
        <div className={`text-${color} text-center`}>

            <p className='text-orange-300 tracking-widest font-medium'>---{subheading}---</p>
            <h3 className={`text-4xl border-y-4 w-1/3 mx-auto mt-2 mb-10 py-4 uppercase border-[#${border}]`}>{heading}</h3>


        </div>
    );
};

export default SectionTitle;