/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import {
  moviesApi,
  moviesTopRatedApi,
  moviesUpcomingApi,
} from "../services/TmdbAPI";

export const useFetchMovies = (page: number, location: string) => {
  if (location === "/") {
    const { data: movies = [], isLoading } = useQuery<IMovies[], boolean>(
      ["movie", page],
      () => moviesApi(page),
      {
        refetchOnWindowFocus: false,
      }
    );
    return { movies, isLoading };
  }
  if (location === "/top_rated") {
    const { data: movies = [], isLoading } = useQuery<IMovies[], boolean>(
      [`movie-top-rated`, page],
      () => moviesTopRatedApi(page),
      {
        refetchOnWindowFocus: false,
      }
    );
    return { movies, isLoading };
  }
  if (location === "/upcoming") {
    const { data: movies = [], isLoading } = useQuery<IMovies[], boolean>(
      [`movie-upcoming`, page],
      () => moviesUpcomingApi(page),
      {
        refetchOnWindowFocus: false,
      }
    );
    return { movies, isLoading };
  }
  return { movies: [], isLoading: false };
};
