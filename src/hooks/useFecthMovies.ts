import {useQuery } from "react-query"
import {  moviesSearchApi,  moviesTopRatedApi, moviesUpcomingApi } from "../services/TmdbAPI"
import { useEffect } from "react"

export const useFetchMovies = (page: number, location: string, searchText: string | null ) => {
  let queryKey = ""
  let fetchFunction = moviesSearchApi

  if (location === "/") {
    queryKey = String(["movie", page, searchText])
  } else if (location === "/top_rated") {
    queryKey = String([`movie-top-rated`, page])
    fetchFunction = moviesTopRatedApi
  } else if (location === "/upcoming") {
    queryKey = String([`movie-upcoming`, page])
    fetchFunction = moviesUpcomingApi
  } 

  const { data: movies = [], isLoading, refetch } = useQuery<IMovies[], boolean>(
    queryKey,
    () => fetchFunction(page, searchText),
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * (60 * 1000), // 10 mins
    }
  )

  useEffect(() => {
    refetch()
  }, [location, refetch, searchText, page])

  return { movies, isLoading, refetch}
}
