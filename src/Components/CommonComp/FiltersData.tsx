import React from "react";
import { type MovieItem } from "../Queries";

interface PassData {
  data: MovieItem[];
}

const FiltersData: React.FC<PassData> = ({ data }) => {
  return (
    <>
      <div className="w-full h-full flex flex-nowrap overflow-x-scroll no-scrollbar gap-14 px-10 ">
        {data?.data?.results.map((items: MovieItem) => (
          <div className="flex shrink-0 " key={items.id}>
            <div className="w-full h-full  ">
              <img
                className="w-60 h-100 rounded-xl object-cover  "
                src={`https://image.tmdb.org/t/p/w1280${items.backdrop_path}`}
                alt={`${items.title} Backdrop`}
              />

              <div className="m-4 text-center text-md ">
                <h3>{items.original_title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FiltersData;
