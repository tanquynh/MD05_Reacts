import React from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux';


function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    )
}

export default TodoList
