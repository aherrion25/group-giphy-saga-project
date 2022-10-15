import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { useSelector, useDispatch, useState } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

const getFavs = (state = [], action) =>{
    switch(action.type){
        case 'SET_FAVS':
            return action.payload;
        default:
            return state;
    }
}

function* fetchFavs(){
    try{
        const favResponse = yield axios.get('api/favorite');
        console.log('fav response', favResponse.data);
        yield put({type: 'SET_FAVS', payload: favResponse.data})
    } catch(error) {
        console.log('error in fetchFavs', error);
    }
}

const sagaMiddleWare = createSagaMiddleware();

function* watcherSaga() {
    yield takeEvery('FETCH_FAVS', fetchFavs)
    yield takeEvery ('SEARCH_GIFS', fetchAllGifs);
}
//Get gifs from database or server?
function* fetchAllGifs(action) {
    try {
        const gifSearch = yield axios.get(`/api/category/${action.payload}`);
        console.log('get search: ', gifSearch.data);
        yield put ({type: 'SET_GIFS', payload: gifSearch.data});
    }catch{
        console.log('Error in fetchGifs');
    }
}

// Store gifs from fetch
const gifs = (state = [], action) =>{
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload;
            default :
            return state;
    }

}

const storeInstance = createStore(
    combineReducers({

        getFavs,
        gifs,



    }),
    applyMiddleware(sagaMiddleWare,logger)
);

sagaMiddleWare.run(watcherSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
