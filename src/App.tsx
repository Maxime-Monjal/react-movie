import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { GridMovie } from "./components/GridMovie";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { TheMovie } from "./components/TheMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<GridMovie />} />
          <Route path="/topRated" element={<GridMovie />} />
          <Route path="/:imdbID" element={<TheMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
