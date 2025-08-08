import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../hooks/useAuthInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import SectionTitle from "../Shared/SectionTitle";


const Cart = () => {

    window.scrollTo(0, 20);

    const [cart] = useCart();


    const axiosSecure = useAxiosSecure();

    const user = useAuthInfo();

    const {data: cartdetails=[]} = useQuery({
        queryKey: ['cartdetails', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartDetails?email=${user.email}`)
            return res.data;
        }
    })


    
    const totalPrice = cartdetails.reduce((sum, item) => sum + item.price, 0)



    return (
        <div className="text-red-600 min-h-[80vh] w-full my-12 ">
            
            <SectionTitle heading={'wanna add more'} subheading={'My Cart'}></SectionTitle>

            <div className="overflow-x-auto w-[80%] mx-auto bg-white shadow-lg">

                <div className="flex justify-around text-black mb-8">
                    <h2 className="text-2xl font-bold">Total Orders: {cart.length}</h2>
                    <h2 className="text-2xl font-bold">Total Price: {totalPrice} $</h2>
                    <button className="btn btn-accent">Pay</button>
                </div>

                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-600">
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            cartdetails.map((item, index) => <>
                                    <tr className="text-black">
                                        <th>
                                            <p>{index+1}</p>
                                        </th>
                                        <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                src={item.image}
                                                alt="menu item pic" />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold"></div>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                            <p>{item.name}</p>
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                        <button className="btn bg-red-600 btn-xs">delete</button>
                                        </th>
                                    </tr>
                            </>)
                        }

                    </tbody>

                </table>


            </div>


        </div>
    );
};

export default Cart;