import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCards/MovieCard';
import './Movies.css';

function Movies({ movies }) {
  console.log('movies', movies);
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          posterPath={movie.poster_path}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </div>
  );
}

export default Movies;