import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movie/Movies";
import SeriesTv from "./Components/Series/SeriesTv";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies name={""} page={0} />} />
          <Route path="tvseries" element={<SeriesTv />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
