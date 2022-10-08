import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducer, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const sagaMiddleWare = createSagaMiddleware();

function* watcherSaga() {

}

const storeInstance = createStore(
    combineReducer({
        
    }),
    applyMiddleware(sagaMiddleWare,logger)
);

sagaMiddleWare.run(watcherSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
