import React, { useState } from 'react'

function TaskList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    function addTask() {
        setTask([...task, newTask]);
        setNewTask("");
    }
    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    return (
        <div>
            <ul>
                {task.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default TaskList
