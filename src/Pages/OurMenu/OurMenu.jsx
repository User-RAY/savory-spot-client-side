import React from 'react';
import MenuBanner from './MenuBanner/MenuBanner';
import SectionTitle from '../Shared/SectionTitle';
import CategorySection from './CategorySection/CategorySection';

const OurMenu = () => {
    return (
        <div className='min-h-[90vh]'>

            <MenuBanner></MenuBanner>

            <SectionTitle heading={"today's offer"} subheading={"Don't Miss"}></SectionTitle>

            <CategorySection></CategorySection>
            
        </div>
    );
};

export default OurMenu;