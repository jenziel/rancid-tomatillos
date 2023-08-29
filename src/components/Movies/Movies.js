import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCards/MovieCard';
import './Movies.css';

function Movies({ movies }) {
  // console.log('props', props);
  console.log('movies', movies);
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  const toggleExpandedView = (movieId) => {
    setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
  };

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          posterPath={movie.poster_path}
          backdropPath={movie.backdrop_path}
          rating={movie.average_rating}
          releaseDate={movie.release_date}
          id={movie.id}
          key={movie.id}
          isExpanded={expandedMovieId === movie.id}
          toggleExpandedView={() => toggleExpandedView(movie.id)}
        />
      ))}
    </div>
  );
}

export default Movies;