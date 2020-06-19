import { createStore, combineReducers } from 'redux';
import index from '../reducer/index';
import sum from '../reducer/sum';

const rootReducer = combineReducers({ index, sum });

const store = createStore(rootReducer);

export default store;
