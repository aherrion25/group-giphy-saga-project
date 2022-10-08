import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga';
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

const sagaMiddleWare = createSagaMiddleware();

function* watcherSaga() {

}

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(sagaMiddleWare,logger)
);

sagaMiddleWare.run(watcherSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
