import { Route, Routes, useLocation } from "react-router-dom"
import { GridMovie } from "../components/GridMovie"
import { Header } from "../components/Header"
import { NavBar } from "../components/NavBar"
import { TheMovie } from "../components/TheMovie"

import { useFetchMovies } from "../hooks/useFecthMovies"
import { useState } from "react"
import { useQuery } from "react-query"
import { moviesSimilarApi } from "../services/TmdbAPI"

export default function Router() {
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState<string | null>(null)

  const locationPathName = useLocation().pathname
  const imdbID = locationPathName.split('/')[2] ?? null

  const { movies = [], isLoading, refetch } = useFetchMovies({page, locationPathName, searchText, imdbID})
 
  const { data: similarMovie = [], isLoading: onLoad } = useQuery([`similar-movie-${imdbID}`, page], () =>  moviesSimilarApi(page,imdbID),
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * (60 * 1000), // 10 mins,
      enabled: !!imdbID
    })

  return (
    <div>
      <Header />
      <NavBar setPage={setPage}/>

      <Routes>
        <Route path="/" key={"Home"} element={<GridMovie refetch={refetch} isSearchBarIsVisible setSearchText={setSearchText} movies={movies} isLoading={isLoading} page={page} setPage={setPage}/>}/>
        <Route path="/top_rated" key={"Top_Rated"}  element={<GridMovie refetch={refetch} setSearchText={setSearchText} movies={movies} isLoading={isLoading} page={page} setPage={setPage} />}/>
        <Route path="/upcoming" key={"Upcoming"} element={<GridMovie refetch={refetch} setSearchText={setSearchText} movies={movies} isLoading={isLoading} page={page} setPage={setPage} />}/>
        <Route path="/similar/:id" key={`movie-similar${imdbID}`} element={<GridMovie refetch={refetch} setSearchText={setSearchText} movies={similarMovie} isLoading={onLoad} page={page} setPage={setPage} />} /> 
        <Route path="/movie/:imdbID" key={`movie-detail${imdbID}`} element={<TheMovie />} />
      </Routes>
    </div>
  )
}
