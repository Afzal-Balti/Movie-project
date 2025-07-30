import { useMoiveData, type MovieItem } from "../Queries";
import HeaderComp from "../CommonComp/HeaderComp";
import FiltersData from "../CommonComp/FiltersData";

interface MovieData {
  results: MovieItem[];
}

const MovieApi = () => {
  const { isPending, error, data } = useMoiveData<MovieData>();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return <div>No data available</div>;

  return (
    <>
      <div className="md:w-full md:h-full w-full h-full  md:p-15 p-15">
        <HeaderComp name="Trending movies" />
        <FiltersData data={data} />
      </div>
    </>
  );
};

export default MovieApi;
