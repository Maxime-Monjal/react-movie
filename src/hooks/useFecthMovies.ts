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
  let fetchFunction = (page: number, query: string | null) => Promise.resolve as unknown as Promise<IMovies[]>
  const isHome = locationPathName === "/"
  const isToprated = locationPathName.split("/")[1] === "top_rated"
  const isUpComing = locationPathName.split("/")[1] === "upcoming"

  if (isHome) {
    queryKey = String(["movie", page, searchText])
    fetchFunction = moviesSearchApi
  } else if (isToprated) {
    queryKey = String([`movie-top-rated`, page])
    fetchFunction = moviesTopRatedApi
  } else if (isUpComing) {
    queryKey = String([`movie-upcoming`, page])
    fetchFunction = moviesUpcomingApi
  } 

  const { data: movies = [], isLoading, refetch } = useQuery<IMovies[], boolean>(
    queryKey,
    () => fetchFunction(page, searchText),
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * (60 * 1000), // 10 mins
      enabled: isHome || isToprated || isUpComing
    }
  )

  useEffect(() => {
    refetch()
  }, [locationPathName, refetch, searchText, page, imdbID])

  return { movies, isLoading, refetch}
}
