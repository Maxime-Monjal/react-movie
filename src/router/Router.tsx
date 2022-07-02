import { Route, Routes, useLocation } from "react-router-dom";
import { GridMovie } from "../components/GridMovie";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { TheMovie } from "../components/TheMovie";

import { useFetchMovies } from "../hooks/useFecthMovies";
import { useState } from "react";

export default function Router() {
  const [page, setPage] = useState(1);

  const location = useLocation();

  const { movies = [], isLoading } = useFetchMovies(page, location.pathname);

  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <GridMovie
              movies={movies}
              isLoading={isLoading}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/top_rated"
          element={
            <GridMovie
              movies={movies}
              isLoading={isLoading}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/upcoming"
          element={
            <GridMovie
              movies={movies}
              isLoading={isLoading}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/:title/:imdbID" element={<TheMovie />} />
      </Routes>
    </div>
  );
}
