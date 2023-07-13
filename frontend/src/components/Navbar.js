import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "../supabaseClient";

import { getUserDetail } from "../app/userSlice";
import { setUser } from "../app/userSlice";

import { TbWorldUpload } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user === null) {
      dispatch(getUserDetail());
    }
  }, [user, dispatch]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      dispatch(setUser(null)); // Reset the user state
      navigate("/"); // Navigate to the home page
      window.location.reload(); // Reload the page to require the user to log in again
    }
  };

  return (
    <nav className="bg-black ">
      <div className="xs:mx-6 mx-2 md:mx-10 md:py-6 py-4 flex flex-row flex-1 items-center font-semibold ">
        <Link to="/">
          <div className="flex flex-1 flex-row items-center  py-1 px-2 font">
            <p className=" text-2xl md:text-3xl text-yellow-600">c</p>
            <p className=" text-2xl md:text-3xl text-red-600">l</p>
            <p className=" text-2xl md:text-3xl text-blue-600">o</p>
            <p className=" text-2xl md:text-3xl text-white">M</p>
            <p className=" text-2xl md:text-3xl text-purple-600">a</p>
            <p className="text-2xl md:text-3xl text-yellow-600">r</p>
            <p className=" text-2xl md:text-3xl text-gray-200">k</p>
            <p className=" text-2xl md:text-3xl text-green-600">e</p>
            <p className=" text-2xl md:text-3xl text-orange-600">t</p>
            <TbWorldUpload className="text-xl md:text-4xl ml-1 text-white hidden md:flex" />
          </div>
        </Link>

        <div className="flex flex-1 flex-row items-center justify-end md:gap-2 gap-1 ">
          <Menu
            handleClick={handleClick}
            user={user}
            handleSignOut={handleSignOut}
          />
        </div>
      </div>
    </nav>
  );
};

function Menu({ handleClick, user, handleSignOut }) {
  return (
    <ul className="flex items-center flex-col lg:flex-row gap-8 lg:gap-6">
      <li className="cursor-pointer " onClick={handleClick}>
        {user ? (
          <button
            className="bg-purple-600 text-white py-2 md:px-6 px-4 text-xs rounded-lg whitespace-nowrap"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <span>
            <NavLink
              to="login"
              className="bg-purple-600 text-white py-2 md:px-6 px-4 text-xs rounded-lg whitespace-nowrap mr-2"
            >
              REGISTER
            </NavLink>
            <NavLink
              to="login"
              className="border border-purple-600 text-white py-2 md:px-6 px-4 text-xs rounded-lg whitespace-nowrap hidden md:inline"
            >
              LOGIN
            </NavLink>
          </span>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
