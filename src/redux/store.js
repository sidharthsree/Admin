import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddle from 'redux-saga';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddle();
const middlewares = [logger,sagaMiddleware];


const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;