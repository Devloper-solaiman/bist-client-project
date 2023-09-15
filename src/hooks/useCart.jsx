import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return res.json()
        }
    })
    return [cart, refetch]
    // const { user, loading } = useAuth();
    // const [axiosSecure] = useAxiosSecure()

    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['carts', user?.email],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const res = await axiosSecure(`/carts?email=${user?.email}`)
    //         console.log('res from axios', res)
    //         return res.data;
    //     },
    // })
    // return [cart, refetch]
};

export default useCart;