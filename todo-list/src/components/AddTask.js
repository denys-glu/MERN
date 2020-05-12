import React, { useState } from 'react';

const AddTask = props => {
    const { superAddTask } = props;
    const [task, setTask] = useState("")

    const addTask = e => {
        e.preventDefault();
        console.log(task)
        superAddTask({
            completed: false,
            description: task
        })
        setTask("");
    }
    return (
        <>
        <div className="row mb-5">
            <div className="col-sm">
                <form onSubmit={addTask} className="form-inline">
                    <div className="form-group">
                        <input className="form-control" 
                                onChange={ e => setTask(e.target.value) } 
                                type="text" 
                                value={ task } 
                                placeholder="Task description"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success ml-3" type="submit">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddTask;