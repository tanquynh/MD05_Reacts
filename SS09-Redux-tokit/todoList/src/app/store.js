import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../todosSlice/todoSlice"

export const store = configureStore({
    reducer:{
        todos : todosReducer
    }
})