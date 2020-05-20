import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const Author = ({ author, deleteHandler }) => {

    return (
        <>
            <tr>
                <th scope="row">
                    {author.firstName} {author.lastName}
                </th>
                <td>
                    <Link to={`/edit/${author._id}`} className="btn btn-warning mr-3">Edit</Link>
                    <DeleteButton deleteHandler={ deleteHandler }  author={ author }/>
                </td>
            </tr>
        </>
    )
}

export default Author;