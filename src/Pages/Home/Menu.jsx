
import SectionTitle from '../Shared/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const Menu = () => {

    const [menudata] = useMenu();

    const popular = menudata.filter(d => d.category === 'popular');


    return (
        <div className='my-24 w-2/3 mx-auto'>

            <SectionTitle heading={'from our menu'} subheading={'Check it out'}></SectionTitle>

            <div className='grid grid-cols-2 gap-8'>
                {
                    popular.map(data => <MenuItem key={data._id} item={data}></MenuItem> )
                }
            </div>

            <div className='flex justify-center items-center'>
                <button className='text-black text-center mx-auto uppercase mt-12 border-b-2 border-black rounded-md pb-2 px-4'>View Full Menu</button>
            </div>

            
        </div>
    );
};

export default Menu;