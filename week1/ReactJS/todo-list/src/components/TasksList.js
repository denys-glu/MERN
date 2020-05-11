import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';

const TasksList = () => {
    const [tasks, addTask] = useState([]);

    const addToTasks = task => {
        addTask([...tasks, task])
    }

    const removeFromTasks = task => {
        const newTasks = tasks.filter(t => t.description !== task.description)
        addTask(newTasks)
    }
    
    const updateStatus = index => {
        const newTasks = [...tasks]
        const task = newTasks[index]
        task.completed = !task.completed
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