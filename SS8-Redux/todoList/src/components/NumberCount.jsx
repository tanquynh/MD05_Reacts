import React from 'react'
import { useSelector } from 'react-redux'

function NumberCount() {
    const count = useSelector((state) => state.count)
  return (
    <div>
      {count}
    </div>
  )
}

export default NumberCount
