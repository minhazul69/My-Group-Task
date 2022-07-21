import React, { useState } from "react";
import "./Navbar.css";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  // ALL ROUTE
  const link = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Blogs", link: "/blogs" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "Other", link: "/other" },
  ];
  // RESPONSIVE TOGGLER BTN STATE
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto lg:m-7 ">
      <div className="bg-base-200 p-1 lg:px-8 lg:rounded-2xl md:px-4">
        <nav className="flex items-center justify-between">
          {/* PROJECT LOGO */}
          <div>
            <a href="#">Sohoj Pay</a>
          </div>

          <div className="ml-20">
            {" "}
            {/* NAV ITEM */}
            <ul
              className={`lg:flex w-80 h-72 lg:h-auto lg:w-full block lg:items-center navbar absolute duration-500 ease-in lg:static bg-indigo-200 lg:bg-base-200 top-12  ${
                open ? "left-[-10px] top-12" : "left-[-380px]"
              }`}
            >
              {link.map((item) => (
                <li className="block text-center " key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              {/* RESPONSIVE LOGIN OR SIGN UP  BUTTON */}
              <div className="flex items-center justify-center md:hidden">
                <button className="btn bg-sky-600 hover:bg-sky-700 border-0 btn-sm mr-3">
                  Login
                </button>
                <button className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm">
                  Sign Up
                </button>
              </div>
              {/* LARGE DEVICE LOGIN OR SIGN UP BUTTON */}
              <button className="btn bg-transparent border-2 text-black hover:bg-black hover:text-white btn-sm lg:mx-4 hidden lg:block">
                Login
              </button>
              <button className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm hidden lg:block">
                Sign Up
              </button>
            </ul>
          </div>
          {/* NAVBAR TOGGLER ICON */}
          <div onClick={() => setOpen(!open)} className="w-10 h-10 lg:hidden">
            {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
