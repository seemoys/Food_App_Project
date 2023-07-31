import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Links } from "../config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  return (
    <div className="bg-transparent shadow-md w-full sticky top-0 left-0 right-0 z-50">
      <div className="rounded-b-xl h-32 md:h-auto md:rounded-none md:flex bg-blue-200 justify-between items-center">
        <div className="font-bold text-2xl flex rounded-full ">
          <a href="/">
            <img
              className="mt-1 h-[4rem] md:h-[5rem] pl-2"
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <p className="ml-1 md:mt-4 text-green-700 text-xl">
            {user.name ? `Hello ${user.name} !!!` : "Please Login !!!"}
          </p>
          <li className="list-none">
            <Link to="/cart" className="md:hidden relative bottom-16 left-36 ">
              <span className="text-black font-serif text-2xl">
                {cartItems.length}
              </span>
              <FontAwesomeIcon
                className=" "
                icon={faShoppingCart}
                shake
                size="2xl"
                style={{ color: "#4A49FF" }}
              />
              <span className="text-black">Items</span>
            </Link>
          </li>
        </div>
        <div className="flex">
          <div
            onClick={() => setOpen(!open)}
            className="text-xl absolute right-8 top-3 cursor-pointer md:hidden">
            <FontAwesomeIcon icon={open ? faXmark : faBars} fade size="2xl" />
          </div>
          <ul
            className={` min-h-screen w-48 md:min-h-0 md:w-full  bg-blue-200 md:flex md:items-center absolute md:static md:gap-7 text-md md:text-lg md:pb-0 md:m-0 p-4 transition-all duration-500 left-0 ease-in ${
              open ? "top-[120px]" : "hidden"
            }`}>
            {Links.map((link) => (
              <li
                onClick={() => setOpen(false)}
                key={link.name}
                className="w-24 mb-10 md:mb-0 hover:bg-yellow-200 rounded-lg  text-center text-gray-500">
                <Link
                  to={link.link}
                  className="w-24 text-gray-950 hover:text-white hover:font-semibold duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/cart">
                <span className="md:text-black">{cartItems.length}</span>
                <FontAwesomeIcon
                  className=" "
                  icon={faShoppingCart}
                  shake
                  size="xl"
                  style={{ color: "#4A49FF" }}
                />
                <span className="md:text-black ">Items</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/login" className="pr-2">
          <div className="bg-indigo-500 h-7 border-green-500 text-white font-[cursive] w-20 md:w-24 text-center m-1 rounded-xl shadow-md hover:bg-yellow-200 shadow-gray-800 absolute md:static right-0 top-20 md:mt-7 duration-300">
            {isLoggedIn ? (
              <button className="w-20" onClick={() => setIsLoggedIn(false)}>
                Logout {isOnline ? "🟢" : "🔴"}
              </button>
            ) : (
              <button className="w-20" onClick={() => setIsLoggedIn(true)}>
                Login {isOnline ? "🟢" : "🔴"}
              </button>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
