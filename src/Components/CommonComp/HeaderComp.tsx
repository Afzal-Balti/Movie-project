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
        <div className="md:w-full w-full md:h-full  h-full md:p-10 p-0 flex md:flex-row md:justify-between justify-evenly md:mb-0 mb-10 ">
          <h2 className="md:text-3xl text-xl md:font-bold font-quicksand  hover:underline decoration-red-500 decoration-6 rounded-full cursor-pointer">
            {name}
          </h2>
          <div className="md:w-20 w-10 md:h-10 h-10 border-double  ">
            <button
              className="md:w-30 w-20  md:h-11 h-10 hover:bg-blue-400 hover:text-white cursor-pointer border-2 border-solid  rounded-full  md:text-xl  text-sm"
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
