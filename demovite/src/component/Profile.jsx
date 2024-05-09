import React from 'react'

export default function Profile() {
    let name = "Quynh";
    let career = "Sinh vien";
    let address = "Ha Noi";
  return (
    <div>
        {
           (name && name !== "") ?  
            <ul>
        <li>Name : {name}</li>
        <li>Career : {career}</li>
        <li>Address : {address}</li>
      </ul> : ""
        }
    
    </div>
  )
}
