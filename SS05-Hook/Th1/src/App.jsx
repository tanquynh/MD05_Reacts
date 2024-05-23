import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import OrderForm from './components/OrderForm'
import ProductList from './components/ProductList'
import TaskList from './components/TaskList'
import SearchAndFilter from './components/SearchAndFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
    <OrderForm/>
    <ProductList/>
    <TaskList/>
    <SearchAndFilter/>
    </>
  )
}

export default App
