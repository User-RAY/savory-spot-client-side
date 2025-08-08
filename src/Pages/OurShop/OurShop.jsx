import { useState } from 'react';
import PageBanner from '../Shared/PageBanner';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useMenu from '../../hooks/useMenu';

import Cards from '../Shared/Cards';
import { useLocation } from 'react-router-dom';

const OurShop = () => {

    window.scrollTo(0, 20);

    const categories = ['desserts', 'pizza', 'salad', 'soup', 'drinks'];


    const location = useLocation();

    const category = location.state?.tabIndex ?? 'desserts';

    

    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);


    const [menudata] = useMenu();


    const desserts = menudata.filter(d => d.category === 'dessert');
    const pizza = menudata.filter(d => d.category === 'pizza');
    const salad = menudata.filter(d => d.category === 'salad');        
    const soup = menudata.filter(d => d.category === 'soup');
    const drinks = menudata.filter(d => d.category === 'drinks');    
    
    
    return (
        <div>

            <PageBanner title='our shop' des='Would you like to try our dish?' img='/banner2.jpg'></PageBanner>

            <div className='w-2/3 mx-auto text-black mb-12'>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>DESSERTS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SALAD</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-8  mx-auto mt-28'>
                            {
                                desserts.map((data,index) => <Cards key={data._id} item={data} pos={index+1} cat='desserts'></Cards>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                         <div className='grid grid-cols-3 gap-8  mx-auto mt-28'>
                            {
                                pizza.map((data,index) => <Cards key={data._id} item={data} pos={index+1} cat='pizza'></Cards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                         <div className='grid grid-cols-3 gap-8  mx-auto mt-28'>
                            {
                                salad.map((data,index) => <Cards key={data._id} item={data} pos={index+1} cat='salad'></Cards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                         <div className='grid grid-cols-3 gap-8  mx-auto mt-28'>
                            {
                                soup.map((data,index) => <Cards key={data._id} item={data} pos={index+1} cat='soup'></Cards>)
                            }
                        </div>
                    </TabPanel>   
                    <TabPanel>
                         <div className='grid grid-cols-3 gap-8  mx-auto mt-28'>
                            {
                                drinks.map((data,index) => <Cards key={data._id} item={data} pos={index+1} cat='drinks'></Cards>)
                            }
                        </div>
                    </TabPanel>   

                </Tabs>



            </div>
            
        </div>
    );
};

export default OurShop;