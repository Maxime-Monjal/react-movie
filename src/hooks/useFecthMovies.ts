import {useQuery } from "react-query"
import {  moviesSearchApi,  moviesTopRatedApi, moviesUpcomingApi } from "../services/TmdbAPI"
import { useEffect } from "react"


type IUseFectMovies = {
  page: number
  locationPathName: string
  searchText: string | null
  imdbID: string 
}

export const useFetchMovies = ({page, locationPathName, searchText, imdbID}: IUseFectMovies ) => {
  let queryKey = ""
  let fetchFunction = moviesSearchApi

  if (locationPathName === "/") {
    queryKey = String(["movie", page, searchText])
  } else if (locationPathName === "/top_rated") {
    queryKey = String([`movie-top-rated`, page])
    fetchFunction = moviesTopRatedApi
  } else if (locationPathName === "/upcoming") {
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
  }, [locationPathName, refetch, searchText, page, imdbID])

  return { movies, isLoading, refetch}
}
