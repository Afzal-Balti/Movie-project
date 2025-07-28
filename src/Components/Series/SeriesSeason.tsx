import { useAllSeriesData, type MovieItem } from "../Queries";
import { useState, useEffect } from "react";
import { Spin } from "antd";

function SeriesSeason() {
  const [page, setPage] = useState(1);
  const [allResults, setAllResults] = useState<MovieItem[]>([]);

  const { isPending, error, data } = useAllSeriesData(page);

  console.log("Query state:", { isPending, error, data });
  console.log("Accumulated results:", allResults);

  useEffect(() => {
    if (data?.results && data.results.length > 0) {
      setAllResults((preResult) => {
        const newDataItem = data.results?.filter(
          (item) => !preResult.some((preItem) => preItem.id == item.id)
        );

        return [...newDataItem, ...preResult];
      });
    }
  }, [data]);

  const handlepage = () => {
    if (data && data.page < data.total_pages) {
      console.log("Click the load button, current page:", page);
      setPage((prepage) => prepage + 1);
    }
  };

  if (isPending && page === 1) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        Server Error: {error.message || "Failed to fetch data"}. Please try
        again.
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-wrap gap-20 p-20 justify-center">
        {allResults.length > 0 ? (
          allResults.map((item: MovieItem) => (
            <div className="flex shrink-0" key={item.id}>
              <div className="w-full h-full">
                <img
                  className="w-60 h-80 rounded-xl object-cover"
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
                      : "https://via.placeholder.com/1280x720?text=No+Image"
                  }
                  alt={`${
                    item.original_name || item.title || "Movie"
                  } Backdrop`}
                />
                <div className="m-4 text-center text-md">
                  <h3>{item.original_name || item.title || "Untitled"}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No results found.</div>
        )}

        <div className="w-full h-full text-center">
          <button
            className="w-32 h-12 bg-red-600 font-quicksand text-white rounded-full cursor-pointer disabled:opacity-50"
            onClick={handlepage}
          >
            {isPending ? <Spin /> : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeriesSeason;
