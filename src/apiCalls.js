 const fetchMovieData = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
    }

 const fetchSingleMovie = (id) => {
       return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
    }

    export { fetchMovieData, fetchSingleMovie };