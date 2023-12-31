import { useParams, NavLink } from "react-router-dom";
import "./MovieDetails.css";
import PropTypes from "prop-types";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

function MovieDetails({ movie, movies, resetError, resetLoading }) {
  const { id } = useParams();
  const handleReset = () => {
    resetError();
    resetLoading();
  };

const getYearFromDate = (releaseDate) =>  {
    const year = parseInt(releaseDate.substring(0, 4), 10); 
    return year;
  }

  const idAsNumber = parseInt(id);

  if (id) {
    var justIds = movies.map((movie) => {
      return movie.id;
    });
  }

  if (!justIds.includes(idAsNumber)) {
    return (
      <ErrorComponent resetError={resetError} resetLoading={resetLoading} />
    );
  } else if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div className='unique-movie-page'>
      <main className='App'>
        <div className='unique-movie'>
          <div className='hero-image'>
            <NavLink to='/' className='nav'>
              <div onClick={handleReset} className='back-button'>
                <button>
                  <p>← Return to Home</p>
                </button>
              </div>
            </NavLink>

            <div className='vignette-container'>
              <img
                src={movie.backdrop_path}
                alt={movie.title}
                className='backdrop vignette-image'
              />
              <div className='vignette-overlay'></div>
            </div>
          </div>
          <div className='lower-section'>
            <div className='left-side'>
              <img
                src={movie.poster_path}
                alt={movie.title}
                className='movie-poster'
              />
            </div>
            <div className='right-side'>
              <h2>{movie.title}</h2>
              <p className='tagline'>{movie.tagline}</p>
              <p className='overview'>{movie.overview}</p>
              <p>{movie.average_rating}/10 stars</p>
              <p className='release-date'>Released: {getYearFromDate(movie.release_date)}</p>
              <p className='budget'>Budget: ${movie.budget} million</p>
              <p className='genres'>Genres: {movie.genres.join(' ')}</p>
              <p className='revenue'>Gross Revenue: ${movie.revenue}</p>
              <p className='runtime'>Runtime: {movie.runtime} minutes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    movie: PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      tagline: PropTypes.string,
      overview: PropTypes.string,
      average_rating: PropTypes.number,
      release_date: PropTypes.string,
      budget: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      revenue: PropTypes.number,
      runtime: PropTypes.number,
    }),
  }),
};
