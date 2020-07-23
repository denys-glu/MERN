import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import Form from './Form';

const ProductEdit = ({ location }) => {
    const { id } = location.state;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [received, setReceived] = useState(false);

    const editProduct = (e, product) => {
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            title: product.title,
            price: product.price,
            description: product.description
        })
            .then(res => {
                console.log("res", res)
                getProduct()
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    function getProduct() {
        axios.get(`http://localhost:8000/api/products/${id}`, { id })
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
    }

    return (
        <>
            <div className="row">
                <div className="col-sm">
                        <Link to="/">Go Home</Link>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-6">
                    {
                        received ? 
                            <Form superSubmitHandler={editProduct} initTitle={title} initPrice={price} initDescription={description} /> :
                            <div className="loader">Loading...</div>   
                    }
                </div>
            </div>
        </>
    )
}

export default ProductEdit;