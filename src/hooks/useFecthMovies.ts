import { useQuery } from "react-query";
import { moviesApi } from "../services/TmdbAPI";

export const useFetchMovies = (page: number) => {
  const { data: movies = [], isLoading } = useQuery<IMovies[], boolean>(
    ["movie", page],
    () => moviesApi(page),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { movies, isLoading };
};
