import { NavLink } from "react-router-dom";
import DropComp from "./Dropdown/Dropdown";
import Logo from "../../assets/Images/LogoPic.png";
import MenuBar from "./Menubar";
import "../theme.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`fixed top-0 md:w-full w-full  md:h-22 min-h-0 z-10
          ${scroll ? "bg-gray-100" : "bg-none"}
    `}
    >
      <div className=" md:w-full w-full flex md:flex-row justify-between md:pr-25 pr-10 md:pl-25 pl-10 md:p-8 p-4">
        <div className=" md:-mt-2 mt-3 flex md:flex-row md:gap-3 gap-3">
          <img
            src={Logo}
            className="md:w-11 w-6 md:h-10 h-6 cursor-pointer "
          ></img>
          <p
            className={`md:text-2xl md:py-1 py-0 cursor-pointer font-normal ${
              scroll ? "text-black text-2xl" : "text-2xl text-white"
            }`}
          >
            tMovies
          </p>
        </div>
        <div className="flex md:flex-row   md:gap-10 gap-0 max-md:hidden  ">
          <div
            className={` hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer hover:text-black ${
              scroll ? "text-2xl  text-gray-600" : "text-white text-2xl"
            }`}
          >
            <NavLink to="/">Home</NavLink>
          </div>
          <div
            className={` hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer hover:text-black ${
              scroll ? "text-2xl text-gray-600" : "text-2xl text-white"
            }`}
          >
            <NavLink to="/movies">Movies</NavLink>
          </div>
          <div
            className={` hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer hover:text-black ${
              scroll ? "text-2xl text-gray-600" : "text-2xl text-white"
            }`}
          >
            <NavLink to="/tvseries">Tv Series</NavLink>
          </div>

          <div>
            <DropComp scroll={scroll} />
          </div>
        </div>
        <div className=" md:hidden  cursor-pointer ">
          <MenuBar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
