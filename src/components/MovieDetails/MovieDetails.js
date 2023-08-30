import { useParams } from 'react-router-dom';
import './MovieDetails.css'
function MovieDetails({ movies, id }) {
    // console.log('props', props);
    // console.log('movies', movies);
    console.log('useParams', useParams())
    const specificMovie = useParams().id;
    return (
      <div className="movies-container">
        {movies.find((movie) => (
          <MovieCard
            title={movie.title}
            backdropPath={movie.backdrop_path}
            posterPath={movie.poster_path}
          
            rating={movie.average_rating}
            releaseDate={movie.release_date}
            id={movie.id}
            key={movie.id}
  
          />
        ))}
      </div>
    );
  }
  export default MovieDetails