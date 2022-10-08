import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { useSelector, useDispatch, useState } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

const sagaMiddleWare = createSagaMiddleware();

function* watcherSaga() {

}
const [gifSearch, setgifSearch] = useState('cats');
const [imageUrl, setImageUrl] = useState('');

function* fetchAllGifs() {
    try {
        const gifSearch = yield axios.get('/api/');
        console.log('get search: ', gifSearch.data);
        yield put ({type: 'SET_GIF', payload: gifSearch.data});
    }catch{
        console.log('Error in fetchGifs');
    }
}

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(sagaMiddleWare,logger)
);

sagaMiddleWare.run(watcherSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
