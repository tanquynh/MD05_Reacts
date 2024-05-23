import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import todoListReducer from "./reducers/todoListReducer"
const store = createStore(combineReducers({
    todos : todoListReducer
    // count: countReducer

}))

export default store;