import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import CoffeMenus from "../pages/CoffeMenus/CoffeMenus";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import Contacts from "../pages/Contacts/Contacts";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OurChefs from "../pages/OurChefs/OurChefs";
import Reservation from "../pages/Reservation/Reservation";
import SignUp from "../pages/SignUp/SignUp";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "coffe-menu",
        element: <CoffeMenus />,
      },
      {
        path: "our-chefs",
        element: <OurChefs />,
      },
      {
        path: "reservation",
        element: (
          <PrivateRoutes>
            <Reservation />
          </PrivateRoutes>
        ),
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "coffee-details/:id",
        element: (
          <PrivateRoutes>
            <CoffeeDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default routes;
