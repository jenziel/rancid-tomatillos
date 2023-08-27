import React, { useState } from "react";
import "./MovieCard.css";
import Header from "../Header/Header";
import "../Header/Header.css";

function MovieCard({ title, posterPath, backdropPath, rating, releaseDate }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandedView = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (releaseDate) => {
    let formattedMonth;
    const months = [
      { name: "Jan", num: 1 },
      { name: "Feb", num: 2 },
      { name: "March", num: 3 },
      { name: "April", num: 4 },
      { name: "May", num: 5 },
      { name: "June", num: 6 },
      { name: "July", num: 7 },
      { name: "Aug", num: 8 },
      { name: "Sept", num: 9 },
      { name: "Oct", num: 10 },
      { name: "Nov", num: 11 },
      { name: "Dec", num: 12 },
    ];
    const newDate = parseInt(releaseDate.substring(5, 7));
    months.forEach((month) => {
      console.log(newDate);
      if (month.num === newDate) {
        formattedMonth = month.name;
      }
    });

    const justTheYear = parseInt(releaseDate.substring(0, 4), 10);
    console.log(newDate, "newDate");
    console.log("month", newDate[1]);
    return `${formattedMonth} ${justTheYear}`;
    // return newDate
  };
  const formattedRating = (rating) => {
    const wholeNumber = Math.round(rating);
    return wholeNumber;
  };

  return (
    <div
      className={`movie-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpandedView}
    >
      {isExpanded && (
        <div className='expanded-content'>
          <div className='upper-section'>
            <img src={backdropPath} alt={title} className='backDrop' />
          </div>
          <div className='lower-section'>
            <div className='left-side'>
              <img
                src={posterPath}
                alt={title}
                className='expanded-card-movie-poster'
              />
            </div>
            <div className='right-side'>
              <h2>{title}</h2>
              <p>{formattedRating(rating)}/10 stars</p>
              <p>Released: {formatDate(releaseDate)}</p>
            </div>
          </div>
        </div>
      )}
      {!isExpanded && (
        <img className='original-view' src={posterPath} alt={title} />
      )}
    </div>
  );
}

export default MovieCard;
