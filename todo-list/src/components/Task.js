import React from 'react';

const Task = ({ item, deleteTask, index, updateStatus }) => {

    const checkboxHandler = () => {
        console.log("checkboxHandler -> e", item, index)
        updateStatus(index)
    }

    const removeTask = () => {
        deleteTask(item)
        console.log("deleting")
    }

    return (
        <>
        <div className="row">
            <div className="col-sm-3">
                { item.description }
            </div>

            <div className="col-sm-3">
                <span>Status: { item.completed.toString() }</span>
                <label className="checkBox-container">
                    <input type="checkbox" 
                        onChange={ e => checkboxHandler() } 
                        checked={ item.completed }/>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="col-sm-2">
                <a className="btn btn-dark text-white" onClick={ removeTask }>Delete</a>
            </div>
        </div>
        </>
    )
}

export default Task;