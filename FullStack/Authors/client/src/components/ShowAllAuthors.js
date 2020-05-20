import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import Author from '../view/Author';

const ShowAllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [received, setReceived] = useState(false);

    function getAllAuthors() {
        axios.get('http://localhost:8001/api/authors/')
            .then(res => {
                setAuthors(res.data.allAuthors)
                setReceived(true)
            })
    }

    function deleteAuthor(id) {
        axios.delete(`http://localhost:8001/api/authors/delete/${id}`)
            .then(res => {
                getAllAuthors()
            })
    }

    useEffect(() => {
        getAllAuthors()
    }, [])

    return (
        <>
            <div className="row text-left mb-5">
                <div className="col">
                    <Link to="/new">Add an Author</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Actions available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {received ?
                                authors.map((author, i) => (
                                    <Author key={i} idx={i} author={author} deleteHandler={deleteAuthor} />
                                )) :
                                <tr>
                                    <td>
                                        <div className="loader">Loading...</div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowAllAuthors;