import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../hooks/useAuthInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import SectionTitle from "../Shared/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const Cart = () => {

    window.scrollTo(0, 20);

    const [cart, refCart] = useCart();


    const axiosSecure = useAxiosSecure();

    const user = useAuthInfo();

    const {refetch: refCartDetails, data: cartdetails=[]} = useQuery({
        queryKey: ['cartdetails', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartDetails?email=${user.email}`)
            return res.data;
        }
    })


    
    const totalPrice = cartdetails.reduce((sum, item) => sum + item.price, 0).toFixed(2)


    const handleDeleteCartItem = (id) => {

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/cart/${id}`)
            .then( res => {
                if (res.data.deletedCount > 0) {
                    
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                    refCartDetails();
                    refCart();
                    
                }

            })



        }
        });


        
    }



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
                           cartdetails.length > 0  ? cartdetails.map((item, index) => 
                                    <tr className="text-black" key={item._id}>
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
                                        <button className="btn bg-red-600 btn-xs text-lg text-white py-4" onClick={()=> handleDeleteCartItem(item._id)}><FaRegTrashAlt /></button>
                                        </th>
                                    </tr>
                            ) : <td colspan="5">
                                    <h2 className="text-black text-xl text-center">No items added. Add Items to Cart from Menu Shop </h2>
                                </td>
                        }

                    </tbody>

                </table>


            </div>


        </div>
    );
};

export default Cart;