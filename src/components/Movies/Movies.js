import MovieCard from '../MovieCards/MovieCard'
import './Movies.css';
// import dummyMovies from '../App/App'
function Movies({movies}){

    const movieCards = movies.map(movie => {
    return (
        <MovieCard
        title={movie.title}
        posterPath = {movie.poster_path}
        backdropPath = {movie.backdrop_path}
        rating={movie.average_rating}
        releaseDate = {movie.release_date}
        id={movie.id}  // id is for our use 
        key={movie.id}  // unique key props
        // the key is for React's use. 
      />
    )
    })
    return (
        <div className='movies-container'>
            {movieCards}
        </div>

    )
}

export default Movies;