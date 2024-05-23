import React, { useState, useEffect } from 'react'

export default function EditForm({ handleCloseEdit, listStudent, loadData, idEdit }) {
    // ham tat form sua
    const handleClose = () => {
        handleCloseEdit();
    }
    // khai bao state
    const [student, setStudent] = useState({
        studentName: '',
        email: '',
        phone: '',
        address: ''
    })
    // ham lay du lieu tu o input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        })
    }
    //tim kiem thong tin can sua doi theo idEdit
    const findStudent = () => {
        const studentEdit = listStudent.find(st => st.studentId === idEdit);
        setStudent(studentEdit);
    }
    useEffect(() => {
        findStudent()
    }, [])
    // ham submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const newListStudent = [...listStudent];
        if (idEdit !== 1) {
            const updateList = newListStudent.map(st => st.studentId === idEdit ? (st = { ...st, ...student }) : (st = { ...st }))
            localStorage.setItem("listStudent", JSON.stringify(updateList));
            handleClose();
            loadData(updateList);
        }
    }
    return (
        <div>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                                <button onClick={handleClose}
                                    type="button"
                                    className="close"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tên sinh viên</label>
                                    <input type="text" className="form-control" value={student.studentName} name="studentName" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value={student.email} name="email" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" value={student.address} name="address" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" value={student.phone} name="phone" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleClose}
                                    type="button"
                                    className="btn btn-default"
                                    defaultValue="Thoát"
                                />
                                <input type="submit" className="btn btn-info" defaultValue="Lưu" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
