import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ListStudent from './components/ListStudent'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className='col-7'>
          <Navbar />
          <ListStudent />
        </div>
        <div className='col-5'>
          {<Form />}

        </div>
      </div>
    </>
  )
}

export default App
