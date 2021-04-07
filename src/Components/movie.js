import React from 'react'
import AddFavourite from './AddFavComponent'

const Movie = (props) => {
    return (
        <React.Fragment>
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={props.poster} alt='movie' style={{ width: '250px', height: '250px' }}></img>
                <div className='overlay d-flex align-items-center justify-content-center'
                    onClick={() => props.favHandler(props.Title)}
                >
                    <AddFavourite text={props.favText} />
                </div>
            </div>
        </React.Fragment>

    )
}
export default Movie