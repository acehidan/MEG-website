import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./../../assets/image/logo.png";
import { FaFacebookMessenger } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="bg-white mx-auto flex items-center justify-between py-2 md:py-4 px-5 md:px-8 lg:px-10 border-b border-gray-50 shadow-sm">
        <div className="flex items-center ">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="w-20 md:w-14" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden ms-10 lg:flex lg:space-x-8">
            <NavLink
              onClick={() => {
                setServiceMenu(false);
              }}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-primary"
                  : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary"
              }
            >
              Medical Education guild
            </NavLink>

            <NavLink
              onClick={() => {
                setServiceMenu(false);
              }}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-primary"
                  : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary"
              }
            >
              Who are we
            </NavLink>

            <div className="relative">
              <button
                className={`  text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary ${
                  location.pathname.includes("/service")
                    ? "text-primary"
                    : "text-gray-400"
                }`}
                onClick={() => {
                  setServiceMenu(!serviceMenu);
                }}
              >
                How can we help
                <svg
                  className="inline-block w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="absolute bg-white w-[400px] border shadow-md rounded z-10 mt-2 py-4 space-y-4"
                style={{ display: serviceMenu ? "block" : "none" }}
              >
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                  }}
                  to="/service/1"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Medical Education Pathway Consultation
                </NavLink>
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                  }}
                  to="/service/2"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Application Excellence Package
                </NavLink>
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                  }}
                  to="/service/3"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Medical School Entrance Bootcamp
                </NavLink>
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                  }}
                  to="/service/4"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Accommodation and Boarding Services
                </NavLink>
              </div>
            </div>

            <NavLink
              onClick={() => {
                setServiceMenu(false);
              }}
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-primary"
                  : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Language Selector and Button */}
        <div className="hidden lg:block items-center">
          <a
            href="https://calendly.com/mededuguild/pathway?month=2025-03"
            className="button"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-sub focus:outline-none">
            {isOpen ? (
              <IoClose size={20} className="text-pridark" />
            ) : (
              <IoMenuSharp size={20} className="text-pridark" />
            )}{" "}
            {/* Hamburger or Close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="flex flex-col space-y-4 px-4 py-10 absolute w-full z-10 bg-white">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-primary"
                  : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary"
              }
            >
              Medical Education Guild
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-primary"
                  : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary"
              }
            >
              Who We Are
            </NavLink>

            <div className="relative">
              <button
                className={`text-[14px] font-semibold text-accent hover:text-primary ${
                  location.pathname.includes("/service")
                    ? "text-primary"
                    : "text-gray-400"
                }`}
                onClick={() => {
                  setServiceMenu(!serviceMenu);
                }}
              >
                How can we help
                <svg
                  className="inline-block w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="absolute bg-white text-sm w-full border shadow-md rounded z-10 mt-2 py-4 space-y-4"
                style={{ display: serviceMenu ? "block" : "none" }}
              >
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                    toggleMenu();
                  }}
                  to="/service/1"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Medical Education Pathway Consultation
                </NavLink>
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                    toggleMenu();
                  }}
                  to="/service/2"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Application Excellence Package
                </NavLink>
                <NavLink
                  onClick={() => {
                    setServiceMenu(!serviceMenu);
                    toggleMenu();
                  }}
                  to="/service/3"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Medical School Entrance Bootcamp
                </NavLink>
                <NavLink
                  onClick={() => {
                    toggleMenu();
                    setServiceMenu(!serviceMenu);
                  }}
                  to="/service/4"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary font-semibold"
                      : "block px-4 py-2 text-gray-600 hover:text-primary"
                  }
                >
                  Accommodation and Boarding Services
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:text-primary"
                  : "text-[14px] lg:text-[18px] font-semibold text-gray-400 hover:text-primary"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
