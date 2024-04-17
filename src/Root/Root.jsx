import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import TopNav from "../pages/shared/TopNav/TopNav";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "kaffen - home";
      return;
    }
    document.title = `kaffen - ${location.pathname
      .replaceAll("/", " - ")
      .replaceAll("-", " ")}`;
  }, [location]);

  return (
    <div>
      <nav>
        <TopNav />
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-550px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
