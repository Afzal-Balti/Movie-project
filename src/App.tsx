import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movie/Movies";
import SeriesTv from "./Components/Series/SeriesTv";
import Layout from "./Components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SimilarMovie from "./Components/React-Query/SimilarMovie";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies name={""} page={0} />} />
          <Route path="tvseries" element={<SeriesTv />} />
          <Route path="similar/:id" element={<SimilarMovie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
