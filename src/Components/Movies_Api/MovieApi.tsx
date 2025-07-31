import { useMoiveData } from "../Queries";
import HeaderComp from "../CommonComp/HeaderComp";
import FiltersData from "../CommonComp/FiltersData";
import SkeletonCard from "../Sekeleton/Sekeleton";

const MovieApi = () => {
  const { isPending, error, data } = useMoiveData();

  if (isPending) return <SkeletonCard />;

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
