import "./App.css";
import { useState } from "react";
import Movie from "./components/MovieCard/MovieCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/Loading/Loading";

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // fetch function
  async function searchMovies() {}

  function handleSubmit(e) {
    e.preventDefault();
    searchMovies();
  }

  return (
    <div className="App">
      <SearchBar
        handleSubmit={handleSubmit}
        onChange={(e) => setQuery(e.target.value)}
        isLoading={isLoading}
        value={query}
      />
      {isLoading && <Loading />}
      <div className="movies">
        {movies
          ? movies.map((movie) => {
              <Movie key={movie.idMeal} name={movie} />;
            })
          : "No movies found"}
      </div>
      <h1>Receitas</h1>
    </div>
  );
}

export default App;
