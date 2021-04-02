/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: SOTRE
 * Description: Redux store
 * * */
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    if (logger) {
        middleware.push(logger);
    }
}
const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

export default store;
