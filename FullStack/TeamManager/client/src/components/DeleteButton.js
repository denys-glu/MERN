import React from 'react';

function DeleteButton({ deleteHandler, item }) {

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#myModal${item._id}`}>Delete Player</button>

            <div id={`myModal${item._id}`} className="modal fade bd-example-modal-sm" 
                                            tabIndex="-1" 
                                            role="dialog"
                                            aria-labelledby="mySmallModalLabel" 
                                            aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Are you sure you want to delete<br/> <strong>{item.name}</strong></p>
                            <button type="button" className="btn btn-danger" onClick={e => deleteHandler(item._id)} data-dismiss="modal">
                                Delete
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteButton;