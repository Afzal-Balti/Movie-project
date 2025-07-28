import { NavLink } from "react-router-dom";
import vedioIcon from "../../assets/Images/video-clip.png";
import DropComp from "./Dropdown/Dropdown";

function Navbar() {
  return (
    <div className="main md:w-full w-full  md:h-21 min-h-0 z-10  bg-gray-50 fixed ">
      <div className="md:w-full w-full flex md:flex-row justify-between md:pr-25 pr-10 md:pl-25 pl-10 md:p-8 p-4">
        <div className="flex md:flex-row  md:gap-3 gap-3">
          <img
            src={vedioIcon}
            className="md:w-8 w-6 md:h-8 h-6 cursor-pointer rounded-full"
          ></img>
          <p className="md:text-2xl font-semibold">tMovies</p>
        </div>
        <div className="flex md:flex-row   md:gap-5 gap-0 max-md:hidden  ">
          <div className="text-2xl hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="text-2xl hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer ">
            <NavLink to="/movies">Movies</NavLink>
          </div>
          <div className="text-2xl hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer">
            <NavLink to="/tvseries">Tv Series</NavLink>
          </div>
          <div>
            <DropComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
