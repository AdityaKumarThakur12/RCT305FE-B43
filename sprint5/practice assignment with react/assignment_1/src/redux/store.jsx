import { legacy_createStore, applyMiddleware } from 'redux';
import todosReducer from './reducer';
import { localStorageMiddleware, reHydrateStore } from '../local';

const store = legacy_createStore(
  todosReducer,
  { todos: reHydrateStore() },
  applyMiddleware(localStorageMiddleware)
);

export default store;
