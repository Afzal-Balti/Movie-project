import axios from "axios";
import { Carousel } from "antd";
import { useQuery } from "@tanstack/react-query";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/700.css";

const API_KEY = "ac7eb1ed292e01b471b7950409fa929f";
const BASE_URL = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  title: string;
  overview: string;
  original_title: string;
  backdrop_path: string | null;
}

const ReactQuery = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () =>
      await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      }),
  });

  console.log("data  is  ------------ ", data);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Carousel autoplay effect="fade">
      {data?.data?.results.slice(0, 4).map((movie: Movie) => (
        <div key={movie.id} className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover object-center"
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={`${movie.title} Backdrop`}
          />
          <div className="md:w-1/2 md:h-1/2 h-full w-full  absolute inset-0 flex flex-col  p-25 md:mt-50 mt-20 text-white ">
            <h2 className="sm:text-4xl xs:text-3xl text-[28.75px] font-extrabold sm:leading-[1.2] xs:leading-normal leading-snug text-secColor sm:max-w-[420px] xs:max-w-[320px] max-w-[280px]">
              {movie.original_title}
            </h2>
            <p className="md:w-full w-80% overflow-y-hidden mt-10 text-xl ">
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ReactQuery;
