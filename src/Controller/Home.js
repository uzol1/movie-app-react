
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import SearchBox from '../Components/SearchBox'
import Movies from '../Components/movies'

const Home = (props) => {
    const [movies, setmovie] = useState([])
    const [favourite, setfavourite] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${searchValue ? searchValue : 'star wars'}&apikey=3d018ec`).then(response => {
            setmovie(response.data.Search)

        })
    }, [searchValue])

    const searchHandler = (event) => {
        setSearchValue(event.target.value)
    }

    const addFavHandler = (Title) => {
        const fav = movies.filter((movie) => {
            return movie.Title === Title
        })
        setfavourite([...favourite, ...fav])
    }
    const deleteFavHandler = (title) => {
        const favourites = [...favourite]
        const deleteFav = favourites.filter((favourite) => {
            return favourite.Title !== title
        })
        setfavourite([...deleteFav])
    }

    return (
        <React.Fragment>
            <section className="movies" style={{ padding: '20px 0' }}>
                <div className='container-fluid'>
                    <div className="row">
                        <Header name="Movies" />
                        <SearchBox search={searchHandler} value={searchValue} />
                    </div>
                </div>
                <div className='container-fluid movie-app'>
                    <Movies movies={movies} favouriteHandler={addFavHandler} favText="Add to Favourites" />
                </div >
            </section>
            <section className="favourite" style={{ padding: '20px 0' }} >
                <div className='container-fluid'>
                    <div className="row">
                        <Header name="Favourite" />
                    </div>
                </div>
                <div className='container-fluid movie-app'>
                    <Movies movies={favourite} favouriteHandler={deleteFavHandler} favText="Delete Favourite" />
                </div >
            </section>
        </React.Fragment>
    )
}
export default Home