import "./App.css";
import { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header";
import Layout from "../Layout/Layout"
import circle2 from "../../images/circle2.png";
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
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("unique movie", data);
        setUniqueMovie(data);
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
      {/* <Header /> */}
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
            
            <Route
              path='/movies/436270'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/724495'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/1013860'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/505642'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/934641'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/829799'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/972313'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/882598'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            <Route
              path='/movies/830784'
              element={<MovieDetails movie={uniqueMovie} />}
            ></Route>
            
            {/* <Route path="/movies/:id" element={<MovieDetails movie={uniqueMovie} />}></Route> */}
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
