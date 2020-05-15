import React from 'react';
import { navigate, Link } from '@reach/router';

const ProductsAll = ({ products }) => {
    console.log("props", products)
    
    return(
        <>
        <div className="row">
            {
                products.map((product, i) => 
                    <div className="col-sm-3" key={ i }>
                        <ul className="list-unstyled text-left">
                            <li>
                                <Link to={`/products/detail/${product._id}`} state={product}>
                                    <strong>Title:</strong> {product.title}
                                </Link>
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