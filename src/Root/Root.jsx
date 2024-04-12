import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <nav>
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
