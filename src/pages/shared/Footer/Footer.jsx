import { FiPhone } from "react-icons/fi";
import {
  LiaEnvelopeOpenTextSolid,
  LiaMapMarkerAltSolid,
} from "react-icons/lia";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="roboto divide-y-2 divide-base-100 bg-base-200 text-secondary">
      {/* footer top */}
      <div className="container w-[85%] mx-auto grid gap-9 justify-items-center sm:justify-items-start	  justify-center sm:grid-cols-3 lg:grid-cols-4 py-[70px]">
        {/* logo */}
        <div className="">
          <div className=" w-[118px]">
            <Link to="/">
              <img src={logo} alt="logo" className="object-cover w-full" />
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="oswald text-2xl">Working Hours</h3>
          <ul className="space-y-1 text-base">
            <li className="list-disc">Sunday - Thursdays</li>
            <li className="text-primary">08:00 am - 09:00pm</li>
          </ul>
          <ul className="space-y-1 text-base">
            <li className="list-disc">Only Friday</li>
            <li className="text-primary">03:00 pm - 09:00pm</li>
            <li className="text-[#FF8A00] font-bold merienda pt-3">
              Saturday Close
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="oswald text-2xl">Contact Us</h3>
          <ul className="space-y-1 text-base">
            <div className="flex items-center gap-3">
              <div className="text-primary text-4xl ">
                <LiaMapMarkerAltSolid />
              </div>
              <div className="space-y-1">
                <li className="text-primary">Location :</li>
                <li>55 Main Street, New York</li>
              </div>
            </div>
          </ul>
          <ul className="space-y-1 text-base">
            <div className="flex items-center gap-3">
              <div className="text-primary text-4xl ">
                <LiaEnvelopeOpenTextSolid />
              </div>
              <div className="space-y-1">
                <li className="text-primary">Email Address :</li>
                <li>kaffendev@gmail.com</li>
              </div>
            </div>
          </ul>
          <ul className="space-y-1 text-base">
            <div className="flex items-center gap-3">
              <div className="text-primary text-4xl ">
                <FiPhone />
              </div>
              <div className="space-y-1">
                <li className="text-primary">Phone Number :</li>
                <li>+012 (345) 678 99</li>
              </div>
            </div>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="oswald text-2xl">Useful Links</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link
                className="hover:underline hover:text-primary"
                to="coffe-menu"
              >
                Coffee Menu
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:text-primary"
                to="our-chefs"
              >
                Our Chefs
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:text-primary"
                to="reservation"
              >
                Book a table
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:text-primary"
                to="contacts"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-primary" to="signup">
                Sign up
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-primary" to="login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* footer bottom */}
      <div className="py-8 text-base text-center text-secondary-content">
        Copyright © 2024 Kaffen. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
