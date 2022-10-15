import axios from 'axios';
import react from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Search () {
    const [search, setSearch] = useState('');
    
    
    const dispatch = useDispatch()

    const searchGiphy = () => {
        axios.get(`api/search/${search}`).then(response => {
            setSearch(response.data.data.images.downsized_medium.url)
        }).catch (error => {
            console.log(error);
            alert('something went wrong')
        })
    }


    return ( 
    
        <div>
            <input type='text' value={search} onChange={event => setSearch(event.target.value)} />
            <button>Search</button>
        </div>
    
    )
   
}

export default Search;