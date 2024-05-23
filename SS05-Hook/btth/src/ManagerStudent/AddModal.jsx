import React, { useState } from 'react'

export default function AddModal({ handleCloseAdd, listStudent, loadData }) {
    const handleCloseAddForm = () => {
        handleCloseAdd();
    }
    const [student, setStudent] = useState({
        studentName: '',
        email: '',
        address: "",
        phone: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { ...student, studentId: Date.now() };
        const newListStudent = [...listStudent, newStudent];
        localStorage.setItem("listStudent", JSON.stringify(newListStudent));
        handleCloseAddForm();
        loadData(newListStudent);
    }

    return (
        <div>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm mới sinh viên</h4>
                                <button onClick={handleCloseAddForm}
                                    type="button"
                                    className="close"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tên sinh viên</label>
                                    <input type="text" className="form-control" name="studentName" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" name="address" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name="phone" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleCloseAddForm}
                                    type="button"
                                    className="btn btn-default"
                                    defaultValue="Cancel"
                                />
                                <input type="submit" className="btn btn-success" defaultValue="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
