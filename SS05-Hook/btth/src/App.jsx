import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from './base/Checkbox'
import Radio from './base/Radio'
import Input from './base/Input'
import Index from './Homework/Index'
import Index_Manager from "./ManagerStudent/Index_Manager";
import Todos from "./mini_project/Todos";
import TodoJob from "./mini_project/TodoJob";
import Index_02 from "./Manager_Student/Index_02";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Radio/> */}
     {/* <Input/> */}
     {/* <Checkbox/> */}
     {/* <Index/> */}
     {/* <Index_Manager/> */}
     {/* <Todos/> */}
     {/* <TodoJob/> */}
     <Index_02/>
    </>
  )
}

export default App
