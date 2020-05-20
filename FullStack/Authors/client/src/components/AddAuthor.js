import React, { useState } from 'react';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const AddAuthor = props => {
    const [author, setAuthor] = useState({
        firstName: "",
        lastName: ""
    })

    const [err, setErr] = useState([])

    function addAuthor(author) {
        console.log("addAuthor -> author", author)
        axios.post('http://localhost:8001/api/authors/new', {
                firstName: author.firstName,
                lastName: author.lastName
            })
        .then(res => {
            console.log("addAuthor -> res", res)
            // navigate("/");
        }).catch(err => {
            console.log("addAuthor -> err", err.response.data)
            const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErr(errorArr);
        })
    }

    return (
        <>
            Add Author
            <div className="row">
                <div className="col text-danger">
                    {err.map((err, index) => <p key={index}>{err}</p>)}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <AuthorForm submitHandler={ addAuthor } 
                                fName={ author.firstName } 
                                lName={ author.lastName } />
                </div>
            </div>
        </>
    )
}

export default AddAuthor;