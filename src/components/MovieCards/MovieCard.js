import './MovieCard.css'

function MovieCard({title, posterPath, backdropPath, rating, releaseDate, id, }){
    console.log(title, "title")
    return (
        <div className='movie-card'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default MovieCard;