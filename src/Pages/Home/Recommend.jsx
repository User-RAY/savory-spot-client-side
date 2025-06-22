import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Card from '../Shared/Card';

import saladpic from '/salad-bg.jpg'

const Recommend = () => {
    return (
        <div className='w-3/4 mx-auto my-8'>
            <SectionTitle heading={'chef recommends'} subheading={'Should Try'}></SectionTitle>

            <div className='flex justify-center items-center gap-2'>
                <Card image={saladpic} title={'Caeser Salad'} ingredient={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
                <Card image={saladpic} title={'Caeser Salad'} ingredient={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>
                <Card image={saladpic} title={'Caeser Salad'} ingredient={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}></Card>                                
            </div>
                   
        </div>
    );
};

export default Recommend;