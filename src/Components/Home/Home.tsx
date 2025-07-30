import MovieApi from "../React-Query/MovieApi";
import ReactQuery from "../React-Query/ReactQuery";
import Series from "../React-Query/Series";
import TopMovie from "../React-Query/TopMovie";
import Trending from "../React-Query/Trending";

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
