import React from 'react'
import { useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState(["Code everyday", "Eat healthy"])
    const [newTask, setNewTask] = useState("")

    function inputValue(event) {
        setNewTask(event.target.value);
    }

    function addButton() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }

    function deleteButton(index) {
        const updatedTask = tasks.filter((task, i) => i !== index)
        setTasks(updatedTask)
    }

    return (
        <div className='container'>
            <h1 className='title'>To-Do-List</h1>
            <input type="text" value={newTask} onChange={inputValue} className='input' placeholder='Add a Task' />
            <button className='add-btn' onClick={addButton}>Add</button>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-btn' onClick={() => deleteButton(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList