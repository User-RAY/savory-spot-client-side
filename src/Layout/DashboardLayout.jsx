import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaUtensils } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidCommentCheck } from "react-icons/bi";
import { BiSolidCalendarEdit } from "react-icons/bi";


const DashboardLayout = () => {


    const role = 'admin'

    const adminlink = <>
                        <li className="mt-8 uppercase"><a><FaHome className="text-xl"/>Admin Home</a></li>
                        <li className="my-4 uppercase"><a><FaUtensils className="text-xl"/> Add Items</a></li>
                        <li className="uppercase"><a><FaListUl className="text-xl"/>Manage Items</a></li>
                        <li className="my-4 uppercase"><a><FaBook className="text-xl"/>Manage bookings</a></li>
                        <li className="uppercase"><a><FaUsers className="text-xl"/>All users</a></li>
                      </>

    const userlink = <>
                        <li className="mt-8 uppercase"><a><FaHome className="text-xl"/>user Home</a></li>
                        <li className="my-4 uppercase"><a><MdEditCalendar className="text-xl"/>Reservation</a></li>
                        <li className="uppercase"><a><FaWallet className="text-xl"/>Payment history</a></li>
                        <li className="my-4 uppercase"><a><FaCartShopping className="text-xl"/>my cart</a></li>
                        <li className="uppercase"><a><BiSolidCommentCheck className="text-xl"/>add review</a></li>
                        <li className="my-4 uppercase"><a><BiSolidCalendarEdit  className="text-xl"/>my bookings</a></li>
                      </>


    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className=" bg-white text-black drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn btn-primary self-start m-4 drawer-button lg:hidden">
                        <GiHamburgerMenu />
                    </label>

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    
                    <ul className="menu text-base-content bg-[#D1A054] min-h-full w-80 p-4">
                        <label htmlFor="my-drawer-2"  className="btn text-black text-2xl w-[10%] ml-auto z-30 drawer-overlay lg:hidden " aria-label="close sidebar">X</label>    
                        {/* Sidebar content here */}

                        <a className="btn btn-ghost p-0 pl-2 text-xl flex flex-col items-start leading-none h-full tracking-wider mt-8">
                            <span className='tracking-[0.5em] font-extrabold'>Savory Spot</span> 
                            <span className='tracking-[0.7em]'>Restaurant</span> 
                        </a>
                        
                        {role == 'admin' ? adminlink : userlink}
                        
                        <div style={{'--divider-color': 'white'}} className="divider"></div>
                        <li className="uppercase"><NavLink to='/'><FaHome className="text-xl"/> Home</NavLink></li>
                        <li className="mt-4 uppercase"><NavLink to='/menu'><GiHamburgerMenu className="text-xl" />menu</NavLink></li>
                        <li className="my-4 uppercase"><NavLink to='/shop/desserts'><RiShoppingBagFill className="text-xl"/>shop</NavLink></li>
                        <li className="uppercase"><NavLink to='/contact'><IoMdMail className="text-xl"/>contact</NavLink></li>
                    </ul>
                </div>
            </div>

            
        </>
    );
};

export default DashboardLayout;