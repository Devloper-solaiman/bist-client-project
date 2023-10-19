import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import MyCart from "../Pages/Dashbord/MyCart/MyCart";
import DashBoard from "../LayOut/DashBoard";
import ALLUsers from "../Pages/Dashbord/AllUsers/ALLUsers";
import AddItem from "../Pages/Dashbord/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashbord/ManageItems/ManageItems";
import Payment from "../Pages/Dashbord/Payment/Payment";
import AdminHome from "../Pages/Dashbord/AdminHome/AdminHome";
import UserHoem from "../Pages/Dashbord/UserHome/UserHoem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/secret",
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'userhome',
                element: <UserHoem></UserHoem>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'allusers',
                element: <AdminRoute><ALLUsers></ALLUsers></AdminRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
        ]
    }
])