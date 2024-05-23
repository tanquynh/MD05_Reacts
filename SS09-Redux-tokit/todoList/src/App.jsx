import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>TodoList</h1>
        <TodoAdd/>
        <TodoList/>
      </div>
    </>
  )
}

export default App
