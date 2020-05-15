import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsAll from './ProductsAll';

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [received, setReceived] = useState(false);
    const [products, setProducts] = useState([]);

    const addProduct = e => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/products/new',{
            title,
            price,
            description
            })
            .then(res => {
                console.log("res", res)
            })
            .catch(error => {
                console.log("error", error)
            })
        cleanUpForm()
    }

    useEffect(() => {
        axios.get('http://localhost:8001/api/products/')
            .then(res => {
                setProducts(res.data.allProducts)
                setReceived(true)
            })
    }, [])

    const titleHandler = val => {
        setTitle(val)
    }
    const priceHandler = val => {
        setPrice(val)
    }
    const descriptionHandler = val => {
        setDescription(val)
    }

    const cleanUpForm = () => {
        setTitle("")
        setPrice(0)
        setDescription("")
    }
    return (
        <>
        <div className="row mt-5">
            <div className="col-sm-6">
                <form onSubmit={ addProduct }>
                    <div className="form-group">
                        <label htmlFor="">Title: </label>
                        <input type="text" className="form-control" value={ title } onChange={ e => titleHandler(e.target.value) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price: </label>
                        <input type="number" className="form-control" value={ price } onChange={ e => priceHandler(e.target.value) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description: </label>
                        <input type="text" className="form-control" value={description } onChange={ e => descriptionHandler(e.target.value) }/>
                    </div>
                    <button className="btn btn-primary" type="submit">Add Product</button>
                </form>
            </div>
        </div>
        <hr/>

        {received && <ProductsAll products={ products } /> }
        </>
    )
}

export default ProductForm;