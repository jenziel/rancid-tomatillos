import "./App.css";
import { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import Header from '../Header/Header';
import circle2 from '../../images/circle2.png';
// import movieData from '../../data/movieData';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function getMovieData() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      setMovies(data);
      setIsLoading(false);
    })
    .catch(error => { 
      setError(error.message);
      setIsLoading(false);
    }) 
  }
  
  useEffect(() => {
    getMovieData()
  }, [])

  return (
  <div>
     <Header />
    <main className='App'>
      <h1>Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Movies movies={movies} />
          )}
      
    </main>
  </div>
    
  );
  }
  
export default App;

// function App(){
//   const dummyIdeas = [
//         { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
//         { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
//         { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
//     ]
//   const [ideas, setIdeas] = useState(dummyIdeas)

//   return(
//   <main className='App'>
//       <h1>IdeaBox</h1>
// <Form addIdea={addIdea}/>
// <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
//     </main>
//   )
// }

// export default App;
