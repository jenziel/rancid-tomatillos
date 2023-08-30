import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect } from "react";

function MovieDetails(props) {
  return (
    <div className="unique-movie-page">
      <main className='App'>
        <div className='unique-movie'>
        {props.movie ? (
         <>
          <div className='unique-movie'>
            <div className='vignette-container'>
              <img
                src={props.movie.movie.backdrop_path}
                alt={props.movie.movie.title}
                className='backdrop vignette-image'
              />
              <div className='vignette-overlay'></div>
            </div>
            <div className='lower-section'>
              <div className='left-side'>
                <img
                  src={props.movie.movie.poster_path}
                  alt={props.movie.movie.title}
                  className='movie-poster'
                />
              </div>
              <div className='right-side'>
                <h2>{props.movie.movie.title}</h2>
                <p className='tagline'>{props.movie.movie.tagline}</p>
                <p className='overview'>{props.movie.movie.overview}</p>
                <p>{props.movie.movie.average_rating}/10 stars</p>
                <p>Released: {props.movie.movie.release_date}</p>
                <p className='budget'>Budget: ${props.movie.movie.budget} million</p>
                <p className='genres'>Genres: {props.movie.movie.genres}</p>
                <p className='revenue'>Gross Revenue: ${props.movie.movie.revenue}</p>
                <p className='runtime'>Runtime: {props.movie.movie.runtime} minutes</p>
    
              </div>
            </div>
          </div>
    
    
          </>
        ) : (
          <p>Loading...</p>
        )}
        </div>
      </main>
    </div>
  );
}
export default MovieDetails;
