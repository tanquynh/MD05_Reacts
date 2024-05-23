import React, { useState } from 'react'

export default function Radio() {
    const listGender = [
        { id: 0, title: "Name" },
        { id: 1, title: "Nu" },
        { id: 2, title: "Khac" }
    ]
    const [value, setValue] = useState(0);
    const handleCheck = (id) => {
        setValue(id);
    }
  return (
    <div>
    <div style={{ textAlign: "left" }}>
        {listGender.map((gender, id) => (
            <div key={id}>
                <input type="radio" checked={value === gender.id}
                    onChange={(e) => { handleCheck(gender.id) }} />
                <label htmlFor="female">{gender.title}</label>
            </div>

        ))}
    </div>
</div>
  )
}
