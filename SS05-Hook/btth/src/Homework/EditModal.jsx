import React, { useEffect, useState } from 'react'

export default function EditModal(props) {
    const { handleCloseEdit, listStudent, loadData, idEdit } = props;
    // ham an form edit
    const handleCloseEditForm = () => {
        handleCloseEdit()
    }
    // khai bao state de hung du lieu thong tin can sua doi tu cha
    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        address: "",
        phoneNumber: "",
    });
    //ham tim kiem thong tin theo id duoc truyen tu cha
    const findStudent = () => {
        const student = listStudent.find(item => item.studentId === idEdit)
        setStudent(student);
    }
    // dung useEffect de hien thi thong tin can sua doi da tim duoc o tren
    useEffect(() => {
        findStudent()
    }, [])
    // ham lay du lieu tu o input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    }
    // ham submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // tao 1 ban sao cua danh sach sv de khong anh huong danh sach goc
        const updatedList = [...listStudent];
        // tim kiem theo index
        const studentIndex = updatedList.findIndex(item => item.studentId === idEdit)
        if (studentIndex !== -1) {
            // tien hanh cap nhat lai thong tin tai vi tri studentIndex
            updatedList[studentIndex] = { ...updatedList[studentIndex], ...student };
            // luu du lieu len local
            localStorage.setItem('listStudent', JSON.stringify(updatedList));
            handleCloseEditForm();
            loadData(updatedList);
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
                                <button onClick={handleCloseEditForm}
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
                                    <input type="text" className="form-control" name='studentName' value={student.studentName} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name='email' value={student.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" required="" name='address' value={student.address} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name='phoneNumber' value={student.phoneNumber} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleCloseEditForm}
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
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
