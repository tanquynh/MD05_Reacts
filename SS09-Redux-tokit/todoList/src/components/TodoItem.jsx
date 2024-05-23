import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from '../todosSlice/todoSlice';
import TodoAdd from './TodoAdd';

function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const handleSave = (text) => {
        dispatch(editTodo({ id: todo.id, text }));
        setIsEditing(false)
    }
    return (
        <li>
            {isEditing ? (<TodoAdd
                editMode={true}
                currentText={todo.text}
                onSave={handleSave}
            />) : (
                <>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </>
            )}

        </li>
    )
}

export default TodoItem
