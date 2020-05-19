import React from 'react';
import { Link } from '@reach/router';

const Author = ({ author }) => {

    return (
        <>
            <tr>
                <th scope="row">{author.firstName} {author.lastName}</th>
                <td>
                    <button className="btn btn-warning mr-3">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </>
    )
}

export default Author;