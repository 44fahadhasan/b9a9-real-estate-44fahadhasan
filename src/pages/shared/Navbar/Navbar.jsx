import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const handelToggleMenu = () => {
    setToggleMenuIcon(!toggleMenuIcon);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 px-[30px]">
        {/* logo */}
        <div className="w-[118px]">
          <Link to="/">
            <img src={logo} alt="logo" className="object-cover w-full" />
          </Link>
        </div>

        {/* menu for large device */}
        <div className="hidden md:block">
          <ul className="flex gap-7 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-primary border-2 rounded-md px-3.5 py-2 "
                    : "text-primary "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="coffe-menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-primary border-2 rounded-md px-3.5 py-2 "
                    : "text-primary "
                }
              >
                Coffee Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="our-chefs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-primary border-2 rounded-md px-3.5 py-2 "
                    : "text-primary "
                }
              >
                Our Chefs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reservation"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-primary border-2 rounded-md px-3.5 py-2 "
                    : "text-primary "
                }
              >
                Book a table
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacts"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-primary border-2 rounded-md px-3.5 py-2 "
                    : "text-primary "
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>

        {/* login & logout button for large device */}
        <div className="hidden md:flex items-center space-x-4 ">
          <div className="dropdown dropdown-end">
            <div className="tooltip tooltip-left" data-tip="User Name">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-40"
            >
              <li>
                <Link to="update-profile">Update Profile</Link>
              </li>
            </ul>
          </div>

          <div>
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Login
              </span>
            </Link>
          </div>
        </div>

        {/* menu icon for mobile device */}
        <div className="md:hidden text-2xl text-primary">
          {toggleMenuIcon ? (
            <AiOutlineMenu onClick={handelToggleMenu} title="show menu" />
          ) : (
            <AiOutlineClose onClick={handelToggleMenu} title="close menu" />
          )}
        </div>
      </div>

      {/* mobile device */}
      <div
        className={` absolute w-full mx-auto h-min bg-slate-50 py-6 font-medium rounded-lg mt-4 z-[900] ${
          toggleMenuIcon && "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 text-center">
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-primary "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="listedbooks"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-primary "
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="pagesread"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-primary "
              }
            >
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="blog"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-primary "
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-primary "
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* login & logout button for small device */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-9">
          <div className="dropdown dropdown-end">
            <div className="tooltip tooltip-left" data-tip="User Name">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-40"
            >
              <li>
                <a>Update Profile</a>
              </li>
            </ul>
          </div>

          <div>
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
