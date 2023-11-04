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

  const location = useLocation()
  const id = location.pathname.split('/')[2] ?? null

  const { movies = [], isLoading, refetch } = useFetchMovies(page, location.pathname, searchText)
 
  const { data: similarMovie = [], isLoading: onLoad } = useQuery([`similar-movie-${id}`, page], () =>  moviesSimilarApi(page,id),
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * (60 * 1000), // 10 mins,
      enabled: !!id
    })

  return (
    <div>
      <Header />
      <NavBar />

      <Routes>
      <Route path="/similar/:id" element={<GridMovie refetch={refetch} setSearchText={setSearchText} movies={similarMovie} isLoading={onLoad} page={page} setPage={setPage} />} /> 
        <Route path="/movie/:imdbID" element={<TheMovie />} />
        <Route path="/" element={<GridMovie refetch={refetch} isSearchBarIsVisible setSearchText={setSearchText} movies={movies} isLoading={isLoading} page={page} setPage={setPage}/>}/>
        <Route path="/top_rated"  element={<GridMovie refetch={refetch} setSearchText={setSearchText} movies={movies} isLoading={isLoading} page={page} setPage={setPage} />}/>
        <Route path="/upcoming" element={<GridMovie refetch={refetch} setSearchText={setSearchText} movies={movies} isLoading={isLoading} page={page} setPage={setPage} />}/>
      </Routes>
    </div>
  )
}
