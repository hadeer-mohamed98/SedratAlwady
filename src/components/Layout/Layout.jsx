import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div>
        <ScrollToTop />
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
