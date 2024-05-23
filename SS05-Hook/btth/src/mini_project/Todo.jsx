import React, { useRef, useState } from "react";

export default function Todo() {
    const inputRef = useRef();
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(() => {
        const todosLocal = JSON.parse(localStorage.getItem("todos")) || [];
        console.log(todosLocal);
        return todosLocal;
    });
    const [idEdit, setIdEdit] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== "") {
            const newTodo = {
                id: Date.now(),
                title: input,
                status: false,
                isEdit: false,
            };
            console.log(newTodo);
            const newTodos = [...todos, newTodo];
            setTodos(newTodos);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            setInput("");
            inputRef.current.focus();
        }
        if (idEdit) {
            const newTodo = todos.find((item) => item.id === idEdit);
            const updateTodos = todos.map(item => item.id === newTodo.id ? item = { id: item.id, title: input, status: item.status } : item = { id: item.id, title: item.title, status: item.status })
            setTodos(updateTodos);
            localStorage.setItem("todos", JSON.stringify(updateTodos));
            setIdEdit(null);
            // cach 2   
            // const indexEdit = todos.findIndex(item => item.id === idEdit);
            // if (indexEdit != -1) {
            //     const updateTodos = [...todos];
            //     updateTodos[indexEdit] = { id: updateTodos[indexEdit].id, title: input, status: updateTodos[indexEdit].status };
            //     setTodos(updateTodos);
            //     localStorage.setItem("todos", JSON.stringify(updateTodos));
            //     setIdEdit(null);
            // }
        }
    };
    const handleCheck = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, status: !todo.status };
            }
            return todo;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        inputRef.current.focus();
    }

    const handleEdit = (todo) => {
        const newTodo = todos.find(t => t.id === todo.id);
        setInput(newTodo.title);
        inputRef.current.focus();
        setIdEdit(todo.id);
    }

    return (
        <div>
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
                                    <form
                                        onSubmit={handleSubmit}
                                        className="d-flex justify-content-center
                              align-items-center mb-4"
                                    >
                                        <div className="form-outline flex-fill">
                                            <input
                                                type="text"
                                                id="form2"
                                                className="form-control"
                                                ref={inputRef}
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                            />
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
                                    <ul
                                        className="nav nav-tabs mb-4 pb-2"
                                        id="ex1"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active">Tất cả công việc</a>
                                        </li>
                                    </ul>
                                    {/* Tabs navs */}
                                    {/* Tabs content */}
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-group mb-0">
                                                {todos.map((todo, index) => (
                                                    <li
                                                        key={todo.id}
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
                                                                checked={todo.status === true}
                                                                onChange={() => handleCheck(todo.id)}
                                                            />
                                                            {todo.status === true ? (<><s>{todo.title}</s></>) : (<><span>{todo.title}</span></>)}
                                                        </div>
                                                        <div>
                                                            <a
                                                                onClick={() => handleEdit(todo)}
                                                                className="text-info"
                                                                title="Sửa công việc"
                                                            >
                                                                <i
                                                                    className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                                                />
                                                            </a>
                                                            <a
                                                                onClick={() => handleDelete(todo.id)}
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
                                                    </li>)

                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Tabs content */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
