
import Movie from './movie'

const Movies = ({ movies, favouriteHandler, favText }) => {
    return (
        <div className='row'>
            {movies ? movies.map(movie => {
                return <Movie
                    poster={movie.Poster}
                    key={movie.imdbID}
                    Title={movie.Title}
                    favHandler={favouriteHandler}
                    favText={favText}
                />
            }
            ) : null}
        </div>
    )
}
export default Movies