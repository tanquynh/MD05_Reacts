import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h2>So lan click {count}</h2>
      <button onClick={() => {setCount(count + 1)}}>Click</button>
    </div>
  )
}

export default Count
