/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: ROOT REDUCERS
 * Description: Each reducers combine to create root reducer
 * * */
import { combineReducers } from 'redux';
import appReducer from './app';

const reducers = {
    app: appReducer,
};

export default combineReducers(reducers);
