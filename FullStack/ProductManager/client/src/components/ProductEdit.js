import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductEdit = ({ location }) => {
    const { id } = location.state;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [received, setReceived] = useState(false);

    const editProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8001/api/products/update/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log("res", res)
                getProduct()
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    const titleHandler = val => {
        setTitle(val)
    }
    const priceHandler = val => {
        setPrice(val)
    }
    const descriptionHandler = val => {
        setDescription(val)
    }

    useEffect(() => {
        getProduct()
    }, [])

    function getProduct() {
        axios.get(`http://localhost:8001/api/products/${id}`, { id })
            .then(res => {
                console.log("getOne -> res", res)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
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
                    <form onSubmit={editProduct}>
                        <div className="form-group">
                            <label htmlFor="">Title: </label>
                            <input type="text" className="form-control" value={title} onChange={e => titleHandler(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Price: </label>
                            <input type="number" className="form-control" value={price} onChange={e => priceHandler(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description: </label>
                            <input type="text" className="form-control" value={description} onChange={e => descriptionHandler(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" type="submit">Edit Product</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductEdit;