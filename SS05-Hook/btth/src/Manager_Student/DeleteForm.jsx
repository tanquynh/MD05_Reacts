import React from 'react'

export default function DeleteForm({ handleCloseDelete, listStudent, loadData, idDelete }) {
    // ham dong form xoa
    const handleClose = () => {
        handleCloseDelete();
    }
    // ham xoa
    const handleSubmit = () => {
        const newListStudent = listStudent.filter(st => st.studentId !== idDelete);
        localStorage.setItem('listStudent', JSON.stringify(newListStudent));
        loadData(newListStudent);
        handleClose();
    }
    return (
        <div>
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form >
                            <div className="modal-header">
                                <h4 className="modal-title">Xóa nhân viên</h4>
                                <button onClick={handleClose}
                                    type="button"
                                    className="close"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Bạn chắc chắn muốn xóa sinh viên ID {idDelete}?</p>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleClose}
                                    type="button"
                                    className="btn btn-default"
                                    defaultValue="Hủy"
                                />
                                <input type="submit" className="btn btn-danger" defaultValue="Xóa" onClick={handleSubmit} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
