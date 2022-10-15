import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
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
}

const storeInstance = createStore(
    combineReducers({
        getFavs,

    }),
    applyMiddleware(sagaMiddleWare,logger)
);

sagaMiddleWare.run(watcherSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
