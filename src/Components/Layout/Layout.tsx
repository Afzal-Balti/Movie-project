import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../CommonComp/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
