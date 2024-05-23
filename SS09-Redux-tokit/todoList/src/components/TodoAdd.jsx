import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../todosSlice/todoSlice';

function TodoAdd({ editMode = false, currentText = '', onSave }) {
    const [text, setText] = useState(currentText);
    const dispatch = useDispatch();
    useEffect(() => {
        setText(currentText);
    }, [currentText])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            if (editMode && onSave) {
                onSave(text)
            } else {
                dispatch(addTodo(text));
            }

            setText('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={editMode ? "Edit todo" : "Add a new todo"}
            />
            <button type="submit">{editMode ? "Save" : "Add"}</button>
        </form>
    )
}

export default TodoAdd
