import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";
import routes from "./routes/PublicRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ParallaxProvider>
  </React.StrictMode>
);
