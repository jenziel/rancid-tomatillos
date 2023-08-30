import React from 'react';
import MovieCard from '../MovieCards/MovieCard';
import './Movies.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movies({ movies, getMovieById }) {
  const movieType = useParams().id;

  return (
    <div> 
    <h1>Movies</h1>
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard
        title={movie.title}
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
        getMovieById={getMovieById}
        />
        ))}
    </div>
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  getMovieById: PropTypes.func.isRequired
};

export default Movies;
