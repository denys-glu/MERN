import React, { useState, useEffect } from 'react';

const ProductDetail = (props) => {
    const { title, price, description } = props.location.state;
    
    return (
        <>
        <div className="row mt-5">
            <div className="col-sm-6">
                <ul className="list-unstyled text-left">
                    <li>
                        <strong>Title:</strong> { title }
                    </li>
                    <li>
                        <strong>Price:</strong> ${ price }
                    </li>
                    <li>
                        <strong>Description:</strong> { description }
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProductDetail;