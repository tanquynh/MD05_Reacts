import React, { useState } from 'react'

export default function Input() {
    const [name, setName] = useState("");
  return (
    <div>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}
