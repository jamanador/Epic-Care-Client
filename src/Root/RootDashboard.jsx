import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import { authContext } from "../Context/AuthProvider";
import useAdmin from "../CustomHooks/UseAdmin";
import "./RootDashboard.css";
const RootDashboard = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-6">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu customClass p-4 w-80 text-base-content">
            <NavLink to="/dashboard/profile" className="my-2">
              Profile
            </NavLink>
            <NavLink to="/dashboard" className="my-2">
              My Appointments
            </NavLink>
            {isAdmin && (
              <>
                <NavLink to="/dashboard/users" className="my-2">
                  ALl Users
                </NavLink>
                <NavLink to="/dashboard/adddoctor" className="my-2">
                  Add a Doctor
                </NavLink>
                <NavLink to="/dashboard/managedoctors" className="my-2">
                 Manage Doctors
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RootDashboard;
