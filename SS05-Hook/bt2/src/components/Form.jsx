import React, { Component } from 'react'

import Button from './Button'

function Form() {
  return (
    <form className='form' >
    <h2 className='title-table'>Thông tin sinh viên</h2>
    <div>
        <label htmlFor="id">Mã sinh viên</label>
        <input type="text" id="id"  />
    </div>
    <div>
        <label htmlFor="name">Tên Sinh viên</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label htmlFor="sex" >Giới tính</label>
        <input type="text" id="sex"  placeholder='Nam' />
    </div>
    <div>
        <label htmlFor="dob">Ngày sinh</label>
        <input type="text" id="dob"  placeholder='dd/MM/yyyy' />
    </div>
    <div>
        <label htmlFor="bornIn">Nơi sinh</label>
        <input type="text" id="homeTown"  placeholder='Ha Noi' />
    </div>
    <div>
        <label htmlFor="address">Địa chỉ</label>
        <input type="text" id="address"  />
    </div>
   
    <Button  cssClass='bg-primary'>Thêm</Button>
</form>
  )
}

export default Form


