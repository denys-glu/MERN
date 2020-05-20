import React, { useState, useEffect } from 'react';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditAuthor = ({ id }) => {

    const [author, setAuthor] = useState({
        firstName: "",
        lastName: ""
    });

    const [err, setErr] = useState([]);
    const [received, setReceived] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8001/api/authors/${id}`, { id })
            .then(res => {
                console.log("EditAuthor -> res", res)
                const { firstName, lastName } = res.data.author;
                let dummy = { ...author };
                dummy.firstName = firstName;
                dummy.lastName = lastName;
                setAuthor(dummy)
                setReceived(true)
            })
    }, [])

    function editAuthor(author) {
        console.log("editAuthor -> author", author)
        axios.put(`http://localhost:8001/api/authors/update/${id}`, {
            firstName: author.firstName,
            lastName: author.lastName
        })
            .then(res => {
                console.log("editAuthor -> res", res)
                // navigate("/");
            }).catch(err => {
                console.log("editAuthor -> err", err.response.data)
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
            Edit Author
            <div className="row">
                <div className="col text-danger">
                    {err.map((err, index) => <p key={index}>{err}</p>)}
                </div>
            </div>
            <p>firstName: {author.firstName}</p>
            <hr />
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    {received ?
                        <AuthorForm submitHandler={editAuthor}
                            fName={author.firstName}
                            lName={author.lastName} /> :
                        <div className="loader">Loading...</div>
                    }
                </div>
            </div>
        </>
    )
}

export default EditAuthor;