import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import MenuItem from '../Shared/MenuItem';

const Menu = () => {

    const [menudata, setMenudata] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(d => d.category === 'popular')
            setMenudata(popular)
        });
    }, [])

    console.log(menudata);
    


    return (
        <div className='my-24 w-2/3 mx-auto'>

            <SectionTitle heading={'from our menu'} subheading={'Check it out'}></SectionTitle>

            <div className='grid grid-cols-2 gap-8'>
                {
                    menudata.map(data => <MenuItem key={data._id} item={data}></MenuItem> )
                }
            </div>

            <div className='flex justify-center items-center'>
                <button className='text-black text-center mx-auto uppercase mt-12 border-b-2 border-black rounded-md pb-2 px-4'>View Full Menu</button>
            </div>

            
        </div>
    );
};

export default Menu;