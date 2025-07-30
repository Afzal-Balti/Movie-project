import Navbar from "../Navbar/Navbar";
import SeiresImage from "../../assets/Images/imageHf.jpg";
import { useState, type SetStateAction } from "react";
import SeriesSeason from "./SeriesSeason";

function SeriesTv() {
  const [list, setList] = useState("");
  const handlechange = (e: { target: { value: SetStateAction<string> } }) => {
    setList(e.target.value);
  };
  return (
    <div>
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-full relative ">
          <div className="w-full">
            <img src={SeiresImage} className="w-full h-90 "></img>
          </div>

          <h2 className="md:w-full max-md:hidden absolute text-center inset-0 p-75  text-3xl text-gray-100 text-shadow-lg/30  pointer-events-none">
            TV Series
          </h2>

          <div className="w-full flex justify-center mt-8">
            <div className="md:w-100 w-60 md:h-12 h-10 bg-white rounded-full px-4 shadow-lg flex items-center justify-between">
              <input
                type="text"
                placeholder="Search Series Tv"
                value={list}
                onChange={handlechange}
                className="flex-grow  font-quicksand px-3 text-xl bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
              <div className="w-full max-md:hidden">
                <i className="fas fa-search text-red-500 text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SeriesSeason />
    </div>
  );
}

export default SeriesTv;
