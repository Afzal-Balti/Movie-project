import { useSeriesData } from "../Queries";
import HeaderComp from "../CommonComp/HeaderComp";
import FiltersData from "../CommonComp/FiltersData";
import SkeletonCard from "../Sekeleton/Sekeleton";

function Series() {
  const { isPending, error, data } = useSeriesData();

  if (isPending) return <SkeletonCard />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="w-full h-full p-15">
        <HeaderComp name="Trending series" />
        <FiltersData data={data} />
      </div>
    </>
  );
}

export default Series;
