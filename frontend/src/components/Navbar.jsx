import React, { Fragment } from "react";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Books</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );
  return (
    <Fragment>
      <div className="max-w-screen container mx-auto md:px-20 sm:px-5 sticky top-0 z-10 ">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl">BookStore</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-1xl">{navItems}</ul>
            </div>
            <ThemeController />
            <div className="px-2">
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer duration-300">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
