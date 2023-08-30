import React, { useState } from "react";
import "./MovieCard.css";
import {  BrowserRouter, Link } from 'react-router-dom';

function MovieCard({ title, posterPath, id }) {
  return (
    <Link to={`/movie/${id}`}>
       <img className='original-view' src={posterPath} alt={title} key={id} id={id} />
    </Link>  
  )
}

export default MovieCard;





















  // const formatDate = (releaseDate) => {
  //   let formattedMonth;
  //   const months = [
  //     { name: "Jan", num: 1 },
  //     { name: "Feb", num: 2 },
  //     { name: "March", num: 3 },
  //     { name: "April", num: 4 },
  //     { name: "May", num: 5 },
  //     { name: "June", num: 6 },
  //     { name: "July", num: 7 },
  //     { name: "Aug", num: 8 },
  //     { name: "Sept", num: 9 },
  //     { name: "Oct", num: 10 },
  //     { name: "Nov", num: 11 },
  //     { name: "Dec", num: 12 },
  //   ];
  //   const newDate = parseInt(releaseDate.substring(5, 7));
  //   months.forEach((month) => {
  //     console.log(newDate);
  //     if (month.num === newDate) {
  //       formattedMonth = month.name;
  //     }
  //   });

  //   const justTheYear = parseInt(releaseDate.substring(0, 4), 10);
  //   console.log(newDate, "newDate");
  //   console.log("month", newDate[1]);
  //   return `${formattedMonth} ${justTheYear}`;
  //   // return newDate
  // };
  // const formattedRating = (rating) => {
  //   const wholeNumber = Math.round(rating);
  //   return wholeNumber;
  // };


