import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductDetail = ({ location }) => {
    console.log("ProductDetail -> props", location.state)
    const { id } = location.state;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [received, setReceived] = useState(false);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8001/api/products/delete/${id}`, { id })
            .then(res => {
                console.log("deleteProduct -> res", res)
                navigate("/")
            })
            .catch(error => {
                console.log("deleteProduct -> error", error)
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${id}`, { id })
            .then(res => {
                console.log("getOne -> res", res)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
                setReceived(true)
            })
            .catch(error => {
                console.log("getOne -> error", error)
            })
    }, [])
    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-6">
                    {
                    received ?
                    <ul className="list-unstyled text-left">
                        <li>
                            <strong>Title:</strong> {title}
                        </li>
                        <li>
                            <strong>Price:</strong> ${price}
                        </li>
                        <li>
                            <strong>Description:</strong> {description}
                        </li>
                        <li>
                            <button onClick={e => deleteProduct()} className="btn btn-danger">
                                Delete this product
                            </button>
                        </li>
                    </ul>:
                    <div className="loader">Loading...</div>
                }
                </div>
            </div>
        </>
    )
}

export default ProductDetail;