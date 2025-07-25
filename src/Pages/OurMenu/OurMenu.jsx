import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import CategorySection from './CategorySection/CategorySection';
import useMenu from '../../hooks/useMenu';
import PageBanner from '../Shared/PageBanner';

const OurMenu = () => {

    const [menudata] = useMenu();

    const desserts = menudata.filter(d => d.category === 'dessert');
    const pizza = menudata.filter(d => d.category === 'pizza');
    const salad = menudata.filter(d => d.category === 'salad');        
    const soup = menudata.filter(d => d.category === 'soup');
    const offered = menudata.filter(d => d.category === 'offered');    

    window.scrollTo(0, 20);

    return (
        <div className=''>

            <PageBanner title='Our Menu' des='Would you like to try our dish?' img='/banner3.jpg'></PageBanner>

            <SectionTitle heading={"today's offer"} subheading={"Don't Miss"}></SectionTitle>

            <CategorySection menuItems={offered} banner={false}></CategorySection>

            <CategorySection title='desserts' about='Sweet treats to end your meal on a high note, from cakes to pastries.' menuItems={desserts} imge='/dessert-bg.jpeg'></CategorySection>

            <CategorySection title='pizza' about='Freshly baked pizzas with a variety of toppings, from classic Margherita to spicy pepperoni.' menuItems={pizza} imge='/pizza-bg.jpg'></CategorySection>

            <CategorySection title='salad' about='Fresh, healthy, and delicious salads made with crisp veggies and flavorful dressings.' menuItems={salad} imge='/salad-bg.jpg'></CategorySection>

            <CategorySection title='soup' about='Warm and comforting soups perfect for any time of the year.' menuItems={soup} imge='/soup-bg.jpg'></CategorySection>

            
        </div>
    );
};

export default OurMenu;