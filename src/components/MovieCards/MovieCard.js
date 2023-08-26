import React, { useState } from 'react';
import './MovieCard.css';

function MovieCard({ title, posterPath, backdropPath, rating, releaseDate }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandedView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`movie-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpandedView}>
      <img src={posterPath} alt={title} />
      {isExpanded && (
        <div className="expanded-content">
          <h3>{title}</h3>
          <img src={backdropPath} alt={title} />
          <p>{rating} stars</p>
          <p>{releaseDate}</p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;