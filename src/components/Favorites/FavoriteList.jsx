import {useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'




function FavoriteList ({fav}) {

    return (
        <div>
            <Card id="favCard" className='card'>
                <CardContent>
                    <img className='favImage' src={fav.url} />
                </CardContent>


            </Card>
        </div>
    )
}
 export default FavoriteList;