import "./App.css";
import { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueMovie, setUniqueMovie] = useState(null);

  function getMovieData() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }

  function getMovieById(id) {
    setIsLoading(true)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("unique movie", data);
        setUniqueMovie(data)
        setIsLoading(false);
      })
      // .then(() => console.log('unique movie state', uniqueMovie))
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    console.log("uniqueMovie state updated:", uniqueMovie);
  }, [uniqueMovie]);

  return (
    <div>
      <main className='App'>
      <Header />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route
              path='/'
              element={
                <Movies movies={movies.movies} getMovieById={getMovieById} />
              }
            ></Route>
            <Route path="/movies/:id" element={<MovieDetails movie={uniqueMovie} />}></Route>   
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
