import React from "react";
import { Link } from "react-router-dom";

function productdetail({ product }) {
    console.log(product);
    return (
      <div>
        <Link to={`/products/${product.id}`}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>€ {product.price}</p>
            </Link>
        </div>
    );
}

export default productdetail;
