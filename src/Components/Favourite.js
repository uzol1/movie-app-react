import image from '../assets/images/quintessential.jpeg'
const Favourite = (props) => {
    return (

        <div className='row'>
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={image} alt='movie' style={{ width: '250px', height: '250px' }}></img>
            </div>
        </div>
    )
}
export default Favourite