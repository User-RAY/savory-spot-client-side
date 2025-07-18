import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Cart/Cart";
import DashboardLayout from "../Layout/DashboardLayout";
import UserHome from "../Pages/User/UserHome";
import Reservation from "../Pages/User/Reservation";
import PayHistory from "../Pages/User/PayHistory";
import AddReview from "../Pages/User/AddReview";
import MyBookings from "../Pages/User/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <PrivateRoute><OurMenu></OurMenu></PrivateRoute>
        },
        {
            path: '/shop',
            element: <OurShop></OurShop>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
               

    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        },
        //user routes
        {
            path: 'home',
            element: <UserHome></UserHome>
        },     
        {
            path: 'reservation',
            element: <Reservation></Reservation>
        },   
        {
            path: 'history',
            element: <PayHistory></PayHistory>
        },   
        {
            path: 'cart',
            element: <Cart></Cart>
        },
        {
            path: 'review',
            element: <AddReview></AddReview>
        },     
        {
            path: 'bookings',
            element: <MyBookings></MyBookings>
        },     
    ]
  }
]);