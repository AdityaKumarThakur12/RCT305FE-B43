import { legacy_createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import dataReducer from './reducer';

const store = legacy_createStore(dataReducer, applyMiddleware(thunk));

export default store;
