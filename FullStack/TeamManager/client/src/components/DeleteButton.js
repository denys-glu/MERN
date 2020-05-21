import React from 'react';

function DeleteButton({ deleteHandler, item }) {

    return (
        <>
            <button className="btn btn-danger" onClick={e => deleteHandler(item._id)} className="btn btn-danger">
                Delete
            </button>
        </>
    )
}

export default DeleteButton;