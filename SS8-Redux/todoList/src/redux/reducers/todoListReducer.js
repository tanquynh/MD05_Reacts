import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../action/todoList";

const initialState = [];

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((todo, index) => index !== action.payload);
        case EDIT_TODO:
            return state.map((todo, index) =>
                index === action.payload.index ? action.payload.newValue : todo
            );
        default:
            return state;
    }
};

export default todoListReducer;