import React, { useState } from 'react'

export default function AddModal(props) {
    const { handleCloseAdd, listStudent, loadData } = props;
    // ham dong form add
    const handleClose = () => {
        handleCloseAdd()
    }
    // Khai báo state
    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        address: "",
        phoneNumber: "",
    });
    // ham lay du lieu tu o input
    const handleChangeAdd = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
        console.log(student);
    }
    // ham submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // tao doi tuong moi
        const newStudent = { ...student, studentId: Date.now() };
        const newListStudent = [...listStudent, newStudent];
        localStorage.setItem('listStudent', JSON.stringify(newListStudent));
        // dong form
        handleClose();
        // tai lai du lieu bang cach truyen nguoc props tu con len cha
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
                                <button
                                    onClick={handleClose}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tên sinh viên</label>
                                    <input type="text" className="form-control" name='studentName' onChange={handleChangeAdd} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleChangeAdd} />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" name="address" onChange={handleChangeAdd} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name="phoneNumber" onChange={handleChangeAdd} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input
                                    onClick={handleClose}
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
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
