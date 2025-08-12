import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Error = () => {

    const activeLink = ({ isActive }) => isActive  ? "text-yellow-400" : "";

    return (
        <div className="bg-white h-screen">
            
            <div className="w-full h-full flex justify-center items-center flex-col">
                
                <img src="../../../src/assets/404.gif" className="object-contain w-96" alt="" />
                <p className="text-red-800 text-2xl">Error</p>

                <button><NavLink to='/' className={`${activeLink} btn bg-[#B58130] text-white mt-10`}><FaHome /> Back to HOME</NavLink></button> 
                
            </div>

        </div>
    );
};

export default Error;