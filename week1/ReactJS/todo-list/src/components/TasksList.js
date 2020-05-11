import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';

const TasksList = () => {
    const [tasks, addTask] = useState([]);

    const addToTasks = task => {
        const newTasks = [...tasks, task];
        addTask([...tasks, task])
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    const removeFromTasks = task => {
        const newTasks = tasks.filter(t => t.description !== task.description)
        addTask(newTasks)
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
    
    const updateStatus = index => {
        const newTasks = [...tasks]
        const task = newTasks[index]
        task.completed = !task.completed
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        addTask(newTasks)
    }

    return (
        <div className="container mt-5">

            <AddTask superAddTask={addToTasks} />

            {
                tasks.map((task, i) =>
                    <Task item={task} 
                        deleteTask={removeFromTasks} 
                        updateStatus={updateStatus} 
                        key={i} 
                        index={i} />
                )
            }
        </div>
    )
}

export default TasksList;