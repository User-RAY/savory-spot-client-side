import React from 'react';
import DishBanner from '../DishBanner/DishBanner';
import MenuItem from '../../Shared/MenuItem';

const CategorySection = () => {
    return (
        <div>
            {/* conditional */}
            <DishBanner></DishBanner> 


            <MenuItem></MenuItem>
            
        </div>
    );
};

export default CategorySection;