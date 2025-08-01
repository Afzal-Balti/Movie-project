import { useParams } from "react-router-dom";
import {
  useAllMovieDetail,
  useSimilarMovies,
  type MovieItem,
} from "../Queries";
import SkeletonCard from "../Sekeleton/Sekeleton";

interface Params {
  id: string;
  [key: string]: string | undefined;
}

function SimilarMovie() {
  const { id } = useParams<Params>();
  const numericId = Number(id);
  const page = 1;

  console.log("THE USE PARAMS ID  DATA IS RENDER -------------------- ", id);
  const {
    data: similarMovies,
    isPending: isSimilarLoading,
    error: similarError,
  } = useSimilarMovies(numericId, page);

  const {
    data: movieDetail,
    isPending: isDetailLoading,
    error: detailError,
  } = useAllMovieDetail(numericId);
  if (isSimilarLoading) return "Loading......";

  if (similarError) return "An error has occurred: " + similarError.message;

  console.log("Similar data movies ---------- ", similarMovies);

  // MOVIE DETALIED

  if (isDetailLoading) return <SkeletonCard />;

  if (detailError) return "An error has occurred: " + detailError.message;

  console.log("Movie Detailed Movie Detailed movies ---------- ", movieDetail);

  // console.log("ALL MOVIE DEATILED ", data);

  return (
    <div>
      <div key={movieDetail.id} className="relative w-full h-screen">
        <img
          className="md:w-full w-full md:h-full h-full object-cover object-center "
          src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`}
          alt={`${movieDetail.title} Backdrop`}
        />

        <div className="md:w-full w-60  ">
          <div
            data-aos="fade-down"
            className="md:w-1/2  md:mx-[30%] mx-0 md:h-1/2 h-full w-full absolute -inset-0  md:p-25 p-5 md:mt-50 mt-16 overflow-y-hidden overflow-x-hidden text-white "
          >
            <h2 className="sm:text-4xl xs:text-3xl text-[28.75px] font-extrabold sm:leading-[1.2] xs:leading-normal leading-snug text-secColor sm:max-w-[420px] xs:max-w-[320px] max-w-[280px]">
              {movieDetail.original_title}
            </h2>
            {
              <p className="w-full flex flex-row gap-8 py-5">
                {" "}
                {movieDetail.genres?.map((item) => (
                  <div className="text-lg w-25 h-10 text-center py-1 rounded-full border-2 border-solid">
                    {item.name}
                  </div>
                ))}
              </p>
            }
            <p
              data-aos="fade-down"
              className="md:w-full overflow-y-hidden text-xl py-10 "
            >
              {movieDetail.overview}
            </p>
            <div className="w-full flex flex-row gap-10">
              {movieDetail.production_companies?.map((item) => (
                <div className="w-10 h-10 ">
                  <img
                    className=" rounded-full "
                    src={`https://image.tmdb.org/t/p/w1280${item.logo_path}`}
                  ></img>
                  <p className="py-3">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="zoom-in-down "
            className="md:w-80 md:h-40 max-md:hidden  absolute inset-60  "
          >
            <img
              className="w-full h-auto rounded-2xl justify-end"
              src={`  https://image.tmdb.org/t/p/w1280${movieDetail.poster_path}`}
            />
          </div>
        </div>
      </div>

      <div className="md:w-full w-full md:h-auto  h-auto ">
        {movieDetail.videos?.results.map((item) => (
          <div className="md:w-full w-full  md:py-10  py-5 md:p-80 p-8 justify-center  ">
            <p className="font-quicksand md:w-full w-50 md:text-3xl text-xl  md:py-3 py-2">
              {item.name}
            </p>
            <iframe
              width="100%"
              height="100%"
              className="aspect-video ... rounded-3xl "
              src={`https://youtube.com/embed/${item.key}`}
            ></iframe>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex flex-wrap overflow-x-scroll no-scrollbar gap-14 md:p-14 p-22   ">
        <h2 className="w-full mt-24 font-bold text-2xl font-quicksand hover:underline decoration-red-500 decoration-6  cursor-pointer">
          Similar Movies
        </h2>
        {similarMovies?.results?.map((items: MovieItem) => (
          <div className="flex shrink-0 " key={items.id}>
            <div className="w-full h-full">
              <img
                className="w-60 h-100 rounded-xl object-cover cursor-pointer  "
                src={`https://image.tmdb.org/t/p/w1280${items.backdrop_path}`}
                alt={`${items.title} Backdrop`}
              />

              <div className=" md:w-full w-50 m-4 text-center text-md ">
                <h3>{items.original_title}</h3>
              </div>
              <div data-aos="" className="w-full   ">
                <img
                  className="w-60 h-100 rounded-xl object-cover cursor-pointer  justify-end"
                  src={`https://image.tmdb.org/t/p/w1280${items.poster_path}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarMovie;
