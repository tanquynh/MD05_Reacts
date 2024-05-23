import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAddTodo } from '../../redux/action/todoList'

function Input() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    console.log(inputValue);
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(handleAddTodo(inputValue));
      setInputValue('');
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Input
