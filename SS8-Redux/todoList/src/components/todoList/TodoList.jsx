import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDeleteTodo, handleEditTodo } from '../../redux/action/todoList';

function TodoList() {
  const [editedValue, setEditedValue] = useState(""); 
  const [editIndex, setEditIndex] = useState(null);
  const [updated, setUpdated] = useState(false);
  const todos = useSelector((state => state.todos) || [])
  const dispatch = useDispatch()

  
  const handleEdit = ( value,index) => {
    setEditIndex(index); 
    setEditedValue(value);
  };

  const handleSaveEdit = () => {
    if (editedValue.trim() !== "") {
      dispatch(handleEditTodo( editedValue ,editIndex)); 
      setEditedValue(""); 
      setEditIndex(null); 
    }
  };
  useEffect(() => {
    setUpdated(!updated);
  }, [todos]);
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
              <button onClick={handleSaveEdit}>Save</button>
            </>
          ) : (
            <>
              <span>{todo}</span>
              <button onClick={() => dispatch(handleDeleteTodo(index))}>Delete</button>
              <button onClick={() => handleEdit(todo,index)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoList
