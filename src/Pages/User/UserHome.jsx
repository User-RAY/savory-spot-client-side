import { MdRestaurantMenu } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaWallet } from "react-icons/fa";


const UserHome = () => {
    return (
        <div className='w-full h-full'>
            <div className="w-[90%] mx-auto mt-12">

                <h1 className='text-2xl font-bold uppercase mb-8'>Hi, Welcome back !</h1>
    
                <div className="grid grid-cols-3 gap-6">
    
                    <div className="stats bg-primary text-primary-content ">
                        <div className="stat flex justify-center items-center">
    
                            <div>
                                <MdRestaurantMenu className="text-6xl"/>
                            </div>
    
                            <div className="mr-4">
                                <div className="stat-value">400</div>
                                <div className="stat-title text-lg text-left">Menu</div>
                            </div>
                        </div>
                    </div>
    
    
    
                    <div className="stats bg-primary text-primary-content ">
                        <div className="stat flex justify-center items-center">
    
                            <div>
                                <MdRestaurantMenu className="text-6xl"/>
                            </div>
    
                            <div className="mr-4">
                                <div className="stat-value">400</div>
                                <div className="stat-title text-lg text-left">Menu</div>
                            </div>
                        </div>
                    </div>
    
    
    
    
    
                    <div className="stats bg-primary text-primary-content ">
                        <div className="stat flex justify-center items-center">
    
                            <div>
                                <MdRestaurantMenu className="text-6xl"/>
                            </div>
    
                            <div className="mr-4">
                                <div className="stat-value">400</div>
                                <div className="stat-title text-lg text-left">Menu</div>
                            </div>
                        </div>
                    </div>
    
    
    
                </div>

                <div className="flex mt-16">
                    <div className="w-1/2 bg-pink-300 py-12 text-center">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  className="w-[30%] rounded-full mx-auto border-2 border-yellow-700 " />
                        <h2 className="mt-4">Name</h2>
                    </div>

                    <div className="w-1/2 bg-yellow-200 py-12">
                        <div className="w-[40%] mx-auto">
                            <h2 className="text-2xl mb-4">Your Activities</h2>
                            <ul className="">
                                <li className="font-medium text-[1.1rem] uppercase"><IoCartSharp className="inline text-2xl "/> Orders: </li>
                                <li className="font-medium text-[1.1rem] uppercase ml-1"><FaStar className="inline text-xl "/> Reviews: </li>
                                <li className="font-medium text-[1.1rem] uppercase ml-1"><MdOutlineDateRange className="inline text-xl "/> Bookings: </li>
                                <li className="font-medium text-[1.1rem] uppercase ml-[0.4rem]"><FaWallet  className="inline text-lg "/> Payment: </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default UserHome;