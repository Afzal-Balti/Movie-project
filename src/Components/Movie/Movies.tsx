import Navbar from "../Navbar/Navbar";
import backgroundImage from "../../assets/Images/backgroundPic.jpg";
import { useState, type SetStateAction } from "react";
import MovieComp from "./MovieComp";

interface MovieProps {
  name: string;
  page: number;
}

function Movies({ name }: MovieProps) {
  const [list, setList] = useState("");

  const handlechange = (e: { target: { value: SetStateAction<string> } }) => {
    setList(e.target.value);
  };

  return (
    <>
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-full relative ">
          <div className="w-full opacity-40">
            <img src={backgroundImage} className="w-full h-90 "></img>
          </div>

          <h2 className="w-full font-bold absolute text-center inset-0 p-75 t text-3xl text-gray-100 text-shadow-lg/30  pointer-events-none">
            {name || "Movies"}
          </h2>

          <div className="w-full flex justify-center mt-8">
            <div className="w-100 h-12 bg-white rounded-full px-4 shadow-lg flex items-center justify-between">
              <input
                type="text"
                placeholder={`Search ${name || "Movies"}`}
                value={list}
                onChange={handlechange}
                className="flex-grow  font-quicksand px-3 text-xl bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
              <i className="fas fa-search text-red-500 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        <MovieComp  />
      </div>
    </>
  );
}

export default Movies;
