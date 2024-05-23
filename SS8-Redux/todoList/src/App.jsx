import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventCount from './components/EventCount'
import NumberCount from './components/NumberCount'
import Input from './components/todoList/Input'
import TodoList from './components/todoList/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* //   <NumberCount />
    //   <EventCount /> */}
    <Input/>
    <TodoList/>
    </>
  )
}

export default App
