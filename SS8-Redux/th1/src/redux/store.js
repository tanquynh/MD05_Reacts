import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const store = createStore(combineReducers({todo : todoReducer})) 
export default store;