import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductsAll = ({ products, updateProducts }) => {

    const deleteProduct = product => {
        axios.delete(`http://localhost:8001/api/products/delete/${product._id}`,{
            id: product._id
                })
            .then(res => {
                console.log("deleteProduct -> res", res)
                updateProducts();
            })
            .catch(error => {
                console.log("deleteProduct -> error", error)
            })
    }

    return(
        <>
        <div className="row">
            {
                products.map((product, i) => 
                    <div className="col-xs-4 col-sm-4 col-md-4" key={ i }>
                        <ul className="list-unstyled text-left">
                            <li>
                                <Link to={`/products/detail/${product._id}`} 
                                    state={{id: product._id}}>
                                    <strong>Title:</strong> {product.title}
                                </Link>
                            </li>
                            <li>
                                <Link to={`/products/edit/${product._id}`}
                                    state={{ id: product._id }}>
                                    <strong>Edit Product</strong>
                                </Link>
                            </li>
                            <li>
                                <DeleteButton deleteHandler={deleteProduct} product={product} />
                                {/* <button onClick={e => deleteProduct(product) } className="btn btn-danger">
                                    Delete this product
                                </button> */}
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default ProductsAll;