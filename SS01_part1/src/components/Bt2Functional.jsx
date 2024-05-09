import React, { useState } from 'react'

export default function Bt2Functional() {
const[number1, setNumber1] = useState(0);
const[number2, setNumber2] = useState(0);
const[sum, setSum] = useState(0);

const handleChange = (e) => {
  const{name, value} =  e.target;
  if(name === "number1") {
    setNumber1(parseInt(value) || 0);
  } else {
    setNumber2(parseInt(value) || 0);
  }
}
const handleSum = () => {
  const totalSum  = number1 + number2;
  setSum(totalSum);
}

  return (
     <div>
        <h2>Caculator</h2>
        <label >Number 1 : <input type='number' name = "number1" value={number1} onChange={handleChange}></input></label><br/>
        <label >Number 2 : <input type='number' name = "number2" value={number2} onChange={handleChange}></input></label><br/>
        <label ><button onClick={handleSum}>Caculator Sum</button></label><br/>
        <label >Sum : <input type='text' readOnly value={sum}></input></label>
      </div>
  )
}
