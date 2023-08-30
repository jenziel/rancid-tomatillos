import React from "react";
import PropTypes from 'prop-types';
import "./MovieCard.css";
import { Link } from 'react-router-dom';

function MovieCard({ title, posterPath, id, getMovieById }) {

  const handleClick = () => {
    getMovieById(id); 
  };

  return (
    <div onClick={handleClick}>
      <Link to={`/movies/${id}`}>
        <img className='original-view' src={posterPath} alt={title} key={id} id={id} />
      </Link> 
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,  
  posterPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, 
  getMovieById: PropTypes.func.isRequired 
};

export default MovieCard;








//   return (
//     <div onClick={handleClick}>
//       <Link to={`/movie/${id}`}>
//         <img className='original-view' src={posterPath} alt={title} key={id} id={id} />
//       </Link> 
//     </div>
     
//   )
// }

// export default MovieCard;





















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


