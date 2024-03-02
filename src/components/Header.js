import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <div>
      <nav className="flex bg-regal-blue font-[Poppins] h-[20vh] w-full">
        <div className="m-5 text-5xl text-white font-bold">
          <h1>NK</h1>
        </div>
        <div className="text-white w-full mt-2">
          <ul className="hidden md:m-7 md:gap-10 md:flex justify-end content-center">
            <li>
              <Link to="/" className="hover:bg-white hover:text-black focus:bg-white focus:text-black px-2 py-1 rounded-md transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link 
               to="/projects"
                className="hover:bg-white hover:text-black focus:bg-white focus:text-black px-2 py-1 rounded-md transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <a className="hover:bg-white hover:text-black focus:bg-white focus:text-black px-2 py-1 rounded-md transition duration-300">
                Blogs
              </a>
            </li>
            <li>
              <a className="hover:bg-white hover:text-black focus:bg-white focus:text-black px-2 py-1 rounded-md transition duration-300">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger symbol for mobile view */}
        <div className="m-5 md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-15 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`bg-regal-blue md:hidden ${
          isMobileMenuVisible ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center">
          <li>
            <a className="text-white">Home</a>
          </li>
          <li>
            <a href="" className="text-white">
              Projects
            </a>
          </li>
          <li>
            <a className="text-white">Blogs</a>
          </li>
          <li>
            <a className="text-white">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
