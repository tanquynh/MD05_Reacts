import React, { Component } from 'react'
import Button from './Button'



function Navbar() {
  return (
    <nav className='navbar'>
      <Button cssClass='bg-primary'>Thêm mới sinh viên</Button>
      <form>
        <input type="text" name="" id="" />
        <Button cssClass='bg-primary'>Tìm kiếm</Button>
      </form>
      <select name="" id="">
        <option value="">Sắp xếp</option>
      </select>
    </nav>
  )
}

export default Navbar

