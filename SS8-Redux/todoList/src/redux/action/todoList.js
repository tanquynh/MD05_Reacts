export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const handleAddTodo = (value) => {

    return {
        type: ADD_TODO,
        payload: value,
    }
}

export const handleDeleteTodo = (value) => {

    return {
        type: REMOVE_TODO,
        payload: value,
    }
}

export const handleEditTodo = (newValue, index) => {
    return {
        type: EDIT_TODO,
        payload: { newValue, index },
    }
}