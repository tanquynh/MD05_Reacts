import { combineReducers, createStore } from "redux";

import countReducer from "./reducers/countReducer";

const store = createStore(combineReducers({
  count: countReducer
}))
export default store;