import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Tost from "../../../components/Tost/Tost";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);
  const { userLogOut, user } = useAuth();

  const handelToggleMenu = () => {
    setToggleMenuIcon(!toggleMenuIcon);
  };

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("successfully Logout");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const userProfile = (
    <details className="dropdown">
      <summary className="btn btn-xs bg-base-100 hover:bg-base-100 border-none">
        <div
          className="tooltip tooltip-left"
          data-tip={user?.displayName || "Name isn't available"}
        >
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src={
                  user?.photoURL ||
                  "https://media.istockphoto.com/id/1455787504/vector/round-anonymous-person-icon-vector.jpg?s=1024x1024&w=is&k=20&c=6Zhn2vgAOOh4nljgJqJ_wjYCY_c2rWcxyFeMq698BYk="
                }
              />
            </div>
          </div>
        </div>
      </summary>

      <ul className="p-2 shadow menu dropdown-content z-[100] bg-base-100 rounded-box w-52">
        <li>
          <Link to="update-profile">Update Profile</Link>
        </li>
      </ul>
    </details>
  );

  const userToggle = (
    <div className="text-lg">
      {user ? (
        <button
          onClick={() => {
            handleLogOut();
            setToggleMenuIcon(!toggleMenuIcon);
          }}
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded hover:bg-base-200 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary">
            Logout
          </span>
        </button>
      ) : (
        <Link
          to="/login"
          onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded hover:bg-base-200 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary">
            Login
          </span>
        </Link>
      )}
    </div>
  );

  return (
    <>
      <Tost />
      <div className="roboto bg-base-100 flex justify-between items-center py-5 mx-auto w-[95%]">
        {/* logo */}
        <div className="w-[118px]">
          <Link to="/">
            <img src={logo} alt="logo" className="object-cover w-full" />
          </Link>
        </div>

        {/* menu for large device */}
        <div className="hidden md:block">
          <ul className="flex gap-7 font-medium text-lg ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="coffe-menu"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
              >
                Coffee Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="our-chefs"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
              >
                Our Chefs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reservation"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacts"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>

        {/* login & logout button for large device */}
        <div className="hidden md:flex items-center space-x-4 ">
          {user && userProfile}
          {userToggle}
        </div>

        {/* menu icon for mobile device */}
        <div className="md:hidden text-2xl text-secondary hover:text-primary">
          {toggleMenuIcon ? (
            <AiOutlineMenu onClick={handelToggleMenu} title="show menu" />
          ) : (
            <AiOutlineClose onClick={handelToggleMenu} title="close menu" />
          )}
        </div>
      </div>

      {/* mobile device */}
      <div
        className={`md:hidden absolute w-full mx-auto h-min bg-base-100 py-6 font-medium z-[900] border-y-2 border-base-200 ${
          toggleMenuIcon && "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 text-center">
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-secondary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="coffe-menu"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-secondary"
              }
            >
              Coffee Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="our-chefs"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-secondary"
              }
            >
              Our Chefs
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="reservation"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-secondary"
              }
            >
              Book a table
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="contacts"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-secondary"
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        {/* login & logout button for small device */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-9">
          {user && userProfile}
          {userToggle}
        </div>
      </div>
    </>
  );
};

export default Navbar;
