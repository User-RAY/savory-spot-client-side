import React from 'react';
import DishBanner from '../DishBanner/DishBanner';
import MenuItem from '../../Shared/MenuItem';
import { NavLink } from 'react-router-dom';

const CategorySection = ({title='desserts', about='', menuItems=[], banner=true, imge='' }) => {
    return (
        <div className='my-12'>
            {/* conditional */}
            {banner ? <DishBanner dish={title} info={about} img={imge}></DishBanner>  : <></>}
            


            <div className='grid grid-cols-2 gap-8 w-3/4 mx-auto mt-28'>
                {
                    menuItems.map(data => <MenuItem key={data._id} item={data}></MenuItem>)
                }
            </div>

            <div className='flex justify-center items-center my-12'>
                <NavLink to={`/shop`} state={{ tabIndex: title}} className="font-[600] border-0 border-b-2 border-black text-black rounded-b-md px-4 py-2 uppercase">Order your favourite food</NavLink>
            </div>
            
        </div>
    );
};

export default CategorySection;