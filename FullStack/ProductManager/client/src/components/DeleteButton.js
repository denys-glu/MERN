import React from 'react'

const DeleteButton = ({ deleteHandler, product }) => {

    return(
        <>
            <button onClick={ e => deleteHandler(product) } className="btn btn-danger">
                Delete this product
            </button>
        </>
    )
}

export default DeleteButton;