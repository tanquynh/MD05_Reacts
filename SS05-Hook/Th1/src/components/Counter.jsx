import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    function decrement() {
        setCount(count -1);
    }
  return (
    <div>
      <p>Count : {count} </p>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
