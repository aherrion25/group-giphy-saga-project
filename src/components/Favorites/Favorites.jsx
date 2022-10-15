import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import FavoriteList from './FavoriteList';

function Favorites() {
    const favorites = useSelector(state => state.fetchFavorites);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        // dispatch getFavs and getCategories
    })

    return (
        <div>
            {favorites.map(fav => (
                <FavoriteList fav={fav} />
            ))}
        </div>
    );
}

export default Favorites;