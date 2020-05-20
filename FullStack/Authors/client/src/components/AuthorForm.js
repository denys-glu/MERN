import React from 'react';
import { useState } from 'react';
import { navigate } from '@reach/router';

const AuthorForm = ({ submitHandler, fName, lName }) => {
console.log("AuthorForm -> fName, lName", fName, lName)

    const [author, setAuthor] = useState({
        firstName: fName,
        lastName: lName
    });

    function updateAuthor(e) {
        const { name, value } = e.target;
        let dummy = { ...author };
        dummy[name] = value;
        console.log("updateAuthor -> dummy", dummy)
        setAuthor(dummy)
    }

    function submitForm(e) {
        e.preventDefault();
        submitHandler(author);
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input type="text" className="form-control" name="firstName"
                        value={author.firstName} onChange={e => updateAuthor(e)} />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" className="form-control" name="lastName"
                        value={author.lastName} onChange={e => updateAuthor(e)} />
                </div>
                <button className="btn btn-primary mr-3" type="submit">Submit</button>
                <button className="btn btn-warning" onClick={()=> navigate("/")}>Cancel</button>
            </form>
        </>
    )
}

export default AuthorForm;