import { useMoiveData } from "../Queries";
import HeaderComp from "../CommonComp/HeaderComp";
import FiltersData from "../CommonComp/FiltersData";

function MovieApi() {
  const { isPending, error, data } = useMoiveData();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="w-full h-full p-15">
        <HeaderComp name="Trending movies" />
        <FiltersData data={data} />
      </div>
    </>
  );
}

export default MovieApi;
