import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { MovieItem } from "../Queries";

interface Props {
  data?: {
    data: {
      results: MovieItem[];
    };
  };
}

const FiltersData: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const id = useParams();

  console.log("the use PARAMS ID IS  ------------- ", id);

  return (
    <>
      <div className="w-full h-full flex flex-nowrap overflow-x-scroll no-scrollbar gap-14 md:px-10 px-2   ">
        {data?.data?.results.map((items: MovieItem) => (
          <div className="flex shrink-0 " key={items.id}>
            <div className="w-full h-full   ">
              <img
                onClick={() => navigate(`/similar/${items.id}`)}
                className="md:w-60 md:h-100 w-60  h-100 rounded-xl object-cover cursor-pointer  "
                src={`https://image.tmdb.org/t/p/w1280${items.backdrop_path}`}
                alt={`${items.title} Backdrop`}
              />

              <div className="w-50 m-4 text-center text-md ">
                <h3>{items.original_title}</h3>
                <h3>{items.original_name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FiltersData;
