import React, { Component } from 'react'
import Button from './Button'

function Student() {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><Button cssClass={'bg-info'}>Xem</Button>
        <Button cssClass='bg-warning'>Sửa</Button>
        <Button cssClass='bg-danger'>Xóa</Button></td>
    </tr>
  )
}

export default Student
