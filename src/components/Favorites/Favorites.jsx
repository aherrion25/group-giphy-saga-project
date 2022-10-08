import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

function Favorites() {
    const favorites = useSelector(state => state.fetchFavorites);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        // dispatch getFavs and getCategories
    })

    return (
        <div>
            {favorites.map(fav => (

            ))}
        </div>
    );
}

export default Favorites;