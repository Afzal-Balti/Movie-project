import MovieApi from "../Movies_Api/MovieApi";
import ReactQuery from "../Movies_Api/ReactQuery";
import Series from "../Movies_Api/Series";
import TopMovie from "../Movies_Api/TopMovie";
import Trending from "../Movies_Api/Trending";

function Home() {
  return (
    <>
      <ReactQuery />
      <MovieApi />
      <TopMovie />
      <Trending />
      <Series />
    </>
  );
}

export default Home;
