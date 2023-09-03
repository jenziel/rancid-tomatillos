import "./App.css";
import { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { fetchMovieData, fetchSingleMovie }from '../../apiCalls'

function App() {
  const [movies, setMovies] = useState([]);
  const [newError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueMovie, setUniqueMovie] = useState(null);

  function getMovieData() {
    fetchMovieData()
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((response) => {
        setError(response || "failed to fetch movie!");
      });
  }

  function getMovieById(id) {
    setIsLoading(true);
    fetchSingleMovie(id)
      .then((data) => {
        setUniqueMovie(data.movie);
        setIsLoading(false);
      })
      .catch((response) => {
        setError(response || "failed to fetch movie!");
      });
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
  }, [uniqueMovie]);

  useEffect(() => {
  }, [newError]);

  const resetError = () => {
    setError(null);
  };

  const resetLoading = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <main className='App'>
        <Header />
        {newError ? (
          <ErrorComponent
            message={newError}
            resetError={resetError}
            resetLoading={resetLoading}
          />
        ) : isLoading ? (
          <p> Loading... </p>
        ) : (
          <Routes>
            <Route
              path='/'
              element={
                <Movies movies={movies.movies} getMovieById={getMovieById} />
              }
            />
            <Route
              path='*'
              element={
                <ErrorComponent
                  message={newError}
                  resetError={resetError}
                  resetLoading={resetLoading}
                />
              }
            />
            <Route
              path='/movies/:id'
              element={
                <MovieDetails
                  movie={uniqueMovie}
                  movies={movies.movies}
                  resetError={resetError}
                  resetLoading={resetLoading}
                />
              }
            />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
