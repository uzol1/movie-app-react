
const SearchBox = (props) => {
    return (
        <div className='col col-sm-2' style={{ padding: '9px' }}>
            <input
                type="text"
                placeholder="search"
                className='form-control'
                onChange={props.search}
                value={props.value}
            />
        </div>
    )
}
export default SearchBox