import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./reducer1"; 
import quizReducer from "./reducer2";  

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
