import "./App.css";
import { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header";
import { Link, Routes, Route } from "react-router-dom";
import Error from "../Error/Error";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueMovie, setUniqueMovie] = useState(null);

  function getMovieData() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
      if (!response.ok){
        throw new Error("There was an error")
      }
      return response.json()})
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message || "failed to fetch movies!");
        setIsLoading(false);
      });
  }

  function getMovieById(id) {
    setIsLoading(true);
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) =>  {
        console.log(response)
        if (!response.ok){
          throw new Error("There was an error")
        }
        return response.json()})
      .then((data) => {
        console.log("unique movie", data);
        setUniqueMovie(data);
        setIsLoading(false);
      })
      // .then(() => console.log('unique movie state', uniqueMovie))
      .catch((error) => { 
        console.log(error)
        setError(error.message || "failed to fetch movie!");
        console.log("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    console.log("uniqueMovie state updated:", uniqueMovie);
  }, [uniqueMovie]);

  useEffect(() => {
   console.log("updated error msg", error)
  }, [error]);

  return (
    <div>
      <main className="App">
        <Header />
        {error ? (
          <Error/>
          // <p>ur mom</p>
        ) : isLoading ? (
          <p> Loading... </p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Movies movies={movies.movies} getMovieById={getMovieById} />
              }
            />
            <Route
              path="/movies/:id"
              element={<MovieDetails movie={uniqueMovie} />}
            />
             <Route path="*" element={<Error/>} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
