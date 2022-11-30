import { FolderArrowDownIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.error("logged out");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="container mx-auto navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            tabIndex={1}
            className="cusotmClass menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            <NavLink to="/apointment">Apoinment</NavLink>

            <NavLink to="/riviews">Reviews</NavLink>
          </div>
        </div>
        <p className="">
          <Link className="font-bold text-sm md:text-xl">
            Epic Care{" "}
            <span className="md:text-5xl text-2xl  text-primary">•</span>
          </Link>
        </p>
      </div>
      <div className="navbar-center text-end hidden lg:flex">
        <div className="menu cusotmClass menu-horizontal p-0">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/apointment">Apoinment</NavLink>

          <NavLink to="/riviews">Reviews</NavLink>
        </div>
      </div>
      <div className="navbar-end">
        {user && user.uid ? (
          <>
            <button
              onClick={handleLogOut}
              type="button"
              className="py-1 text-white px-4 bg-accent rounded-lg"
            >
              SignOut
            </button>
            <Link to="/dashboard">
              {" "}
              <UserCircleIcon className="w-5 h-5 text-white bg-accent rounded-full m-2 active"></UserCircleIcon>
            </Link>
            <label htmlFor="my-drawer-2" tabIndex={3} className="lg:hidden">
              <FolderArrowDownIcon className="w-5 h-5"></FolderArrowDownIcon>
            </label>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="py-1 text-white px-6 bg-gradient-to-r from-primary to-secondary"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
