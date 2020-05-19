import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsAll from './ProductsAll';
import Form from './Form';

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [received, setReceived] = useState(false);
    const [products, setProducts] = useState([]);

    const addProduct = (e, product, callback) => {
        axios.post('http://localhost:8001/api/products/new', {
            title: product.title,
            price: product.price,
            description: product.description
        })
            .then(res => {
                console.log("res", res)
                callback();
                getAllProducts();
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        axios.get('http://localhost:8001/api/products/')
            .then(res => {
                setProducts(res.data.allProducts)
                setReceived(true)
            })
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <Form superSubmitHandler={addProduct} initTitle={title} initPrice={price} initDescription={description} />
                </div>
            </div>
            <hr />

            {
            received ? 
            <ProductsAll products={products} updateProducts={ getAllProducts } />:
                <div className="loader">Loading...</div>
            }
        </>
    )
}

export default ProductForm;