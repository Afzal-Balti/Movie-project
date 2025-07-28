import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// MOVIE TENDING API IS ---------------
export type MovieItem = {
  id: number;
  title: string;
  original_title: string;
  original_name: string;
  backdrop_path: string | null;
};

interface TrendingResponse {
  values: MovieItem[];
  page: number;
  total_pages: number;
}

const getTrendingMovies = async () =>
  await axios.get(`${BASE_URL}/trending/tv/day?language=en-US&page=1`, {
    params: {
      api_key: API_KEY,
    },
  });

export function useTrendingMovie() {
  return useQuery<TrendingResponse>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });
}

// SERIES TENDING API IS ---------------

const getSeriesData = async () =>
  await axios.get(
    `${BASE_URL}/guest_session/guest_session_id/rated/tv?language=en-US&page=1&sort_by=created_at.asc&page=1'`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

export const useSeriesData = () => {
  return useQuery<TrendingResponse>({
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
  await axios.get(`${BASE_URL}/tv/popular?language=en-US&page=1`, {
    params: {
      api_key: API_KEY,
    },
  });

export const useTendingSeries = () => {
  return useQuery<TrendingResponse>({
    queryKey: ["Trend"],
    queryFn: getTendingData,
  });
};

// ALL MOVIE PAGE IS RENDER

const getAllMovie = async (page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    }
  );
  console.log("API response data:", response.data);
  return response.data;
};

export const useAllMovieData = (page: number) => {
  return useQuery<TrendingResponse>({
    queryKey: ["moviekey", page],
    queryFn: () => getAllMovie(page),
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
