import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bt1 from './components/Bt1'
import Bt2 from './components/Bt2-Class'
import Bt2Functional from './components/Bt2Functional'
import Bt3 from './components/Bt3'
import BT4Header from './components/BT4Header'
import Bt4Index from './components/Bt4Index'
import Bt5Header from './components/Bt5Header'
import Bt5Index from './components/Bt5Index'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Bt1></Bt1> */}
   {/* <Bt2></Bt2> */}
   {/* <Bt2Functional></Bt2Functional> */}
   {/* <Bt3></Bt3> */}
    {/* <BT4Header></BT4Header>
    <Bt4Index></Bt4Index> */}
    <Bt5Header></Bt5Header>
    <Bt5Index></Bt5Index>
    </>
  )
}

export default App
