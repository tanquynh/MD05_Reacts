import React, { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState("");
  const [todoList, setTodoList] = useState(() => {
    let todoListLocal = JSON.parse(localStorage.getItem('todoList')) || [];
    return todoListLocal;
  }
  )
  const [idUpdate, setIdUpdate] = useState(null)
  // let idUpdate = null;

  // them moi list
  const addList = (e) => {
    e.preventDefault(e);
    if (list !== "") {
      const newList = {
        id: Math.floor(Math.random() * 999 + 1),
        status: "false",
        name: list,
      }
      const newJob = [...todoList, newList];
      setTodoList(newJob)
      localStorage.setItem('todoList', JSON.stringify(newJob));
      setList("");
    }
    if (idUpdate) {
      const editList = todoList.find((item, i) => i === idUpdate);
      // console.log(editList);
      const updateList = todoList.map((l) => l.id === editList.id ? l = { id: l.id, status: l.status, name: list }
        : { id: l.id, status: l.status, name: l.name })
      setTodoList(updateList);
      localStorage.setItem('todoList', JSON.stringify(updateList));
      setIdUpdate(null);
      return;
    }
  }

  // xoa list
  const deleteList = (index) => {
    const newJob = todoList.filter((item, id) => id !== index);
    setTodoList(newJob)
    localStorage.setItem('todoList', JSON.stringify(newJob));
  }
  // ham sua
  const updateList = (index) => {
    const editList = todoList.find((item, i) => i === index);
    setList(editList.name);
    // setList(todoList[index].name);
    setIdUpdate(index);
    console.log(idUpdate);
  }
  // ham check
  const handleCheck = (id) => {
    // console.log(id);
    const updateList = todoList.map(list => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    })
    localStorage.setItem('todoList', JSON.stringify(updateList))
    setTodoList(updateList)
  }

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    MINI PROJECT TODO LIST
                  </h3>
                  <form onSubmit={(e) => addList(e)}
                    className="d-flex justify-content-center
                              align-items-center mb-4"
                  >
                    <div className="form-outline flex-fill">
                      <input type="text" id="form2" className="form-control" name="list" value={list} onChange={(e) => setList(e.target.value)} />
                      <label className="form-label" htmlFor="form2">
                        Thêm công việc
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info
                                  ms-2"
                    >
                      Thêm
                    </button>
                  </form>

                  {/* Tabs navs */}
                  <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  <div className="tab-content" >
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {todoList.map((list, index) =>
                        (<li key={index}
                          className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                          style={{ backgroundColor: "#f4f6f7" }}
                        >
                          <div>
                            <input
                              className="form-check-input
                                                  me-2"
                              type="checkbox"
                              checked={list.status === true}
                              onChange={() => handleCheck(list.id)}
                            />
                            {list.status === true ? (<><s>{list.name}</s></>) : (<><span>{list.name}</span></>)}
                          </div>
                          <div>
                            <a href="#!" className="text-info" title="Sửa công việc" onClick={() => updateList(index)}>
                              <i
                                className="fas
                                                      fa-pencil-alt
                                                      me-3"
                              />
                            </a>
                            <a onClick={() => deleteList(index)}
                              href="#!"
                              className="text-danger"
                              title="Xóa công việc"
                            >
                              <i
                                className="fas
                                                      fa-trash-alt"
                              />
                            </a>
                          </div>
                        </li>))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
