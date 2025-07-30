import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// MOVIE TENDING API IS ---------------
export type MovieItem = {
  poster_path: string;
  id: number;
  title: string;
  original_title: string;
  original_name: string;
  backdrop_path: string | null;
};

interface TrendingResponse {
  production_companies: string;
  logo_path: string;
  genres: string;
  title: string;
  id: number | null | undefined;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  original_title: string;
  values: MovieItem[];
  page: number;
  total_pages: number;
}

const getTrendingMovies = async () =>
  await axios.get<TrendingResponse>(
    `${BASE_URL}/trending/tv/day?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

export function useTrendingMovie() {
  return useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });
}

// SERIES TENDING API IS ---------------

const getSeriesData = async () =>
  await axios.get<TrendingResponse>(
    `${BASE_URL}/guest_session/guest_session_id/rated/tv?language=en-US&page=1&sort_by=created_at.asc&page=1'`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

export const useSeriesData = () => {
  return useQuery({
    queryKey: ["Trend"],
    queryFn: getSeriesData,
  });
};

//MOVIE API IS START NOW ----------------

const getMovieData = async () =>
  await axios.get<TrendingResponse>(
    `${BASE_URL}/movie/top_rated?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

export const useMoiveData = () => {
  return useQuery({
    queryKey: ["netfilix"],
    queryFn: getMovieData,
  });
};

// Tending seris API DATA -----------

const getTendingData = async () =>
  await axios.get<TrendingResponse>(
    `${BASE_URL}/tv/popular?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

export const useTendingSeries = () => {
  return useQuery({
    queryKey: ["Trend"],
    queryFn: getTendingData,
  });
};

// ALL MOVIE PAGE IS RENDER

const getAllMovie = async (page: number, search: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  let url = `https://api.themoviedb.org/3/discover/tv?language=en-US&page=${page}&api_key=${apiKey}`;

  if (search) {
    url = `https://api.themoviedb.org/3/search/tv?language=en-US&page=${page}&api_key=${apiKey}&query=${encodeURIComponent(
      search
    )}`;
  }

  const response = await axios.get(url);
  console.log("API response data:", response.data);
  return response.data;
};

export const useAllMovieData = (page: number, search: string) => {
  return useQuery<TrendingResponse>({
    queryKey: ["moviekey", page, search],
    queryFn: () => getAllMovie(page, search),
  });
};

// Series ALL season Api is this

const getAllSeries = async (page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    }
  );
  console.log("API response data:", response.data);
  return response.data;
};

export const useAllSeriesData = (page: number) => {
  return useQuery<TrendingResponse>({
    queryKey: ["moviekey", page],
    queryFn: () => getAllSeries(page),
  });
};

// SIMILAR ALL MOIVES

const getAllSimilarMovies = async (id: number) => {
  console.log("THE VALUE OF SIMILAR DATA IS --------------- ", id);

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    }
  );
  console.log("API Similar Movie  data:", response.data);
  console.log("THE SIMILAR DATA IS --------------- ", id);
  return response.data;
};

export const useSimilarMovies = (id: number, page: number) => {
  return useQuery<TrendingResponse>({
    queryKey: ["similarKey", id, page],
    queryFn: () => getAllSimilarMovies(id),
  });
};

//DETAILED MOVEIS DATA

const getAllMoviesDetail = async (id: number) => {
  console.log(
    "THE VALUE OF MOVIE DEAITLED PARAMS DATA IS --------------- ",
    id
  );

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits/language=en-US`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    }
  );
  console.log("API DETALIED  Movie  data SHWO- ----:", response.data);
  console.log("THE SIMILAR DATA IS --------------- ", id);
  return response.data;
};

export const useAllMovieDetail = (id: number) => {
  return useQuery<TrendingResponse>({
    queryKey: ["similarKey", id],
    queryFn: () => getAllMoviesDetail(id),
  });
};
