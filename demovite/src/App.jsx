import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Time from './component/Time'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Time></Time>
      <Profile></Profile>
    </>
  )
}

export default App
