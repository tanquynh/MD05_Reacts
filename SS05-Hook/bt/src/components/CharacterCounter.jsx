import React, { useState } from 'react'

function CharacterCounter() {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const CharacterCount = text.length
  return (
    <div>
      <h2>Charater Counter</h2>
      <textarea type="text" value={text} onChange={handleChange} placeholder='Enter your text here'
      rows={6} cols={50} />
      <p>Charater count : {CharacterCount}</p>
    </div>
  )
}

export default CharacterCounter
