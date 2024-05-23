import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleTodo } from '../redux/action/todoAction';

function TodoList() {
    const [input, setInput] = useState('');
    const todos = useSelector((state) => state.todo.todos || []); // Đảm bảo state.todo.todos tồn tại
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim() !== '') {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a todo"
            />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span
                            onClick={() => dispatch(toggleTodo(index))}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default TodoList
