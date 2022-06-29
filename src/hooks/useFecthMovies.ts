import { useQuery } from "react-query";
import { moviesApi } from "../services/TmdbAPI";

export const useFetchMovies = (page: number) => {
  const { data: movies = [], isLoading } = useQuery<IMovies[], boolean>(
    ["movie", page],
    () => moviesApi(page),
    {
      cacheTime: 5000,
      staleTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  return { movies, isLoading };
};
