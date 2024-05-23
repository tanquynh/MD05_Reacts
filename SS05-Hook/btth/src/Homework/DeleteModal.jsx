import React from 'react'

export default function DeleteModal(props) {
    const { handleCloseDelete, listStudent, loadData, idDelete } = props;
    // ham tat form
    const handleDelete = () => {
        handleCloseDelete();
    }
    // ham xoa du lieu
    const handleDeleteConfirm = (idDelete) => {
        console.log(idDelete);
        const listDelete = listStudent.filter(st => st.studentId !== idDelete);
        // setListStudent(listDelete);
        localStorage.setItem("listStudent", JSON.stringify(listDelete));
        loadData(listDelete);
        handleDelete();
    }
    return (
        <div>
            <>
                {/* Delete Modal HTML */}
                <div id="deleteEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Xóa nhân viên</h4>
                                    <button onClick={handleDelete}
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Bạn chắc chắn muốn xóa sinh viên co studentID{idDelete}?</p>
                                </div>
                                <div className="modal-footer">
                                    <input onClick={handleDelete}
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                        defaultValue="Hủy"
                                    />
                                    <input onClick={() => { handleDeleteConfirm(idDelete) }}
                                        type="submit"
                                        className="btn btn-danger"
                                        defaultValue="Xóa"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}
