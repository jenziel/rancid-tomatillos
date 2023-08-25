import './MovieCard.css'

function MovieCard({title, posterPath, backdropPath, rating, releaseDate }){
    console.log(title, "title")
    return (
        <div className='movie-card'>
            <h3>{title}</h3>
            <img src={backdropPath}/>
            <img src={posterPath}/>
            <p>{rating} stars</p>
            <p>{releaseDate}</p>
        </div>
    )
}
export default MovieCard;