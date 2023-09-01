import "./App.css";
import { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header";
import { Link, Routes, Route } from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

function App() {
  const [movies, setMovies] = useState([]);
  const [newError, setError] = useState(null);
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
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/3`)
      .then((response) =>  {
        console.log("response", response)
        if (!response.ok){
          throw new Error(`${response.status} Page ${response.statusText}`)
        }
        return response.json()})
      .then((data) => {
        console.log("unique movie", data.movie);
        setUniqueMovie(data.movie);
        setIsLoading(false);
      })
      // .then(() => console.log('unique movie state', uniqueMovie))
      .catch((response) => { 
     
        console.log('newError', response)
        setError(response || "failed to fetch movie!");
        console.log("newError2", response);
      });
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    console.log("uniqueMovie state updated:", uniqueMovie);
  }, [uniqueMovie]);

  useEffect(() => {
   console.log("updated error msg newError3", newError)
  }, [newError]);

  const resetError = () => {
    setError(null);
  };

  const resetLoading = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <main className="App">
        <Header />
        {newError ? (
          <ErrorComponent message={newError} resetError={resetError} resetLoading={resetLoading}/>
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
             <Route path="*" element={<ErrorComponent message={newError} resetError={resetError}/>} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
