import Navbar from "../Navbar/Navbar";
import ImageHf from "../../assets/Images/imageHf.jpg";
import { useState, type SetStateAction } from "react";
import MovieComp from "./MovieComp";

interface MovieProps {
  name: string;
  page: number;
}

function Movies({ name }: MovieProps) {
  const [search, setSearch] = useState("");

  const handlechange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="md:w-full md:h-full  w-full h-full">
        <Navbar />
        <div className="w-full relative ">
          <div className="w-full ">
            <img
              src={ImageHf}
              className="md:w-full md:h-90  w-full h-full"
            ></img>
          </div>

          <h2 className="md:w-full  max-md:hidden absolute text-center inset-0 p-75 t text-3xl text-gray-100 text-shadow-lg/30  pointer-events-none">
            {name || "Movies"}
          </h2>

          <div className="w-full flex justify-center mt-8">
            <div className="md:w-100  w-60 md:h-12 h-10 bg-white rounded-full px-4 shadow-lg flex items-center justify-between">
              <input
                type="text"
                placeholder={`Search ${name || "Movies"}`}
                value={search}
                onChange={handlechange}
                className="flex-grow  font-quicksand  bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
              <div className="md: w-full max-md:hidden">
                <i className="fas fa-search text-red-500 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
        <MovieComp search={search} />
      </div>
    </>
  );
}

export default Movies;
