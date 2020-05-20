import React from 'react';

function DeleteButton({ deleteHandler, author }) {

    return(
        <>
            <button className="btn btn-danger" onClick={e => deleteHandler(author._id)} className="btn btn-danger">
                Delete
            </button>
        </>
    )
}

export default DeleteButton;