import { Route, Routes, useLocation } from "react-router-dom"
import { GridMovie } from "../components/GridMovie"
import { Header } from "../components/Header"
import { NavBar } from "../components/NavBar"
import { TheMovie } from "../components/TheMovie"

import { useFetchMovies } from "../hooks/useFecthMovies"
import { useState } from "react"
import { useQuery } from "react-query"
import { moviesSimilarApi } from "../services/TmdbAPI"
import { Actor } from "../components/Actor"
import { Footer } from "../components/Footer"

export default function Router() {
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState<string | null>(null)

  const locationPathName = useLocation().pathname
  const imdbID = locationPathName.split('/')[2] ?? null
  const isSimilarMovie = locationPathName.split('/')[1] === "similar"

  const { movies = [], isLoading, refetch } = useFetchMovies({page, locationPathName, searchText, imdbID})
 
  const { data: similarMovie = [], isLoading: onLoad } = useQuery([`similar-movie-${imdbID}`, page], () =>  moviesSimilarApi(page,imdbID),
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * (60 * 1000), // 10 mins,
      enabled: !!imdbID && isSimilarMovie
    })

    const setters = {refetch, setSearchText, setPage}

  return (
    <div>
      <Header />
      <NavBar setPage={setPage}/>

      <Routes>
        <Route path="/" key={"Home"} element={<GridMovie setters={setters} movies={movies} isLoading={isLoading} page={page} isSearchBarIsVisible/>}/>
        <Route path="/top_rated" key={"Top_Rated"}  element={<GridMovie setters={setters} movies={movies} isLoading={isLoading} page={page} />}/>
        <Route path="/upcoming" key={"Upcoming"} element={<GridMovie setters={setters} movies={movies} isLoading={isLoading} page={page}  />}/>
        <Route path="/similar/:id" key={`movie-similar${imdbID}`} element={<GridMovie setters={setters} movies={similarMovie} isLoading={onLoad} page={page}  />} /> 
        <Route path="/movie/:imdbID" key={`movie-detail${imdbID}`} element={<TheMovie />} />
        <Route path="/actor/:imdbID" key={`actor-detail${imdbID}`} element={<Actor setters={setters} page={page} />} />
      </Routes>
      <Footer/>
    </div>
  )
}
