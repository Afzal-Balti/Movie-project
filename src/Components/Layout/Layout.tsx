import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../CommonComp/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
