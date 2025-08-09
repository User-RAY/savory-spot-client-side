import Swal from 'sweetalert2';
import useAuthInfo from '../../hooks/useAuthInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const Card = ({item, pos=1, cat='desserts'}) => {

    const {image, name, recipe, price} = item;

    const navigate = useNavigate();

    const location = useLocation();


    const user = useAuthInfo();

    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();


    const handleCartItem = (cartItem) => {

        const cartData = {
            menuId: cartItem._id,
            email: user?.email
        }

        if (user && user?.email) {

            axiosSecure.post('/cart', cartData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                    position: "top-start",
                    icon: "success",
                    title: ` ${name} has been added to cart`,
                    showConfirmButton: false,
                    timer: 1500,
                    scrollbarPadding: false
                    });
                    refetch();
                }
            })
            
            
        } else {
            Swal.fire({
            title: "You are not logged in",
            text: "Please Log in to Add item in cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log In!"
            }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', {state: {from: location, tabIndex: cat}});
            }
            });
        }
        
    }


    return (
        <div className='text-black'>


            <div className="card bg-base-100 h-full">
                <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                    <p className='bg-blue-950 text-white absolute top-4 right-4 px-4 py-2' >${price}</p>
                </figure>
                <div className="card-body justify-center items-center bg-[#F3F3F3]">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-center my-4'>{recipe}</p>
                    <div className="card-actions justify-center">

                        {
                            pos%2==0 ? <>
                                <button className="btn bg-[#1F2937] text-[#BB8506] border-b-2 border-[#1F2937] uppercase" onClick={() => handleCartItem(item)}>Add to Cart</button>
                            </> : <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-[#BB8506] uppercase" onClick={() => handleCartItem(item)}>Add to Cart</button>
                        }

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;