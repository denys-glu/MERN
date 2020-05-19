import React, { useState, useEffect } from 'react';

const Form = props => {
    const { superSubmitHandler, initTitle, initPrice, initDescription } = props;

    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDescription);

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

    function submitHandler(e) {
        e.preventDefault();
        superSubmitHandler(e, { title, price, description }, cleanUpForm)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title: </label>
                    <input type="text" className="form-control" 
                        value={title} onChange={e => titleHandler(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" className="form-control" 
                        value={price} onChange={e => priceHandler(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input type="text" className="form-control" 
                        value={description} onChange={e => descriptionHandler(e.target.value)} />
                </div>
                <button className="btn btn-primary" type="submit">Add Product</button>
            </form>
            <hr />
        </>
    )
}

export default Form;