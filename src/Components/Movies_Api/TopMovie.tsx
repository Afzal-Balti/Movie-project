import { useTrendingMovie } from "../Queries";
import HeaderComp from "../CommonComp/HeaderComp";
import FiltersData from "../CommonComp/FiltersData";
import SkeletonCard from "../Sekeleton/Sekeleton";

function TopMovie() {
  const { isPending, error, data } = useTrendingMovie();
  console.log("Top Movie api   is  ------------ ", data);

  if (isPending) return <SkeletonCard />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="w-full h-full p-15">
        <HeaderComp name="Top rated movies" />
        <FiltersData data={data} />
      </div>
    </>
  );
}

export default TopMovie;
