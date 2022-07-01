import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { GridMovie } from "./components/GridMovie";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { TheMovie } from "./components/TheMovie";
import { useFetchMovies } from "./hooks/useFecthMovies";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  const { movies, isLoading } = useFetchMovies(page);

  return (
    <div className="App">
      <Router>
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
          <Route path="/:title/:imdbID" element={<TheMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
