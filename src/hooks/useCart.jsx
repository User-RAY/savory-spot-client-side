import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";


const useCart = () => {

    const axiosSecure = useAxiosSecure();

    const user = useAuthInfo();

    const {refetch, data: cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`)
            return res.data;
        }
    })

    return [cart, refetch]

};

export default useCart;