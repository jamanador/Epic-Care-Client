import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Appoinment from "../Pages/Appointment/Appoinment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import RootDashboard from "../Root/RootDashboard";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/apointment",
          element: <Appoinment></Appoinment>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },

    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <RootDashboard></RootDashboard>
        </PrivateRoutes>
      ),
      children: [
        {
          path: "/dashboard",
          element: (
            <PrivateRoutes>
              <Dashboard></Dashboard>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/users",
          element: (
            <AdminRoutes>
              <Allusers></Allusers>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/profile",
          element: (
            <PrivateRoutes>
              <Profile></Profile>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/adddoctor",
          element: (
            <AdminRoutes>
              <AddDoctor></AddDoctor>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/managedoctors",
          element: (
            <AdminRoutes>
              <ManageDoctor></ManageDoctor>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/payment/:id",
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/bookings/${params.id}`);
          },
          element: (
            <PrivateRoutes>
              <Payment></Payment>
            </PrivateRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default Routes;
