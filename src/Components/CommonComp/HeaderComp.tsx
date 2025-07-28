import React from "react";
import { useNavigate } from "react-router-dom";

interface ChildProps {
  name: string;
}

const HeaderComp: React.FC<ChildProps> = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="md:w-full w-full  md:h-full h-full ">
        <div className="md:w-full w-full md:h-full h-full md:p-10 p-0 flex md:flex-row md:justify-between justify-center md:mb-0 mb-10 ">
          <h2 className="text-3xl font-bold  hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer">
            <h2>{name}</h2>
          </h2>
          <div className="w-20 h-10 border-double  ">
            <button
              className="w-30 h-11 cursor-pointer border-2 border-solid  rounded-full border-dashed-yellow-500 text-xl"
              onClick={() =>
                name === "Trending series" || name === "Top rated series"
                  ? navigate("/tvseries")
                  : navigate("/movies")
              }
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
