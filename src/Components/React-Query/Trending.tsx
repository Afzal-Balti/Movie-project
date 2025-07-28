import { useTendingSeries } from "../Queries";
import HeaderComp from "../CommonComp/HeaderComp";
import FiltersData from "../CommonComp/FiltersData";

function Trending() {
  const { isPending, error, data } = useTendingSeries();
  console.log("Top Movie api   is  ------------ ", data);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="w-full h-full p-15">
        <HeaderComp name="Top rated series" />
        <FiltersData data={data} />
      </div>
    </>
  );
}

export default Trending;
