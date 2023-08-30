import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCards/MovieCard';
import './Movies.css';
import { useParams } from 'react-router-dom';

function Movies({ movies, getMovieById }) {
  const movieType = useParams().id;
  console.log('useParams', movieType)
  console.log('useParams', useParams().movie)
  console.log('movies', movies);
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

export default Movies;