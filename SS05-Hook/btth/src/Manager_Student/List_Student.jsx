import React, { useState } from 'react'
import AddForm from './AddForm';
import DeleteForm from './DeleteForm';
import EditForm from './EditForm';

export default function List_Student() {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [listStudent, setListStudent] = useState(() => {
        const students = JSON.parse(localStorage.getItem('listStudent')) || [];
        return students;
    });
    const [idDelete, setIdDelete] = useState(null);
    const [idEdit, setIdEdit] = useState(null);

    // ham hien form add
    const handleShowAdd = () => {
        setShowAdd(true);
    }
    //ham an form add
    const handleCloseAdd = () => {
        setShowAdd(false);
    }
    // ham load du lieu va cap nhat giao dien
    const loadData = (newStudent) => {
        setListStudent(newStudent);
    }
    // ham hien form xoa
    const handleShowDelete = (id) => {
        setShowDelete(true);
        setIdDelete(id);
    }
    // ham an form xoa
    const handleCloseDelete = () => {
        setShowDelete(false);
    }
    // ham hien form sua
    const handleShowEdit = (id) => {
        setShowEdit(true);
        setIdEdit(id);
    }
    // ham an form sua
    const handleCloseEdit = () => {
        setShowEdit(false);
    }
    return (
        <>
            {showAdd ? (<AddForm handleCloseAdd={handleCloseAdd} listStudent={listStudent} loadData={loadData} />) : (<></>)}
            {showDelete ? (<DeleteForm handleCloseDelete={handleCloseDelete} listStudent={listStudent} loadData={loadData} idDelete={idDelete} />) : (<></>)}
            {showEdit ? (<EditForm handleCloseEdit={handleCloseEdit} listStudent={listStudent} loadData={loadData} idEdit={idEdit} />) : (<></>)}
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>
                                        Quản lý <b>sinh viên</b>
                                    </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={handleShowAdd}
                                        className="btn
                              btn-success"
                                    >
                                        <i className="material-icons"></i>
                                        <span>Thêm mới sinh viên</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label htmlFor="selectAll" />
                                        </span>
                                    </th>
                                    <th>Tên sinh viên</th>
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Lựa chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listStudent.length === 0 ? (<tr><td colSpan={6} >Khong co du lieu</td></tr>) : (<>{listStudent.map(st => (
                                    <tr key={st.studentId}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox5"
                                                />
                                                <label htmlFor="checkbox5" />
                                            </span>
                                        </td>
                                        <td>{st.studentName}</td>
                                        <td>{st.email}</td>
                                        <td>{st.address}</td>
                                        <td>{st.phone}</td>
                                        <td>
                                            <a className="edit" onClick={() => handleShowEdit(st.studentId)}>
                                                <i
                                                    className="material-icons"
                                                    title="Edit"
                                                >
                                                    
                                                </i>
                                            </a>
                                            <a onClick={() => handleShowDelete(st.studentId)}
                                                href="#deleteEmployeeModal"
                                                className="delete"
                                            >
                                                <i
                                                    className="material-icons"
                                                    title="Delete"
                                                >
                                                    
                                                </i>
                                            </a>
                                        </td>
                                    </tr>
                                ))}</>)}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}
