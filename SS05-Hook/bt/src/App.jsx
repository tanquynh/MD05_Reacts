import { useState } from 'react'

import './App.css'
import Count from './components/Count'
import CharacterCounter from './components/CharacterCounter'
import Timer from './components/Timer'


function App() {

  return (
    <>
     <Count/>
     <CharacterCounter/>
     <Timer/>
    </>
  )
}

export default App
